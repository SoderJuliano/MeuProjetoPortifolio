<template>
  <div class="resumo">
      <p class="title" :style="getStyle()">{{titulo}}</p>
      <div class="resumo-container">
         <ion-icon name="book" size="large"></ion-icon>
         <span @input="saveContent" id='resume' class="data-container-page">{{user.resume}}</span>
         <img src="../icons/editar.png" alt="editar" class="editar" />
         <img src="../icons/animados/editar.gif" alt="editar" class="editar-animado-resumo" @click="$emit('add-resumo')"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Resumo',
  props:{
    titulo: String,
    backgroundColor: String,
    user: Object,
    cor: String
  },
  emits:['add-resumo'],
  methods:{
      getStyle(){ //console.log(this.cor +' corrr')
          return{
              'background-color': `${this.cor}`
          }
      },
      saveContent(){
        const content = document.getElementById('resume').textContent
        localStorage.setItem('about', content)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editar-animado-resumo{
  width: 30px;
  height: 30px;
  float: right;
  display: none;
}
.resumo-container:hover .editar-animado-resumo{
  display: block;
} 
.resumo-container:hover .editar{
  display: none;
} 

.resumo-container{
  max-width: 100%;
  height: 100%;
  align-self: center;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  padding: 10px;
}
.title{
    width: 98.35%;
}
.data-container-page{
    margin-left: 10px;
    width: 100%;
    height: 100%;
}
@media print{
  .editar{
    display: none;
  }
} 
</style>
