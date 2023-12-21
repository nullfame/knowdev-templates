#!/usr/bin/env node

import cdk from "aws-cdk-lib";
// eslint-disable-next-line import/extensions
import { CdkStack } from "../lib/cdk-stack.js";

const version =
  process.env.npm_package_version || process.env.PROJECT_VERSION || "v???";

const stackName =
  process.env.CDK_ENV_STACK_NAME ||
  `cdk-${process.env.PROJECT_SPONSOR}-${process.env.PROJECT_KEY}-${process.env.PROJECT_ENV}-${process.env.PROJECT_NONCE}`;

const app = new cdk.App();
const stack = new CdkStack(app, "CdkStack", {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  stackName,
});
if (process.env.PROJECT_COMMIT && process.env.PROJECT_COMMIT.length > 8) {
  cdk.Tags.of(stack).add("buildHex", process.env.PROJECT_COMMIT.slice(0, 8));
}
cdk.Tags.of(stack).add("buildDate", new Date().toISOString());
cdk.Tags.of(stack).add("buildTime", Date.now().toString());
if (process.env.PROJECT_COMMIT)
  cdk.Tags.of(stack).add("commit", process.env.PROJECT_COMMIT);
cdk.Tags.of(stack).add("creation", "cdk");
if (process.env.PROJECT_ENV)
  cdk.Tags.of(stack).add("env", process.env.PROJECT_ENV);
if (process.env.PROJECT_NONCE)
  cdk.Tags.of(stack).add("nonce", process.env.PROJECT_NONCE);
if (process.env.PROJECT_KEY)
  cdk.Tags.of(stack).add("project", process.env.PROJECT_KEY);
cdk.Tags.of(stack).add("role", "stack");
if (process.env.PROJECT_SPONSOR)
  cdk.Tags.of(stack).add("sponsor", process.env.PROJECT_SPONSOR);
cdk.Tags.of(stack).add("stack", stackName);
cdk.Tags.of(stack).add("version", version);
