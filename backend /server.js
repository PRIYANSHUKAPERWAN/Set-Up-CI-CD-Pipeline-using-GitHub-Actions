const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve React build files
app.use(express.static(path.join(__dirname, "build")));

// Simple API route
app.get("/api", (req, res) => {
  res.json({ message: "✅ Backend running successfully on AWS EC2 via CI/CD!" });
});

// Handle React routing, return all requests to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
