const express = require("express");
require("../src/db/conn");
const router = require("./routers/men");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Connection is Live at port no. ${port}`);
});

// app.get("/", async (req, res) => {
//   res.send("H");
// });

// START
// npm init -y
// npm i express
// npm i mongoose
// npm run dev    to start
