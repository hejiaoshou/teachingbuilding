const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/teachingbuilding");

module.exports = mongoose;