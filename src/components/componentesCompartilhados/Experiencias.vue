<template>
  <div :class="mainclass">
      <p @mouseover="hovert" @mouseleave="leavehovert" class="title" :style="getStyle()">{{language == 'pt-br' ? titulo[0] : titulo[1]}}
        <showSwitcher
            :className="tstyle"
            :startShowing="user.userExperiences.length > 0"
        />
        <img id="edit-exp" src="../../icons/editar.png" alt="editar" class="editar" @click="$emit('add-experiencia')"/>
        <img v-if="template== 2" src="../../icons/animados/editar.gif" alt="editar" class="editar-animado-resumo" @click="$emit('add-experiencia')"/>
      </p>
      <div v-for="(item, index) in jobs" :key="index" :class="cstyle">
        <img v-if="item" @click="removeJob(item)" class="remove-bnt" src="../../icons/remove.png" alt="remove-bnt">
          <h3>{{item.position}}</h3>
          <div style="display: flex">
            <h4 style="margin-top: 0; margin-right:10px;">{{item.company}}</h4>
            <span style="margin-top: 0; margin-right:10px;">{{item.dateHired}}</span>
            <span v-if="item.dateHired && item.dateFired">{{ item.dateHired ? this.language=='pt-br'? 'até' : 'until' : ''}}</span>
            <span v-else-if="item.dateHired && !item.dateFired">{{item.dateHired ? this.language=='pt-br'? 'trabalho atual.' : 'current job.' : ''}}</span>
            <span style="margin-top: 0; margin-left:10px;" v-if="item.dateFired">{{item.dateFired}}</span>
          </div>
          <p style="background-color:  whitesmoke; padding: 10px; border-radius: 10px;">{{item.description}}</p>
      </div>
  </div>
</template>

<script>

import showSwitcher from '../iconComponent/showSwitcher.vue';

export default {
  name: 'Experiencias',
  emits: ['add-experiencia', "update-experiences"],
  components: {showSwitcher},
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
      tstyle: 'experiences-template'+this.template+'-title-'+ this.fontColor ? this.fontColor : "black",
      cstyle: 'template'+this.template+'-experiencias-container',
      jobs: this.experiences
    }
  },
  methods:{
      hovert(){
        this.template == 2 ?
        document.getElementById("edit-exp").style.display = "none" : ''
      },
      leavehovert(){
        this.template == 2 ?
        document.getElementById("edit-exp").style.display = "block" : ''
      },
      getStyle(){
          return{
              'background-color': `${this.cor}`,
              'color': `${this.fontColor}`,
              "border-bottom": "1px solid "+this.sideColor,
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media print{
  .remove-bnt{
    display: none;
  }
}
.editar-animado-resumo{
  width:20px;
  display: none;
  float:right;
}
.title:hover .editar-animado-resumo{
  display: block;
}
.remove-bnt{
  float: right;
  position: relative;
  margin-top: 20px;
  margin-right: 20px;
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

.template1-experiencias-container:hover .remove-bnt{
  display: block;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  float: right;
}

.title {
    width: 90%;
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
