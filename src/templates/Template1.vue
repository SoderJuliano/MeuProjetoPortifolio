<template>
  <div class="custom-container">
      <Side
        @add-info="$emit('add-info')"
        @add-formacao="$emit('add-formacao')"
        @add-habilidade="$emit('add-habilidade')"
        @add-SocialLink="$emit('add-SocialLink')"
        :cor="sideColor"
        :user="user"
        :titles="titles"
        :language="language"
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
        :language="language"
      />
      
  </div>
</template>

<script>
import Side from '../components/Side.vue'
import Page from '../components/Page.vue'

export default {
  name: 'template1',
  emits: ['add-info', 'add-resumo', 'add-competencia', 'add-experiencia', 'add-nome', 'add-profissao', 'add-formacao', 'add-habilidade', 'add-SocialLink'],
  data(){
    return{
      u: this.user,
      uExperiences: this.userExperiences,
      titles: {
                competencias: ["COMPETÊNCIAS", "COMPETENCE"],
                resumo: ["RESUMO", "SUMMARY"],
                formacao: ["FORMAÇÃO ACADÊMICA", "EDUCATION"],
                habilidades: ["HABILIDADES", "SKILLS"],
                contato: ["CONTATO", "CONTACT"],
                social: ["SOCIAL", "SOCIAL"],
                experiencias: ["EXPERIÊNCIAS", "EXPERIENCES"]
            }
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
    language: String,
  },
  methods: {
  }
}
</script>
<style scoped>
@media screen and (min-width: 1001px){
  .custom-container{
    width: 100%;
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
    height: calc(100vh - 35px);
    overflow: hidden;
  }
}
</style>