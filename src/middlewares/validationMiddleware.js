const validarRegistro = (req, res, next) => {

    const {
        nombre_usuario,
        nombre_completo,
        email,
        password
    } = req.body;

    if (
        !nombre_usuario ||
        !nombre_completo ||
        !email ||
        !password
    ) {
        return res.status(400).json({
            message: "Faltan campos obligatorios"
        });
    }

    next();
};

export default validarRegistro;