const express=require("express");
const { RecipeModel } = require("../model/recipe.model");
const recipeRouter=express.Router();

recipeRouter.post("/",async(req,res)=>{
    try {
        const newRecipe = new RecipeModel({
          ...req.body
        });
        
        await newRecipe.save();
        res.status(201).json({ msg: "Recipe added successfully!", newRecipe });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

recipeRouter.get("/",async(req,res)=>{
    try {
        const products = await RecipeModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports={recipeRouter}