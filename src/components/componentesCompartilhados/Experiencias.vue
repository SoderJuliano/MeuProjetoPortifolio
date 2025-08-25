<template>
  <div :class="mainclass">
      <p @mouseover="hovert" @mouseleave="leavehovert" class="title" :style="getStyle()">{{language == 'pt-br' ? titulo[0] : titulo[1]}}
        <showSwitcher
            :className="classToShare"
            :startShowing="jobs?.length > 0"
        />
        
        <img v-if="template== 2" src="../../assets/new_edit_icon.png" alt="editar" class="editar-animado-resumo" @click="$emit('add-experiencia')"/>
      </p>
      <div v-for="(item, index) in jobs" :key="index" :class="cstyle">
        <div class="options-div">
          <img 
            v-if="item" 
            :src="editIcon" 
            @click="editar(index)" 
            alt="editar" 
            class="remove-bnt">
          <img 
            v-if="item" 
            @click="removeJob(item)" 
            class="remove-bnt" 
            src="../../icons/remove.png" 
            alt="remove-bnt">
        </div>
          <h3>{{item.position}}</h3>
          <div style="display: flex">
            <h4 style="margin-top: 0; margin-right:10px;">{{item.company}}</h4>
            <span style="margin-top: 0; margin-right:10px;">{{item.dateHired}}</span>
            <span v-if="item.dateHired && item.dateFired">{{ item.dateHired ? this.language=='pt-br'? 'até' : 'until' : ''}}</span>
            <span v-else-if="item.dateHired && !item.dateFired">{{item.dateHired ? this.language=='pt-br'? 'trabalho atual.' : 'current job.' : ''}}</span>
            <span style="margin-top: 0; margin-left:10px;" v-if="item.dateFired">{{item.dateFired}}</span>
          </div>
          <p style="background-color:  whitesmoke; padding: 10px; border-radius: 10px;">{{item.description}}</p>
          <div v-if="showEditing == index" class="job-edit">
            <wrappEditModel
              :textIndex="index"
              :job="getJobModel(item)"
              :language="language"
              @editar-end="editar"
              @update-experiencias="updateExperiencias"
            />
          </div>
        </div>
  </div>
</template>

<script>

import * as svgs from "../utils/svgsText.js";
import showSwitcher from '../iconComponent/showSwitcher.vue';
import jobModel from '../../model/jobModel.js';
import wrappEditModel from "../utils/wrappEditModel.vue";


export default {
  name: 'Experiencias',
  emits: ['add-experiencia', 'update-experiencias'],
  components: {showSwitcher, wrappEditModel},
  props:{
    template: Number,
    titulo: Array,
    language: String,
    cor: String,
    sideColor: String,
    experiences: Array,
    fontColor: String,
    user: Object
  },
  data(){
    return{
      mainclass: 'experiencias templete'+this.template,
      jobHired: '',
      jobEnd: '',
      lasJobHired: '',
      lastJobEnd: '',
      classToShare: 'experiencias',
      cstyle: 'template'+this.template+'-experiencias-container',
      jobs: this.experiences,
      editIcon: svgs.editIcon,
      showEditing: null,
      isImproved: false
    }
  },
  methods:{
      updateExperiencias(job, i) {
        this.jobs[i] = job;
        this.$emit("update-experiencias", this.jobs);
      },
      getJobModel(item) {
        const model = new jobModel();
        return model.retrieveJob(item);
      },
      editar(val) {
        this.showEditing = val
      },
      getStyle(){
          return{
              'background-color': `${this.cor}`,
              'color': `${this.fontColor}`,
              "border-bottom": "1px solid "+this.sideColor+"!important",
              "text-align": this.template == 2 ? "start" : "center",
              "width": this.template == 2 ? "" : "98.35% !important"
          }
      },
      removeJob(item){
        this.jobs.splice(this.jobs.indexOf(item), 1)
        this.user.userExperiences = this.jobs
        localStorage.setItem(this.language.includes('en') ? 'user-en' : 'user-pt', JSON.stringify(this.user))
      },
  },
  watch: {
    experiences: {
      deep: true,
      //handle the change
      handler() {
        this.jobs = this.experiences
      }
    },
    user: {
        deep: true,
        handler() {
            const updatedFields = JSON.parse(sessionStorage.getItem("updatedFields")) || [];
            this.isImproved = updatedFields.includes('experience');
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media print{

  .not-visible {
    display: none;
  }

  .remove-bnt{
    display: none;
  }
  .job-edit {
    display: none;
  }

  .title {
    margin-left: 5px;
  }
}

.options-div {
  min-width: 100px;
  position: absolute;
  display: flex;
  right: 10%;
  justify-content: space-between;

  && {
    .remove-bnt{
      position: relative;
    }
  }

}

.job-edit {
  position: relative;
  top: 0;
}

.editar:active {
  transform: scale(0.9);
}

.editar-animado-resumo{
  width:20px;
  display: none;
  float:right;
}
.title:hover .editar-animado-resumo{
  display: block;
}

.templete1-experiencias-container{
  color: black !important;
  height: 100%;
  align-self: center;
  margin: 0 auto;
  padding-top: 35px;
  display: block;
  background-color: whitesmoke;
  padding: 10px;
  margin-bottom: 10px;
}

.template1-experiencias-container:hover .remove-bnt {
  display: block;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  width: 20px;
  float: right;
}

.template2-experiencias-container:hover .remove-bnt {
  display: block;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
}

.template2-experiencias-container:hover .remove-bnt:last-child {
  margin-left: 20%;
}

.title {
    width: 91%;
}
.data-container-page-title{
    width: 50%;
    font-weight: bold;
    text-transform: uppercase;
}
#job-description{
  max-width: 100%;
  max-height: 100%;
  word-wrap: break-word;
}
#lastjob-description{
  max-width: 100%;
  max-height: 100%;
  word-wrap: break-word;
}
@media screen and (max-width: 1000px) {
  .experiencias {
    min-height: 60px;
    height: calc(100% + 100px);
  }
  .experiences-template1-title-white{
      margin-bottom: 100px;
    }

    .experiences-template1-title-black{
      margin-bottom: 100px;
    }
}
.experiences-template1-title-white{
  color: white;
}

.experiences-template1-title-black{
  color: black;
}

@media screen and (max-width: 400px) {
/* templete 2 tem um padding que deixa estranho isso, esse margin negativo corrige */
  .experiencias.templete2.template-data {
    margin-left: -5px !important;
  }
}
</style>
