# 🚀 AI Microservice App — Integrated MERN Stack Project

AI Microservice App is a fully integrated **MERN Stack** application built using **React.js, Vite, Node.js, Express.js, MongoDB Atlas, Mongoose ODM, JWT Authentication, and OpenAI SDK**. The project combines a modern React frontend with a secure Express backend to deliver AI-powered features, user authentication, and RESTful CRUD operations.

The application demonstrates full-stack architecture, secure API communication, cloud database integration, AI service integration, and modern web development best practices.

---

## 📸 Screenshot

![img alt](https://github.com/Harshit-700/Week-16-mission16/blob/ba5f68ff127c8ae233bdf6249e41374ba8e6300a/Screenshot%20(459).png)

---

## 🔗 Live Demo

**Frontend:** https://week-16-mission16-livid.vercel.app/

**Backend:** 

---

# 📁 Project Structure

```text
ai-microservice-app/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── validators/
│   │   ├── utils/
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# ✨ Features

- 🔐 JWT Authentication System
- 👤 User Registration & Login
- 🤖 AI Prompt Generation
- 📦 Complete CRUD Operations
- 🌐 React + Vite Frontend
- ⚡ Express.js REST API
- ☁️ MongoDB Atlas Integration
- 📄 Mongoose ODM
- ✅ Zod Validation
- 🛡 Helmet Security
- 🌍 CORS Configuration
- 🚦 Rate Limiting
- 🔒 Protected API Routes
- 📊 Analytics Logging
- ⚠ Global Error Handling
- 📱 Responsive User Interface
- 🔑 Environment Variable Support

---

# 🚀 Getting Started

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/ai-microservice-app.git
```

---

## 2️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 4️⃣ Configure Environment Variables

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000
```

### Backend (.env)

```env
PORT=5000

MONGODB_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

OPENAI_API_KEY=your_openai_api_key

OPENAI_MODEL=gpt-4.1-mini

CLIENT_ORIGIN=http://localhost:5173
```

---

## 5️⃣ Start Backend Server

```bash
cd backend
npm run dev
```

Expected Output

```
MongoDB Connected

Server Running on Port 5000
```

---

## 6️⃣ Start Frontend

```bash
cd frontend
npm run dev
```

Expected Output

```
VITE ready

http://localhost:5173
```

---

# 🔗 REST API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

---

## AI

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/ai/suggest | Generate AI Response |

---

## CRUD

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/resource | Create Data |
| GET | /api/resource | Fetch All Data |
| PUT | /api/resource/:id | Update Data |
| DELETE | /api/resource/:id | Delete Data |

---

# 📥 Sample Request

```json
{
  "prompt":"Explain MERN Stack in simple words."
}
```

---

# 📤 Sample Response

```json
{
  "success":true,
  "data":{
      "suggestion":"MERN is a full-stack JavaScript technology consisting of MongoDB, Express, React and Node.js."
  }
}
```

---

# 🧪 API Testing

The APIs were tested successfully using

- Postman
- Browser Requests
- Frontend Integration

---

## ✔ Verified Functionalities

| Feature | Status |
|----------|--------|
| MongoDB Connection | ✅ Working |
| Backend Server | ✅ Working |
| Frontend Server | ✅ Working |
| JWT Authentication | ✅ Working |
| AI Endpoint | ✅ Working |
| CRUD Operations | ✅ Working |
| Validation | ✅ Working |
| Error Handling | ✅ Working |
| Protected Routes | ✅ Working |

---

# 🧩 Backend Functionalities

| Functionality | Description |
|--------------|-------------|
| Authentication | JWT Login & Registration |
| CRUD APIs | Complete REST Operations |
| AI Service | OpenAI Integration |
| MongoDB | Cloud Database |
| Validation | Zod Schema Validation |
| Error Handling | Centralized Middleware |
| Security | Helmet, CORS & Rate Limiting |

---

# 🎨 Frontend Functionalities

| Functionality | Description |
|--------------|-------------|
| React Components | Modular UI |
| Axios Integration | Backend Communication |
| Authentication Pages | Login & Register |
| CRUD Dashboard | Manage Records |
| AI Interface | Generate AI Responses |
| Responsive Layout | Mobile Friendly |

---

# ⚡ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend |
| Vite | Build Tool |
| Node.js | Backend Runtime |
| Express.js | REST APIs |
| MongoDB Atlas | Database |
| Mongoose | ODM |
| JWT | Authentication |
| OpenAI SDK | AI Integration |
| Zod | Validation |
| Helmet | Security |
| dotenv | Environment Variables |

---

# 🛠 Built With

- React.js
- Vite
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- OpenAI SDK
- Axios
- Zod
- Helmet
- JavaScript (ES6+)

---

# 💡 Future Improvements

- 👥 Role-Based Authentication
- 📧 Email Verification
- 🔄 Refresh Tokens
- 📂 File Upload Support
- 📊 Admin Dashboard
- 🔔 Notifications
- 📜 AI History
- 🌙 Dark Mode
- 🐳 Docker Support
- ✅ Unit Testing

---

# 🌍 Deployment

### Frontend

- Vercel

### Backend

- Render

### Database

- MongoDB Atlas

---

# 📄 License

This project is licensed under the **MIT License**.

---

