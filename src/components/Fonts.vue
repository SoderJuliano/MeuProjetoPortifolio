<template>
    <div class="fonts-container" @click="closeFontsContainer">
      <p class="tside" @click="openFontsContainer">{{this.language.includes("en") ? "FONTS" : "FONTES"}}</p>
        <div class="dropdown">
            <div class="dropdown-content">
              <div class="dropdown-header">
                <h3 class="dropdown-title">{{this.language.includes("en") ? "Choose Font" : "Escolher Fonte"}}</h3>
                <div class="closeFontsDiv" @click="closeFontDiv()">×</div>
              </div>
              <div class="dropdown-scroll">
              <div class="row">
                  <p style="font-family: 'Oswald', sans-serif !important; font-weight: bold;" @click=changeFont(Oswald) >Oswald</p>
              </div>
              <div class="row">
                <p style="font-family': 'STIX Two Math', serif; font-weight: bold" @click=changeFont(STIXTwoMath) >STIX Two Math</p>
              </div>
              <div class="row">
                <p style="font-family: 'Kaisei Decol', serif;" @click=changeFont(KaiseiDecol) >Kaisei Decol</p>
              </div>
              <div class="row">
                <p style="font-family: 'Dongle', sans-serif;" @click=changeFont(Dongle) >Dongle</p>
              </div>
              <div class="row">
                <p style="font-family: verdana" @click=changeFont(verdana)>verdana</p>
              </div>
              <div class="row">
                <p style="font-family:'Zen Loop', cursive !important; font-weight: bold" @click=changeFont(ZenLoop) >Zen Loop</p>
              </div>
              <div class="row">
                <p style="font-family: 'Fuggles', cursive; font-weight: bold" @click=changeFont(Fuggles) >Fuggles</p>
              </div>
              <div class="row">
                <p style="font-family: 'Hina Mincho', serif;" @click=changeFont(HinaMincho) >Hina Mincho</p>
              </div>
              <div class="row">
                <p style="font-family: 'Inconsolata', monospace;" @click=changeFont(Inconsolata) >Inconsolata</p>
              </div>
              <div class="row">
                <p style="font-family: 'Teko', sans-serif;" @click=changeFont(Teko) >Teko</p>
              </div>
              <div class="row">
                <p style="font-family: 'Crimson Text', serif;" @click=changeFont(Crimson) >Crimson</p>
              </div>
              <div class="row">
                <p style="font-family: 'Mochiy Pop One', sans-serif;" @click=changeFont(Mochiy) >Mochiy</p>
              </div>
              <div class="row">
                <p style="font-family: 'Roboto Mono', monospace;" @click=changeFont(Roboto) >Roboto</p>
              </div>
              <div class="row"><p style="font-family:'Courier New'" @click=changeFont(CourierNew)>Courier New</p></div>
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
  props: {
    language: String
  },
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
      // Aplica a fonte imediatamente aos elementos principais
      const mainElements = $(".main, .side, #template, .template");
      mainElements.css("font-family", font);
      
      // Salva a configuração
      const fontConfig = new PageConfig().recoverConfigs();
      fontConfig.setFont(font);
      fontConfig.save();
      
      // Emite o evento de atualização
      this.$emit("update-configs");
      
      // Fecha o dropdown
      this.closeFontDiv();
    }
  }
}
</script>

<style scoped>

.fonts-container{
  height: 40px;
}

.dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
}

.dropdown-title {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.closeFontsDiv {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ff4757;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.2s ease;
}

.closeFontsDiv:hover {
  background-color: #ff3838;
  transform: scale(1.1);
}

.dropdown-scroll {
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 5px;
}

.row {
  min-width: 200px;
  width: 100%;
  display: flex;
  justify-content: start;
  margin-bottom: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  padding: 8px;
  box-sizing: border-box;
}

.row:hover {
  background-color: #f1f2f6;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.row:active {
  background-color: #ddd;
  transform: scale(0.98);
}

.row p {
  width: 100%;
  text-align: left;
  font-weight: bolder;
  margin: 0;
  font-size: 16px;
  color: #2c3e50;
}

/* Desktop */
@media screen and (min-width: 1001px) {
  .fonts-container{
    width: 100%;
    background-color: white;
  }

  .dropdown-content {
    margin-left: 15px;
    border-radius: 8px;
  }
  
  .dropdown-scroll {
    max-height: 400px;
  }
}

/* Tablet */
@media screen and (max-width: 1000px) and (min-width: 768px) {
  .fonts-container{
    width: 100%;
    background-color: white;
  }
  
  .dropdown-content {
    margin-left: 0px !important;
    border-radius: 8px;
  }
}

/* Mobile - Padrão */
@media screen and (max-width: 767px) {
  .fonts-container{
    width: 100%;
    background-color: white;
  }
  
  .dropdown-content {
    margin-left: 0px !important;
    border-radius: 12px;
    max-width: 95vw;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
  
  .dropdown-scroll {
    max-height: 50vh;
  }
  
  .dropdown-scroll::-webkit-scrollbar {
    width: 8px;
  }
  
  .dropdown-scroll::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  .dropdown-scroll::-webkit-scrollbar-thumb {
    background: #c7c7c7;
    border-radius: 4px;
  }
  
  .dropdown-scroll::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
  
  .row {
    padding: 12px;
    margin-bottom: 8px;
    border-radius: 10px;
  }
  
  .row p {
    font-size: 18px;
  }
}

/* iPhone SE e dispositivos muito pequenos */
@media screen and (max-width: 375px) {
  .dropdown-content {
    max-width: 98vw;
    padding: 15px;
    margin: 0 1vw;
    overflow-x: hidden;
  }
  
  .dropdown-scroll {
    max-height: 45vh;
    overflow-x: hidden;
  }
  
  .dropdown-title {
    font-size: 14px;
  }
  
  .row {
    padding: 10px;
    margin-bottom: 6px;
    min-width: 0;
    max-width: 100%;
  }
  
  .row p {
    font-size: 16px;
    word-break: break-word;
  }
  
  .closeFontsDiv {
    width: 25px;
    height: 25px;
    font-size: 14px;
  }
}

.dropdown {
  width: 85%;
  position: relative;
  display: inline-block;
  border-radius: 8px;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 20%;
  width: 100%;
  z-index: 1000;
  padding: 15px;
  border: 2px solid #e0e0e0;
  background-color: white;
  margin-top: -15px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  backdrop-filter: blur(10px);
}

/* Animação suave de entrada */
.dropdown-content {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
