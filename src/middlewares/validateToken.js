const validateToken = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (authorization !== 16 || typeof authorization !== 'string') {
        return res.status(401).json({ message: 'Token inválido' });
    }
    return next();
};

module.exports = validateToken;