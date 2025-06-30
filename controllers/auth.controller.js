import { authService } from '../services/auth.service.js';

export const register = async (req, res, next) => {
  try {
    const { user, token } = await authService.register(req.body);
    res.status(201).json({ token, user: { id: user._id, email: user.email } });
  } catch (e) { next(e); }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    if (!result)
      return res.status(401).json({ message: 'Bad credentials' });

    const { user, token } = result;
    res.json({ token, user: { id: user._id, email: user.email } });
  } catch (e) { next(e); }
};