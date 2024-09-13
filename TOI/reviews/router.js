const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  console.log("here");
  res.send("Hello there!");
});
router.post("/hello", (req, res) => {
  console.log("got it");
  res.send("POST request received");
});

router.route("/abcd").get((req, res) => {
  res.send("Get all users");
}).post((req,res)=>{
  res.send("Created a new user")
}).put((req,res)=>{
  res.send("user updations done")
})

module.exports = router;
