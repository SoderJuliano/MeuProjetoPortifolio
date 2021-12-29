<template>
  <div class="custom-container">
      <Side
        @add-info="$emit('add-info')"
        @add-info2="addInfo"
        :cor="sideColor"
      />
      <Page
        @add-resumo="$emit('add-resumo')"
        @add-competencia="$emit('add-competencia')"
        @add-experiencia="$emit('add-experiencia')"
        @add-nome="$emit('add-nome')"
        @add-profissao="$emit('add-profissao')"
        @click="closeEditarContato"
        :cor="mainColor"
        :user="user"
        :userExperiences="uExperiences"
      />
      
  </div>
</template>

<script>
import Side from '../components/Side.vue'
import Page from '../components/Page.vue'

export default {
  name: 'template1',
  emits: ['add-info', 'add-resumo', 'add-competencia', 'add-experiencia', 'add-nome', 'add-profissao'],
  data(){
    return{
      u: this.user,
      uExperiences: this.userExperiences
    }
  },
  components: {
    Side,
    Page,
  },
  props:{
    mainColor: String,
    sideColor : String,
    user: Object,
    userExperiences: Array,
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