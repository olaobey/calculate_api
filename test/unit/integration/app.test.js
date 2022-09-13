const supertest = require("supertest");
const server = require("../../../app.js");

describe("POST/calculate: action: sum", () => {
  it("Getting the sum of numbers", async () => {
    const response = await supertest(server)
      .post("/calculate")
      .send({
        action: "sum",
        num1: 20,
        num2: 35,
      })
      .expect("Content-type", "application/json");
    expect(response.status).toBe(200);
    // expect(response.body).toBeDefined();
    expect(response.body).toBe(55);
  });
});

describe("POST/calculate: action: subtract", () => {
  it("Getting the subtract value", async () => {
    const response = await supertest(server)
      .post("/calculate")
      .send({
        action: "subtract",
        num1: 50,
        num2: 20,
      })
      .expect("Content-type", "application/json");
    expect(response.status).toBe(200);
    // expect(response.body).toBeDefined();
    expect(response.body).toBe(30);
  });
});

describe("POST/calculate: action: multiply", () => {
  it("Getting the multiply value", async () => {
    const response = await supertest(server)
      .post("/calculate")
      .send({
        action: "multiply",
        num1: 20,
        num2: 20,
      })
      .expect("Content-type", "application/json");
    expect(response.status).toBe(200);
    // expect(response.body).toBeDefined();
    expect(response.body).toBe(400);
  });
});

describe("POST/calculate: action: divide", () => {
  it("Getting the divide value", async () => {
    const response = await supertest(server)
      .post("/calculate")
      .send({
        action: "divide",
        num1: 100,
        num2: 20,
      })
      .expect("Content-type", "application/json");
    expect(response.status).toBe(200);
    // expect(response.body).toBeDefined();
    expect(response.body).toBe(5);
  });
});
