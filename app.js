const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Kubernetes Autoscaling!");
});

// Simulasi workload dengan menambahkan endpoint CPU-intensive
app.get("/cpu", (req, res) => {
  let count = 0;
  for (let i = 0; i < 1e7; i++) {
    count += i;
  }
  res.send(`CPU intensive operation done: ${count}`);
  console.log(`Console: CPU intensive operation done: ${count}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
