<template>
  <div class="d-flex justify-content-start">
      <Side
        :cor="sideColor"
      />
      <Page
        @click="closeEditarContato"
        :cor="mainColor"
      />
  </div>
</template>

<script>
import Side from '../components/Side.vue'
import Page from '../components/Page.vue'

export default {
  name: 'template1',
  components: {
    Side,
    Page
  },
  props:{
    mainColor: String,
    sideColor : String
  },
  methods: {
  }
}
</script>
<style scoped>
.d-flex.justify-content-center{
  width: 100%;
}
</style>