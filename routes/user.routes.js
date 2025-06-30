import { Router } from 'express';
import {
    listUsers,
    getUser,
    updateUserController,
    removeUser
} from '../controllers/user.controller.js';
import { verifyToken, requireRole } from '../middlewares/auth.js';

const router = Router();

router.use(verifyToken);

router.get('/', requireRole(['admin']), listUsers);
router.get('/:id', getUser);
router.put('/:id', requireRole(['admin', 'user']), updateUserController);
router.delete('/:id', requireRole(['admin']), removeUser);

export default router;