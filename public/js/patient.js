function cancelEvent(){
    document.querySelector('#name').value = '';
    document.querySelector('#birthdate').value = '';
    document.querySelector('#gender').value = '';
    document.querySelector('#address').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#medicalRecords').value = '';
    const btn = document.querySelector('#btn');
    btn.innerHTML = 'Guardar';
    btn.onclick = function(){
        create();
    }
}

async function create (){
    console.log('create patient');
    const name = document.querySelector('#name').value;
    const birthdate = document.querySelector('#birthdate').value;
    const gender = document.querySelector('#gender').value;
    const address = document.querySelector('#address').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;
    const medicalRecords = document.querySelector('#medicalRecords').value;

    const data = {
        name,
        birthdate,
        gender,
        address,
        phone,
        email,
        medicalRecords
    }
    console.log(data);
    try{
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:3000/hospital/createPatient',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
        
        .then(res => res.json())
        .then(data => {
            console.log(data);
            window.location.reload();
        })
        .catch(err => console.log(err));
    }
    catch (err){
        console.log(err);
    }
}

async function deletePatient(id){
    console.log('delete patient');
    try{
        const token = localStorage.getItem('token');
        const res = await fetch(`http://localhost:3000/hospital/deletePatient/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
        }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            window.location.reload();
        })
        .catch(err => console.log(err));
    }
    catch (err){
        console.log(err);
    }
}

async function editPatient(id){
    try{
        const token = localStorage.getItem('token');
        const res = await fetch(`http://localhost:3000/hospital/patient/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token 
            }
        })
        .then(res => res.json())
        .then(data =>{
            const formatingDate = data.birthdate.split('T')[0];
            document.querySelector('#name').value = data.name;
            document.querySelector('#birthdate').value = formatingDate;
            document.querySelector('#gender').value = data.gender;
            document.querySelector('#address').value = data.address;
            document.querySelector('#phone').value = data.phone;
            document.querySelector('#email').value = data.email;
            document.querySelector('#medicalRecords').value = data.medicalRecords;

            const btnCancel = document.querySelector('#btn-cancel');
            btnCancel.innerHTML = 'Cancelar';
            btnCancel.onclick = function(){
                cancelEvent();
            }
            const btn = document.querySelector('#btn');
            btn.innerHTML = 'Actualizar';
            btn.onclick = function(){
                updatePatient(id);
            }
        })
    }
    catch (err){
        console.log(err);
    }
}

async function updatePatient(id){
    const name = document.querySelector('#name').value;
    const birthdate = document.querySelector('#birthdate').value;
    const gender = document.querySelector('#gender').value;
    const address = document.querySelector('#address').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;
    const medicalRecords = document.querySelector('#medicalRecords').value;

    const data = {
        name,
        birthdate,
        gender,
        address,
        phone,
        email,
        medicalRecords
    }

    try{
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:3000/hospital/updatePatient/${id}',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            window.location.reload();
        })
        .catch(err => console.log(err));
    }
    catch (err){
        console.log(err);
    }
}