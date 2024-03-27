import { Schema, model } from "mongoose";

const recipeSchema = new Schema ({
    title: {type: String, required: true}
});

export const RecipeModel = model("Recipe" ,recipeSchema, "recipes");