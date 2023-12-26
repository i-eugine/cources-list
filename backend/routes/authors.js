
import { Router } from 'express';

const authorsDb = require('../database/authors.db');
const router = Router();
const { body } = require('express-validator')

const authorValidationRules = [
  body('name', 'Name must be between 3 and 50 characters long.').isLength({ min: 3, max: 50}),
]

router.get('/', async (req, res, next) => {
  const products = await authorsDb.find();
  res.json(products);
});

router.post('/', authorValidationRules, async (req, res, next) => {
  const product = await authorsDb.create(req.body);
  res.json(product);
});

module.exports = router;