const db = require("mongoose");

const UserSchema = db.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
},{
    timestamps: true,
}
);

const User = db.model('User', UserSchema);

module.exports = User;
