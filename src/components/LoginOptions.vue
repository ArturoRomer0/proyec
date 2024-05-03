<template>
    <div class="container" v-if='tipoLogin === "doctor"'>
      <h1 class="text-center">Seleccione cómo quiere entrar al sistema</h1>
      <div class="row">
        <session-card
          title="Secretaria"
          primary-color="rgb(255, 146, 219)"
          secondary-color="rgb(217, 123, 185)"
          icon="fa-solid fa-person-dress"
          route="/login/secretaria"
        />
        <session-card
          title="Doctor"
          primary-color="rgb(189, 189, 189)"
          secondary-color="rgb(161, 161, 161)"
          icon="fa-solid fa-user-doctor"
          route="/login/doctor"
        />
        <session-card
          title="Paciente"
          primary-color="rgb(253, 157, 11)"
          secondary-color="rgb(227, 140, 9)"
          icon="fa-solid fa-user-group"
          route="/login/paciente"
        />
        <session-card
          title="Administrador"
          primary-color="rgb(232, 88, 53)"
          secondary-color="rgb(199, 74, 46)"
          icon="fa-solid fa-person"
          route="/login/administrador"
        />
      </div>
    </div>
</template>

<script>
import SessionCard from './SessionCard.vue'

export default {
  components: {
    SessionCard
  },
  props: {
    tipoLogin: {
      type: String,
      required: true
    }
  }

}
</script>