const User = require('../models/UserModel');
const generateTokenJWT = require('../auth/jwtValidate')

exports.createUser = async (req, res) => {
    try {
        const newUser = {
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }
        const user = new User(newUser);
        await user.save();
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(500).json({ message: err });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'No se encontro el usuario' });
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(500).json({ message: err });
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'No se encontro el usuario' });
        const token = generateTokenJWT.genToken(user.email);
        return res.status(200).json(user, token);
    }
    catch (err) {
        return res.status(500).json({ message: err });
    }
}

exports.login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email, password);
    try {
        // Buscar al usuario en la base de datos
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(404).json({ message: 'No se encontró el usuario' });
        }

        // Generar el token solo si las credenciales son correctas
        const token = generateTokenJWT.genToken(email);
        return res.status(200).json({ token });
    } catch (err) {
        return res.status(500).json({ message: 'Error en el servidor', err: err });
    }
};

