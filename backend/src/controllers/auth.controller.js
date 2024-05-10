const {connection} = require('../config/database.js');
const {encriptar, desencriptar} = require('../config/functionGloblal.js');

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const passwordEncriptada = encriptar(password);
        console.log(passwordEncriptada);

        const [rows] = await connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, passwordEncriptada]);
        if (rows.length > 0) {
            return res.status(200).json(rows[0]);
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = { 
    login
}

