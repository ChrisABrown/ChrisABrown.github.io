import { TacosStack } from './TacosStack'
import { App } from 'aws-cdk-lib'

const app = new App()
new TacosStack(app, 'TacosStack', {
  stackName: 'TacosStack',
})
