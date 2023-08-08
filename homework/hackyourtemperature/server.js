import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello from backend to frontend!")
});

app.use(express.json());

app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  res.send(`${cityName} added.`)
})

app.listen(port, () => console.log(`Server running on port ${port}!`))