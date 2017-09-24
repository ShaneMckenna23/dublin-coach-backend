import request from "supertest";
import app from "../src/app.js";

describe("GET /graphql", () => {
  it("should render properly", async () => {
    await request(app)
      .get("/graphiql")
      .expect(200);
  });
});
