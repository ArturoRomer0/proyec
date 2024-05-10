<template>
  <templateView>
    <template v-slot:slotPageComponet>
      <div class="background">
        <div class="header">
          <h1 class="big-text">My</h1>
          <h1 class="big-text">Consu</h1>
          <h1 class="big-text1">Clinica Norte</h1>
        </div>
        <div class="info-table">
          <table>
            <thead>
              <tr>
                <th colspan="2">Bienvenidos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Días</td>
                <td>Lunes - Viernes</td>
              </tr>
              <tr>
                <td>Horarios</td>
                <td>
                  Desde: 8:00<br>
                  Hasta: 21:00
                </td>
              </tr>
              <tr>
                <td>Dirección</td>
                <td>Primer andador de la 90ta Pte. número 250 clínica norte</td>
              </tr>
              <tr>
                <td>Contactos</td>
                <td>
                  Teléfono: 2211334411<br>
                  Correo: clinica@gmail.com
                </td>
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

export default {
  name: 'homeView',
  components: {
    templateView,
  },
}
</script>

<style scoped>
.background {
  width: 100%;
  min-height: 100vh;
  background: url('@/assets/Home.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 20; /* Eliminamos el padding para que la imagen cubra todo el fondo */
  box-sizing: border-box;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 60vh; /* Aumentamos la altura del header */
  margin-bottom: 20px; /* Ajustamos el espacio inferior */
  position: relative;
  padding: 90px; /* Añadimos padding interno para bajar todo el contenido */
}

.big-text {
  font-weight: bold;
  color: #000;
  font-size: 100px;
  margin: -30px 0 0 0; /* Ajustamos el margen superior para bajar el texto */
  transition: transform 0.5s ease;
}

.big-text1 {
  font-size: 30px;
  color: cadetblue;
  font-weight: bold;
  margin: 20px 0 0 0; /* Ajustamos el margen superior para bajar el texto */
  transition: transform 0.5s ease;
}

.big-text2 {
  font-size: 48px;
  font-weight: bold;
  color: #ffffff;
  margin: 20px 0 0 0;
}

.big-text:hover,
.big-text1:hover {
  transform: translateY(-80px);
}

.info-table {
  margin-top: -310px; /* Ajusta este valor para posicionar correctamente */
  margin-left: 450px; /* Ajusta este valor para la posición horizontal deseada */
  background-color: rgba(43, 153, 197, 0.9); /* Fondo azul translúcido */
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.info-table table {
  width: 100%;
  border-collapse: collapse;
}

.info-table th, .info-table td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ffffff;
}

.info-table th {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.info-table td {
  font-size: 18px;
}
</style>