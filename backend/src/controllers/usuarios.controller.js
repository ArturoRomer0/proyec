const {connection} = require('../config/database.js');


const getUsuariosInfo = async (req, res) => {
    try {
        const { userId } = req.params;

        // Consulta a la base de datos para obtener la información del usuario
        const [rows] = await connection.query('SELECT name, email, documento, telefono * FROM users WHERE id = ?', [userId]);

        // Verifica si se encontró un usuario con el ID proporcionado
        if (rows.length > 0) {
            // Devuelve los detalles del usuario
            return res.status(200).json(rows[0]);
        } else {
            // Si no se encontró ningún usuario con el ID proporcionado, devuelve un mensaje de error
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getUsuariosInfo
}

