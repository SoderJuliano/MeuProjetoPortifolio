<template>
  <div class="custom-container">
      <Side
        @choose-addressIcon="$emit('choose-addressIcon')"
        @choose-skillIcon="$emit('choose-skillIcon')"
        @choose-phoneIcon="$emit('choose-phoneIcon')"
        @choose-emailIcon="$emit('choose-emailIcon')"
        @choose-educationIcon="$emit('choose-educationIcon')"
        @add-info="$emit('add-info')"
        @add-formacao="$emit('add-formacao')"
        @add-habilidade="$emit('add-habilidade')"
        @add-SocialLink="$emit('add-SocialLink')"
        @adicionar-habilidade="$emit('adicionar-habilidade')"
        @update-user="$emit('update-user')"
        @user-update="reEmit"
        @local-update-user="reEmit"
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
        @update-experiences="$emit('update-experiences')"
        @click="closeEditarContato"
        :fontColor=fontColor
        :cor="mainColor"
        :user="user"
        :language="language"
      />
      
  </div>
</template>

<script>
import Side from '../components/Side.vue'
import Page from '../components/Page.vue'

export default {
  name: 'template1',
  emits: ['local-update-user', 'add-info', 'add-resumo', 'add-competencia', 'add-experiencia', 'add-nome', 'add-profissao', 
  'add-formacao', 'add-habilidade', 'add-SocialLink', 'adicionar-habilidade', 'update-user', 'choose-emailIcon',
  'choose-educationIcon', 'choose-phoneIcon', 'choose-skillIcon', 'choose-addressIcon', 'update-experiences'],
  data(){
    return{
      uExperiences: this.userExperiences,
      titles: 
        {
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
    fontColor: String,
    user: Object,
    language: String,
  },
  methods: {

    reEmit(data) {
      console.log("data", data)
      this.$emit("local-update-user", data)
    }
  },
  mounted(){
    console.log("mounted template 1")
    console.log("mainColor: "+this.mainColor)
    console.log("sideColor: "+this.sideColor)
    console.log(this.fontColor)
    console.log(this.language)
    console.log(this.user)
  },
  watch: {
    user: (updated) => {
      console.log("Template1 user updated");
      console.log(updated);
    }
  }
}
</script>
<style scoped>
@media screen and (min-width: 1001px){
  .custom-container{
    width: 100%;
    justify-content: start;
    height: 100% !important;
    padding-bottom: 50px;
    display: flex;
    margin-top: 20px;
  }
}

@media print {
  .custom-container{
    display: flex;
    width: 100%;
  }
}
</style>