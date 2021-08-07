<template>
  <div class="habilidade">
      <p class="title" style="background-color:`{{backgroundColor}}`">{{titulo}}
        <img src="../icons/editar.png" alt="editar" class="editar" @click="showEditarHabilidade"/>
      </p>
      <div class="habilidade-container">
          <img src="../icons/html.png" class="habilidade-icon"/>
              <span contenteditable="true" class="data-text-habilidades">{{hability}}</span> 
        
      </div>
  </div>
</template>

<script>
export default {
  name: 'Habilidade',
  props:{
    titulo: String,
    backgroundColor: String,
    hability: String,
  },
  methods:{
    showEditarHabilidade(){
      document.getElementsByClassName('editar-habilidade')[0].style.display = 'block'
      document.getElementsByClassName('editar-habilidade')[0].style.opacity = '90%'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.habilidade-container{
  width: 80%;
  min-height: 100px;
  max-height: 100%;
  align-self: center;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
}
.habilidade-icon{
  width: 25px;
  height: 25px;
  padding-top: 20px;
}
.data-text-habilidades{
  height: 20px;
  display: block;
  padding: 10px;
}
</style>
