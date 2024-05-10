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
                                      <input type="text" class="input-lg" v-model="user.nombre" :placeholder="user.nombre">

                                      <h4>Email</h4>
                                      <input type="email" class="input-lg" v-model="user.email" :placeholder="user.email">
                                      <p v-if="errorEmail" class="alert alert-danger">El Email ya existe.</p>

                                      <h4>Nueva Contraseña</h4>
                                      <input type="password" class="input-lg" v-model="user.contraseña">

                                      <h4>Confirmar Contraseña</h4>
                                      <input type="password" class="input-lg" v-model="confirmarContraseña">
                                      <p v-if="errorContraseña" class="alert alert-danger">Las contraseñas no coinciden.</p>
                                  </div>

                                  <div class="col-md-6 col-xs-12">
                                      <h4>Cedula</h4>
                                      <input type="text" class="input-lg" v-model="user.cedula" :placeholder="user.cedula">

                                      <h4>Telefono</h4>
                                      <input type="text" class="input-lg" v-model="user.telefono" :placeholder="user.telefono">

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

export default {
  name: 'DatosPersonales',
  components: {
    templateView
  },
  data() {
      return {
          user: {
              nombre: '',
              email: '',
              contraseña: '',
              cedula: '',
              telefono: ''
          },
          confirmarContraseña: '',
          errorEmail: false,
          errorContraseña: false
      };
  },
  created() {
      // Obtener los datos del usuario al cargar el componente
      this.obtenerDatosUsuario();
      this.actualizarDatos();
  },
  methods: {
    async obtenerDatosUsuario() {
          try {
              // Realizar la solicitud para obtener los datos del usuario
              const respuesta = await axios.get('http://localhost:3000/api/usuarios/usuarioinfo');

              // Asignar los datos del usuario a la propiedad 'user'
              this.user = respuesta.data;
          } catch (error) {
              console.error('Error al obtener datos del usuario:', error);
          }
      },
      async actualizarDatos() {
          try {
              // Verificar si las contraseñas coinciden
              if (this.user.contraseña !== this.confirmarContraseña) {
                  this.errorContraseña = true;
                  return;
              } else {
                  this.errorContraseña = false;
              }
              // Realizar la solicitud para guardar los datos
              const respuesta = await axios.post('http://localhost:3000/api/usuarios/usuarioguar', this.user);
              // Mostrar mensaje de éxito
              alert('Datos actualizados correctamente');
              // Limpiar los campos y reiniciar los errores
              this.user.contraseña = '';
              this.confirmarContraseña = '';
              this.errorEmail = false;
              this.errorContraseña = false;
          } catch (error) {
              // Manejar el error
              if (error.response && error.response.status === 409) {
                  this.errorEmail = true;
              } else {
                  console.error('Error al actualizar datos:', error);
                  alert('Error al actualizar datos. Por favor, inténtalo de nuevo.');
              }
          }
      }
  }
}
</script>
