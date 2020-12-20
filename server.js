// Dependencies
// =============================================================
const express = require("express");
const fs = require("fs");
const path = require("path");
var notes = require("./db/db.json");
// Sets up the Express App
// =============================================================
const app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes

// Basic route for HTML
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", function (req, res) {
  fs.sendFile(path.join(__dirname, "./public/index.html"));
});

//API ROUTES
app.get("/api/notes", function (req, res) {
  fs.readFile("./db/db.json", "utf8", function (err, data) {
    return res.json(JSON.parse(newNote));
  });
});

app.post("/api/notes", function (req, res) {
  var newNote = req.body;
  notes.push(newNote);
  fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
    if (err) throw err;
    return res.json(newNote);
  });
});

app.delete("/api/notes/:id", function (req, res) {
  notes.splice(req.params.id, 1);
  res.end();
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
