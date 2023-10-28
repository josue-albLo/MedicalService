const jwt = require('jsonwebtoken');

const secretKey = 'fal0khd8bgs5hdkja7';

exports.genToken = (email) => {
    const token = jwt.sign({ email }, secretKey, { expiresIn: '30m' });
    console.log('Token generado en jwtValidate.js: ', token);
    return token;
}


exports.validateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'No se ha enviado el token' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        req.user = decoded;
        next();
    })

}

exports.validateTokenUrl = (req, res, next) => {
    const token = req.query.token;
    if (!token) {
        return res.status(401).json({ message: 'No se ha enviado el token' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        req.user = decoded;
        next();
    })
}
