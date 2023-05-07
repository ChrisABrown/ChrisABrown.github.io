import { DynamoDB } from 'aws-sdk'
import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda'
import {
  MissingFieldError,
  validateAsMenuItemEntry,
} from '../Shared/inputValidator'
import {
  addCORSHeader,
  generateRandomID,
  generateRandomSKU,
  getEventBody,
} from '../Shared/utils'

const TABLE_NAME = process.env.TABLE_NAME

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
    const item = getEventBody(event)
    item.tacosID = generateRandomID()
    item.sku = generateRandomSKU()
    validateAsMenuItemEntry(item)
    await dbClient
      .put({
        TableName: TABLE_NAME!,
        Item: item,
      })
      .promise()
    result.body = JSON.stringify({
      id: item.tacosID,
    })
  } catch (error: any) {
    if (error instanceof MissingFieldError) {
      result.statusCode = 403
    } else {
      result.statusCode = 500
    }
    result.body = JSON.stringify({ message: error.message })
  }

  return result
}

export { handler }
