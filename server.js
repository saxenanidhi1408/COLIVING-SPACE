const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ROOMS DATA
const rooms = [
  { type: "Single Room", city: "Kanpur", rent: 9000 },
  { type: "Single Room", city: "Delhi", rent: 8500 },
  { type: "Single Room", city: "Noida", rent: 9500 },

  { type: "Shared Room", city: "Ujjain", rent: 4000 },
  { type: "Shared Room", city: "Indore", rent: 6000 },

  { type: "PG", city: "Noida", rent: 5000 },
  { type: "PG", city: "Gurugram", rent: 7000 },
  { type: "PG", city: "Lucknow", rent: 6000 }
];

// ROOMMATES DATA
const roommates = [
  { name: "Riya", age: 22, job: "Student" },
  { name: "Aman", age: 25, job: "Engineer" },
  { name: "Neha", age: 24, job: "Designer" },
  { name: "Rahul", age: 26, job: "MBA Student" },
  { name: "Pooja", age: 23, job: "HR" },

  { name: "Ankit", age: 27, job: "Software Developer" },
  { name: "Simran", age: 22, job: "BCA Student" },
  { name: "Karan", age: 28, job: "Marketing Executive" },
  { name: "Priya", age: 24, job: "Content Writer" },
  { name: "Mohit", age: 26, job: "Data Analyst" }
];

// APIs
app.get("/api/rooms", (req, res) => {
  res.json(rooms);
});

app.get("/api/roommates", (req, res) => {
  res.json(roommates);
});

app.post("/api/contact", (req, res) => {
  res.json({ success: true });
});

// SERVER
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});