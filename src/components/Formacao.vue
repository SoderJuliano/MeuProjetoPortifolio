<template>
  <div class="formacao">
      <p class="title" style="background-color:`{{backgroundColor}}`">{{titulo}}
        <img src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-formacao')"/></p>
      <div v-for="(item, index) in mygrade " :key="index" class="formacao-container">
          <img src="../icons/livros.png" class="formacao-icon"/>
          <span class="data-container">{{item}}</span>
          <img @click="removeGrade($event)" :id="`${item}`" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Formacao',
  emits: ['add-formacao'],
  data(){
    return{
      mygrade: this.formacao,
    }
  },
  props:{
    titulo: String,
    backgroundColor: String,
    formacao: Array,
  },
  methods:{
    removeGrade(event){
      this.mygrade.splice(this.mygrade.indexOf(event.target.id), 1)
      localStorage.setItem('grade', this.mygrade)
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
.remove-bnt{
  position: absolute;
  margin-top: 20px;
  margin-left: 190px;
}
@media print {
  .remove-bnt{
    display: none;
  }
}
</style>
