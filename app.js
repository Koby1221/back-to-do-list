
const express = require("express");
const http = require("http");
const { list_controller } = require("./controllers/list_controller");
const { user_controller } = require("./controllers/user_controller");
const { postgresql } = require("./db/postgeesql");
const port = "3060";
const app = express();
const server = http.createServer(app);
app.use(express.json());
app.all("*", function (req, res, next) {
  if (!req.get("Origin")) return next();
  res.set("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.set(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type,auth-token,x-api-key"
  );next();});
list_controller(app);
user_controller(app)
server.listen(port,()=>{
console.log("server running");
});