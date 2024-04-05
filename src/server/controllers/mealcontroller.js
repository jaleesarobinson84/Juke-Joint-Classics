import express from "express";
import mealmodel from "../models/meal.js";

const router = express.Router();

// Meal Routes
router.get("/", async (req, res) => {
  try {
    const mealsdocument = await mealmodel.find();
    res.json(mealdocument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const mealdocument = new mealmodel(req.body);
    await mealmodel.save();
    res.status(201).json(mealdocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const mealdocument = await mealmodel.findByIdAndUpdate(id, req.body, { new: true });
    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }
    res.json(mealdocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const mealdocument = await mealmodel.findByIdAndDelete(id);
    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }
    res.json({ message: "Meal deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;