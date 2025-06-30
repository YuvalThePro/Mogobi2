import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/index.js';
import { createUser, findUserByEmail } from '../services/user.service.js';
import { verifyPassword } from '../utiles/hash.js';

const sign = user =>
    jwt.sign({ sub: user._id, role: user.role }, jwtSecret, { expiresIn: '1h' });

export const register = async (req, res, next) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json({ token: sign(user) });
    } catch (e) { next(e); }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);
        if (!user || !(await user.comparePassword(password)))
            return res.status(401).json({ message: 'Bad credentials' });

        res.json({ token: sign(user) });
    } catch (e) { next(e); }
};
