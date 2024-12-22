import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {
  DockerImageFunction,
  DockerImageCode,
  FunctionUrlAuthType
} from 'aws-cdk-lib/aws-lambda'
import { ManagedPolicy } from 'aws-cdk-lib/aws-iam'

export class CdkInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Function to handle API requests
    const apiImageCode = DockerImageCode.fromImageAsset('../image', {
      cmd: ['app_api_handler.handler'],
    })
    const apiFunction = new DockerImageFunction(this, 'ApiFunc', {
      code: apiImageCode,
      memorySize: 1024,
      timeout: cdk.Duration.seconds(30)
    })

    // Public URL for the API function
    const functionUrl = apiFunction.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE
    });

    // Add permissions to the function

    // Output the URL
    new cdk.CfnOutput(this, 'ApiUrl', {
      value: functionUrl.url,
      description: 'The URL of the API function'
    });
  }
}
