import express from 'express'
import cors from 'cors'
import organizationRoutes from './routes/organization.routes'

const app = express();
app.use(cors());
app.use(express.json());

app.use(organizationRoutes);

export default app;