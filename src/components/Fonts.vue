<template>
    <div class="fonts-container" @click="closeFontsContainer">
      <p class="tside" @click="openFontsContainer">FONTES</p>
        <div class="dropdown">
            <div class="dropdown-content">
              <div class="closeFontsDiv" @click="closeFontDiv()">X</div>
              <div class="row">
                  <p style="font-family: 'Oswald', sans-serif !important; font-weight: bold;" @click=changeFont(Oswald) >Oswald</p>
                  <p style="font-family:'Zen Loop', cursive !important; font-weight: bold" @click=changeFont(ZenLoop) >Zen Loop</p>
                  <p style="font-family: 'Fuggles', cursive; font-weight: bold" @click=changeFont(Fuggles) >Fuggles</p>
              </div>
              <div class="row">
                <p style="font-family': 'STIX Two Math', serif; font-weight: bold" @click=changeFont(STIXTwoMath) >STIX Two Math</p>
                <p style="font-family: 'Hina Mincho', serif;" @click=changeFont(HinaMincho) >Hina Mincho</p>
                <p style="font-family: 'Inconsolata', monospace;" @click=changeFont(Inconsolata) >Inconsolata</p>
              </div>
              <div class="row">
                <p style="font-family: 'Kaisei Decol', serif;" @click=changeFont(KaiseiDecol) >Kaisei Decol</p>
                <p style="font-family: 'Teko', sans-serif;" @click=changeFont(Teko) >Teko</p>
                <p style="font-family: 'Crimson Text', serif;" @click=changeFont(Crimson) >Crimson</p>
              </div>
              <div class="row">
                <p style="font-family: 'Dongle', sans-serif;" @click=changeFont(Dongle) >Dongle</p>
                <p style="font-family: 'Mochiy Pop One', sans-serif;" @click=changeFont(Mochiy) >Mochiy</p>
                <p style="font-family: 'Roboto Mono', monospace;" @click=changeFont(Roboto) >Roboto</p>
              </div>
              <div class="row">
                <p style="font-family: verdana" @click=changeFont(verdana)>verdana</p>
                <p style="font-family:'Courier New'" @click=changeFont(CourierNew)>Courier New</p>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import PageConfig  from '../model/configModel';

export default {
  name: 'fonts',
  emits: ["update-configs"],
  data(){
    return{
      Oswald: "'Oswald', sans-serif",
      ZenLoop: "'Zen Loop', cursive",
      Fuggles: "'Fuggles', cursive",
      STIXTwoMath: "'STIX Two Math', serif",
      HinaMincho: "'Hina Mincho', serif",
      Inconsolata: "'Inconsolata', monospace",
      KaiseiDecol: "'Kaisei Decol', serif",
      Teko: "'Teko', sans-serif",
      Crimson: "'Crimson Text', serif",
      Dongle: "'Dongle', sans-serif",
      Mochiy: "'Mochiy Pop One', sans-serif",
      Roboto: "'Roboto Mono', monospace",
      verdana: "'verdana', sans-serif",
      CourierNew: "'Courier New', monospace"
    }
  },
  methods: {
    closeAll() {
      $(".side-colors").css({"display": "none"});
      $(".colors").css({"display": "none"});
      $(".dropdown-content").css({"display": "none"});
      $(".avatares-subcontainer").css({"display": "none"});
      $(".shapes").css({"display": "none"});
      $(".dropdown-templates").css({"display": "none"});
    },
    openFontsContainer(){
      this.closeAll();
      $(".dropdown-content").css({"display": "grid", "position": "absolute"});
    },
    closeFontDiv(){
      $(".dropdown-content").css({"display": "none"});
    },
    changeFont(font){
      const fontConfig = new PageConfig().recoverConfigs();
      fontConfig.setFont(font);
      fontConfig.save();
      // console.log("font config updated")
      this.$emit("update-configs");
    }
  }
}
</script>

<style scoped>

.fonts-container{
  height: 40px;
}
.closeFontsDiv{
  border-radius: 5px;
  border: solid 1px black;
  width: 20px;
  height: 20px;
  text-align: center;
  font-size: 16px !important;
  background-color: black;
  color: white;
}

.row{
  display: flex;
  justify-content: start;
}

.row p {
  width: 100px;
  text-align: start;
}

@media screen and(min-width: 1001px) {
  .fonts-container{
    width: 100%;
    background-color: white;
  }

  .dropdown-content {
    margin-left: 15px;
  }
}
@media screen and(max-width: 1000px) {
    .fonts-container{
        overflow: scroll;
        width: 100%;
        background-color: white;
    }
    .dropdown-content {
      margin-left: 0px !important;
    }
}

.pFont:hover{
    background-color: gray;
    color: white;
    box-shadow: whitesmoke -2px -2px;
}
.pFont:active{
    background-color: black;
    color:white;
}
.dropdown p{
    font-weight: bolder;
    margin-left: 20px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 300px;
  z-index: 1;
  overflow-y: scroll;
  padding: 15px;
  border-style: solid;
  border-color: black;
  background-color: rgba(245, 245, 245, 0.719);
  margin-top: -15px;
  justify-content: space-around;
}

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

.dropdown-content p:hover{
  background-color: gray;
}
</style>