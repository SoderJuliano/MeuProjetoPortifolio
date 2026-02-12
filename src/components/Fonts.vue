<template>
    <div class="fonts-container">
      <div class="fonts-trigger" @click.stop="openFontsContainer">
        <svg class="fonts-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="4 7 4 4 20 4 20 7"></polyline>
          <line x1="9" y1="20" x2="15" y2="20"></line>
          <line x1="12" y1="4" x2="12" y2="20"></line>
        </svg>
        <p class="tside">{{this.language.includes("en") ? "FONTS" : "FONTES"}}</p>
      </div>
        <div class="dropdown">
            <div v-if="isOpen" class="dropdown-content" :class="{ 'dropdown-content--mobile': isMobile }">
              <div class="dropdown-overlay" @click.stop="closeFontDiv"></div>
              <div class="dropdown-modal" @click.stop>
                <div class="dropdown-header">
                  <h3 class="dropdown-title">{{this.language.includes("en") ? "Choose Font" : "Escolher Fonte"}}</h3>
                  <button class="closeFontsDiv" @click.stop="closeFontDiv">×</button>
                </div>
                <div class="dropdown-scroll">
                  <div class="row" @click="changeFont(Oswald)">
                    <p style="font-family: 'Oswald', sans-serif !important; font-weight: bold;">Oswald</p>
                  </div>
                  <div class="row" @click="changeFont(STIXTwoMath)">
                    <p style="font-family: 'STIX Two Math', serif; font-weight: bold">STIX Two Math</p>
                  </div>
                  <div class="row" @click="changeFont(KaiseiDecol)">
                    <p style="font-family: 'Kaisei Decol', serif;">Kaisei Decol</p>
                  </div>
                  <div class="row" @click="changeFont(Dongle)">
                    <p style="font-family: 'Dongle', sans-serif;">Dongle</p>
                  </div>
                  <div class="row" @click="changeFont(verdana)">
                    <p style="font-family: verdana">verdana</p>
                  </div>
                  <div class="row" @click="changeFont(ZenLoop)">
                    <p style="font-family:'Zen Loop', cursive !important; font-weight: bold">Zen Loop</p>
                  </div>
                  <div class="row" @click="changeFont(Fuggles)">
                    <p style="font-family: 'Fuggles', cursive; font-weight: bold">Fuggles</p>
                  </div>
                  <div class="row" @click="changeFont(HinaMincho)">
                    <p style="font-family: 'Hina Mincho', serif;">Hina Mincho</p>
                  </div>
                  <div class="row" @click="changeFont(Inconsolata)">
                    <p style="font-family: 'Inconsolata', monospace;">Inconsolata</p>
                  </div>
                  <div class="row" @click="changeFont(Teko)">
                    <p style="font-family: 'Teko', sans-serif;">Teko</p>
                  </div>
                  <div class="row" @click="changeFont(Crimson)">
                    <p style="font-family: 'Crimson Text', serif;">Crimson</p>
                  </div>
                  <div class="row" @click="changeFont(Mochiy)">
                    <p style="font-family: 'Mochiy Pop One', sans-serif;">Mochiy</p>
                  </div>
                  <div class="row" @click="changeFont(Roboto)">
                    <p style="font-family: 'Roboto Mono', monospace;">Roboto</p>
                  </div>
                  <div class="row" @click="changeFont(CourierNew)">
                    <p style="font-family:'Courier New'">Courier New</p>
                  </div>
                </div>
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
      isOpen: false,
      isMobile: false,
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
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    closeAll() {
      this.isOpen = false;
      $(".side-colors").css({"display": "none"});
      $(".colors").css({"display": "none"});
      $(".avatares-subcontainer").css({"display": "none"});
      $(".shapes").css({"display": "none"});
      $(".dropdown-templates").css({"display": "none"});
    },
    openFontsContainer(){
      this.closeAll();
      this.isOpen = true;
    },
    closeFontDiv(){
      this.isOpen = false;
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
  width: 100%;
}

.fonts-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-radius: 8px;
  background: transparent;
}

.fonts-trigger:hover {
  background: rgba(110, 142, 251, 0.1);
  transform: translateX(3px);
}

.fonts-trigger:active {
  transform: translateX(3px) scale(0.98);
}

.fonts-icon {
  flex-shrink: 0;
  color: #6e8efb;
  transition: all 0.3s ease;
}

.fonts-trigger:hover .fonts-icon {
  transform: scale(1.1);
  color: #5a7ef0;
}

.fonts-trigger .tside {
  margin: 0;
  flex: 1;
}

.dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 2px solid #e0e0e0;
  margin-bottom: 15px;
  flex-shrink: 0;
}

.dropdown-title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #2c3e50;
  letter-spacing: 0.5px;
}

.closeFontsDiv {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  padding: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
  color: white;
  border: none;
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  flex-shrink: 0;
  overflow: hidden;
}

.closeFontsDiv:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(255, 107, 107, 0.4);
}

.closeFontsDiv:active {
  transform: scale(0.95);
}

.dropdown-scroll {
  overflow-y: auto;
  overflow-x: hidden;
  padding: 5px;
  flex: 1;
}

/* Scroll invisível mas funcional */
.dropdown-scroll::-webkit-scrollbar {
  width: 6px;
}

.dropdown-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.dropdown-scroll::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  transition: background 0.3s ease;
}

.dropdown-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.2);
}

/* Firefox */
.dropdown-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.1) transparent;
}

.row {
  min-width: 200px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 14px 16px;
  box-sizing: border-box;
  background: white;
  border: 2px solid transparent;
}

.row:hover {
  background: linear-gradient(135deg, #f5f7fa, #e8ebf0);
  border-color: #6e8efb;
  transform: translateX(5px);
  box-shadow: 0 4px 12px rgba(110, 142, 251, 0.2);
}

.row:active {
  transform: translateX(5px) scale(0.98);
  background: linear-gradient(135deg, #e8ebf0, #dfe3e8);
}

.row p {
  width: 100%;
  text-align: left;
  font-weight: 600;
  margin: 0;
  font-size: 18px;
  color: #2c3e50;
  transition: color 0.3s ease;
}

.row:hover p {
  color: #6e8efb;
}

/* Desktop */
@media screen and (min-width: 1001px) {
  .fonts-container{
    width: 100%;
    background-color: white;
  }

  .dropdown-content {
    margin-left: 15px;
    border-radius: 12px;
    display: grid;
  }
  
  .dropdown-scroll {
    max-height: 400px;
  }
  
  .dropdown-overlay {
    display: none;
  }
  
  .dropdown-modal {
    width: 100%;
  }
}

/* Tablet */
@media screen and (max-width: 1000px) and (min-width: 769px) {
  .fonts-container{
    width: 100%;
    background-color: white;
  }
  
  .dropdown-content {
    margin-left: 0px !important;
    border-radius: 12px;
    display: grid;
  }
  
  .dropdown-overlay {
    display: none;
  }
  
  .dropdown-modal {
    width: 100%;
  }
}

/* Mobile - Tela cheia centralizada */
@media screen and (max-width: 768px) {
  .fonts-container{
    width: 100%;
    background-color: white;
  }
  
  .dropdown-content--mobile {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    margin: 0 !important;
    border-radius: 0 !important;
    display: flex !important;
    align-items: center;
    justify-content: center;
    z-index: 9999 !important;
    background: transparent !important;
    border: none !important;
    padding: 0 !important;
    box-shadow: none !important;
  }
  
  .dropdown-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    z-index: 1;
    animation: fadeIn 0.3s ease-out;
  }
  
  .dropdown-modal {
    position: relative;
    z-index: 2;
    width: 90vw;
    max-width: 450px;
    max-height: 80vh;
    background: white;
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  .dropdown-title {
    font-size: 22px;
  }
  
  .dropdown-scroll {
    max-height: calc(80vh - 100px);
    margin: 0 -8px;
    padding: 0 8px;
  }
  
  .row {
    padding: 16px 20px;
    margin-bottom: 12px;
    border-radius: 14px;
    background: #f8f9fa;
    border: 2px solid #e9ecef;
  }
  
  .row:active {
    transform: scale(0.96);
  }
  
  .row p {
    font-size: 20px;
  }
}

/* iPhone SE e dispositivos muito pequenos */
@media screen and (max-width: 375px) {
  .dropdown-modal {
    width: 95vw;
    max-height: 85vh;
    padding: 20px;
    border-radius: 16px;
  }
  
  .dropdown-title {
    font-size: 18px;
  }
  
  .closeFontsDiv {
    width: 32px;
    height: 32px;
    font-size: 20px;
  }
  
  .row {
    padding: 14px 16px;
    margin-bottom: 10px;
  }
  
  .row p {
    font-size: 18px;
  }
}

.dropdown {
  width: 85%;
  position: relative;
  display: inline-block;
  border-radius: 12px;
}

/* Desktop - Grid de 3 colunas */
@media screen and (min-width: 769px) {
  .dropdown-content {
    position: static !important;
    display: block !important;
    width: 100% !important;
    height: auto !important;
    margin: 0 !important;
    padding: 0 !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }
  
  .dropdown-overlay {
    display: none !important;
  }
  
  .dropdown-modal {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 600px;
    max-height: 500px;
    background: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    border: 2px solid #e0e0e0;
    z-index: 1000;
    margin-top: 10px;
  }
  
  .dropdown-header {
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 12px;
    margin-bottom: 15px;
  }
  
  .dropdown-scroll {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    max-height: 400px;
    overflow-y: auto;
    padding: 5px;
  }
  
  .row {
    padding: 16px 12px;
    background-color: #f8f9fa;
    border: 2px solid #dee2e6;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 0;
    width: 100%;
  }
  
  .row:hover {
    background-color: #e9ecef;
    border-color: #6e8efb;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(110, 142, 251, 0.2);
  }
  
  .row:active {
    transform: translateY(0) scale(0.98);
  }
  
  .row p {
    margin: 0;
    font-size: 15px;
    text-align: center;
    color: #2c3e50;
  }
}

/* Animações */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
