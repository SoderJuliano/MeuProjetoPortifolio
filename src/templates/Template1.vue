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
    justify-content: start;
    min-height: calc(100vh - 35px);
    max-height: 100%;
    display: flex;
    margin-top: 20px;
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