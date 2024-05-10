<template>
    <templateView>
        <template v-slot:slotPageComponet>
            <div class="content-wrapper">
    <h1>Horarios</h1>
    <div v-if="registros.length > 0">
      <div v-for="registro in registros" :key="registro.id">
        <div class="row">
                    <div class="col-md-2">
                        Desde<input type="time" class="form-control" name="hora_inicio" v-model="registro.hora_inicio">
                    </div>

                    <div class="col-md-2">
                        Hasta<input type="time" class="form-control" name="hora_fin" v-model="registro.hora_fin">
                    </div>

                    <br>
                    
        </div>
      </div>
    </div>

    <div v-else>
      <p>No hay registros disponibles.</p>
    </div>
  </div>
</template>
</templateView>
  </template>
  
  <script>
  import templateView from '@/views/Template.vue';
  import axios from 'axios';

  export default {
    name : "Horario",
  components: {
    templateView
  },
    data() {
      return {
        registros: []
      };
    },
    created() {
      // Llama al método para obtener la información de la tabla cuando se crea el componente
      this.obtInfoHor();
    },
    methods: {
      async obtInfoHor() {
        try {
          // Realiza una solicitud GET al backend para obtener la información de la tabla
          const respuesta = await axios.get('http://localhost:3000/api/usuarios/obtInfo');
          // Asigna los registros obtenidos al arreglo de registros
          this.registros = respuesta.data;
        } catch (error) {
          console.error('Error al obtener información de la tabla:', error);
        }
      },
        async cambioHorario(registros) {
    try {
        const respuesta = await axios.post('http://localhost:3000/api/usuarios/guarCambio', { registros });
        console.log(respuesta.data);
    } catch (error) {
        console.error('Error al guardar cambios en el backend:', error);
    }
}
  }
}
  </script>
  
  <style scoped>
.hora-container {
  display: flex;
  align-items: center;
}

.hora-input {
  margin-right: 20px;
}
  
  </style>