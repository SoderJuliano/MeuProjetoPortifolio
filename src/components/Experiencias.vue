<template>
  <div class="experiencias">
      <p class="title" :style="getStyle()">{{titulo}}
        <img src="../icons/editar.png" alt="editar" class="editar" @click="showEditarExperiencias"/>
      </p>
      <div :style="getOpacity2()" class="experiencias-container">
         <span class="data-container-page-title">{{lastJob.title}} - {{lastJob.company}}</span>
         <li  id='lastjob-dates'>de {{lasJobHired}} à {{lastJobEnd}}</li>
         <p id="lastjob-description">{{lastJob.description}}</p>
      </div>
      <div :style="getOpacity()" class="experiencias-container">
         <span  id="job-title" class="data-container-page-title">{{job.title}} - {{job.company}}</span>
         <li id="job-dates">de {{jobHired}} à {{jobEnd}}</li>
         <p id="job-description">{{job.description}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Experiencias',
  props:{
    titulo: String,
    lastJob: Object,
    job: Object,
    cor: String
  },
  data(){
    return{
      jobHired: null,
      jobEnd: null,
      lasJobHired: null,
      lastJobEnd: null
    }
  },
  methods:{
      getStyle(){
          return{
              'background-color': `${this.cor}`
          }
      },
      getOpacity(){
        if(this.job.title){
          return {'opacity': '100%'}
        }else{
          return {'opacity': '0%'}
        }
      },
      getOpacity2(){
        if(this.lastJob.title){
          return {'opacity': '100%'}
        }else{
          return {'opacity': '0%'}
        }
      },
      showEditarExperiencias(){
        document.getElementsByClassName('editar-experiencias')[0].style.display = 'block'
        document.getElementsByClassName('editar-experiencias')[0].style.opacity = '90%'
      }
  },
  beforeMount(){
     
     // converting data to array strings

      let d = this.job.hired
      const newD = d.split('-')
      const stng = newD[2]+"/"+newD[1]+"/"+newD[0]
      
      let de = this.job.end.split('-')
      const newDe = de[2]+"/"+de[1]+"/"+de[0]

      const lasd = this.lastJob.hired.split('-')
      const lasthired = lasd[2]+"/"+lasd[1]+"/"+lasd[0]

      if(!this.lastJob.end){
        this.lastJobEnd = 'emprego atual'
      }else{
        const lastend = this.lastJob.end.split('-')
        this.lastJobEnd = lastend[2]+"/"+lastend[1]+"/"+lastend[0]
      } 

      this.lasJobHired = lasthired
      this.jobEnd = newDe
      this.jobHired = stng
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.experiencias-container{
  width: 100%;
  height: 100%;
  align-self: center;
  margin: 0 auto;
  padding-top: 20px;
  display: block;
}
.title{
    width: 95%;
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
</style>
