const {connection} = require('../config/database.js');


const getUsuarios = async (req, res) => {
    try {
       const [rows] = await connection.query('SELECT * FROM users');
       return res.status(200).json(rows);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getUsuarios
}

