<template>
  <div class="custom-container">
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
@media screen and (min-width: 1001px){
  .custom-container{
    width: 50%;
    justify-content: start;
    height: calc(100vh - 35px) ;
    display: flex;
  }
}

@media print {
 .custom-container{
    display: flex;
    width: 100vw !important;
    height: calc(100vh - 35px) ;
  }
}
</style>