const { authHandler } = require("./auth-handler");
// sanity check
describe("authHandler", () => {
  it("should exist", () => {
    expect(typeof authHandler).toBe("function");
  });
});
