<template>
  <div :class="conteinerstyle">
      <p :class="tstyle" :style="getStyle()">{{language == 'pt-br' ? titulo[0] : titulo[1]}}
        <img src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-formacao')"/>
         <img v-if="template=='template2'" src="../icons/animados/editar.gif" alt="editar" class="editar-animado-habilidade" @click="$emit('add-formacao')"/>
      </p>
      <div v-for="(item, index) in mygrade " :key="index" :class="conteinerdata">
          <img src="../icons/livros.png" class="formacao-icon"/>
          <span class="data-container">{{item}}</span>
          <img  @click="removeGrade($event)" :id="`${item}`" :class="remove" src="../icons/remove.png" alt="remove-bnt"/>
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
      tstyle: this.template+"-formacao-title",
      containerstyle: this.template+"-formacao",
      conteinerdata: this.template+"-formacao-container",
      remove: this.template+"-remove-bnt"
    }
  },
  props:{
    template: String,
    titulo: Array,
    language: String,
    backgroundColor: String,
    user: Object,
    sideColor: String,
  },
  methods:{
    removeGrade(event){
      this.mygrade.splice(this.mygrade.indexOf(event.target.id), 1)
      localStorage.setItem('grade', this.mygrade)
    },
    getStyle(){
      return this.template == "template1" ? {"background-color": this.backgroundColor} : {"border-bottom": "1px solid "+this.sideColor}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editar-animado-habilidade{
  width: 30px;
  height: 30px;
  float: right;
  display: none;
}
.template2-formacao-title:hover .editar-animado-habilidade{
  display: block;
}
.template2-formacao-title:hover .editar{
  display: none;
}
.template1-formacao-container{
  width: 80%;
  height: 100%;
  align-self: center;
  margin: 0 auto;
  display: flex;
}
.template2-formacao-container{
  width: 80%;
  margin-left: 20px; 
  display: flex;
}
.formacao-icon{
  width: 40px;
  height: 40px;
  padding-top: 20px;
}
.template1-formacao span{
  padding-top: 20px;
}
.template2-formacao{
  width: 80%;
  padding-left: 20px;
}
.template1-remove-bnt{
  width: 20px;
  position: absolute;
  margin-top: 20px;
  margin-left: 190px;
}
.template2-remove-bnt{
  float: right;
  width: 20px;
  height: 20px;
  margin-top: 20px;
  margin-right: 35px;
}
.template2-formacao-title{
  text-align: start;
  margin-left: 10px !important;
  width: 80%;
  font-weight: bolder;
}
@media print {
  .template1-remove-bnt{
    display: none;
  }
  .template2-remove-bnt{
    display: none;
  }
}
</style>
