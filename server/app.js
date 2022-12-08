const express = require("express");
const app = express();
const PORT = 8888;
const todoRouter = require("./routes/todo");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", todoRouter); // localhost:8888/

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
