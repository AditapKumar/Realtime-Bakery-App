# Realtime Bakery App

A modern, real-time bakery application built with Node.js, Express, MongoDB, EJS, and Socket.IO. Features real-time order tracking, user authentication, and an admin panel for order management.

## 🚀 Features

- **Real-time Order Tracking**
- **User Authentication**
- **Shopping Cart**
- **Order Management**
- **Admin Panel**
- **Responsive Design**
- **MongoDB Integration**

## 📁 Project Structure

```
realtime-bakery-app/
├── server.js                    # Main application entry point
├── package.json                 # Project dependencies and scripts
├── menu.json                    # Bakery products data
├── routes/                      # Route definitions
│   ├── api.js                  # API endpoints (cart management)
│   └── web.js                  # Web page routes
├── app/                        # Application logic
│   ├── models/                 # Mongoose models
│   │   ├── user.js            # User model
│   │   └── order.js           # Order model
│   ├── http/                   # HTTP middleware and controllers
│   │   ├── controllers/       # Route controllers
│   │   │   ├── authController.js
│   │   │   ├── orderController.js
│   │   │   ├── homeController.js
│   │   │   └── customers/
│   │   │       └── cartController.js
│   │   │   └── admin/
│   │   │       └── orderController.js
│   │   └── middlewares/        # Custom middleware
│   │       ├── auth.js        # Authentication middleware
│   │       └── sessionConfig.js # Session configuration
├── resources/                   # Application resources
│   ├── views/                  # EJS templates
│   │   ├── layout.ejs         # Main layout
│   │   ├── home.ejs           # Homepage
│   │   ├── auth/              # Authentication views
│   │   ├── customers/         # Customer views
│   │   └── admin/             # Admin views
│   ├── js/                    # Client-side JavaScript
│   │   └── app.js            # Main client-side logic
│   └── css/                   # Stylesheets
│       └── app.css           # Main stylesheet
└── public/                     # Static assets
    └── dist/                  # Compiled assets
        ├── assets/            # Compiled JS/CSS
        └── img/               # Images and 3D models
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Realtime-Bakery-App
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   PORT=3000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/bakery-app
   SESSION_SECRET=your-secret-key-here-change-this-in-production
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Access the application**
   Open your browser and go to `http://localhost:3000`

## 📝 Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run build` - Build assets with Vite
- `npm run css:watch` - Watch CSS changes
- `npm test` - Run tests

## 🌐 API Endpoints

### Web Routes

- `GET /` - Homepage with menu
- `GET /cart` - Shopping cart
- `GET /orders` - User orders (authenticated)
- `GET /orders/:id` - Single order details
- `POST /orders` - Create new order
- `GET /login` - Login page
- `POST /login` - Login form submission
- `GET /register` - Registration page
- `POST /register` - Registration form submission
- `POST /logout` - Logout

### Admin Routes

- `GET /admin/orders` - Admin order management
- `GET /admin/orders/:id` - Admin single order view
- `POST /admin/orders/status` - Update order status

### API Routes

- `POST /api/update-cart` - Add item to cart
- `DELETE /api/remove-from-cart` - Remove item from cart

## 🔧 Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Template Engine**: EJS
- **Real-time**: Socket.IO
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS
- **Authentication**: bcryptjs
- **Development**: Nodemon, Vite

## 🎯 Key Features Explained

### Real-time Order Tracking

- Orders are tracked in real-time using Socket.IO
- Admin can update order status and customers get live notifications
- Order statuses: order_placed → confirmed → preparing → out_for_delivery → delivered

### Shopping Cart

- Session-based cart that persists during user session
- Add/remove items with real-time counter updates
- Cart data is stored in MongoDB when order is placed

### User Authentication

- Secure password hashing with bcryptjs
- Session-based authentication
- Protected routes for orders and admin panel

### Admin Panel

- Real-time order management
- Status updates with live notifications
- Complete order details and customer information

## 🚀 Getting Started

1. **Register a new account** or use existing credentials
2. **Browse the menu** and add items to cart
3. **Place an order** with delivery details
4. **Track your order** in real-time
5. **Admin panel** for order management (accessible to all logged-in users)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🎉 About

A complete real-time bakery application with modern web technologies, featuring live order tracking, user authentication, and an intuitive admin interface. Perfect for learning full-stack development with real-time features!
