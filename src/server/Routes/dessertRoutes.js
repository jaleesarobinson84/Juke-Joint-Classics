import express from "express";
import Dessert from "../models/dessert";

const router = express.Router();

// Dessert Routes
router.get("/", async (req, res) => {
  try {
    const desserts = await Dessert.find();
    res.json(desserts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const dessert = new Dessert(req.body);
    await dessert.save();
    res.status(201).json(dessert);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dessert = await Dessert.findByIdAndUpdate(id, req.body, { new: true });
    if (!dessert) {
      return res.status(404).json({ message: "Dessert not found" });
    }
    res.json(dessert);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dessert = await Dessert.findByIdAndDelete(id);
    if (!dessert) {
      return res.status(404).json({ message: "Dessert not found" });
    }
    res.json({ message: "Dessert deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
