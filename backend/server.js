const express = require("express");
const mysql2 = require("mysql2");
const cors = require("cors");
const app = express();

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));

// LOGIN
app.post("/", (req, res) => {
  const email = req.body.email[0]; // Assuming email is an array, take the first element
  const password = req.body.password[0]; // Assuming password is an array, take the first element

  // Query the database for the user with the provided email
  connection.query(
    "SELECT * FROM login WHERE email = ?",
    [email],
    function (error, results, fields) {
      if (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
      } else if (results.length > 0) {
        // Directly compare the provided password with the password stored in the database
        if (results[0].password === password) {
          // Passwords match, login successful
          console.log("You are logged in"); // Log the message here
          res.status(200).send("Login successful");
        } else {
          // Passwords do not match, login failed
          res.status(401).send("Incorrect email or password");
        }
      } else {
        // No user found with the provided email, login failed
        res.status(401).send("Incorrect email or password");
      }
    }
  );
});

app.post("/signup", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(8081, () => {
  console.log("listening");
});
