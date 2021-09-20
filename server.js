const express = require("express");
const { rootRouter } = require("./routers/root.router");
const path = require("path");
const app = express();
const PORT = 3500;
// setup static file
app.use("/public", express.static("public"));

// const pathPublicDirectory = path.join(__dirname, "./public");
// // http://localhost:7000 => đi vào thư mục public
// app.use("/public", express.static(pathPublicDirectory));

app.use(express.json());
app.use("/api/v1", rootRouter);
app.listen(PORT, () => {
  console.log(`app listening on port: ${PORT}`);
});
