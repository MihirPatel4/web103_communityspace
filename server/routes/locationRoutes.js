import express from 'express';
import locationControllers from '../controllers/locationControllers.js';

const router = express.Router();

router.get('/', locationControllers.getLocations);
router.get('/:id', locationControllers.getLocationById);

export default router;