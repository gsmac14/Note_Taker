// Dependencies
// =============================================================
var express = require("express");
var fs = require("fs")
var path = require("path");
var newNotes;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
  });

app.get("*", function(req, res) {
    fs.sendFile(path.join(__dirname, "./public/index.html"));
       
    });
    
    app.get("/api/notes", function(req, res) {
      fs.readFile("./db/db.json", "utf8", function(err, data) {
        if (err) throw err;
        res.json(newNote);
      
      });
    });

app.post("/api/notes", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newNote = req.body;
  console.log(newNote);
  notes.push(newNote);
  fs.writeFile("./db/db.json", JSON.stringify(notes), function(err){
    if (err) throw err;
    return res.json(data);
  });
});
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newCharacter);

//   characters.push(newCharacter);

//   db.json(newCharacter);
// });

// Starts the server to begin listening
// =============================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});