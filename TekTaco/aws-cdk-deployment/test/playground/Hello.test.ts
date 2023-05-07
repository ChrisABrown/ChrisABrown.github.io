import { APIGatewayProxyEvent } from 'aws-lambda'
import { handler } from '../../services/TacosTable/Create'

const event: APIGatewayProxyEvent = {
  body: {
    name: 'Beef Taco',
    productType: 'Entree',
    price: 5,
    inStock: 10,
  },
} as any

const result = handler(event, {} as any).then((apiResult) => {
  const items = JSON.parse(apiResult.body)
  console.log(123)
})
