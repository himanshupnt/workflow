const express = require("express");

const app = express();
const port = 4200;

app.use(express.static("./client"));
app.get("/gDrive", (req, res) => {
  res.send({ response: "Hello World" });
});

app.listen(port, () => {
  console.log("Hello from the server");
});
