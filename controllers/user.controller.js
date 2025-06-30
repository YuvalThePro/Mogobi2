import {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from '../services/user.service.js';

export const listUsers = async (_req, res, next) => {
    try { res.json(await getAllUsers()); } catch (e) { next(e); }
};

export const getUser = async (req, res, next) => {
    try {
        const user = await getUserById(req.params.id);
        user ? res.json(user) : res.status(404).json({ message: 'Not found' });
    } catch (e) { next(e); }
};

export const updateUserController = async (req, res, next) => {
    try {
        const user = await updateUser(req.params.id, req.body);
        user ? res.json(user) : res.status(404).json({ message: 'Not found' });
    } catch (e) { next(e); }
};

export const removeUser = async (req, res, next) => {
    try {
        const ok = await deleteUser(req.params.id);
        ok ? res.status(204).end() : res.status(404).json({ message: 'Not found' });
    } catch (e) { next(e); }
};