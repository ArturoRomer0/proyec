<template>
<templateView>
    <template v-slot:slotPageComponet>
        <div class="container">
            <section class="tops">

            </section>
            <section class="bottoms">

            </section>
        </div>
    </template>
</templateView>
</template>

<script >
export default{
    name: 'horarioView',
    components: {
        templateView
    }
}
import templateView from '@/views/Template.vue';
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column; 
  height: 50%; 
}
.tops,
.bottoms {
  flex: 1; /* Las dos secciones ocupan el mismo espacio */
  border: 1px solid #000000; /* Solo para visualización */
}

</style>