const mongoose = require('mongoose');
const { Schema } = mongoose;

const Artist = new Schema({
    pbId: String,
    name: String,
    albumsIds: Array,
    dateAdded: { type: Date, default: Date.now },
    dateEdited: { type: Date, default: Date.now },
});

Artist.options.toJSON = Artist.options.toJSON || {};
Artist.options.toJSON.transform = (doc, ret) => {
    delete ret._id;
    delete ret.__v;
    delete ret.dateAdded;
    delete ret.dateEdited;
};

module.exports = mongoose.model('Artist', Artist);
