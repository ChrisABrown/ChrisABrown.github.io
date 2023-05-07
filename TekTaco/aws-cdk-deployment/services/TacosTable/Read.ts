import {
  APIGatewayProxyEvent,
  APIGatewayProxyEventQueryStringParameters,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda'
import { DynamoDB } from 'aws-sdk'
import { addCORSHeader } from '../Shared/utils'

const TABLE_NAME = process.env.TABLE_NAME
const PRIMARY_KEY = process.env.PRIMARY_KEY

const dbClient = new DynamoDB.DocumentClient({ region: 'us-east-2' })

async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  const result: APIGatewayProxyResult = {
    statusCode: 200,
    body: 'Hello from DynamoDB Lambda!',
  }
  addCORSHeader(result)
  //Scan the table
  try {
    if (event.queryStringParameters) {
      if (PRIMARY_KEY! in event.queryStringParameters) {
        result.body = await queryWithPrimaryPartition(
          event.queryStringParameters
        )
      } else {
        result.body = await queryWithSecondaryPartition(
          event.queryStringParameters
        )
      }
    } else {
      result.body = await scanTable()
    }
  } catch (error) {
    if (error instanceof Error) {
      result.body = JSON.stringify({ message: error.message })
    }
  }

  return result
}

async function queryWithSecondaryPartition(
  queryParams: APIGatewayProxyEventQueryStringParameters
) {
  const queryKey = Object.keys(queryParams)[0]
  const queryValue = queryParams[queryKey]
  const queryResponse = await dbClient
    .query({
      TableName: TABLE_NAME!,
      IndexName: queryKey,
      KeyConditionExpression: '#zz = :zzz',
      ExpressionAttributeNames: {
        '#zz': queryKey,
      },
      ExpressionAttributeValues: {
        ':zzz': queryValue,
      },
    })
    .promise()
  return JSON.stringify(queryResponse.Items)
}

async function queryWithPrimaryPartition(
  queryParams: APIGatewayProxyEventQueryStringParameters
) {
  const keyValue = queryParams[PRIMARY_KEY!]
  const queryResponse = await dbClient
    .query({
      TableName: TABLE_NAME!,
      KeyConditionExpression: '#pk = :pk',
      ExpressionAttributeNames: {
        '#pk': PRIMARY_KEY!,
      },
      ExpressionAttributeValues: {
        ':pk': keyValue,
      },
    })
    .promise()
  return JSON.stringify(queryResponse.Items)
}

async function scanTable() {
  const queryResponse = await dbClient
    .scan({
      TableName: TABLE_NAME!,
    })
    .promise()
  return JSON.stringify(queryResponse.Items)
}

export { handler }
