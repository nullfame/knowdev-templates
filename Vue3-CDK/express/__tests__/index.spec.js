const index = require("../index");

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
