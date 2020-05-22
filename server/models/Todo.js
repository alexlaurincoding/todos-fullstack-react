const mongoose = require("mongoose");

const schema = mongoose.Schema({
    titre: String,
    description: String,
    statut: String,
    categorie: String
});

module.exports = mongoose.model("Todo", schema);
