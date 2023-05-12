import { TacosStack } from './TacosStack'
import { App } from 'aws-cdk-lib'

const app = new App()
new TacosStack(app, 'TacosStack', {
  stackName: 'TacosStack',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
})
