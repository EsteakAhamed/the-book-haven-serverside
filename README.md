# 📚 The Book Haven - Server Side

Welcome to **The Book Haven** server-side API! This is a robust backend service built with Node.js and Express that powers the Book Haven web application, providing a comprehensive RESTful API for managing books, users, and orders.

## 🌐 Live URL
**Server API:** [https://the-book-haven-serverside.vercel.app/](https://the-book-haven-serverside.vercel.app/)

---

## ✨ Key Features

- 📖 **Complete Book Management System** - Create, read, update, and delete book listings with detailed information including title, author, genre, price, and availability status
- 🛡️ **Secure API with CORS Support** - Enhanced security with Cross-Origin Resource Sharing (CORS) and Helmet middleware to protect against common vulnerabilities
- 👥 **User Authentication & Management** - Manage user accounts, profiles, and authentication for personalized experiences and order tracking
- 🛒 **Order & Cart Management** - Full order processing system with cart functionality, order history, and status tracking for seamless shopping experience
- 💾 **MongoDB Database Integration** - Persistent data storage with MongoDB for reliable and scalable data management with full CRUD operations

---

## 🚀 Technologies Used

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Security:** Helmet, CORS
- **Environment Management:** dotenv

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB connection string

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd the-book-haven-serverside
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file**
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Start the server**
   ```bash
   npm start
   ```

The server will run on `http://localhost:5000` by default.

---

## 📚 API Endpoints

### Books
- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get a specific book
- `POST /api/books` - Create a new book
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

### Users
- `POST /api/users` - Register a new user
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create a new order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id` - Update order status

---

## 🔧 Configuration

All configuration is managed through environment variables in the `.env` file:

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `MONGODB_URI` | MongoDB connection string |

---

## 📝 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Estek Ahamed**

---

## 📞 Support

For issues, questions, or suggestions, please open an issue in the repository or contact the development team.

---

**Happy Reading! 📖** - The Book Haven Team
