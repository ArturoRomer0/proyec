<template>

    <div class="col">
      <div :style="{ backgroundColor: primaryColor }" class="card">
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <!-- Usando aria-label para mejorar la accesibilidad del icono -->
          <i class="icon" aria-label="Icono representando ${title}"></i>
          <!-- Cambiado a router-link para una mejor integración con Vue Router -->
          <router-link :to="route" class="btn" :style="{ backgroundColor: secondaryColor }">Acceder</router-link>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    title: String,
    primaryColor: String,
    secondaryColor: String,
    icon: String,
    route: Object,
  },

}
</script>

<style scoped>
.card {
  border-radius: 15px;
  text-align: center;
}

.btn:hover {
  filter: brightness(90%);
}

.btn:focus {
  outline: none; /* Considerar añadir un outline personalizado para mantener la accesibilidad */
}
</style>