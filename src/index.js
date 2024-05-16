//Oh no
require("dotenv").config();
const { mongoose } = require("mongoose");
const connectToDB = require("./config/database");
const { PORT } = require("./config/environments");
const app = require("./config/express");

connectToDB()
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Congratulations! App running at PORT ${PORT}`)
    )
  )
  .catch((err) => console.log("You have an error", err));
