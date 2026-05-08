const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
    name: String,
    fatherName: String,
    email: String,
    phone: String,
    city: String,
    disease: String,
    gender: String,
    dob: String,
    organs: [String],
    status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Application", ApplicationSchema);