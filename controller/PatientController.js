const Patient = require('../models/ModelPaciente');

exports.getPatients = async (req, res)=>{
    try{
        const allPatients = await Patient.find({});
        return res.status(200).json(allPatients);
    }
    catch(err){
        return res.status(500).json({message: err});
    }
}

exports.getOnePatient = async(req, res)=>{
    try{
        const patient = await Patient.findById(req.params.id);
        if(!patient) return res.status(404).json({message: 'No se encontro el paciente'});
        
        return res.status(200).json(patient);
    }
    catch(err){
        return res.status(500).json({message: err});
    }
}

exports.createPatient = async(req, res)=>{
    try{
        const patient = new Patient(req.body);
        await patient.save();
        return res.status(200).json(patient);
    }
    catch(err){
        return res.status(500).json({message: err});
    }
}

exports.updatePatient = async(req, res)=>{
    try{
        const patient = await Patient.findById(req.params.id);
        if(!patient) return res.status(404).json({message: 'No se encontro el paciente'});
        await patient.save();
        return res.status(200).json(patient);
    }
    catch(err){
        return res.status(500).json({message: err});
    }
}

exports.deletePatient = async (req, res)=>{
    try{
        const patient = await Patient.findById(req.params.id);
        if(!patient) return res.status(404).json({message: 'No se encontro el paciente'});
        console.log(patient);
        await patient.deleteOne();
        return res.status(200).json({message: 'Paciente eliminado'});
    }
    catch(err){
        return res.status(500).json({message: err});
    }
}
