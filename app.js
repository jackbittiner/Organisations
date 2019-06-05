const express = require("express");

require("./database/db");

const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});