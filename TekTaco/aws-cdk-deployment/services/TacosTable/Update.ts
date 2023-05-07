import { DynamoDB } from 'aws-sdk'
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda'
import { addCORSHeader, getEventBody } from '../Shared/utils'

const TABLE_NAME = process.env.TABLE_NAME as string
const PRIMARY_KEY = process.env.PRIMARY_KEY as string

const dbClient = new DynamoDB.DocumentClient({ region: 'us-east-2' })

async function handler(
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> {
  const result: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify('Hello from DynamoDB Lambda!'),
  }
  addCORSHeader(result)
  try {
    const requestBody = getEventBody(event)
    const tacosID = event.queryStringParameters?.[PRIMARY_KEY]

    if (requestBody && tacosID) {
      const requestBodyKey = Object.keys(requestBody)[0]
      const requestBodyValue = requestBody[requestBodyKey]

      const updateResult = await dbClient
        .update({
          TableName: TABLE_NAME,
          Key: {
            [PRIMARY_KEY]: tacosID,
          },
          UpdateExpression: 'set #zzNew = :new',
          ExpressionAttributeValues: {
            ':new': requestBodyValue,
          },
          ExpressionAttributeNames: {
            '#zzNew': requestBodyKey,
          },
          ReturnValues: 'ALL_NEW',
        })
        .promise()

      result.body = JSON.stringify({ updateResult })
    }
  } catch (error: any) {
    result.body = JSON.stringify(error.message)
  }

  return result
}

export { handler }
