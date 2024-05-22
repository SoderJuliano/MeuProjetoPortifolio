<template>
  <div :class="containerstyle">
      <p :class="tstyle" :style="getStyle()">{{language == 'pt-br' ? titulo[0] : titulo[1]}}
          <showSwitcher
            :className="containerstyle"
            :startShowing="user.grade.length > 0"
            />
          <img src="../../icons/editar.png" alt="editar" class="editar" @click="$emit('add-formacao')"/>
          <img v-if="template == 2" src="../../icons/animados/editar.gif" alt="editar" class="editar-animado-formacao" @click="$emit('add-formacao')"/>
      </p>
      <div class="formacao-item-list" v-for="(item, index) in mygrade" :key="index">
        <div :class="conteinerdata">
          <img @click="this.$emit('choose-educationIcon')" src="../../icons/livros.png" class="formacao-icon"/>
          <span @touchstart="showRemoveItem(index)" class="data-container">{{item}}</span>
        </div>
        <div class="bnt-divs">
            <img  @click="removeGrade($event)" :id="`${index}`" :class="remove" src="../../icons/remove.png" alt="remove-bnt"/>
            <img v-if="item" :src="editIcon" @click="editar(index)" alt="editar" class="editar-item">
        </div>
        <div v-if="showEditing == index" class="competence-edit">
            <wrappEditModel
              :textItem="item"
              :textIndex="index"
              :language="language"
              :event="'update-formacao'"
              @editar-end="editar"
              @update-formacao="updateFormacao"
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
    updateFormacao(value) {
      console.log('formacao', value)
      this.mygrade[value.index] = value.text;
      console.log('typeof mygrade', JSON.stringify(this.mygrade))
      sessionStorage.setItem("updateFormacao", this.mygrade);
    },
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

.formacao-item-list:hover .editar-item {
  display: flex;
}

.formacao-item-list:hover .template1-remove-bnt {
  display: flex;
}

.formacao-item-list:hover .template2-remove-bnt {
  display: flex;
}

.formacao-item-list {
  position: relative;
}

.competence-edit {
  position: relative;
  margin-top: 30px;
  z-index: 1;
  left: 0;
  right: 0;
  justify-content: space-between;
}

.bnt-divs {
  display: flex;
  width: 80%;
  margin-top: -55px;
  align-items: center;
  justify-content: end;
  position: absolute;
  z-index: 4;
}

.editar-item {
  width: 20px;
  display: none;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 30px;
}

.editar-animado-formacao {
  width: 20px;
  height: 20px;
  float: right;
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

/* .template1-formacao-container:hover {
  background-color: #d7d7d7;
  border-radius: 10px;
}

.template2-formacao-container:hover {
  background-color: #d7d7d7;
  border-radius: 10px;
} */

.template2-formacao-container {
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
  width: 20px;
  display: none;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin-right: 30px;
}

.template2-formacao-container span {
  width: 100%;
}

.template2-formacao-container:hover .template2-remove-bnt {
  display: block;
  float: right;
}

.template2-formacao:hover .editar {
  display: none;
}

.template2-formacao:hover .editar-animado-formacao {
  display: block;
}

.template2-remove-bnt{
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  width: 20px;
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
  
  .editar-item {
    display: none;
  }
}
</style>
