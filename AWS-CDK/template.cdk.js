// /* eslint-disable no-new */
// const cdk = require("@aws-cdk/core");
// const dynamodb = require("@aws-cdk/aws-dynamodb");
// const lambda = require("@aws-cdk/aws-lambda");

// const { version } = require("./package.json");

// const DURATION = {
//   ONE_MINUTE: cdk.Duration.seconds(60),
// };
// const TAG = {
//   ROLE: {
//     API: "api",
//     COMMAND: "command",
//     META: "meta",
//     PROCESSING: "processing",
//     ORCHESTRATION: "orchestration",
//     STORAGE: "storage",
//     WEB: "web",
//   },
// };

// class Template extends cdk.Stack {
//   constructor(scope, id, props) {
//     //
//     //
//     // Setup
//     //

//     const tagger = Object.values(TAG.ROLE).reduce((accumulator, role) => {
//       accumulator[role] = [];
//       return accumulator;
//     }, {});

//     //
//     //
//     // Stack
//     //

//     super(scope, id, props);
//     tagger.meta.push(this);

//     //
//     //
//     // Dynamo
//     //

//     const table = new dynamodb.Table(this, "Table", {
//       billing_mode: dynamodb.BillingMode.PAY_PER_REQUEST,
//       partitionKey: { name: "partition", type: dynamodb.AttributeType.STRING },
//       sortKey: { name: "sort", type: dynamodb.AttributeType.STRING },
//     });
//     tagger.storage.push(table);

//     //
//     //
//     // Lambdas
//     //

//     //

//     //
//     //
//     // Exports
//     //

//     //

//     //
//     //
//     // Tags
//     //

//     Object.keys(tagger).forEach((role) => {
//       tagger[role].forEach((resource) => {
//         cdk.Tags.of(resource).add("account", process.env.PROJECT_ACCOUNT);
//         cdk.Tags.of(resource).add("env", process.env.PROJECT_ENV);
//         cdk.Tags.of(resource).add("project", process.env.PROJECT_KEY);
//         cdk.Tags.of(resource).add("role", role);
//       });
//     });
//   } // END constructor
// } // END class

// module.exports = Template;
