# 📍 Track Your Own Location

A simple and intuitive **real-time location tracking web application** built with **Node.js**, **Express**, **EJS**, and **WebSockets**.

This project lets users **share and display their current location** dynamically in the browser. It’s ideal for learning real-time communication, geolocation features, and how location data can be broadcast to clients.

---

## 🚀 Features

✔ Tracks user location using the **Geolocation API**  
✔ Real-time communication between clients and server  
✔ Simple interface using **EJS templates**  
✔ Works on desktop and mobile browsers  
✔ Lightweight and easy to extend

---

## 🧱 Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | Backend runtime |
| Express.js | Web server |
| EJS | View templates |
| WebSockets (e.g., Socket.io) | Real-time location updates |
| Browser Geolocation API | Location acquisition |

---

## 📁 Project Structure

Track-you-own-location/
├── views/
│ └── *.ejs
├── public/
│ └── css/js assets
├── app.js
├── package.json
├── .gitignore
└── README.md

---

## 🛠️ Getting Started

### 🧾 Prerequisites

✔ Node.js (>= v14)  
✔ npm (>= v6)

---

### ⚙️ Installation

1. **Clone the repository**

git clone https://github.com/NilotpalDas008/Track-you-own-location.git
Navigate into the project folder:
cd Track-you-own-location

Install dependencies:
npm install

Run the app:
npm start

Navigate into the project folder

cd Track-you-own-location


Install dependencies
npm install

Run the app
npm start

Open your browser and visit:
http://localhost:3000


🌍 How It Works
The app serves a webpage where the browser asks for location permission.

Once allowed, the app collects your GPS coordinates via the Geolocation API.

These coordinates are sent to the backend using WebSockets in real-time.

The server broadcasts this data to other connected clients.

Clients update their UI accordingly so locations can be displayed dynamically.

📌 Example Usage
You could use this project to:

✔ Build a live tracker for friends/family
✔ Prototype location-aware dashboards
✔ Combine with maps (Google Maps, Leaflet, etc.) for visualization

🤝 Contribution
Contributions of all kinds are welcome! 🚀

Fork the repository
Create a new branch
Make your changes
Submit a pull request

📜 License
This project is open source — feel free to use and modify!
