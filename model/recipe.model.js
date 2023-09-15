const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: String,
    instruction:String,
    readyInMinutes: Number, 
    servings: Number,
    mask: String,
    backgroundImage:String,
    image:String,
    imageUrl:String,
    author:String,
    backgroundColor:String,
    fontColor:String,
    source:String

});

const RecipeModel = mongoose.model('recipe', recipeSchema);

module.exports = { RecipeModel };
