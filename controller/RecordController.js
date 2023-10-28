const MedicalRecord = require('../models/ModelExpediente');

exports.getRecords = async (req, res)=>{
    try{
        const allRecords = await MedicalRecord.find();
        return res.status(200).json(allRecords);
    }
    catch(err){
        return res.status(500).json({message: err});
    }
}

exports.getOneRecord = async(req, res)=>{
    try{
        const record = await MedicalRecord.findById(req.params.id);
        if(!record) return res.status(404).json({message: 'No se encontro el expediente'});
        
        return res.status(200).json(record);
    }
    catch(err){
        return res.status(500).json({message: err});
    }
}

exports.createRecord = async(req, res)=>{
    try{
        const newRecord = {
            patient: req.body.patient,
            symptoms: req.body.symptoms,
            diagnosis: req.body.diagnosis,
            treatments: req.body.treatments,
            notes: req.body.notes
        }
        const record = new MedicalRecord(newRecord);
        await record.save();
        return res.status(200).json(record);
    }
    catch(err){
        return res.status(500).json({message: err});
    }
}

exports.updateRecord = async(req, res)=>{
    const upRecord = {
        patient: req.body.patient,
        symptoms: req.body.symptoms,
        diagnosis: req.body.diagnosis,
        treatments: req.body.treatments,
        notes: req.body.notes
    }

    try{
        const record = await MedicalRecord.findById(req.params.id);
        if(!record) return res.status(404).json({message: 'No se encontro el expediente'});
        record.set(upRecord);
        await record.save();
        return res.status(200).json(record);
    }
    catch(err){
        return res.status(500).json({message: err});
    }
}

exports.deleteRecord = async(req, res)=>{
    try{
        const record = await MedicalRecord.findById(req.params.id);
        if(!record) return res.status(404).json({message: 'No se encontro el expediente'});
        record.set(req.body);
        await record.deleteOne();
        return res.status(200).json(record);
    }
    catch(err){
        return res.status(500).json({message: err});
    }
}