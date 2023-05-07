import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda'
import { DynamoDB } from 'aws-sdk'
import { addCORSHeader } from '../Shared/utils'

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
    const tacosID = event.queryStringParameters?.[PRIMARY_KEY]

    if (tacosID) {
      const deleteResult = await dbClient
        .delete({
          TableName: TABLE_NAME,
          Key: {
            [PRIMARY_KEY]: tacosID,
          },
        })
        .promise()
      result.body = JSON.stringify(deleteResult)
    }
  } catch (error: any) {
    result.body = JSON.stringify(error.message)
  }

  return result
}

export { handler }
