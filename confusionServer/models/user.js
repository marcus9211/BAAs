const mongoose = require("mongoose");
schema = mongose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
User = new schema({
    admin: {
        type: Boolean,
        default: false
    }
});
User.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", User);