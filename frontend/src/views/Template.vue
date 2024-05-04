<template>
  <TemplateTop />
  <div class="container pb-3">
    <slot name="slotPageComponet"></slot>
  </div>
  <div class="container">
    <Footer />
  </div>
</template>
  
<script>
// @ is an alias to /src
import TemplateTop from '@/views/TemplateTop.vue'
import Footer from '@/views/Footer.vue'

export default {
  name: 'templateView',
  components: {
    Footer,
    TemplateTop,
  },
  data() {
    return {
      isLoading: false
    }
  },

}
</script>

<style>

</style>
  
