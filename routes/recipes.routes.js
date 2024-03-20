import { Router } from "express";
import { Recipe } from "../models/recipe.js";

const router = Router();



// Define routes
router.post('/recipe', async (req, res) => {
    const result = await Recipe.create(req.body);
    res.json(result);

});


router.get('/recipes', async (req, res) => {
    const result = await Recipe.find({});

    res.json(result);


});

router.delete('/recipes', async (req, res) => {

    const deleteManyResult = await Recipe.deleteMany({});

    res.json(deleteManyResult);
});

router.get('/recipe/:id', (req, res) => {
    res.json(`Get single recipes with id: ${req.params.id} !`);
});
router.patch('/recipe/:id', (req, res) => {
    res.json('Update single todos!');
});


// Export Route
export default router;