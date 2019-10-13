const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/teachingbuilding",{useNewUrlParser: true});

module.exports = mongoose;