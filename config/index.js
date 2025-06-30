import 'dotenv/config';

export const port = process.env.PORT
export const mongoDbUri = process.env.MONGODB_URI
export const appMode = process.env.MODE
export const jwtSecret = process.env.JWT_SECRET || '';