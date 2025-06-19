import { Router } from 'express';
import {
  create_disater,
  get_disaters,
  update_disater,
  delete_disater
} from '../controllers/disasters.js';

const router = Router();


router.post('/disasters', create_disater);
router.get('/disasters', get_disaters);
router.put('/disasters/:id', update_disater);
router.delete('/disasters/:id', delete_disater);

export default router; 