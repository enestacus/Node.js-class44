
import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe("POST /weather", () => {
  it("checks if there is a valid city name and returns weather info", async () => {
    const res = await request
      .post('/weather')
      .send({cityName: 'Amsterdam'}) 
    expect(res.status).toBe(200);
    expect(res.body.weatherText).toContain('Amsterdam');
  });

  it("returns an error if cityName is missing", async () => {
    const res = await request
      .post('/weather')
      .send({})
    expect(res.status).toBe(400);
    expect(res.body.weatherText).toBe('CityName is missing!');  
  })

  it("returns an error if cityName is undefined", async () => {
    const res = await request
      .post("/weather")
      .send({cityName: "dsjhfsadjf"})
    expect(res.status).toBe(404)
    expect(res.body.weatherText).toBe("City is not found!");  
  })
});