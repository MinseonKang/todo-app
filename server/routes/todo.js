const express = require("express");
const { Todo } = require("../models");
const router = express.Router();

// 기본 주소 => localhost:8888/

// GET localhost:PORT/todos - show all todos (READ)
router.get("/todos", async (req, res) => {
  try {
    let data = await Todo.findAll();
    res.send(data);
  } catch (err) {
    res.send(err);
  }

  //   Todo.findAll().then((data) => {
  //     console.log(data);
  //     res.send(data);
  //   });
});

// POST
router.post("/todo", async (req, res) => {
  try {
    let newTodo = await Todo.create({
      title: req.body.title,
      // done: req.body.done, // default 0이기 때문에
    });
    res.send(newTodo);
  } catch (err) {
    res.send(err);
  }
});

// PATCH
router.patch("/todo/:todoId", async (req, res) => {
  let;
});

module.exports = router;
