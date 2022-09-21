import express from 'express'
import {Request, Response} from 'express';
import cors from 'cors'
import organizationRoutes from './routes/organization.routes'
import repositoriesRoutes from './routes/repositories.routes'

const app = express();
app.use(cors());
app.use(express.json());

app.use(organizationRoutes);
app.use(repositoriesRoutes);

app.get("*", (req: Request, res: Response) => {
	res.status(404);
	res.send({ error: "page Not found" });
});

export default app;