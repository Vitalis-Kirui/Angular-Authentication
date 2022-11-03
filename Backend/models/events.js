const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({

    name : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    }

},
{
    timestamps : true
}
);

module.exports = mongoose.model('event', eventSchema , 'events')