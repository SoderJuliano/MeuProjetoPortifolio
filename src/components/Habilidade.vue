<template>
  <div :class="cstyle">
      <p :class="tstyle" style="background-color:`{{backgroundColor}}`">{{titulo}}
        <img src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-habilidade')"/>
      </p>
      <div :class="hcstyle">
          <img src="../icons/html.png" class="habilidade-icon"/>
              <span  class="data-text-habilidades">{{user.hability}}</span> 
        <img @click="removeHabilidades()" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Habilidade',
  emits: ['add-habilidade'],
  data(){
    return {
      tstyle : this.templete+"-title",
      cstyle : this.templete+"-container",
      hcstyle : this.templete+"-habilidade-container"
    }
  },
  props:{
    titulo: String,
    backgroundColor: String,
    user: Object,
    templete: String,
  },
  methods:{
    removeHabilidades(){
      localStorage.removeItem("hability")
      window.location.reload()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.templete1-habilidade-container{
  width: 80%;
  min-height: 100px;
  max-height: 100%;
  align-self: center;
  margin: 0 auto;
  display: flex;
}
.templete2-habilidade-container{
  display: flex !important;
  width: 100%;
  min-height: 100px;
  max-height: 100%;
}
@media print{
  .habilidade-container{
    padding-top: 0px !important;
  }
}

.habilidade-icon{
  width: 25px;
  height: 25px;
  padding-top: 20px;
}
.data-text-habilidades{
  min-height: 20px;
  display: block;
  padding-top: 16px;
  padding-left: 10px;
}

.remove-bnt{
  position: absolute;
  margin-left: 190px;
  margin-top: 10px;
}
.templete2-title{
  text-align: start;
  border-bottom: 1px solid black;

}
.templete2-container{
  width: 80%;
  padding-left: 10px;
}
@media print{
  .remove-bnt{
    display: none;
  }
}
</style>
