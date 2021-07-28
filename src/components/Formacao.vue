<template>
  <div class="formacao">
      <p class="title" style="background-color:`{{backgroundColor}}`">{{titulo}}</p>
      <div v-for="(item, index) in formacao " :key="index" class="formacao-container">
          <img src="../icons/livros.png" class="formacao-icon"/>
          <span class="data-container">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Formacao',
  props:{
    titulo: String,
    backgroundColor: String,
    formacao: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formacao-container{
  width: 80%;
  height: 100%;
  align-self: center;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
}
.formacao-icon{
  width: 40px;
  height: 40px;
  padding-top: 20px;
}
</style>
