const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.images = require("./img.model");
db.profile = require("./profile.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;