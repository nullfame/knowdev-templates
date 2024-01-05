import { log, projectHandler } from "@knowdev/lambda";

//
//
// Helper Functions
//

//
//
// Handler
//

// eslint-disable-next-line import/prefer-default-export
export const handler = projectHandler(
  // eslint-disable-next-line no-unused-vars
  async (event, context) => {
    log.debug("Hello, world");
    return "Hello, world";
  },
  { name: "hello" },
);
