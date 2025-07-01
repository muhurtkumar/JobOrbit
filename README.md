
# JobOrbit

**JobOrbit** is a modern and comprehensive job portal platform designed to connect job seekers with employers efficiently. Built using the **MERN stack** (MongoDB, Express.js, React, Node.js), and enhanced with **Clerk** for authentication, **Cloudinary** for media management, and **Sentry** for error tracking, JobOrbit delivers a seamless experience for job seekers and recruiters alike.

---

## 📑 Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Usage](#usage)
- [Live Demo](#live-demo)

---

## 🚀 Project Description

JobOrbit aims to simplify the job search process for candidates and streamline job posting for companies. It's a full-stack application leveraging the power of JavaScript across the entire stack, offering a robust and scalable solution for job recruitment — with built-in security, media handling, and real-time error tracking.

---

## ✨ Features

- 🔍 **Job Search and Application**  
  Browse available job listings and apply directly through the platform.

- 🏢 **Job Posting and Management**  
  Employers can post new job openings, manage listings, and track applications.

- 🔐 **Secure User Authentication**  
  Seamlessly handled via Clerk for login, signup, user profiles, and webhooks.

- ☁️ **Media Management**  
  Upload and manage resumes, company logos, and other media via Cloudinary.

- 🐞 **Real-Time Error Tracking**  
  Monitor and debug errors in real-time using Sentry.

- 📱 **Responsive Design**  
  A mobile-friendly and adaptive UI for all screen sizes.

- 🧠 **Efficient Data Handling**  
  Powered by MongoDB for robust and scalable database operations.

---

## 🧰 Technologies Used

| Technology     | Purpose                               |
|----------------|----------------------------------------|
| **MongoDB**    | NoSQL database for storing data        |
| **Express.js** | Backend framework with Node.js         |
| **React**      | Frontend library for dynamic UIs       |
| **Node.js**    | Server-side JavaScript runtime         |
| **Clerk**      | Authentication and identity management |
| **Cloudinary** | Media (image/video) storage and CDN    |
| **Sentry**     | Error monitoring and performance logs  |

---

## 🛠 Getting Started

Follow these instructions to get the project running locally.

---

### ✅ Prerequisites

Ensure the following tools are installed:

- [Node.js (LTS)](https://nodejs.org/)
- npm or Yarn
- [MongoDB](https://www.mongodb.com/) (Local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Clerk](https://clerk.com/) Account
- [Cloudinary](https://cloudinary.com/) Account
- [Sentry](https://sentry.io/) Account *(optional but recommended)*

---

### 📦 Installation

Clone the repository:

```bash
git clone https://github.com/muhurtkumar/JobOrbit.git
cd JobOrbit
```

Install backend dependencies:

```bash
cd server
npm install
# or yarn install
```

Install frontend dependencies:

```bash
cd ../client
npm install
# or yarn install
```

---

### 🔐 Environment Variables

#### `server/.env`

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# JWT (optional, if used)
JWT_SECRET=your_jwt_secret_key

# Clerk
CLERK_SECRET_KEY=sk_your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=pk_your_clerk_publishable_key
CLERK_WEBHOOK_SECRET=whsec_your_clerk_webhook_secret

# Cloudinary
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_api_secret

# Optional
PORT=5000
```

#### `client/.env`

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000/api
```

> Replace the placeholders with your actual credentials from each provider.

---

### ▶️ Usage

Start the backend server:

```bash
cd server
npm start
# or yarn start
```

Backend runs at: [http://localhost:5000](http://localhost:5000)

Start the frontend client:

```bash
cd ../client
npm start
# or yarn start
```

Frontend opens at: [http://localhost:3000](http://localhost:3000)

---

## 🌍 Live Demo

Explore the deployed version of **JobOrbit**:

🔗 [https://job-orbit-client.vercel.app/](https://job-orbit-client.vercel.app/)

