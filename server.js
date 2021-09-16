const express = require("express");
const { rootRouter } = require("./routers/root.router");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(express.json());
app.use("/api/v1", rootRouter);
app.listen(PORT, () => {
  console.log(`app listening on port: ${PORT}`);
});
