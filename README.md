# Expiry Alert Inventory App (Backend)

This is the backend service for the Expiry Alert Inventory Management System. It handles QR-based product data submissions, stores them in MongoDB, and provides expiry alerts through REST APIs.

Built with **Node.js**, **Express**, and **MongoDB Atlas**, this API serves as the core engine for tracking and managing product shelf life.

---

## 🚀 Features

- 📥 **Receive product data** via QR code scans (POST API)
- 🧾 **Store data** in MongoDB Atlas using Mongoose
- ⚠️ **Detect expired or near-expiry products**
- 📤 **Provide all products** via GET API
- ❌ **Delete** specific or all inventory items
- 🔐 **Environment-safe config** via `.env` file

---

## 📦 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas (Cloud NoSQL)
- **ODM:** Mongoose
- **Config:** dotenv

---

## 📂 Folder Structure
expiry-app-backend/
├── models/
│ └── Product.js
├── routes/
│ └── productRoutes.js
├── server.js
├── .env.example
└── package.json

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

.env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri

🔧 Setup & Run Locally
# Clone the repo
git clone https://github.com/AJAY-M-S/expiry-app-backend.git
cd expiry-app-backend

# Install dependencies
npm install

# Add your MongoDB URI in .env
cp .env.example .env
# Edit .env to include your actual MONGO_URI

# Run the server
node server.js

📮 API Endpoints
| Method | Endpoint            | Description                    |
| ------ | ------------------- | ------------------------------ |
| POST   | `/api/products`     | Add new product (from QR code) |
| GET    | `/api/products`     | Get all products               |
| DELETE | `/api/products/:id` | Delete one product             |
| DELETE | `/api/products`     | Delete all products            |

📄 Example Product JSON
{
  "product_name": "aavin_milk",
  "product_id": 2342,
  "mfg_date": "2025-07-12",
  "exp_date": "2025-07-14"
}
🤝 Frontend Repo
🔗 [Frontend Repository (React)](https://github.com/AJAY-M-S/expiry-app-frontend)


