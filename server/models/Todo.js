const mongoose = require("mongoose");

const schema = mongoose.Schema({
   //_id: Number,
    titre: String,
    description: String,
    statut: String
});

module.exports = mongoose.model("Todo", schema);
