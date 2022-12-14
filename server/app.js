const express = require("express");
const app = express();
const PORT = 8888;
const cors = require("cors");
const todoRouter = require("./routes/todo");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // 모든 서버에서 보내는 요청 수락
app.use("/", todoRouter); // localhost:8888/

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
