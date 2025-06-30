import app from './app.js';
import { connectToDB } from './config/db.js';
import {port} from './config/index.js';

app.listen(port, async () => {
    try {
        await connectToDB();
        console.log(`Server is running on http://localhost:${port}`);

    } catch (error) {
        console.log(`Error starting Server: ${error.message}`);
    }
})
