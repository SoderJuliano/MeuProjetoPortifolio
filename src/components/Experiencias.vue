<template>
  <div class="experiencias">
      <p class="title" :style="getStyle()">{{titulo}}
        <img src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-experiencia')"/>
      </p>
      <div :id="item.function" v-for="(item, index) in experiences " :key="index" class="experiencias-container">
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
    titulo: String,
    cor: String,
    experiences: Array,
  },
  data(){
    return{
      jobHired: '',
      jobEnd: '',
      lasJobHired: '',
      lastJobEnd: ''
    }
  },
  methods:{
      getStyle(){
          return{
              'background-color': `${this.cor}`
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
     
     // converting data to array strings
/*
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
      this.jobHired = stng*/
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
.remove-bnt{
  float: right;
  position: relative;
  margin-top: 20px;
  margin-right: 20px;
}
.experiencias-container{
  color: black !important;
  width: 100%;
  height: 100%;
  align-self: center;
  margin: 0 auto;
  padding-top: 20px;
  display: block;
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
</style>
