<template>
<templateView>
    <template v-slot:slotPageComponet>
        <div class="container">
            <section class="tops">
                <div class="row">
                    <div class="col-md-2">
                        Desde<input type="time" class="form-control" name="hora_inicio">
                    </div>

                    <div class="col-md-2">
                        Hasta<input type="time" class="form-control" name="hora_fin">
                    </div>

                    <br>
                    <div class="col-md-1">
                        <button type="submit" class="btn btn-success">Guardar</button>
                    </div>
                </div>
            </section>
            <section class="bottoms">
                <div class="box">
                    <div class="box-body">
                        <div id="calendario">
                </div>
            </div>
        </div>

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