<template>
    <div class="social">
      <h3 :class="templateClass" style="background-color:`{{backgroundColor}}`">{{titulo}} 
          <img src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-SocialLink')"/></h3>
      <div class="social-container" v-if="template=='template1'">
          <div :id="`${face}`" v-if="face" class="social-row">
              <img src="../icons/face.png" class="social-icon"/>
              <span class="data-container">{{face}}</span>
              
              <img @click="remove(face)" :id="`${face}`" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt"/>
          </div>
          <div :id="`${lin}`" v-if="lin" class="social-row">
              <img src="../icons/in.png" class="social-icon"/>
              <span class="data-container">{{lin}}</span>
              <img @click="remove(lin)" :id="`${lin}`" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt"/>
          </div>
          <div :id="`${twitt}`" v-if="twitt" class="social-row">
              <img src="../icons/twit.png" class="social-icon"/>
              <span class="data-container">{{twitt}}</span>
              <img @click="remove(twitt)" :id="`${twitt}`" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt"/>
          </div>
          <div :id="`${you}`" v-if="you" class="social-row">
              <img src="../icons/youtube.png" class="social-icon"/>
              <span class="data-container">{{you}}</span>
              <img @click="remove(you)" :id="`${you}`" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt"/>
          </div>
          <div :id="`${stof}`" v-if="stof" class="social-row">
              <img src="../icons/stof.jpeg" class="social-icon"/>
              <span class="data-container">{{stof}}</span>
              <img @click="remove(stof)" :id="`${stof}`" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt"/>
          </div>
          <div :id="`${git}`" v-if="git" class="social-row">
              <img src="../icons/git.png" class="social-icon"/>
              <span class="data-container">{{git}}</span>
              <img @click="remove(git)" :id="`${git}`" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt"/>
          </div>
      </div>
      <div class="social-container" v-if="template=='template2'">
          //continuar
      </div>
    </div>
</template>
<script>
export default {
    name: "Social",
    props:{
        template: String,
        titulo: String,
        backgroundColor: String,
        face: String,
        lin: String,
        twitt: String,
        you: String,
        stof: String,
        git: String
    },
    emits:['add-SocialLink'],
    data(){
        return{
            templateClass: "social-"+this.template
        }
    },
    methods:{
        remove(id){
            document.getElementById(id).style.display = "none"
            let rs = localStorage.getItem('redesociais')
            let newarray = rs.split(",")
            newarray.splice(rs.split(",").indexOf(id), 1)
            localStorage.setItem('redesociais', newarray)
        }
    }
}
</script>
<style>
@media screen and (max-width: 1000px) {
    .remove-bnt{
        position: absolute;
        right: 40px;
    }
}
</style>
<style scoped>

.social-container{
  width: 80%;
  height: 100%;
  align-self: center;
  margin: 0 auto;
  display: block;
}
.social-icon{
  width: 30px;
  height: 30px;
  padding-top: 10px;
  margin-right: 10px;
}
.social-row{
    display: flex;
    width: 100%;
}
.social-row span{
    padding-top: 10px;
    word-break: break-all;
}
@media print{
    .social-row{
        display: flex;
        padding: 0px !important;
        width: 100%;
    }
    .social-container{
        margin: 0 auto;
        padding-top: 0px;
    }
    .remove-bnt{
        display: none;
    }
}
</style>