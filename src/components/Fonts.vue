<template>
    <div class="fonts-container" @click="closeFontsContainer()">
      <p class="tside" @click="openFontsContainer()">FONTES</p>
        <div class="dropdown">
            <div class="dropdown-content">
              <div class="closeFontsDiv" @click="closeFontDiv()">X</div>
              <div class="row">
                  <p style="font-family: 'Oswald', sans-serif !important; font-weight: bold" @click='$emit("changefont")' >Oswald</p>
                  <p style="font-family:'Zen Loop', cursive !important; font-weight: bold" @click='$emit("changefont")' >Zen Loop</p>
                  <p style="font-family: 'Fuggles', cursive; font-weight: bold" @click='$emit("changefont")' >Fuggles</p>
              </div>
              <div class="row">
                <p style="font-family': 'STIX Two Math', serif; font-weight: bold" @click='$emit("changefont")' >STIX Two Math</p>
                <p style="font-family: 'Hina Mincho', serif;" @click='$emit("changefont")' >Hina Mincho</p>
                <p style="font-family: 'Inconsolata', monospace;" @click='$emit("changefont")' >Inconsolata</p>
              </div>
              <div class="row">
                <p style="font-family: 'Kaisei Decol', serif;" @click='$emit("changefont")' >Kaisei Decol</p>
                <p style="font-family: 'Teko', sans-serif;" @click='$emit("changefont")' >Teko</p>
                <p style="font-family: 'Crimson Text', serif;" @click='$emit("changefont")' >Crimson</p>
              </div>
              <div class="row">
                <p style="font-family: 'Dongle', sans-serif;" @click='$emit("changefont")' >Dongle</p>
                <p style="font-family: 'Mochiy Pop One', sans-serif;" @click='$emit("changefont")' >Mochiy</p>
                <p style="font-family: 'Roboto Mono', monospace;" @click='$emit("changefont")' >Roboto</p>
              </div>
              <div class="row">
                <p style="font-family: verdana" @click='$emit("changefont")'>verdana</p>
                <p style="font-family:'Courier New'" @click='$emit("changefont")'>Courier New</p>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'fonts',
  methods: {
    openFontsContainer(){
      $(".dropdown-content").css({"display": "grid", "position": "absolute"});
    },
    closeFontDiv(){
      $(".dropdown-content").css({"display": "none"});
    }
  }
}
</script>

<style scoped>
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
  justify-content: space-around;
}
@media screen and(min-width: 1001px) {
  .fonts-container{
    min-height: 100px;
    max-height: 100%;
    width: 100%;
    background-color: white;
  }
}
@media screen and(max-width: 1000px) {
    .fonts-container{
        min-height: 50px;
        overflow: scroll;
        width: 100%;
        background-color: white;
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
  margin-left: 15px;
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