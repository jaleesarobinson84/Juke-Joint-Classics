import express from "express";
import entreemodel from "../models/entree.js";

const router = express.Router();

// Entree Routes
router.get("/", async (req, res) => {
  try {
    const entreedocument = await entreemodel.find();
    res.json(entreedocument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const entreedocument = new entreemodel(req.body);
    await entreemodel.save();
    res.status(201).json(entreedocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const entreedocument = await entreemodel.findByIdAndUpdate(id, req.body, { new: true });
    if (!entreedocument) {
      return res.status(404).json({ message: "Entree not found" });
    }
    res.json(entreedocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const entreedocument = await entreemodel.findByIdAndDelete(id);
    if (!entreedocument) {
      return res.status(404).json({ message: "Entree not found" });
    }
    res.json({ message: "Entree deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
