import meal from "../models/meal"

exports.createMeal = async (req, res) => {
    try {
      const meal = await meal.create(req.body);
      res.status(201).json(newMeal);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  exports.getMeal = async (req, res) => {
    try {
      const meal = await meal.find();
      res.status(200).json(meal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.getMealById = async (req, res) => {
    try {
      const meal = await meal.findById(req.params.id);
      if (!meal) {
        return res.status(404).json({ message: 'Meal not found' });
      }
      res.status(200).json(meal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.updateMeal = async (req, res) => {
    try {
      const meal = await meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!meal) {
        return res.status(404).json({ message: 'Meal not found' });
      }
      res.status(200).json(meal);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  exports.deleteMeal = async (req, res) => {
    try {
      const meal = await meal.findByIdAndDelete(req.params.id);
      if (!meal) {
        return res.status(404).json({ message: 'Meal not found' });
      }
      res.status(204).json({ message: 'Meal deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export default meal