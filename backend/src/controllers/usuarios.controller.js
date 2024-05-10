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
const obtenerDatosUsuario = (req, res) => {
    try {
        // Obtener los datos del usuario del objeto req.user
        const usuario = req.user;

        // Enviar los datos del usuario como respuesta
        res.status(200).json(usuario);
    } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor al obtener datos del usuario' });
    }
};

const actualizarDatos = async (req, res) => {
    try {
        const { nombre, email, contraseña, cedula, telefono } = req.body;

        // Verificar si el nuevo email ya existe en la base de datos
        const [existeUsuario] = await connection.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        if (existeUsuario.length > 0 && existeUsuario[0].id !== req.user.id) {
            // Si el email ya existe y no pertenece al usuario actual, devolver un error de conflicto
            return res.status(409).json({ message: 'El email ya está en uso por otro usuario.' });
        }

        // Actualizar los datos del usuario en la base de datos
        await connection.query('UPDATE usuarios SET nombre = ?, email = ?, contraseña = ?, cedula = ?, telefono = ? WHERE id = ?', [nombre, email, contraseña, cedula, telefono, req.user.id]);

        // Enviar una respuesta de éxito
        res.status(200).json({ message: 'Datos actualizados correctamente' });
    } catch (error) {
        console.error('Error al actualizar datos del usuario:', error);
        res.status(500).json({ message: 'Error interno del servidor al actualizar datos del usuario' });
    }

}
 const deleteUsuario = async (req, res) => {
    try {
        const {id} = req.params;
        await connection.query('DELETE FROM users WHERE id = ?', [id]);
        return res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
 }

// Controlador para obtener información de una tabla específica
const obtInfoHor = async (req, res) => {
    try {
        // Realizar la consulta a la base de datos para obtener la información de la tabla
        const [rows] = await connection.query('SELECT * FROM horarios');
        
        // Verificar si se encontraron registros
        if (rows.length > 0) {
            // Devolver los registros encontrados en formato JSON
            return res.status(200).json(rows);
        } else {
            // Devolver un mensaje si no se encontraron registros
            return res.status(404).json({ message: 'No se encontraron registros en la tabla' });
        }
    } catch (error) {
        // Manejar errores y devolver un mensaje de error
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}
const cambioHorario = async (req, res) => {
    try {
        const nuevosRegistros = req.body.registros;

        // Iterar sobre los nuevos registros y actualizar la base de datos
        for (const registro of nuevosRegistros) {
            const { id, hora_inicio, hora_fin } = registro;
            await connection.query('UPDATE horarios SET hora_inicio = ?, hora_fin = ? WHERE id = ?', [hora_inicio, hora_fin, id]);
        }

        // Enviar respuesta de éxito
        return res.status(200).json({ message: 'Cambios guardados exitosamente' });
    } catch (error) {
        console.error('Error al guardar cambios en los horarios:', error);
        return res.status(500).json({ message: 'Error interno del servidor al guardar cambios' });
    }
}

// Función para reservar una cita
const reservarCita = async (req, res) => {
    try {
        const { id_doctor, id_paciente, fecha_inicio, fecha_final } = req.body;

        // Insertar la cita en la base de datos
        const resultado = await connection.query('INSERT INTO citas (id-doctor,id-pac, fecha-i,fecha f) VALUES (?, ?, ?, ?)', [id_doctor,id_paciente, fecha_inicio, fecha_final]);

        // Enviar una respuesta de éxito
        res.status(200).json({ message: 'Cita reservada exitosamente' });
    } catch (error) {
        console.error('Error al reservar cita:', error);
        res.status(500).json({ message: 'Error interno del servidor al reservar cita' });
    }
};

// Función para obtener la lista de citas
const obtenerCitas = async (req, res) => {
    try {
        // Obtener todas las citas de la base de datos
        const citas = await connection.query('SELECT * FROM citas');

        // Enviar la lista de citas como respuesta
        res.status(200).json(citas);
    } catch (error) {
        console.error('Error al obtener citas:', error);
        res.status(500).json({ message: 'Error interno del servidor al obtener citas' });
    }
};

// Función para eliminar una cita
const eliminarCita = async (req, res) => {
    try {
        const index = req.params.index;

        // Eliminar la cita de la base de datos
        const resultado = await connection.query('DELETE FROM citas WHERE id = ?', [index]);

        // Enviar una respuesta de éxito
        res.status(200).json({ message: 'Cita eliminada exitosamente' });
    } catch (error) {
        console.error('Error al eliminar cita:', error);
        res.status(500).json({ message: 'Error interno del servidor al eliminar cita' });
    }
};

// Función para obtener el historial de citas
const obtenerHistorialCitas = async (req, res) => {
    try {
        // Obtener el historial de citas de la base de datos
        const historialCitas = await connection.query('SELECT * FROM citas');

        // Enviar el historial de citas como respuesta
        res.status(200).json(historialCitas);
    } catch (error) {
        console.error('Error al obtener historial de citas:', error);
        res.status(500).json({ message: 'Error interno del servidor al obtener historial de citas' });
    }
};

module.exports = {
    getUsuarios,
    deleteUsuario,
   obtInfoHor,
   cambioHorario,
   reservarCita,
    obtenerCitas,
    eliminarCita,
    obtenerHistorialCitas,
    actualizarDatos,
    obtenerDatosUsuario
}



