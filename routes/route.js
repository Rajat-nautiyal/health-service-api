const express = require('express');
const { body } = require('express-validator'); //package for better validation handling
const { addService, getAllServices, updateService, deleteService } = require('../controllers/index.js');

const router = express.Router();

//Post Req. with Validation for addService function
router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Service name is required'),//if name is empty, message will be shown
    body('price').isNumeric().withMessage('Price must be a number'),//if price is NaN, message will be shown
  ],
  addService
);

// Get all services
router.get('/', getAllServices);

// Update service by ID
router.put('/:id', updateService);

// Delete service by ID
router.delete('/:id', deleteService);

module.exports = router;
