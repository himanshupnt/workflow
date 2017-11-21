const { authHandler } = require("./auth-handler");

describe("authHandler", () => {
  it("should exist", () => {
    expect(typeof authHandler).toBe("function");
  });
});
