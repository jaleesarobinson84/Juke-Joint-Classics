import express from "express";
import Entree from "./models/entree";

const router = express.Router();

// Entree Routes
router.get("/", async (req, res) => {
  try {
    const entrees = await Entree.find();
    res.json(entrees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const entree = new Entree(req.body);
    await entree.save();
    res.status(201).json(entree);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const entree = await Entree.findByIdAndUpdate(id, req.body, { new: true });
    if (!entree) {
      return res.status(404).json({ message: "Entree not found" });
    }
    res.json(entree);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const entree = await Entree.findByIdAndDelete(id);
    if (!entree) {
      return res.status(404).json({ message: "Entree not found" });
    }
    res.json({ message: "Entree deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
