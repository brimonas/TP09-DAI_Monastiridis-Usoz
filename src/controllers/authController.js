import authService from "../services/authService.js";

const login = async (req, res) => {

    try {

        const { email } = req.body;

        const usuario =
            await authService.getUserByEmail(email);

        res.json(usuario);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

export default {
    login
};