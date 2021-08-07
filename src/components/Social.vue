<template>
    <div class="social">
      <p class="title" style="background-color:`{{backgroundColor}}`">{{titulo}} 
          <img src="../icons/editar.png" alt="editar" class="editar" @click="showEditarHabilidade"/></p>
      <div class="social-container">
          <div v-if="face" class="social-row">
              <img src="../icons/face.png" class="social-icon"/>
              <span class="data-container">{{face}}</span>
          </div>
          <div v-if="lin" class="social-row">
              <img src="../icons/in.png" class="social-icon"/>
              <span class="data-container">{{lin}}</span>
          </div>
          <div v-if="twitt" class="social-row">
              <img src="../icons/twit.png" class="social-icon"/>
              <span class="data-container">{{twitt}}</span>
          </div>
          <div v-if="you" class="social-row">
              <img src="../icons/youtube.png" class="social-icon"/>
              <span class="data-container">{{you}}</span>
          </div>
          <div v-if="stof" class="social-row">
              <img src="../icons/stof.jpeg" class="social-icon"/>
              <span class="data-container">{{stof}}</span>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name: "Social",
    props:{
        titulo: String,
        backgroundColor: String,
        face: String,
        lin: String,
        twitt: String,
        you: String,
        stof: String
    },
    methods:{
        showEditarHabilidade(){
            document.getElementsByClassName('editar-social')[0].style.display = 'block'
            document.getElementsByClassName('editar-social')[0].style.opacity = '90%'
        }
    }
}
</script>
<style scoped>

.social-container{
  width: 80%;
  height: 100%;
  align-self: center;
  margin: 0 auto;
  padding-top: 20px;
  display: block;
}
.social-icon{
  width: 40px;
  height: 40px;
  padding-top: 20px;
  margin-right: 10px;
}
.social-row{
    display: flex;
    padding: 10px;
    width: 100%;
}
.social-row span{
    padding-top: 20px;
    word-break: break-all;
}
</style>