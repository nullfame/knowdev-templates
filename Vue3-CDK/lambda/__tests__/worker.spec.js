const { handler } = require("../worker");

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

describe("Worker", () => {
  it("Works", async () => {
    const response = await handler();
    console.log("response :>> ", response);
    expect(response).not.toBeUndefined();
  });
});
