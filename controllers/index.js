const Service = require('../models/index.js');

// Add a new service
exports.addService = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const newService = new Service({ name, description, price });
    await newService.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all health services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a service
exports.updateService = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    const updatedService = await Service.findByIdAndUpdate(id, { name, description, price }, { new: true });
    if (!updatedService) return res.status(404).json({ error: 'could not found the service :(' });
    res.json(updatedService);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a service
exports.deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedService = await Service.findByIdAndDelete(id);
    if (!deletedService) return res.status(404).json({ error: 'Service not found' });
    res.json({ message: 'Service deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
