import express from 'express';
const router = express.Router();
import rateRoute from './location.route';

router.use('/location', rateRoute);

export default router;
