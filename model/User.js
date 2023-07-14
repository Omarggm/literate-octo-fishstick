const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate : {
        validator : function(email) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,7})?$/.test(email);
        },
        message : "Please enter a valid email"
    }
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = model("User", UserSchema);