import { Router} from "express";
import { addRecipe, deleteRecipe, getAllRecipes, getRecipe, updateRecipe } from "../controllers/recipes.controller.js";
import multer from "multer";


// Create multer upload middlewre
const upload = multer({dest: 'uploads/images'});


// Create recipes router
const router = Router();

// Define routes
router.post('/recipes', upload.single('image'), addRecipe);

router.get('/recipes', getAllRecipes);

router.get('/recipes/:id', getRecipe);

router.patch('/recipes/:id', updateRecipe);

router.delete('/recipes/:id', deleteRecipe);

export default router;