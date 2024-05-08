<template>
    <templateView>
        <template v-slot:slotPageComponet>
            <div class="content-wrapper">
    <section class="content-header">
      <h1>Mis Datos Personales</h1>
    </section>

    <section class="content">
      <div class="box">
        <div class="box-body">
          <form @submit.prevent="guardarDatos">
            <div class="row">
              <div class="col-md-6 col-xs-12">
                <h4>Nombre y Apellido</h4>
                <input type="text" class="input-lg" v-model="perfil.Nombre" >

                <h4>Email</h4>
                <input type="email" class="input-lg" v-model="perfil.email" placeholder="perfil.email" >
                <p v-if="errorEmail" class="alert alert-danger">El Email ya Existe.</p>

                <h4>Nueva Contraseña</h4>
                <input type="text" class="input-lg" v-model="perfil.ncontraseña" >
              </div>

              <div class="col-md-6 col-xs-12">
                <h4>Cedula</h4>
                <input type="text" class="input-lg" v-model="perfil.cedula" >

                <h4>Telefono</h4>
                <input type="text" class="input-lg" v-model="perfil.telefono" >

                <br><br><br>

                <button type="submit" class="btn btn-success">Guardar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
            
        </template>
    </templateView>
</template>

<script>
 import templateView from '@/views/Template.vue';
 import axios from 'axios';


 export default{
    name: 'DatosPersonalesView',
    components: {
        templateView
    },
    data(){
      return{
        perfil:{
        Nombre:'',
        email:'',
        ncontraseña:'',
        cedula:'',
        telefono:''
      }
      };
    },
    created() {
    axios.get("http://localhost:3000/api/usuarios/usuarios").then((result) => {
      console.log(result.data);
    });
  },
}
</script>