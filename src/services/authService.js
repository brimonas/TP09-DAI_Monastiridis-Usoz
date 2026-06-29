import pool from "../config/db.js";

const getUserByEmail = async (email) => {
    const result = await pool.query(
        "SELECT * FROM usuarios WHERE email = $1",
        [email]
    );

    return result.rows[0];
};

export default {
    getUserByEmail
};