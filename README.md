# Mucyo — Personal Portfolio with Secure Admin Dashboard & MySQL Backend

A full-stack React & Node.js portfolio for **Mucyo**, Software Development student at **Lycée de Muhura, Rwanda**, featuring a secure Admin Dashboard, MySQL database integration, JWT authentication in HttpOnly cookies, and dynamic content management.

## 🚀 Features

- **Secure Admin Authentication:** JWT in secure HttpOnly cookies, bcrypt password hashing, login rate protection, and secure logout.
- **Admin Dashboard:** Full CRUD management for Projects, Skills, Education, and Profile settings with real-time updates.
- **MySQL 8 Database:** Robust schema with tables for admins, profile, projects, skills, and education. Parameterized queries to prevent SQL injection.
- **Public Portfolio Integration:** Reads live portfolio content from the MySQL backend while remaining fully accessible to public visitors without an account.
- **Modern Frontend:** React 18, Vite 5, Framer Motion animations, responsive layout, and accessibility features.

## 🗄️ Tech Stack

- **Frontend:** React.js, Vite, Framer Motion, CSS Variables
- **Backend:** Node.js, Express.js, JWT, bcryptjs, cookie-parser, cors
- **Database:** MySQL 8 (`mysql2/promise`)

---

## ⚙️ Installation & Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- MySQL Server (v8+)

### 1. Database Setup
Ensure MySQL is running. Create a `.env` file inside the `server/` directory based on `server/.env.example`:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=mucyo_portfolio
JWT_SECRET=super_secure_jwt_secret_key_change_me_in_production_2026
ADMIN_USERNAME=mucyo answer
ADMIN_PASSWORD=MucyoAdmin2026!
FRONTEND_URL=http://localhost:5173
```

### 2. Backend Installation & Seeding
Navigate to the `server/` directory, install dependencies, and run the database seeder (this creates the database, schema tables, and initial admin account):

```bash
cd server
npm install
npm run seed
```

Start the backend server:
```bash
npm run dev
# or: npm start
```
The backend runs at `http://localhost:5000`.

### 3. Frontend Installation & Running
In the root project directory, install dependencies and start the Vite development server:

```bash
npm install
npm run dev
# or using node: node node_modules/vite/bin/vite.js
```
The frontend runs at `http://localhost:5173`.

---

## 🔐 Admin Access

- **Login URL:** `http://localhost:5173/admin/login`
- **Username:** `mucyo answer`
- **Password:** `MucyoAdmin2026!` (or as defined in `server/.env`)

From the Admin Dashboard (`/admin/dashboard`), you can:
- View statistics (total projects, skills, education)
- Add, edit, or delete projects (updates instantly on the public portfolio)
- Add, edit, or delete skills
- Manage education history
- Update profile details and contact info

---

## 🛠️ Development & Building

```bash
# Frontend Build
node node_modules/vite/bin/vite.js build

# Frontend Preview
node node_modules/vite/bin/vite.js preview
```

## 📦 Project Structure

```
├── server/
│   ├── .env.example
│   ├── db.js
│   ├── package.json
│   ├── schema.sql
│   ├── seed.js
│   ├── server.js
│   └── middleware/
│       └── auth.js
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── admin/ (AdminLogin.jsx, AdminDashboard.jsx)
│   │   ├── elearning/
│   │   └── ...
│   ├── data/
│   ├── hooks/
│   └── App.jsx
├── package.json
└── README.md
```
