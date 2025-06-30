import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from './user.service.js';
import { verifyPassword } from '../utiles/hash.js';
import { jwtSecret } from '../config/index.js';

const sign = user =>
    jwt.sign({ sub: user._id, role: user.role }, jwtSecret, { expiresIn: '1h' });

export const authService = {
    async register(data) {
        const user = await createUser(data); // user.service handles hashing
        const token = sign(user);
        return { user, token };
    },
    async login(email, password) {
    const user = await findUserByEmail(email); // returns hash via +password
    if (!user) return null;

    const ok = await verifyPassword(password, user.password);
    if (!ok) return null;

    const token = sign(user);
    return { user, token };
  }
};