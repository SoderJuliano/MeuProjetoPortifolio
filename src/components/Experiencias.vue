<template>
  <div class="experiencias">
      <p class="title" :style="getStyle()">{{titulo}}
        <img src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-experiencia')"/>
      </p>
      <div v-for="(item, index) in experiences " :key="index" class="experiencias-container">
          <h3>{{item.function}}</h3>
          <h4>{{item.company}}</h4>
          <span>{{item.dateHired}}</span> ate <span v-if="item.dateFired">{{item.dateFired}}</span><span v-else> hoje</span>
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
      getOpacity(){/*
        if(this.job.title){
          return {'opacity': '100%'}
        }else{
          return {'opacity': '0%'}
        }*/
      },
      getOpacity2(){/*
        if(this.lastJob.title){
          return {'opacity': '100%'}
        }else{
          return {'opacity': '0%'}
        }*/
      },
      /*showEditarExperiencias(){
        document.getElementsByClassName('editar-experiencias')[0].style.display = 'block'
        document.getElementsByClassName('editar-experiencias')[0].style.opacity = '100% !important'
        //abre o componente e faz scroll to the top
        window.scrollTo(0,0)
      }*/
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
