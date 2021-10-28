<template>
  <div class="resumo">
      <p class="title" :style="getStyle()">{{titulo}}</p>
      <div class="resumo-container">
         <span contenteditable="true" @input="saveContent" id='resume' class="data-container-page">{{user.resume}}</span>
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
.resumo-container{
  width: 100%;
  height: 100%;
  align-self: center;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
}
.title{
    width: 98%;
}
.data-container-page{
    width: 100%;
    height: 100%;
}
</style>
