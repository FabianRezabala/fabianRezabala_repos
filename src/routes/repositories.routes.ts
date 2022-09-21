import { Router } from "express";
import {getAll} from '../controllers//repositories.controllers'

const router = Router();

router.get('/repositories', getAll);

export default router;