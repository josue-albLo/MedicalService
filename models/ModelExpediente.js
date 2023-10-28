const mongoose = require('mongoose');

const expedienteSchema = new mongoose.Schema({
    dateCreated:{
        type: Date,
        default: Date.now
    },
    symptoms: String,
    diagnosis: String,
    treatments: String,
    notes: String,
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
});

const MedicalRecord = mongoose.model('MedicalRecord', expedienteSchema);

module.exports = MedicalRecord;