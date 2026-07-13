# 🛍️ ShopNest — MERN Stack E-Commerce Platform

ShopNest is a full-stack e-commerce web application built with the MERN stack (MongoDB, Express, React, Node.js). It includes product browsing, cart & checkout, OTP-based email verification, order tracking with email notifications, and a complete admin dashboard for managing products, orders, and users.

### 🔗 [Live Demo](https://shopnest-kwdv.onrender.com)

## ✨ Features

### Customer
- Browse and search products by category
- Product detail pages with stock status
- Shopping cart (persisted via Redux + localStorage)
- Checkout with Razorpay payment integration
- Order history and live order status tracking
- Email notifications for order confirmation and status updates (Pending → Shipped → Delivered)

### Authentication
- Register / Login with JWT-based auth
- OTP email verification required before login
- Resend OTP support
- Role-based access (user / admin)

### Admin
- Dashboard with revenue, order, product, and user analytics
- Add / edit / delete products with Cloudinary image uploads
- Manage orders and update shipment status (triggers customer email)
- User directory

## 🛠️ Tech Stack

**Frontend:** React, React Router, Redux Toolkit, Axios/Fetch
**Backend:** Node.js, Express, MongoDB (Mongoose)
**Auth:** JWT, bcrypt
**Email:** Nodemailer (Gmail SMTP)
**Payments:** Razorpay
**Image Storage:** Cloudinary

## 📁 Project Structure

```
ShopNest/
├── backend/
│   ├── config/          # DB and Cloudinary config
│   ├── controllers/     # Route logic
│   ├── middleware/      # Auth & admin guards
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express routes
│   ├── utils/           # Email utility
│   ├── seed.js          # Sample data seeder
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── admin/       # Admin panel pages
│   │   ├── components/  # Navbar, Footer, ProductCard
│   │   ├── context/     # AuthContext
│   │   ├── pages/       # Customer-facing pages
│   │   ├── redux/       # Cart state
│   │   └── styles/      # CSS
│   └── public/
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB Atlas account (or local MongoDB)
- Gmail account with an [App Password](https://myaccount.google.com/apppasswords) for sending emails
- Cloudinary account (for product image uploads)
- Razorpay account (for payments — test mode is fine for development)

### Installation

1. Clone the repo
   ```bash
   git clone https://github.com/yourusername/shopnest.git
   cd shopnest
   ```

2. Install dependencies
   ```bash
   npm install
   npm --prefix backend install
   npm --prefix frontend install
   ```

3. Set up environment variables

   Copy `.env.example` to `backend/.env` and fill in your own values:
   ```bash
   cp .env.example backend/.env
   ```
   ```env
   PORT=5000
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key

   EMAIL_USER=your_gmail_address@gmail.com
   EMAIL_PASS=your_gmail_app_password

   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret

   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

4. (Optional) Seed sample products and an admin user
   ```bash
   node backend/seed.js
   ```

5. Run the app (frontend + backend concurrently)
   ```bash
   npm run dev
   ```
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:5000](http://localhost:5000)

## 🔐 Auth Flow

1. User registers → account created (unverified) → OTP emailed
2. User enters OTP on `/verify-otp` → account verified → logged in
3. Login is blocked for unverified accounts and redirects to OTP verification

## 📦 Order Status Emails

Whenever an admin updates an order's status from the Admin Orders panel, the customer automatically receives an email reflecting the new status (Pending, Shipped, or Delivered).


## 📄 License

This project is for educational/portfolio purposes.

## 👤 Author

**Yash Dharme**
