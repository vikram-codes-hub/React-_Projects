const express = require("express");
const { createTodo, updateTodo } = require("./types"); // FIXED: Use createTodo here
const { todo } = require("./db");
const cors=require("cors")
const app = express();

app.use(express.json());
app.use(cors())

app.post("/todos", async function (req, res) {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload); // FIXED: Use createTodo here

    if (!parsePayload.success) {
        res.status(411).json({
            mssg: "You sent the wrong input"
        });
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    });

    res.json({
        mssg: "Todo created"
    });
});

app.get("/todos", async function (req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    });
});

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);

    if (!parsePayload.success) {
        res.status(411).json({
            mssg: "You have the wrong input"
        });
        return;
    }

    await todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    });

    res.json({
        mssg: "Todo completed as true"
    });
});

app.listen(3000);
