import { CfnOutput, Fn, Stack, StackProps } from 'aws-cdk-lib'
import {
  AuthorizationType,
  Cors,
  LambdaIntegration,
  MethodOptions,
  ResourceOptions,
  RestApi,
} from 'aws-cdk-lib/aws-apigateway'
import { PolicyStatement } from 'aws-cdk-lib/aws-iam'
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs'
import { Construct } from 'constructs'
import { join } from 'path'
import { GenericTable } from './GenericTable'
import { AuthorizerWrapper } from './auth/AuthorizerWrapper'
import { Bucket, HttpMethods } from 'aws-cdk-lib/aws-s3'
import { WebAppDeployment } from './WebDeployment'

export class TacosStack extends Stack {
  private api = new RestApi(this, 'tacosPetApi')
  private authorizer: AuthorizerWrapper
  private suffix: string
  private tacosPhotoBucket: Bucket

  private tacosTable = new GenericTable(this, {
    tableName: 'TacosTable',
    primaryKey: 'tacoID',
    createLambdaPath: 'Create',
    readLambdaPath: 'Read',
    updateLambdaPath: 'Update',
    deleteLambdaPath: 'Delete',
    secondaryIndexes: ['productType'],
  })

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props)
    this.initializeSuffix()
    this.initializeTacosPetPhotosBucket()
    this.authorizer = new AuthorizerWrapper(
      this,
      this.api,
      this.tacosPhotoBucket.bucketArn + '/*'
    )
    // new WebAppDeployment(this, this.suffix)

    // const helloLambdaNodeJS = new NodejsFunction(this, 'HelloLambdaNodeJS', {
    //   entry: join(__dirname, '..', 'services', 'node-lambda', 'hello.ts'),
    //   handler: 'handler',
    // })

    // const s3ListPolicy = new PolicyStatement()
    // s3ListPolicy.addActions('s3:ListAllMyBuckets')
    // s3ListPolicy.addResources('*')
    // helloLambdaNodeJS.addToRolePolicy(s3ListPolicy)

    const optionsWithAuthorizer: MethodOptions = {
      authorizationType: AuthorizationType.COGNITO,
      authorizer: {
        authorizerId: this.authorizer.authorizer.authorizerId,
      },
    }

    const optionsWithCors: ResourceOptions = {
      defaultCorsPreflightOptions: {
        allowOrigins: Cors.ALL_ORIGINS,
        allowMethods: Cors.ALL_METHODS,
      },
    }

    //tacos api integrations
    const tacosResource = this.api.root.addResource('pets')
    tacosResource.addMethod('POST', this.tacosTable.createLambdaIntegration)
    tacosResource.addMethod('GET', this.tacosTable.readLambdaIntegration)
    tacosResource.addMethod('PUT', this.tacosTable.updateLambdaIntegration)
    tacosResource.addMethod('DELETE', this.tacosTable.deleteLambdaIntegration)
  }

  private initializeSuffix() {
    const shortStackId = Fn.select(2, Fn.split('/', this.stackId))
    const Suffix = Fn.select(4, Fn.split('-', shortStackId))
    this.suffix = Suffix
  }

  private initializeTacosPetPhotosBucket() {
    this.tacosPhotoBucket = new Bucket(this, 'tacos-photos', {
      bucketName: `tacos-pet-${this.suffix}-photos`,
      cors: [
        {
          allowedMethods: [
            HttpMethods.GET,
            HttpMethods.POST,
            HttpMethods.PUT,
            HttpMethods.DELETE,
          ],
          allowedOrigins: ['*'],
          allowedHeaders: ['*'],
        },
      ],
    })
    new CfnOutput(this, 'tacos-photos-bucket', {
      value: this.tacosPhotoBucket.bucketName,
    })
  }
}
