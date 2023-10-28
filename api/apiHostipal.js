exports.getExpedientes = async (token) => {
    try{
        const response = await fetch('http://localhost:3000/hospital/allRecord',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
        if(!response.ok){
            throw new Error('Error al obtener los expedientes')
        }
        return await response.json() 
    }
    catch(error){
        console.log(error)
    }

}

exports.getPatients = async (token) => {
    try{
        const response = await fetch('http://localhost:3000/hospital/allPatient',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        
        });
        if(!response.ok){
            throw new Error('Error al obtener los pacientes')
        }
        return await response.json()
    }
    catch(error){
        console.log(error)
    }
}