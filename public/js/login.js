async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
        email,
        password
    }

    try {
        const response = await fetch('http://localhost:3000/hospital/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);

            // Redirigir al usuario a 'app/inicio' incluyendo el token en el encabezado
            window.location.href = `http://localhost:3000/app/inicio?token=${data.token}`;
        } else {
            const error = document.getElementById('msg-error');
            error.innerHTML = 'Correo o contraseña incorrectos';
        }
    } catch (err) {
        const error = document.getElementById('msg-error');
        error.innerHTML = 'Correo o contraseña incorrectos';
        console.log(err);
    }
}
