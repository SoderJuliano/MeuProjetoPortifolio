<template>
  <div class="habilidade">
      <p class="title" style="background-color:`{{backgroundColor}}`">{{titulo}}</p>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.habilidade-container{
  width: 80%;
  height: 150px;
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
