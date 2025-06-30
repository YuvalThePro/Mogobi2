import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = config.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

(async () => {
  await connectToDB(); 
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();