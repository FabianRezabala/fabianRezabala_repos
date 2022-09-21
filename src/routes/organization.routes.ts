import { Router } from "express";
import {createOrganization, deleteOrganization, getAll, getOrganization, updateOrganization} from '../controllers/organization.controllers'

const router = Router();

router.get('/api/organization', getAll);

router.get('/api/organization/:id', getOrganization);

router.post('/api/organization', createOrganization);

router.put('/api/organization/:id', updateOrganization);

router.delete('/api/organization/:id', deleteOrganization);

export default router;