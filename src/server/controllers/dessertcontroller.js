import express from "express";
import dessertModel from "../models/dessert.js";

const router = express.Router();

// Dessert Routes
// Get all desserts
router.get("/", async (req, res) => {
  try {
    const dessertDocuments = await dessertModel.find();
    res.json(dessertDocuments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific dessert by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dessertDocument = await dessertModel.findById(id);
    if (!dessertDocument) {
      return res.status(404).json({ message: "Dessert not found" });
    }
    res.json(dessertDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create a new dessert
router.post("/", async (req, res) => {
  try {
    const dessertDocument = new dessertModel(req.body);
    await dessertDocument.save();
    res.status(201).json(dessertDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a dessert
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dessertDocument = await dessertModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!dessertDocument) {
      return res.status(404).json({ message: "Dessert not found" });
    }
    res.json(dessertDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a dessert
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dessertDocument = await dessertModel.findByIdAndDelete(id);
    if (!dessertDocument) {
      return res.status(404).json({ message: "Dessert not found" });
    }
    res.json({ message: "Dessert deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;

