import app from './app.js';
import dotenv from 'dotenv';
import { connectToDB } from './config/db.js';
import config from './config/index.js';

dotenv.config();

const PORT = config.PORT || 3000;

(async () => {
  await connectToDB();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();

