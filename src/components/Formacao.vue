<template>
  <div class="formacao">
      <p class="title" style="background-color:`{{backgroundColor}}`">{{titulo}}
        <img src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-info2')"/></p>
      <div v-for="(item, index) in formacao " :key="index" class="formacao-container">
          <img src="../icons/livros.png" class="formacao-icon"/>
          <span class="data-container">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Formacao',
  emits: ['add-info2'],
  props:{
    titulo: String,
    backgroundColor: String,
    formacao: Array,
  },
  methods:{
    showEditarFormacao(){
      document.getElementsByClassName('editar-dados-escolares')[0].style.display = 'block'
      document.getElementsByClassName('editar-dados-escolares')[0].style.opacity = '90%'
      window.scrollTo(0,0)
    }
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
  display: flex;
}
.formacao-icon{
  width: 40px;
  height: 40px;
  padding-top: 20px;
}
.formacao span{
  padding-top: 20px;
}
</style>
