# Prompts.md

# AI Microservice App – Prompts Documentation

This document contains the complete collection of structured prompts used during the development of the AI Microservice App. The project was built using the MERN Stack with React.js, Vite, Node.js, Express.js, MongoDB Atlas, Mongoose ODM, JWT Authentication, and OpenAI SDK. The prompts below describe the development process followed throughout the implementation of the application.

---

## 1. MERN Stack Project Initialization

Create a production-ready AI Microservice App using React.js, Vite, Node.js, Express.js, MongoDB Atlas, and Mongoose ODM. The application should follow a modular full-stack architecture with separate frontend and backend directories, maintain clean folder organization, support scalable development practices, enable secure API communication, and be deployment-ready for cloud platforms.

---

## 2. React Frontend Development

Develop a modern frontend using React.js and Vite. The application should use reusable React components, React Router for navigation, Axios for API communication, responsive layouts, loading indicators, user-friendly forms, validation messages, and a clean monochromatic dashboard interface suitable for enterprise applications.

---

## 3. Express Backend Configuration

Build a scalable backend server using Node.js and Express.js. Configure middleware for JSON parsing, request logging, security, CORS, and centralized error handling. The backend should expose RESTful APIs, maintain clean MVC architecture, and provide consistent JSON responses for every request.

---

## 4. MongoDB Atlas Integration

Configure MongoDB Atlas as the application's cloud database using Mongoose ODM. Store the database connection string securely through environment variables, establish reliable database connectivity, handle connection failures gracefully, and implement optimized schemas for persistent data storage.

---

## 5. User Authentication System

Implement a secure authentication system using JWT and bcryptjs. The application should allow users to register and log in securely, hash passwords before storing them, generate JSON Web Tokens after successful authentication, protect private routes through middleware, and verify user authorization before allowing access to secured resources.

---

## 6. AI Service Integration

Integrate the OpenAI SDK through a secure backend service without exposing API keys to the frontend. The application should receive prompts from authenticated users, communicate with the AI provider through protected backend APIs, sanitize generated responses, return structured JSON objects, and gracefully handle provider errors or unavailable services.

---

## 7. CRUD Operations

Implement complete Create, Read, Update, and Delete functionality for application resources. Every operation should validate incoming data, perform authorization checks, update MongoDB documents correctly, return meaningful HTTP responses, and prevent unauthorized users from modifying resources owned by others.

---

## 8. Validation and Error Handling

Implement centralized validation using Zod and global error-handling middleware. The application should prevent invalid form submissions, validate request payloads before processing, return structured validation errors, handle invalid routes, capture unexpected server exceptions, and maintain consistent API responses across the application.

---

## 9. Frontend API Integration

Connect the React frontend with the Express backend using Axios. The application should fetch data dynamically, submit forms asynchronously, automatically refresh the user interface after CRUD operations, display loading indicators during API requests, and show informative error messages whenever network failures occur.

---

## 10. Security Implementation

Secure the application by implementing Helmet, CORS, Express Rate Limiting, JWT verification, input sanitization, and secure environment variable management. The backend should prevent unauthorized access, reduce common web vulnerabilities, and protect sensitive credentials from being exposed in the client application.

---

## 11. Analytics Simulation

Implement a lightweight analytics simulation module that logs user interactions whenever important actions such as registration, login, CRUD operations, or AI requests are completed. The analytics system should remain modular and should not interfere with the primary application workflow.

---

## 12. Environment Variable Management

Configure the project using dotenv and maintain separate environment variables for frontend and backend applications. Sensitive information such as MongoDB connection strings, JWT secrets, OpenAI API keys, frontend URLs, and server ports should never be hardcoded and must be loaded securely from environment configuration files.

---

## 13. Testing Workflow

Test the application thoroughly by verifying authentication, CRUD functionality, MongoDB connectivity, AI integration, protected routes, validation rules, frontend-backend communication, loading states, and error handling. Ensure all APIs return the expected responses under both successful and failure scenarios.

---

## 14. Deployment Preparation

Prepare the application for production deployment by configuring environment variables, optimizing builds, enabling CORS for production domains, and deploying the frontend on Vercel and the backend on Render while using MongoDB Atlas as the cloud database service.

---

## 15. Future Scalability

Design the project with scalability in mind by planning support for role-based access control, email verification, password reset functionality, AI conversation history, file uploads, notification systems, Docker containerization, CI/CD pipelines, automated testing, and an administrative dashboard for future releases.