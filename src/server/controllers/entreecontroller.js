import entree from "../models/entree"

exports.createEntree = async (req, res) => {
  try {
    const entree = await entree.create(req.body);
    res.status(201).json(entree);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getEntree = async (req, res) => {
  try {
    const entree = await entree.find();
    res.status(200).json(entree);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEntreeById = async (req, res) => {
  try {
    const entree = await entree.findById(req.params.id);
    if (entree == null) {
      return res.status(404).json({ message: 'Cannot find entree' });
    }
    res.status(200).json(entree);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEntree = async (req, res) => {
  let entree;
  try {
    entree = await entree.findById(req.params.id);
    if (entree == null) {
      return res.status(404).json({ message: 'Cannot find entree' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  if (req.body.name != null) {
    entree.name = req.body.name;
  }
  if (req.body.image != null) {
    entree.image = req.body.image;
  }
  if (req.body.ingredients != null) {
    entree.ingredients = req.body.ingredients;
  }
  if (req.body.instructions != null) {
    entree.instructions = req.body.instructions;
  }

  try {
    const updatedEntree = await entree.save();
    res.status(200).json(updatedEntree);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteEntree = async (req, res) => {
  try {
    const entree = await entree.findById(req.params.id);
    if (entree == null) {
      return res.status(404).json({ message: 'Cannot find entree' });
    }
    await entree.remove();
    res.status(204).json({ message: 'Deleted entree' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default entree