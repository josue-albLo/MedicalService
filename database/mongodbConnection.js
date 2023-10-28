const mongoose = require('mongoose');

const mongodbConnection = async () => {
    try {
        await mongoose.connect('mongodb://mongo/Hospital',
        { useNewUrlParser: true, useUnifiedTopology: true})
        .then((db) => console.log('Connected to MongoDB...', db.connection.host))
        .catch(err => console.error('Could not connect to MongoDB...', err));
    }
    catch(err){
        console.error(err);
    }
};

exports.mongodbConnection = mongodbConnection;