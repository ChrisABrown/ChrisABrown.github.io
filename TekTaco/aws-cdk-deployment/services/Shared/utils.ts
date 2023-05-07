import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

export function generateRandomID() {
  return Math.random().toString(36).slice(2)
}
export function generateRandomSKU() {
  return Math.random().toString(24).slice(3)
}

export function getEventBody(event: APIGatewayProxyEvent) {
  return typeof event.body === 'object' ? event.body : JSON.parse(event.body)
}

export function addCORSHeader(result: APIGatewayProxyResult) {
  result.headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-allow-Methods': '*',
  }
}
