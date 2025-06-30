import app from './app.js';
import { connectToDB } from './config/db.js';
import {port} from './config/index.js';

(async () => {
  await connectToDB();
  app.listen(port, () => console.log(`Server running on port ${port}`));
})();

