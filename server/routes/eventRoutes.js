import express from 'express';
import eventControllers from '../controllers/eventControllers.js';

const router = express.Router();

router.get('/', eventControllers.getEvents);
router.get('/:id', eventControllers.getEventById);

export default router;