const mongoose = require('mongoose');

const pacienteSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    birthdate: Date,
    gender: String,
    address: String,
    phone: String,
    email: String,
    medicalRecords: {
        type: String,
        default: 'Sin historial médico'
    },
    expediente:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MedicalRecord'
    }

    
})

const Patient = mongoose.model('Patient', pacienteSchema);

module.exports = Patient;

