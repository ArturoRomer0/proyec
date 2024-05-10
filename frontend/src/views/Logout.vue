<template>
  <templateView>
    <template v-slot:slotPageComponet>
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">Logout</h1>
        <p class="fs-5 text-muted">Has finalizado tu sesion
        </p>
      </div>
    </template>
  </templateView>
</template>

<script>
import templateView from '@/views/Template.vue';

export default {
  name: 'LogOutView',
  components: {
    templateView
  }
}
</script>