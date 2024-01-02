import { cfnOutput } from "@knowdev/magpie";

import { CfnOutput, Stack } from "aws-cdk-lib";

//
//
// Stack Class
//

class CdkBackendStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props = {}) {
    super(scope, id, props);

    //
    //
    // Validate
    //

    // ...

    //
    //
    // Setup
    //

    const output = {};

    // * Convert all CDK_ENV vars to local instances
    // * Do not use CDK_ENV vars past this section

    // ...

    // * Do not use CDK_ENV vars past this point

    //
    //
    // Resources
    //

    // ...

    //
    //
    // Output
    //

    cfnOutput({ CfnOutput, output, stack: this });
  }
}

// eslint-disable-next-line import/prefer-default-export
export { CdkBackendStack };
