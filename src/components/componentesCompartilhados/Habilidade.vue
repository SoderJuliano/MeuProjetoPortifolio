<template>
  <div :class="cstyle">
      <p :class="tstyle" :style="getStyle()">{{language == "pt-br" ? titulo[0] : titulo[1]}}
        <showSwitcher :className="cstyle" :startShowing="user.hability != ''" />
        <img src="../../icons/editar.png" alt="editar" class="editar" @click="$emit('add-habilidade')"/>
        <img v-if="template == 2" src="../../icons/animados/editar.gif" alt="editar" class="editar-animado-habilidade" @click="$emit('add-habilidade')"/>
      </p>
      <div v-if="user.hability" :class="hcstyle">
          <img @click="this.$emit('choose-skillIcon')" src="../../icons/html.png" class="habilidade-icon"/>
              <span  class="data-text-habilidades">
                <div v-for="(item, index) in user.hability.split(',')" :key="index" >
                  <li>{{item}}</li>
                </div>
              </span>
        <img @click="removeHabilidades()" class="remove-bnt" src="../../icons/remove.png" alt="remove-bnt"/>
      </div>
  </div>
</template>

<script>

import showSwitcher from '../iconComponent/showSwitcher.vue';

export default {
  name: 'Habilidade',
  components: {showSwitcher},
  emits: ['add-habilidade', 'adicionar-habilidade', 'choose-skillIcon'],
  data(){
    return {
      tstyle : "template"+this.template+"-title title",
      cstyle : "template"+this.template+"-container",
      hcstyle : "template"+this.template+"-habilidade-container"
    }
  },
  props:{
    language: String,
    titulo: Array,
    backgroundColor: String,
    user: Object,
    template: Number,
    sideColor: String,
  },
  methods:{
    removeHabilidades(){
      this.$emit('adicionar-habilidade', null)
    },
    getStyle(){
      return this.template == 2 ? {
        'border-bottom': '1px solid '+this.sideColor,
      } : ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template1-container{
    min-height: 100px;
    max-height: 100%;
}
.editar-animado-habilidade{
  width: 20px;
  height: 20px;
  float: right;
  display: none;
}
.template1-habilidade-container{
  width: 80%;
  min-height: 100px;
  max-height: 100%;
  align-self: center;
  margin: 0 auto;
  display: flex;
}

.template1-habilidade-container span {
  width: 100%;
}

.template1-habilidade-container:hover{
  background-color: #d7d7d7;
  border-radius: 10px;
}

.template1-habilidade-container:hover .remove-bnt{
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  display: block;
  margin-top: 10px;
  position: relative;
  float: right;
}

.template2-habilidade-container:hover {
  background-color: #d7d7d7;
  border-radius: 10px;
}

.template2-habilidade-container{
  display: flex !important;
  width: 100%;
  min-height: 100px;
  max-height: 100%;
}

.template2-habilidade-container span {
  width: 100%;
}

.template2-habilidade-container:hover .remove-bnt {
  display: block;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  float: right;
  margin-top: 10px;
}


@media print{
  .habilidade-container{
    padding-top: 0px !important;
  }
  .editar-animado-habilidade{
    display: none !important;
  }
}

.habilidade-icon{
  width: 25px;
  height: 25px;
  padding-top: 20px;
  position: relative;
  z-index: 10;
}
.data-text-habilidades{
  min-height: 20px;
  display: block;
  padding-top: 16px;
  padding-left: 20px;
  padding-right: 20px;
}

.template2-title {
  text-align: start;
  border-bottom: 1px solid black;
  font-weight: bold;
  width: 90%;
  margin-top: 0px;
}
.template2-title:hover .editar-animado-habilidade{
  display: block;
}
.template2-title:hover .editar{
  display: none;
}
.template2-container{
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.template1-title{
  align-self: center;
  background-color: white;
  color: black;
  font-weight: bolder;
  width: 80%;
  margin: 0 auto;
  margin-top: 0px;
  margin-top: 10px;
  text-align: center;
  padding: 5px;
}
@media print{
  .remove-bnt{
    display: none;
  }
}

@media (max-width: 600px) {
  .template1-title {
    width: 97% !important;
  }
}

@media (min-width: 600px) and (max-width: 1000px) {
  .template1-title {
    width: 99% !important;
  }
}
</style>
