const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Admin = mongoose.model("Admin", adSchema);

module.exports = Admin;
