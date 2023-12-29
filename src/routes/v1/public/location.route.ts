import { Router } from 'express';
import { locationController } from '../../../controllers';
import { validateBodyDTO } from '../../../middleware/body.validation.middleware';
import { LocationDto } from '../../../validation/location.validation';

const router = Router();

router.post('/', validateBodyDTO(LocationDto), locationController.getLocation);

export default router;
