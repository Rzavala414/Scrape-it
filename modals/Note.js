const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let noteSchema = new Schema({
    _headlineId: {
        type: Schema.Types.ObjectId,
        ref:"Headline"
    },
    date: {
        type: Date,
        default: Date.now
    },
    noteText: {
        type: String
    }

})

let Note = mongoose.model("Note", noteSchema)

module.export = Note;