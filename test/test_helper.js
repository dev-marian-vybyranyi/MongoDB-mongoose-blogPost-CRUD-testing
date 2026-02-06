const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/users_test");

mongoose.connection
  .once("open", () => {
    console.log("Connected to MongoDB");
  })
  .on("error", (error) => {
    console.log("Error connecting to MongoDB:", error);
  });

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
});
