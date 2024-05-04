<!-- eslint-disable vue/valid-v-bind -->
<template>
  <templateView>
    <template v-slot:slotPageComponet>
       <div class="container" >
      <h1 class="text-center">Seleccione cómo quiere entrar al sistema</h1>
      <div class="row">
        <session-card
          title="Secretaria"
          primary-color="rgb(255, 146, 219)"
          secondary-color="rgb(217, 123, 185)"
          icon="fa-solid fa-person-dress"
          :route="{ name: 'loginPersonalizado', params: { tipoUsuario: 'Secretaria' } }"
        />
        <session-card
          title="Doctor"
          primary-color="rgb(189, 189, 189)"
          secondary-color="rgb(161, 161, 161)"
          icon="fa-solid fa-user-doctor"
          :route="{ name: 'loginPersonalizado', params: { tipoUsuario: 'doctor' } }"
        />
        <session-card
          title="Paciente"
          primary-color="rgb(253, 157, 11)"
          secondary-color="rgb(227, 140, 9)"
          icon="fa-solid fa-user-group"
          :route="{ name: 'loginPersonalizado', params: { tipoUsuario: 'Paciente' } }"

        />
        <session-card
          title="Administrador"
          primary-color="rgb(232, 88, 53)"
          secondary-color="rgb(199, 74, 46)"
          icon="fa-solid fa-person"
          :route="{ name: 'loginPersonalizado', params: { tipoUsuario: 'Administrador' } }"
        />
      </div>
    </div>
    </template>
  </templateView>
</template>

<script>
// @ is an alias to /src
import templateView from '@/views/Template.vue';
import SessionCard from '@/components/SessionCard.vue';


export default {
  name: 'LoginView',
  components: {
    templateView,
    SessionCard
  },
  data() {
    return {
    }

  },
}

</script>

<style lang="scss" scoped>
  @import "@/assets/scss/style";
  .divider:after,
  .divider:before {
  content: "";
    flex: 1;
    height: 1px;
    background: #eee;
  }
</style>