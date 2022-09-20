import { Router } from "express";
import {createOrganization, deleteOrganization, getAll, getOrganization, updateOrganization} from '../controllers/organization.controllers'

const router = Router();

router.get('/organization', getAll);

router.get('/organization/:id', getOrganization);

router.post('/organization', createOrganization);

router.put('/organization/:id', updateOrganization);

router.delete('/organization/:id', deleteOrganization);

export default router;