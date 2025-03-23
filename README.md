# 🚀 URL Shortener - Full Stack

A full-stack web application to shorten long URLs with a clean and interactive UI. Users can create custom aliases, manage shortened URLs, and track URL statistics.

---

## 📚 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Available Commands](#available-commands)
- [Configuration](#configuration)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

✅ Shorten any URL with a single click  
✅ Create custom aliases for URLs  
✅ Manage and delete shortened URLs  
✅ Redirect to original URLs via short aliases  
✅ Store URL data securely using MongoDB  
✅ RESTful API backend using Node.js/Express  
✅ Responsive UI built with React and Tailwind CSS  

---

## ⚡ Prerequisites

Before you begin, ensure that you have the following installed:

- [Node.js](https://nodejs.org/en/) (v18+ recommended)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  
- MongoDB installed and running locally or hosted

---

## 📥 Installation

1. Clone the repository:
```bash
git clone https://github.com/Aniketgawande1/url-shortener.git
```

2. Navigate to the project directory:
```bash
cd url-shortener
```

### Backend Setup

3. Navigate to the backend directory:
```bash
cd backend
```
4. Install dependencies:
```bash
npm install
```
5. Create a `.env` file in the `backend` directory and add the following:
```
MONGO_URI=mongodb://localhost:27017/url-shortener
PORT=5000
```
6. Start the backend server:
```bash
npm run start
```

### Frontend Setup

7. Navigate to the frontend directory:
```bash
cd ../frontend
```
8. Install dependencies:
```bash
npm install
```
9. Start the frontend application:
```bash
npm start
```

---

## ▶️ Usage

- Open the app in your browser at [http://localhost:3000](http://localhost:3000)
- Enter a long URL and optionally provide a custom alias
- Click on "Shorten" to generate a short URL

---

## 📡 API Endpoints

| Method   | Endpoint          | Description                   |
| -------- | ----------------- | ----------------------------- |
| `POST`   | `/api/url/shorten` | Shorten a new URL             |
| `GET`    | `/:alias`          | Redirect to original URL      |
| `GET`    | `/api/url/list`    | List all shortened URLs       |
| `DELETE` | `/api/url/:alias`  | Delete a shortened URL        |

---

## 📚 Available Commands

### Backend
```bash
# Run backend
npm run start
```

### Frontend
```bash
# Run frontend
npm start
```

---

## ⚙️ Configuration

### Backend
Set environment variables in the `.env` file:
```
MONGO_URI=mongodb://localhost:27017/url-shortener
PORT=5000
```

### Frontend
Configure the API base URL in `src/services/api.js`:
```javascript
const API_URL = 'http://localhost:5000/api/url';
```

---

## 🧩 Examples

### Shorten a URL
```bash
curl -X POST -H "Content-Type: application/json" \
-d '{"url": "https://www.google.com"}' \
http://localhost:5000/api/url/shorten
```

### Delete a shortened URL
```bash
curl -X DELETE http://localhost:5000/api/url/my-alias
```

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork the repository, create a feature branch, and submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

🎉 **Happy Coding!**

If you encounter any issues or have suggestions, feel free to open an issue on [GitHub](https://github.com/Aniketgawande1/url-shortener/issues).

