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
                <input type="text" class="input-lg" v-model="Nombre" >

                <h4>Email</h4>
                <input type="email" class="input-lg" v-model="email" >
                <p v-if="errorEmail" class="alert alert-danger">El Email ya Existe.</p>

                <h4>Nueva Contraseña</h4>
                <input type="text" class="input-lg" v-model="ncontraseña" >
              </div>

              <div class="col-md-6 col-xs-12">
                <h4>Cedula</h4>
                <input type="text" class="input-lg" v-model="cedula" >

                <h4>Telefono</h4>
                <input type="text" class="input-lg" v-model="telefono" >

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
 export default{
    name: 'DatosPersonalesView',
    components: {
        templateView
    }
}
</script>