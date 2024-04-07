import express from "express";
import mealModel from "../models/meal.js";

const router = express.Router();

// Meal Routes
// Get all meals
router.get("/", async (req, res) => {
  try {
    const mealDocuments = await mealModel.find();
    res.json(mealDocuments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific meal by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const mealDocument = await mealModel.findById(id);
    if (!mealDocument) {
      return res.status(404).json({ message: "Meal not found" });
    }
    res.json(mealDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create a new meal
router.post("/", async (req, res) => {
  try {
    const mealDocument = new mealModel(req.body);
    await mealDocument.save();
    res.status(201).json(mealDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a meal
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const mealDocument = await mealModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!mealDocument) {
      return res.status(404).json({ message: "Meal not found" });
    }
    res.json(mealDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a meal
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const mealDocument = await mealModel.findByIdAndDelete(id);
    if (!mealDocument) {
      return res.status(404).json({ message: "Meal not found" });
    }
    res.json({ message: "Meal deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
