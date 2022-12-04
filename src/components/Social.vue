<template>
    <div class="social">
      <h3 @mouseover="hovert" @mouseleave="leavehovert" :class="templateClass" :style="getStyle()">{{language == 'pt-br' ? titulo[0] : titulo[1]}} 
          <img id='edit' src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-SocialLink')"/>
          <img v-if="template=='template2'" src="../icons/animados/editar.gif" alt="editar" class="editar-animado" @click="$emit('add-SocialLink')"/></h3>
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
          <div :id="`${insta}`" v-if="insta" class="social-row">
              <img src="../icons/insta.png" class="social-icon"/>
              <span class="data-container">{{insta}}</span>
              <img @click="remove(git)" :id="`${insta}`" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt"/>
          </div>
          <div v-for="(item, index) in other" :key="index" :id="other" class="social-row">
            <span class="data-container">{{item}}</span>
              <img @click="remove(other)" :id="`${item}`" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt"/>
          </div>
      </div>
      <div :class="templateClassItemContainer" v-if="template=='template2'">
          <div :class="templateClassItem" v-for="(item, index) in social " :key="index" >
              <img v-if="item.includes('github')" src="../icons/git.png" class="social-icon"/>
              <img v-if="item.includes('youtube')" src="../icons/youtube.png" class="social-icon"/>
              <img v-if="item.includes('linkedin')" src="../icons/in.png" class="social-icon"/>
              <img v-if="item.includes('stackoverflow')" src="../icons/stof.jpeg" class="social-icon"/>
              <img v-if="item.includes('facebook')" src="../icons/face.png" class="social-icon"/>
              <img v-if="item.includes('twitter')" src="../icons/twit.png" class="social-icon"/>

               <span>{{item}}</span> <!-- fazer um componente para este botao -->
              <img @click="remove(item)" :id="`${item}`" class="remove-bnt-delete" src="../icons/animados/lixeira.gif" alt="remove-bnt"/>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name: "Social",
    props:{
        template: String,
        titulo: Array,
        language: String,
        backgroundColor: String,
        face: String,
        lin: String,
        twitt: String,
        you: String,
        stof: String,
        git: String,
        insta: String,
        other: Array,
        user: Object,
        sideColor: String,
    },
    emits:['add-SocialLink'],
    data(){
        return{
            templateClass: "social-"+this.template,
            templateClassItemContainer: "social-itens-"+this.template,
            templateClassItem: "social-item-"+this.template,
            social: this.user.social
            /* socialIcons: ["../icons/git.png", "../icons/stof.jpeg", "../icons/youtube.png", 
                "../icons/twit.png", "../icons/in.png", "../icons/face.png"
            ] */
        }
    },
    methods:{
        remove(id){
            document.getElementById(id).style.display = "none"
            let rs = localStorage.getItem('redesociais')
            let newarray = rs.split(",")
            newarray.splice(rs.split(",").indexOf(id), 1)
            this.social = newarray
            localStorage.setItem('redesociais', newarray)
        },
        getStyle(){
            return{
                "border-bottom": "1px solid "+this.sideColor,
                "background-color": this.backgroundColor
            }
        },
        hovert(){
            this.template == "template2" ? 
            document.getElementById("edit").style.display = "none" : '';
        },
        leavehovert(){
            document.getElementById("edit").style.display = "block";
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
.social-template1{
    align-self: center;
  background-color: white !important;
  color: black;
  font-weight: bolder;
  width: 80%;
  margin: 0 auto;
  margin-top: 0px;
  margin-top: 10px;
  text-align: center;
  padding: 5px;
}
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