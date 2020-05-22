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

router.get("/todos/:_id", async  (req, res) => {
    try {
        const todo = await Todo.findOne({_id: req.params._id}).orFail()
        res.send(todo)
    }catch{
        res.statut(404)
    res.send({error: "Todo not found"})
    }
})

module.exports = router;