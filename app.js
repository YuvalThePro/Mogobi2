import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use((_req, res) => res.status(404).json({ message: 'Not Found' }));
app.use(errorHandler);

export default app;
