import express from "express";
import entreeModel from "../models/entree.js";

const router = express.Router();

// Entree Routes
// Get all entrees
router.get("/", async (req, res) => {
  try {
    const entreeDocuments = await entreeModel.find();
    res.json(entreeDocuments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific entree by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const entreeDocument = await entreeModel.findById(id);
    if (!entreeDocument) {
      return res.status(404).json({ message: "Entree not found" });
    }
    res.json(entreeDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create a new entree
router.post("/", async (req, res) => {
  try {
    const entreeDocument = new entreeModel(req.body);
    await entreeDocument.save();
    res.status(201).json(entreeDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an entree
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const entreeDocument = await entreeModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!entreeDocument) {
      return res.status(404).json({ message: "Entree not found" });
    }
    res.json(entreeDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an entree
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const entreeDocument = await entreeModel.findByIdAndDelete(id);
    if (!entreeDocument) {
      return res.status(404).json({ message: "Entree not found" });
    }
    res.json({ message: "Entree deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
