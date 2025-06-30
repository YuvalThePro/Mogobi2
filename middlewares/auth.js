import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/index.js';
import { createLogger } from '../utiles/logger.js';

const logger = createLogger('AUTH-MW');

export const verifyToken = (req, res, next) => {
    const hdr = req.headers.authorization || '';
    if (!hdr.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        req.user = jwt.verify(hdr.split(' ')[1], jwtSecret);
        next();
    } catch (e) {
        logger.warn(`Bad token: ${e.message}`);
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

export const requireRole = roles => (req, res, next) =>
    roles.includes(req.user.role)
        ? next()
        : res.status(403).json({ message: 'Forbidden' });
