const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// NOTE: Routes go here
app.use("/api", require("./routes/apiRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
