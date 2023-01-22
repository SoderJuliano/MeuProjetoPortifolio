<template>
  <div :class="tstyle">
      <p @mouseover="hovert" @mouseleave="leavehovert" class="title" :style="getStyle()">{{language == 'pt-br' ? titulo[0] : titulo[1]}}
        <img id="edit-exp" src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-experiencia')"/>
        <img v-if="template== 2" src="../icons/animados/editar.gif" alt="editar" class="editar-animado-resumo" @click="$emit('add-experiencia')"/>
      </p>
      <div v-for="(item, index) in jobs.slice().reverse()" :key="index" :class="cstyle">
        <img v-if="item" @click="removeJob(item)" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt">
          <h3>{{item.function}}</h3>
          <div style="display: flex">
            <h4 style="margin-top: 0; margin-right:10px;">{{item.company}}</h4>
            <span style="margin-top: 0; margin-right:10px;">{{item.dateHired}}</span> 
              {{this.language=='pt-br'? 'ate' : 'until' }} 
            <span style="margin-top: 0; margin-left:10px;" v-if="item.dateFired">{{item.dateFired}}</span>
            <span style="margin-top: 0; margin-left:10px;" v-else>{{this.language=='pt-br'? 'hoje' : 'today'}}</span>
          </div>
          <p>{{item.description}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Experiencias',
  emits: ['add-experiencia', 'update-experiences'],
  props:{
    template: Number,
    titulo: Array,
    language: String,
    cor: String,
    sideColor: String,
    experiences: Array,
    fontColor: String,
  },
  data(){
    return{
      jobHired: '',
      jobEnd: '',
      lasJobHired: '',
      lastJobEnd: '',
      tstyle: 'experiences-template'+this.template+'-title-'+this.fontColor,
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
              "text-align": this.template == 2 ? "start" : "center"
          }
      },
      removeJob(item){

        this.jobs.splice(this.jobs.indexOf(item), 1)
          
        localStorage.setItem('jobs', JSON.stringify(this.jobs))
        this.$emit('update-experiences', this.jobs)
      },
  },
  beforeMount(){
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
  width:30px;
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
  padding-top: 20px;
  display: block;
  background-color: whitesmoke;
  padding: 10px;
  margin-bottom: 10px;
}
.title{
    width: 98.35%;
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
  .experiencias{
    min-height: 60px;
  }
}
.experiences-template1-title-white{
  color: white;
}

.experiences-template1-title-black{
  color: black;
}
</style>
