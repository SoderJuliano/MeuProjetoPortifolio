<template>
  <div :class="cstyle">
      <p :class="tstyle" :style="getStyle()">{{language == "pt-br" ? titulo[0] : titulo[1]}}
        <showSwitcher :className="cstyle" :startShowing="user.ability != ''" />
        <img v-if="template == 1" src="../../assets/new_edit_icon.png" alt="editar" class="editar-animado-habilidade" @click="$emit('add-habilidade')"/>
      </p>
      <div v-if="user.ability" :class="hcstyle">
          <img @click="this.$emit('choose-skillIcon')" src="../../icons/html.png" class="habilidade-icon"/>
              <span  class="data-text-habilidades">
                <div v-for="(item, index) in user.ability.split(',')" :key="index" >
                  <li>{{item}}</li>
                </div>
              </span>
        <img @click="removeHabilidades()" v-if="!viewOnly" class="remove-bnt" src="../../icons/remove.png" alt="remove-bnt"/>
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
    template: String,
    sideColor: String,
  },
  methods:{
    removeHabilidades(){
      this.$emit('adicionar-habilidade', null)
    },
    getStyle(){
      return this.template == 2 ? {
        'border-bottom': '1px solid '+this.sideColor+"!important",
      } : ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.habilidade-icon {
  width: 25px;
  height: 25px;
  padding-top: 10px;
  padding-right: 10px;
}
.template1-container{
    min-height: 100px;
}
.editar-animado-habilidade{
  width: 20px;
  height: 20px;
  float: right;
}
.template1-habilidade-container{
  width: 80%;
  min-height: 100px;
  max-height: 100%;
  align-self: center;
  margin: 0 auto;
  display: flex;
  padding-bottom: 20px;
  z-index: 2;
  position: relative;
}

.template1-habilidade-container span {
  width: 100%;
}

.template1-habilidade-container:hover{
  background-color: #d7d7d7;
  border-radius: 10px;
}

.template1-habilidade-container:hover .remove-bnt,
.template1-container:hover .remove-bnt,
.template1-habilidade-container span:hover .remove-bnt {
  display: block;
}

.remove-bnt {
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
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
