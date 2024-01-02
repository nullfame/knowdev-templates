const { log, projectHandler } = require("@knowdev/lambda");

//
//
// Helper Functions
//

//
//
// Handler
//

const handler = projectHandler(
  // eslint-disable-next-line no-unused-vars
  async (event, context) => {
    log.debug("Hello, world");
    return "Hello, world";
  },
  { name: "hello" },
);

//
//
// Export
//

module.exports = {
  handler,
};
