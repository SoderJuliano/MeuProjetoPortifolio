<template>
  <div :class="conteinerstyle">
      <p :class="tstyle" style="background-color:`{{backgroundColor}}`">{{titulo}}
        <img src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-formacao')"/></p>
      <div v-for="(item, index) in mygrade " :key="index" :class="conteinerdata">
          <img src="../icons/livros.png" class="formacao-icon"/>
          <span class="data-container">{{item}}</span>
          <img @click="removeGrade($event)" :id="`${item}`" :class="remove" src="../icons/remove.png" alt="remove-bnt"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Formacao',
  emits: ['add-formacao'],
  data(){
    return{
      mygrade: this.user.grade,
      tstyle: this.templete+"-formacao-title",
      containerstyle: this.templete+"-formacao",
      conteinerdata: this.templete+"-formacao-container",
      remove: this.templete+"-remove-bnt"
    }
  },
  props:{
    templete: String,
    titulo: String,
    backgroundColor: String,
    user: Object,
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
.templete1-formacao-container{
  width: 80%;
  height: 100%;
  align-self: center;
  margin: 0 auto;
  display: flex;
}
.templete2-formacao-container{
  width: 80%;
  margin-left: 20px; 
  display: flex;
}
.formacao-icon{
  width: 40px;
  height: 40px;
  padding-top: 20px;
}
.templete1-formacao span{
  padding-top: 20px;
}
.templete2-formacao{
  width: 80%;
  padding-left: 20px;
}
.templete1-remove-bnt{
  position: absolute;
  margin-top: 20px;
  margin-left: 190px;
}
.templete2-remove-bnt{
  float: right;
  width: 20px;
  height: 20px;
  margin-top: 20px;
  margin-right: 35px;
}
.templete2-formacao-title{
  text-align: start;
  padding-left: 10px;
  width: 80%;
  font-weight: bolder;
}
@media print {
  .templete1-remove-bnt{
    display: none;
  }
  .templete2-remove-bnt{
    display: none;
  }
}
</style>
