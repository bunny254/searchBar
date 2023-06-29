const mongoose = require("mongoose");

const userSchema =new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name MUST be provided!"],
  },
  username:{
    type: String,
    required: [true, "Username MUST be provided!"],
  },
  email:{
    type: String,
    required: [true, "Email MUST be provided!"],
  },
  address:{
    street:{
        type:String
    },
    city:{
        type:String
    }
  },
  phone:{
    type: String,
    required: [true, "Phone name MUST be provided!"],
  },
  website:{
    type: String,
    required: [true, "Website name MUST be provided!"],
  },
});

module.exports = mongoose.model("User", userSchema);
