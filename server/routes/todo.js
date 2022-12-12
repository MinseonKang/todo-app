const express = require("express");
const { Todo } = require("../models");
const router = express.Router();

// 기본 주소 => localhost:PORT/

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

// POST localhost:PORT/todo - create new todo (CREATE)
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

// PATCH localhost:PORT/todo/:todoId - edit a specific todo (UPDATE)
// 수정 성공시; true -> res.send(true)
// 수정 실패시; false -> res.send(false)
router.patch("/todo/:todoId", async (req, res) => {
  // console.log(req.body); // { title: 'my todo - 수정', done: true }
  // console.log(req.params); // { todoId: '1' }
  try {
    let [isUpdated] = await Todo.update(
      {
        title: req.body.title,
        done: req.body.done,
      },
      {
        where: {
          id: req.params.todoId,
        },
      }
    );
    console.log(isUpdated);
    // 수정 성공시; [ 1 ] -> 1
    // 수정 실패시; [ 0 ] -> 0

    if (!isUpdated) {
      return res.send(false);
    }
    res.send(true);
  } catch (err) {
    res.send(err);
  }
});

// DELETE localhost:PORT/todo/:todoId - remove a specific todo (DELETE)
router.delete("/todo/:todoId", async (req, res) => {
  try {
    let isDelete = await Todo.destroy({ where: { id: req.params.todoId } });
    if (!isDelete) {
      return res.send(false);
    }
    res.send(true);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
