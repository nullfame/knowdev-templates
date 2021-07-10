---
to: src/handlers/__tests__/<%= name %>.handler.spec.js
---
/* eslint-disable global-require */

//
//
// Mock constants
//

//
//
// Mock modules
//

//
//
// Mock environment
//

const DEFAULT_ENV = process.env;
beforeEach(() => {
  process.env = { ...process.env };
});
afterEach(() => {
  process.env = DEFAULT_ENV;
});

//
//
// Run tests
//

describe("<%= Name %> Handler", () => {
  it("Works", async () => {
    const <%= name %> = require("../<%= name %>.handler");
    const response = await <%= name %>();
    console.log("response :>> ", response);
    expect(response.statusCode).toBe(200);
  });
});
