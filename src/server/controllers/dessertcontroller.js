import express from "express";
import dessertmodel from "../models/dessert.js";

const router = express.Router();

// Dessert Routes

router.get("/", async (req, res) => {
  try {
    const dessertdocument = await dessertmodel.find();
    res.json(dessertdocument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const dessertdocument = new dessertmodel(req.body);
    await dessertdocument.save(); // Changed from dessertmodel.save() to dessertdocument.save()
    res.status(201).json(dessertdocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dessertdocument = await dessertmodel.findByIdAndUpdate(id, req.body, { new: true });
    if (!dessertdocument) { // Changed from !dessert to !dessertdocument
      return res.status(404).json({ message: "dessert not found" });
    }
    res.json(dessertdocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dessertdocument = await dessertmodel.findByIdAndDelete(id);
    if (!dessertdocument) { // Changed from !dessert to !dessertdocument
      return res.status(404).json({ message: "dessert not found" });
    }
    res.json({ message: "dessert deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;