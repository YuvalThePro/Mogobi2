import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { createLogger } from "./utiles/logger.js";

const logger = createLogger('APP');

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    logger.http(`${req.method} request to ${req.url}`);

    res.on('finish', () => {
        const statusCode = res.statusCode;
        const logLevel = statusCode >= 500 ? 'error' : statusCode >= 400 ? 'warn' : 'http';
        logger[logLevel](`${req.method} ${req.url} - ${statusCode}`);
    });
    next();
})
app.use("/api", routes);
app.use((_req, res) => res.status(404).json({ message: 'Not Found' }));
app.use(errorHandler);

export default app;
