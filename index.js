const express = require("express");
const notes = require("./data/data");
const app = express();
const dotenv = require("dotenv");
const connectDB =require("./config/db");
const userRoutes=require("./routes/userRouter");
const noteRoutes=require("./routes/noteRouter")
const path=require("path");
dotenv.config();
connectDB();
app.use(express.json());


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER GOOD AT ${PORT}`);
});

app.use("/api/users",userRoutes);
app.use("/api/notes",noteRoutes);




app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});
