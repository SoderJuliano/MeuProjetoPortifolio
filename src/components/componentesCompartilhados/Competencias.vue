<template>
  <div :class="conteinerstyle">
      <p @mouseover="hovert" @mouseleave="leavehovert" class="title" :style="getStyle()">{{language == 'pt-br' ? titulo[0] : titulo[1]}}
        <showSwitcher :className="conteinerstyle" :startShowing="user.competence.length > 0" />
        <img id="edit-com" src="../../icons/editar.png" alt="editar" class="editar" @click="$emit('add-competencia')"/>
        <img v-if="template == 2" src="../../icons/animados/editar.gif" alt="editar" class="editar-competencias-animado" @click="$emit('add-competencia')"/>
      </p>
      <div v-for="(item, index) in userData.competence" :key="index" class="competencias-container">
        <ion-icon style="fill : wheat; margin-top : -5px" name="bulb" size="large"></ion-icon>
        <span class="data-container-page">{{item}}
          <img v-if="item" :src="editIcon" @click="editar(index)" alt="editar" class="remove-bnt">
          <img v-if="item" @click="removeCompetence" :id="`${item}`" class="remove-bnt" src="../../icons/remove.png" alt="remove-bnt">
        </span>
        <div v-if="showEditing == index" class="competence-edit">
          <wrappEditModel
            :textItem="item"
            :textIndex="index"
            :language="language"
            :event="'update-competence'"
            @editar-end="editar"
            @update-competence="updateCompetences"
          />
        </div>
      </div>
  </div>
</template>

<script>
import * as svgs from "../utils/svgsText.js";
import showSwitcher from '../iconComponent/showSwitcher.vue';
import wrappEditModel from "../utils/wrappEditModel.vue";

export default {
  name: 'Competencias',
  components: {
      showSwitcher,
      wrappEditModel
  },
  props: {
    titulo: Array,
    language: String,
    backgroundColor: String,
    user: Object,
    cor: String,
    fontColor: String,
    template: Number,
    sideColor: String,
  },
  data(){
    return{
      userData : this.user,
      conteinerstyle : "template"+this.template+"-competencias",
      showEditing: null,
      editIcon: svgs.editIcon,
    }
  },
  emits: ['add-competencia', 'update-competences'],
  methods:{
      updateCompetences(val) {
        this.userData.competence[val.index] = val.text;
        this.$emit('update-competences', this.userData.competence);
      },
      editar(val) {
        this.showEditing = val
      },
      hovert(){
        this.template == 2 ?
        document.getElementById("edit-com").style.display = "none" : ''
      },
      leavehovert(){
        this.template == 2 ?
        document.getElementById("edit-com").style.display = "block" : ''
      },
      getStyle(){
        return this.template == 1
        ? {
            'background-color': `${this.cor}`,
            'color': `${this.fontColor}`
          }
        : {
            'border-bottom': '1px solid '+this.sideColor+ '!important',
            'padding-left': '5px',
            'width': '90%'
          }
      },
      removeCompetence(event){
        this.userData.competence.splice(this.userData.competence.indexOf(event.target.id), 1)
        localStorage.setItem(this.language.includes('en') ? 'user-en' : 'user-pt', JSON.stringify(this.userData))
      },
  },
  watch: {
    user: {
      deep: true,
      //handle the change
      handler() {
        // console.log('user updated in page template1 PAGE');
        this.userData = this.user
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.competence-edit {
  position: relative;
  top: 0;
}
.editar-competencias-animado{
  float: right;
  width: 20px;
  height: 20px;
  display: none;
}
.title:hover .editar-competencias-animado{
  display: block;
}
.template2-competencias .title {
  text-align: start !important;
  padding-left: 10px;
  margin: 0 !important;
}
.competencias-container{
  width: 100%;
  height: 100%;
  align-self: center;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
}

.competencias-container:hover .remove-bnt{
  display: block;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  float: right;
}

.title{
    width: 98.35%;
}
.data-container-page{
    width: 100%;
    height: 100%;
    padding: 10px;
    min-height: 30px;
}

.data-container-page:hover {
  background-color: #d7d7d7;
  border-radius: 10px;
}

.editar{
  float: right;
}
@media print{
  .editar{
    display: none;
  }
  .remove-bnt{
    display: none;
  }
}
.remove-bnt{
  float: right;
  margin-right: 30px;
}
</style>
<style>
.remove-bnt{
  max-width: 20px;
  max-height: 20px;
  padding-top: 8px;
}

@media print{
  .editar{
    display: none;
  }
  .remove-bnt{
    display: none;
  }
  .competence-edit {
    display: none;
  }
}

@media (max-width: 1000px) {
  .template2-competencias .title {
    margin-left: 0px;
  }
}


@media (min-width: 1000px) {
  .template2-competencias .title {
    align-self: center;
  }

  .template2-competencias {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px !important;
  }
}
</style>
