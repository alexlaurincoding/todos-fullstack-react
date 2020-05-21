const express = require("express");
const router = express.Router();
const Todo = require("./models/Todo");

router.get("/todos", async  (req, res) => {
    const todo = await Todo.find();
    res.send(todo);
})

router.post("/todos", async  (req, res) => {
    try {
        const todo = new Todo({
            titre: req.body.titre,
            description: req.body.description,
            statut: req.body.statut
        })
        await todo.save();
        res.send(todo);
    }
    catch (e) {
        console.log(e)
        res.status(401);
        res.send("Il y a une erreur, le gros!");
    }
})


module.exports = router;