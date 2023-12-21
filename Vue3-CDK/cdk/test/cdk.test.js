/* eslint-disable no-new */
// Framework
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// AWS CDK
import cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";

// Subject
import { CdkStack } from "../lib/cdk-stack";

//
//
// Mock modules
//

// Route53 hosted zone
vi.mock("aws-cdk-lib/aws-route53", () => ({
  default: {
    ARecord: vi.fn(),
    HostedZone: {
      fromLookup: vi.fn(),
    },
    RecordTarget: {
      fromAlias: vi.fn(),
    },
  },
}));

//
//
// Mock environment
//

const DEFAULT_ENV = process.env;
beforeEach(() => {
  process.env = { ...process.env };
  process.env.PROJECT_ENV = "MOCK_PROJECT_ENV";
  process.env.PROJECT_KEY = "MOCK_PROJECT_KEY";
  process.env.PROJECT_NONCE = "MOCK_PROJECT_NONCE";
});
afterEach(() => {
  process.env = DEFAULT_ENV;
  vi.clearAllMocks();
});

//
//
// Run tests
//

describe("CDK Stack", () => {
  describe("Baselines", () => {
    it("Loads", () => {
      const app = new cdk.App();
      const stack = new CdkStack(app, "MyTestStack");
      const template = Template.fromStack(stack);
      expect(template).not.toBe(undefined);
    });
  });
});
