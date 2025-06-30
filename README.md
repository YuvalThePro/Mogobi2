<h1 align="center">Mogobi2</h1>
<p align="center">
  🚀 A backend user management server built with Node.js & Express.js.<br>
  🧑‍💻 Final project by <b>David Levi</b> & <b>Yuval Ifraimov</b> for Node.js Server Programming course.
</p>

---

## 🛠 Tech Stack

- **Node.js** & **Express.js**
- **JWT** (Authentication)
- **bcrypt** (Password Hashing)
- **dotenv** (Environment Variables)
- **MongoDB** & **Mongoose**

---

📁 Project Structure
```plaintext
Mogobi2/
│
├── controllers/       Logic for handling requests
├── routes/            API endpoint definitions
├── models/            MongoDB schemas
├── middleware/        Auth and error handlers
├── config/            DB and app configuration
├── app.js             Express app setup
└── server.js          Entry point
```
---


👥 Authors
	•	David Levi
	•	Yuval Ifraimov

⸻

📌 About

Mogobi2 is a backend server that handles user registration, authentication, and data management using secure and scalable practices.
This project was developed as the final assignment for our academic course in server development with Node.js.


## 🚀 Getting Started

```bash
git clone https://github.com/YuvalThePro/Mogobi2.git
cd Mogobi2
npm install
Create a .env file in the root directory:
PORT=3000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
Then start the server:
npm start
