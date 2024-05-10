<template>
    <templateView>
      <template v-slot:slotPageComponet>
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 class="display-4 fw-normal">Citas</h1>
        </div>
        <div class="appointment-container">
          <!-- Formulario para reservar citas -->
          <form @submit.prevent="addAppointment">
            <div class="form-group">
              <label for="name">Nombre:</label>
              <input type="text" id="name" v-model="user.name" required class="form-control">
            </div>
            <div class="form-group">
              <label for="date">Fecha:</label>
              <input type="date" id="date" v-model="user.date" required class="form-control">
            </div>
            <div class="form-group">
              <label for="time">Hora:</label>
              <input type="time" id="time" v-model="user.time" required class="form-control">
            </div>
            <div class="form-group">
              <label for="reason">Motivo:</label>
              <input type="text" id="reason" v-model="user.reason" required class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Reservar Cita</button>
            <button type="button" @click="getAppointmentsHistory" class="btn btn-secondary ml-3">Mostrar Historial</button>
          </form>
  
          <!-- Lista de citas reservadas -->
          <div class="appointments-list">
            <h3>Citas Reservadas</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Motivo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(appointment, index) in appointments" :key="index">
                  <td>{{ appointment.name }}</td>
                  <td>{{ appointment.date }}</td>
                  <td>{{ appointment.time }}</td>
                  <td>{{ appointment.reason }}</td>
                  <td>
                    <button @click="deleteAppointment(index)" class="btn btn-danger btn-sm">Eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <!-- Historial de citas -->
          <div class="appointments-history mt-5">
            <h3>Historial de Citas de {{ user.name }}</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Fecha Inicio</th>
                  <th>Fecha Final</th>
                  <th>ID Doctor</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(appointment, index) in appointmentsHistory" :key="index">
                  <td>{{ appointment.fecha_inicio }}</td>
                  <td>{{ appointment.fecha_final }}</td>
                  <td>{{ appointment.id_doctor }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
    </templateView>
  </template>
  
  <script>
  import templateView from '@/views/Template.vue';
  import axios from 'axios';

export default {
  name: 'PaginaDashboard',
  components: {
    templateView
  },
  data() {
    return {
      user: {
        name: '',
        date: '',
        time: '',
        reason: ''
      },
      appointments: [],
      appointmentsHistory: []
    };
  },
  methods: {
    async addAppointment() {
      try {
        await axios.post('/ruta/reservarCita', this.user);
        alert('Cita reservada exitosamente');
        // Llamar a la función para actualizar la lista de citas
        this.getAppointments();
      } catch (error) {
        console.error('Error al reservar cita:', error);
        alert('Error al reservar cita');
      }
    },
    async getAppointments() {
      try {
        const respuesta = await axios.get('/ruta/citas');
        this.appointments = respuesta.data;
      } catch (error) {
        console.error('Error al obtener citas:', error);
      }
    },
    async deleteAppointment(index) {
      const confirmacion = confirm('¿Estás seguro de eliminar esta cita?');
      if (confirmacion) {
        try {
          await axios.delete(`/ruta/citas/${index}`);
          alert('Cita eliminada exitosamente');
          // Llamar a la función para actualizar la lista de citas
          this.getAppointments();
        } catch (error) {
          console.error('Error al eliminar cita:', error);
          alert('Error al eliminar cita');
        }
      }
    },
    async getAppointmentsHistory() {
      try {
        const respuesta = await axios.get('/ruta/historial');
        this.appointmentsHistory = respuesta.data;
      } catch (error) {
        console.error('Error al obtener historial de citas:', error);
      }
    }
  },
  created() {
    // Llamar a la función para obtener la lista de citas al cargar el componente
    this.getAppointments();
  }
};
  </script>
  
  <style scoped>
  .pricing-header {
    margin-top: 20px;
  }
  
  .appointment-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .btn {
    margin-top: 10px;
  }
  
  .appointments-list {
    margin-top: 30px;
  }
  
  .appointments-history {
    margin-top: 30px;
  }
  
  .table th, .table td {
    text-align: center;
  }
  
  .table {
    width: 100%;
    margin-top: 10px;
  }
  </style>