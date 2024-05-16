const mongoose = require("mongoose");
const { DB_URL } = require("./environments");

// const URL='mongodb+srv://22sanjeevrai22:vervain1628@cluster0.hfcrshp.mongodb.net/ecommercedb2?retryWrites=true&w=majority'

function connectToDB() {
  mongoose.set("strictQuery", true);
  return new Promise((resolve, reject) => {
    mongoose.connect(DB_URL, (err) => {
      if (err) {
        reject(err);
      }
      resolve("Database Connected Successfully");
    });
  });
}

module.exports = connectToDB;
