# 📚 Minimal Library Management System

A fully functional minimal library management system built with **React, Redux Toolkit Query, TypeScript, Express.js, MongoDB, and Tailwind CSS**. Users can view, add, edit, delete, and borrow books with real-time UI updates and aggregated borrow summaries.

---

## 🔗 Live Links

- **Frontend Live**: [https://ws-lms-client.vercel.app](https://ws-lms-client.vercel.app)
- **Backend Live (API)**: [https://ws-lms-server.vercel.app/](https://ws-lms-server.vercel.app/)

---

## 🚀 Features

### ✅ Book Management (CRUD)

- Create, Read, Update, Delete books
- Auto-mark `available: false` when `copies === 0`
- Book schema includes:
  - `title`, `author`, `genre`, `isbn`, `description`, `copies`, `available`

### ✅ Borrow Book

- Borrow form with validation:
  - Cannot borrow more than available copies
  - Select due date
- After borrow, book `copies` updated & `available` auto-updated
- Success toast + redirect to summary page

### ✅ Borrow Summary (Aggregation)

- Aggregated borrow summary using MongoDB `$group` and `$lookup`
- Displays:
  - `Book Title`, `ISBN`, `Total Borrowed Count`

### ✅ Pagination & Sorting

- `/books?page=1&limit=9&sort=asc`
- Pagination buttons using ShadCN UI
- Real-time UI with polling & revalidation

---

## 💻 Tech Stack

| Layer      | Technology                                       |
| ---------- | ------------------------------------------------ |
| Frontend   | React 19, TypeScript, Vite, Tailwind CSS, ShadCN |
| State Mgmt | Redux Toolkit + RTK Query                        |
| Backend    | Express.js (modular MVC) , TypeScript            |
| Database   | MongoDB + Mongoose                               |
| Design     | Tailwind CSS + Responsive Layout                 |
| Deployment | Frontend (Vercel), Backend (Render)              |

---

## 📌 Bonus Features

✅ Optimistic UI Updates

✅ Toast Notifications (via sonner)

✅ Responsive Layout with Tailwind

✅ Pagination + Sorting

✅ Type-safe Forms with React Hook Form

✅ Error Handling with Custom Middlewar

## ✍️ Author

Wahed Nur
React & MERN Stack Developer
🔗 LinkedIn: <https://www.linkedin.com/in/wahednur>
📫 Email: <wahednur@gmail.com>
