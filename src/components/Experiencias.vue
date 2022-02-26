<template>
  <div :class="tstyle">
      <p class="title" :style="getStyle()">{{titulo}}
        <img src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-experiencia')"/>
        <img src="../icons/animados/editar.gif" alt="editar" class="editar-animado-resumo" @click="$emit('add-experiencia')"/>
      </p>
      <div :id="item.function" v-for="(item, index) in experiences.slice().reverse() " :key="index" class="experiencias-container">
        <img v-if="item" @click="removeJob(item)" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt">
          <h3>{{item.function}}</h3>
          <div style="display: flex">
            <h4 style="margin-top: 0; margin-right:10px;">{{item.company}}</h4>
            <span style="margin-top: 0; margin-right:10px;">{{item.dateHired}}</span> 
              ate 
            <span style="margin-top: 0; margin-left:10px;" v-if="item.dateFired">{{item.dateFired}}</span>
            <span style="margin-top: 0; margin-left:10px;" v-else> hoje</span>
          </div>
          <p>{{item.description}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Experiencias',
  emits: ['add-experiencia'],
  props:{
    template: String,
    titulo: String,
    cor: String,
    sideColor: String,
    experiences: Array,
  },
  data(){
    return{
      jobHired: '',
      jobEnd: '',
      lasJobHired: '',
      lastJobEnd: '',
      tstyle: 'experiences-'+this.template+'-title',
    }
  },
  methods:{
      getStyle(){
          return{
              'background-color': `${this.cor}`,
              "border-bottom": "1px solid "+this.sideColor
          }
      },
      removeJob(item){
        document.getElementById(item.function).style.display = "none"
        this.removerJobs(item)
      },
      removerJobs(item){
            let j = localStorage.getItem('jobs')
            if(j){
                let objarray = JSON.parse(j)
                objarray.map(function(val, index){
                  if(val.function==item.function){
                    objarray.splice(index, 1)
                  }
                })
                localStorage.setItem('jobs', JSON.stringify(objarray))
            }
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
  }/* 
  .title{
    break-before: always;
  } */
}
.editar-animado-resumo{
  width:30px;
  display: none;
  float:right;
}
.title:hover .editar-animado-resumo{
  display: block;
}
.title:hover .editar{
  display: none;
}
.remove-bnt{
  float: right;
  position: relative;
  margin-top: 20px;
  margin-right: 20px;
}
.experiencias-container{
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
  word-break: keep-all;
}
#lastjob-description{
  max-width: 100%;
  max-height: 100%;
  word-break: keep-all;
}
@media screen and (max-width: 1000px) {
  .experiencias{
    min-height: 60px;
  }
  
}
</style>
