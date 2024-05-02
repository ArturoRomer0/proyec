<template>
    <div>
      <h1 class="text-center">Seleccione cómo quiere entrar al sistema</h1>
      <div class="row">
        <div class="col">
          <card-sesion title="Secretaria" primary-color="rgb(255, 146, 219)" secondary-color="rgb(217, 123, 185)" icon="fa-solid fa-person-dress" :route="secretariaRoute"></card-sesion>
        </div>
        <div class="col">
          <card-sesion title="Doctor" primary-color="rgb(189, 189, 189)" secondary-color="rgb(161, 161, 161)" icon="fa-solid fa-user-doctor" :route="doctorRoute"></card-sesion>
        </div>
        <div class="col">
          <card-sesion title="Paciente" primary-color="rgb(253, 157, 11)" secondary-color="rgb(227, 140, 9)" icon="fa-solid fa-user-group" :route="pacienteRoute"></card-sesion>
        </div>
        <div class="col">
          <card-sesion title="Administrador" primary-color="rgb(232, 88, 53)" secondary-color="rgb(199, 74, 46)" icon="fa-solid fa-person" :route="administradorRoute"></card-sesion>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        secretariaRoute: "{{ route('login', 'secretaria') }}",
        doctorRoute: "{{ route('login', 'doctor') }}",
        pacienteRoute: "{{ route('login', 'paciente') }}",
        administradorRoute: "{{ route('login', 'administrador') }}"
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos del componente */
  </style>
  