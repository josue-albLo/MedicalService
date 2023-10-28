function inicio(){
    const token = localStorage.getItem('token');
    console.log(token);
    window.location.href = 'http://localhost:3000/app/inicio?token=' + token;
}

function pacientes(){
    const token = localStorage.getItem('token');
    console.log(token);
    window.location.href = 'http://localhost:3000/app/pacientes?token=' + token;
}

function expedientes(){
    const token = localStorage.getItem('token');
    console.log(token);
    window.location.href = 'http://localhost:3000/app/expedientes?token=' + token;
}