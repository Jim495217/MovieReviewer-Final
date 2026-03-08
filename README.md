🎬 MovieReviewer
📌 Project Description & Problem Statement

MovieReviewer is a Single Page Application (SPA) built with React and Vite that allows users to browse movies and rate them based on audience-focused categories.

Many movie platforms rely heavily on professional critic reviews. MovieReviewer focuses instead on audience-driven ratings, allowing users to evaluate films based on categories that everyday viewers care about.

Users can explore movies, view details, and rate films based on multiple attributes.

Rating Categories

🎭 Acting

🎬 Story

🎨 Visual Effects

🎵 Soundtrack

⭐ Overall Rating

🎯 Purpose of the Project

This project was developed to:

Practice building a modern React Single Page Application

Implement component-based architecture

Manage application state using React Context

Implement user authentication

Consume external APIs

Implement secure frontend practices

Deploy a production-ready web application

🛠 Technology Stack
Frontend

React

Vite

JavaScript (ES6+)

CSS

React Router DOM

Authentication & Security

Custom JWT-style authentication

Protected routes

Role-based access control

Basic XSS protection

Basic CSRF token protection

Secure token storage using sessionStorage

Development Tools

Node.js

npm

Git

GitHub

VS Code

Testing

Jest

React Testing Library

Deployment

Vercel (or Netlify if you used that)

⚙️ Setup & Installation

To run this project locally:

1️⃣ Clone the Repository
git clone https://github.com/YOUR_USERNAME/MovieReviewer.git
cd MovieReviewer
2️⃣ Install Dependencies
npm install
3️⃣ Start the Development Server
npm run dev

The app will run at:

http://localhost:5173
4️⃣ Build for Production
npm run build
🗺 Application Routes
Route	Description
/	Home page displaying popular movies
/movie/:id	Individual movie details page
/login	User login page
/register	Account creation page
/favorites	User saved movies
/admin	Admin dashboard (protected route)
🔐 Authentication System

The application implements a JWT-style authentication system using React Context.

Features

User registration

User login

Logout functionality

Protected routes

Role-based authorization (admin access)

Token expiration handling

Token Structure

A token is generated when a user logs in and contains:

{
  username,
  role,
  expiration
}

The token is stored securely using:

sessionStorage
Security Measures

The application includes several frontend security practices:

XSS Protection

User inputs are sanitized

React automatically escapes HTML content

CSRF Protection

A CSRF token is generated using crypto.randomUUID()

Token stored in sessionStorage

Secure Token Storage

Authentication tokens stored in sessionStorage

Tokens expire automatically

⭐ Rating System

The rating system allows users to evaluate movies based on multiple criteria.

Features

Category-based ratings

Overall rating calculation

Audience-focused feedback

Future versions may store ratings in a database.

🔌 API Integration
External API

The application integrates with:

The Movie Database (TMDB) API

Base URL:

https://api.themoviedb.org/3/

Example endpoint:

GET /movie/popular
Environment Variable

API keys are stored securely using a .env file.

Example:

VITE_API_KEY=your_api_key_here
📦 Key Dependencies
"dependencies": {
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x"
}
🧪 Testing

Testing is implemented using Jest and React Testing Library.

Covered Tests

Authentication context

Route rendering

Protected route behavior

Running Tests
npm run test

Tests verify:

Authentication provider renders correctly

Application routes load properly

Protected routes block unauthorized users

🚀 Deployment
🌐 Live Application

👉 https://your-deployment-url.vercel.app

(Replace with your real link)

Deployment Process (Vercel)

Push project to GitHub

Go to vercel.com

Import GitHub repository

Select framework preset: Vite

Build command:

npm run build

Output directory:

dist
🌎 Environment Configuration

Create a .env file in the root directory:

VITE_API_KEY=your_api_key_here

This prevents API keys from being exposed in source code.

📸 Screenshots

Create a /screenshots folder and add images of the application.

Example:

🏠 Home Page

screenshots/home.png

🎬 Movie Details

screenshots/movie-details.png

🔐 Login Page

screenshots/login.png

🐛 Known Issues

Ratings currently do not persist after page refresh

Limited movie filtering options

Mobile responsiveness could be improved

Favorites are stored locally rather than in a database

🔮 Future Enhancements

Backend integration with database

Persistent user accounts

Persistent movie ratings

Advanced filtering and sorting

Movie trailers integration

Dark mode toggle

Review commenting system

Rating analytics dashboard

📚 What I Learned

Through this project I learned:

React component architecture

State management using Context

Authentication implementation

Secure frontend practices

API integration using fetch

Routing with React Router

Testing with Jest and React Testing Library

Deployment using Vite and Vercel

✅ Final Submission Checklist

✔ All routes working
✔ Authentication implemented
✔ Protected routes working
✔ Build runs successfully (npm run build)
✔ Application deployed
✔ Security practices implemented

(Note: This README was generated with assistance from AI tools but reflects the project's actual implementation and future goals.)
