const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;
const walletRouter = require('./routing/wallet');

app.use('/wallet', walletRouter);

app.get("/", (req, res) => {
  res.send("Hello from Express & MySQL!");
});

app.listen(port, () => {
  console.log(
    `🚀 Server is running at http://localhost:${port}`
  );
});
