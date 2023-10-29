const express = require("express"); //importing express from third party      npm express

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/todos", function (req, res) {
  let todos = ["react", "html", "css", "js", "express"];
  res.send(todos);
});

app.get("/api/dashboard", function (req, res) {
  let loggedIn = false;

  if (!loggedIn) {
    res.status(401).send({
      msg: "unauthenticated",
    });
  }

  let data = {
    total: 100,
    completed: 20,
  };

  res.send(data);
});

app.listen(8001, () => {
  console.log("Server started..");
});
