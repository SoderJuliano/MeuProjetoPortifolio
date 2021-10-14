<template>
  <div class="competencias">
      <p class="title" :style="getStyle()">{{titulo}}
        <img src="../icons/editar.png" alt="editar" class="editar" @click="showEditarCompetencias"/>
      </p>
      <div v-for="(item, index) in user.competence " :key="index" class="competencias-container">
         <li class="data-container-page">{{item}}</li>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Competencias',
  props:{
    titulo: String,
    backgroundColor: String,
    user: Object,
    cor: String
  },
  methods:{
      getStyle(){
          return{
              'background-color': `${this.cor}`
          }
      },
      showEditarCompetencias(){
        document.getElementsByClassName('editar-competencais')[0].style.display = 'block'
        document.getElementsByClassName('editar-competencais')[0].style.opacity = '100% !important'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.competencias-container{
  width: 100%;
  height: 100%;
  align-self: center;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
}
.title{
    width: 95%;
}
.data-container-page{
    width: 100%;
    height: 100%;
}
@media print{
  .editar{
    display: none;
  }
}
</style>
