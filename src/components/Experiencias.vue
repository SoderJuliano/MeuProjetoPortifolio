<template>
  <div class="experiencias">
      <p class="title" :style="getStyle()">{{titulo}}</p>
      <div class="experiencias-container">
         <span class="data-container-page-title">{{lastJob.title}}</span>
         <li>de {{lastJob.hired}} à {{lastJob.end}}</li>
         <p>{{lastJob.description}}</p>
      </div>
      <div class="experiencias-container">
         <span class="data-container-page-title">{{job.title}}</span>
         <li>de {{job.hired}} à {{job.end}}</li>
         <p>{{job.description}}</p>
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
  methods:{
      getStyle(){
          return{
              'background-color': `${this.cor}`
          }
      }
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
</style>
