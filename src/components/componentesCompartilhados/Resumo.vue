<template>
  <div class="resumo">
      <p :class="tstyle" :style="getStyle()">{{language == 'pt-br' ? titulo[0] : titulo[1]}}
        <showSwitcher className="resumo" :startShowing="user.resume != ''" />
        <img id="edit-re" src="../../icons/editar.png" alt="editar" class="editar" @click="$emit('add-resumo')"/>
        <img v-if="this.template==2" src="../../icons/animados/editar.gif" alt="editar" class="editar-animado-resumo" @click="$emit('add-resumo')"/>
      </p>
      <div class="resumo-container">
          <ion-icon name="book" size="large"></ion-icon>
          <span id='resume'>{{user.resume}}</span>
          </div>
  </div>
</template>

<script>

import showSwitcher from '../iconComponent/showSwitcher.vue';

export default {
  name: 'Resumo',
  components: {
    showSwitcher
  },
  data(){
    return {
      tstyle: "template"+this.template+"-resumo-titulo title",
    }
  },
  props:{
    titulo: Array,
    backgroundColor: String,
    user: Object,
    cor: String,
    fontColor: String,
    template: Number,
    sideColor: String,
    language: String,
  },
  emits:['add-resumo'],
  methods:{
     getStyle(){ //// console.log(this.cor +' corrr')
        return this.template == 2
        ? {
            'text-align': 'start',
            'font-weight': 'bolder !important',
            'border-bottom': '1px solid '+this.sideColor+"!important",
            'width': '90%'
          }
        : {
            'background-color': `${this.cor}`,
            'color': `${this.fontColor}`
          }
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.editar-animado-resumo{
  width: 20px;
  height: 20px;
  float: right;
  display: none;
}
.resumo:hover .editar-animado-resumo {
  display: block;
}

.template2-resumo-titulo:hover #edit-re  {
  display: none;
}

.template2-resumo-titulo:hover .editar-animado-resumo {
  display: block;
  z-index: 1;
}

.template1-resumo-titulo{
  align-self: center;
  background-color: white;
  color: black;
  font-weight: bolder;
  width: 98.35%;
  margin-top: 0px;
  margin-top: 10px;
  text-align: center;
  padding: 5px;
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
