const app = require("./app.js");
const request = require("supertest");

describe("express test", () => {
  it("hello world Test", done => {
    request(app).get("/hello")
      .then(res => {
        expect(res.text).toEqual("world");
        done();
      });
  });
})