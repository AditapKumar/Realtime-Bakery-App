# Realtime Bakery App

A modern, real-time bakery application built with Node.js, Express, MongoDB and EJS.

## 🚀 Features

- Real-time order management
- Interactive menu system
- User authentication
- Responsive design
- RESTful API

## 📁 Project Structure

```
realtime-bakery-app/
├── server.js              # Main application entry point
├── package.json           # Project dependencies and scripts
├── env.example            # Environment variables template
├── routes/                # Route definitions
│   ├── api.js            # API endpoints
│   └── web.js            # Web page routes
├── app/                   # Application logic
│   ├── config/           # Configuration files
│   ├── http/             # HTTP middleware
│   └── models/           # Data models
├── resources/             # Application resources
│   ├── views/            # EJS templates
│   ├── js/               # Server-side JavaScript
│   └── scss/             # SCSS source files
└── public/                # Static assets
    ├── css/               # Compiled CSS
    └── js/                # Client-side JavaScript
```

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `env.example` to `.env` and configure your environment variables
4. Start the development server:
   ```bash
   npm run dev
   ```

## 📝 Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests

## 🌐 Environment Variables

Create a `.env` file based on `env.example`:

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
- `MONGODB_URI` - MongoDB connection string
- `SESSION_SECRET` - Session encryption key

## 🔧 Technologies Used

- **Backend**: Node.js, Express.js
- **Template Engine**: EJS
- **Database**: MongoDB with Mongoose
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: SCSS
- **Development**: Nodemon

## 📱 API Endpoints

- `GET /api/health` - Health check
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create new order
- `GET /api/products` - Get all products

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.
