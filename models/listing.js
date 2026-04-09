const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/a-frame-cabin-nestled-in-a-dense-forest-drhNiF9y8to",
        set: (v) => v === "" ? "https://unsplash.com/photos/a-frame-cabin-nestled-in-a-dense-forest-drhNiF9y8to" : v,
    },
    price: Number,
    location: String,
    country: String,
})

const Listing = Model('Listing', listingSchema)

module.exports = Listing;