import dessert from '../models/dessert'

export const createDessert = async (req, res) => {
  const dessert = new dessert(req.body);
  try {
    await dessert.save();
    res.status(201).json(dessert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getDessert = async (req, res) => {
  try {
    const dessert = await dessert.find();
    res.status(200).json(desserts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDessertById = async (req, res) => {
  try {
    const dessert = await dessert.findById(req.params.id);
    if (dessert == null) {
      return res.status(404).json({ message: 'Cannot find dessert' });
    }
    res.status(200).json(dessert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateDessert = async (req, res) => {
  let dessert;
  try {
    dessert = await dessert.findById(req.params.id);
    if (dessert == null) {
      return res.status(404).json({ message: 'Cannot find dessert' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  if (req.body.title != null) {
    dessert.title = req.body.title;
  }
  if (req.body.image != null) {
    dessert.image = req.body.image;
  }
  if (req.body.ingredients != null) {
    dessert.ingredients = req.body.ingredients;
  }
  if (req.body.instructions != null) {
    dessert.instructions = req.body.instructions;
  }

  try {
    const updatedDessert = await dessert.save();
    res.status(200).json(updatedDessert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteDessert = async (req, res) => {
  try {
    const dessert = await dessert.findById(req.params.id);
    if (dessert == null) {
      return res.status(404).json({ message: 'Cannot find dessert' });
    }
    await dessert.remove();
    res.status(204).json({ message: 'Deleted dessert' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default dessert