<template>
  <div :class="containerstyle">
      <p :class="tstyle" :style="getStyle()">{{language == 'pt-br' ? titulo[0] : titulo[1]}}
          <showSwitcher
            :className="containerstyle"
            :startShowing="user.grade.length > 0"
            />
          <img src="../../icons/editar.png" alt="editar" class="editar" @click="$emit('add-formacao')"/>
          <img v-if="template== 2" src="../../icons/animados/editar.gif" alt="editar" class="editar-animado-habilidade" @click="$emit('add-formacao')"/>
      </p>
      <div v-for="(item, index) in mygrade" :key="index" :class="conteinerdata">
          <img @click="this.$emit('choose-educationIcon')" src="../../icons/livros.png" class="formacao-icon"/>
          <span @touchstart="showRemoveItem(index)" class="data-container">{{item}}</span>
          <div class="bnt-divs">
            <img  @click="removeGrade($event)" :id="`${index}`" :class="remove" src="../../icons/remove.png" alt="remove-bnt"/>
            <img v-if="item" :src="editIcon" @click="editar(index)" alt="editar" class="editar">
          </div>
          <div v-if="showEditing == index" class="competence-edit">
            <wrappEditModel
              :textItem="item"
              :textIndex="index"
              :language="language"
              :event="'update-formacao'"
              @editar-end="editar"
              @update-competence="updateCompetences"
            />
          </div>
      </div>
  </div>
</template>

<script>

import showSwitcher from '../iconComponent/showSwitcher.vue';
import $ from 'jquery';
import * as svgs from "../utils/svgsText.js";
import wrappEditModel from "../utils/wrappEditModel.vue";

export default {
  name: 'Formacao',
  components: {showSwitcher, wrappEditModel},
  emits: ['add-formacao', 'choose-educationIcon'],
  data(){
    return{
      mygrade: this.user.grade,
      tstyle: "template"+this.template+"-formacao-title title",
      containerstyle: "template"+this.template+"-formacao",
      conteinerdata: "template"+this.template+"-formacao-container",
      remove: "template"+this.template+"-remove-bnt",
      isShowingRemoveBnt: false,
      showEditing: null,
      editIcon: svgs.editIcon,
    }
  },
  props:{
    template: Number,
    titulo: Array,
    language: String,
    backgroundColor: String,
    user: Object,
    sideColor: String,
  },
  methods:{
    editar(index){
      this.showEditing = index;
    },
    showRemoveItem(item) {
      this.isShowingRemoveBnt ?
      $('#'+item).css({'display': 'none'})
      :
      $('#'+item).css({'display': 'block', 'position': 'absolute'});
      this.isShowingRemoveBnt = !this.isShowingRemoveBnt;
    },
    removeGrade(event){
      this.mygrade.splice(this.mygrade.indexOf(event.target.id), 1)
      this.user.grade = this.mygrade
      localStorage.setItem(this.language.includes('en') ? 'user-en' : 'user-pt', JSON.stringify(this.user))
    },
    getStyle(){
      return this.template == 1 ? {"background-color": "white"} : {"border-bottom": "1px solid "+this.sideColor}
    }
  },
  /* Este e outro jeito de observar mudancas em um objeto e executar funcoes */
   watch: {
    user: {
      handler(newVal) {
        // console.log("user changed")
        // console.log(newVal)
        this.mygrade = newVal.grade
      },
      deep: true,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.competence-edit {
    position: absolute;
    margin-top: 30px;
    z-index: 1;
}

.bnt-divs {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.editar {
  display: none;
}

.template1-formacao-container:hover  .editar {
    position: relative;
    right: 10px;
    display: flex;
    width: 20px;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin-left: 20px;
}

.editar-animado-habilidade{
  width: 20px;
  height: 20px;
  float: right;
  display: none;
}
.template2-formacao-title:hover .editar-animado-habilidade{
  display: block;
}
.template2-formacao-title:hover .editar{
  display: none;
}
.template1-formacao-container {
  width: 80%;
  height: 100%;
  align-self: center;
  margin: 0 10%;
  display: flex;
  touch-action: manipulation;
  position: relative;
  z-index: 3;
}

.template1-formacao-container img {
  position: relative;
  z-index: 1;
}

.template1-formacao-container:hover {
  background-color: #d7d7d7;
  border-radius: 10px;
}

.template2-formacao-container:hover {
  background-color: #d7d7d7;
  border-radius: 10px;
}

.template2-formacao-container{
  display: flex;
}
.formacao-icon{
  width: 25px;
  height: 30px;
  padding-top: 30px;
}
.template1-formacao span{
  padding-top: 20px;
}
.template2-formacao {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
}
.template1-remove-bnt{
  align-self: center;
  width: 40px;
  display: none;
}

.template1-formacao-container:hover .template1-remove-bnt {
  display: block;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  width: 20px;
}

.template2-formacao-container span {
  width: 100%;
}

.template2-formacao-container:hover .template2-remove-bnt {
  display: block;
  float: right;
}

.template2-remove-bnt{
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  margin-top: 20px;
  margin-right: 35px;
  display: none;
}
.template2-formacao-title {
  text-align: start;
  width: 90%;
  font-weight: bolder;
}

@media (max-width: 1000px) and (min-width: 600px) {
  .template2-formacao-title {
    margin-left: 0px !important;
  }

  .template1-formacao-title {
    width: 99% !important;
  }
}

@media (max-width: 600px) {
  .template1-formacao-title {
    width: 97% !important;
  }

  .template2-formacao-container {
    width: 80% !important;
  }
}
@media (min-width: 1000px) {

  .template2-formacao-title {
    margin-top: 0px;
    margin-left: 10px !important;
  }
}
.template1-formacao-title{
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
@media print {
  .template1-formacao-container:hover .template1-remove-bnt {
    display: none;
  }

  .template1-remove-bnt{
    display: none !important;
  }
  
  .template2-remove-bnt{
    display: none !important;
  }

  .template2-formacao-container:hover .template2-remove-bnt {
    display: none;
  }
}
</style>
