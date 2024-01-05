const index = require("../index.js");

//
//
// Run tests
//

describe("Express Backend", () => {
  describe("index", () => {
    it("Works", () => {
      expect(index).toBeObject();
      expect(index).toContainKey("handler");
    });
  });
});
