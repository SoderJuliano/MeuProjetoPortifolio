<template>
  <div class="navbar">
    <span @click="setItem('menu')" class="item">Menu</span>
    <span @click="setItem('lang')" class="item">Language</span>
    <span @click="setItem('save')" class="item">Save</span>
    <span @click="setItem('share')" class="item">Share</span>
    <span @click="setItem('download')" class="item">Download</span>
    <span @click="setItem('print')" class="item">Print</span>
    <span @click="setItem('info')" class="item">Info</span>
    <span @click="setItem('about')" class="item">About</span>
    <span @click="setItem('login')" class="item">{{ isLoggedIn ? user?.name?.split(' ')[0] : 'Login' }}</span>
  </div>
  <div v-if="item" class="undernav">
    <!-- Menu options -->
    <div v-if="item === 'menu'" class="menu">
      <!-- Fonts -->
      <div class="menu-section">
        <p class="section-title" @click="toggleSection('fonts')">
          {{ getLanguage() === 'en-us' ? 'Fonts' : 'Fontes' }}
        </p>
        <div v-if="activeSection === 'fonts'" class="section-content">
          <p @click="changeFont('Oswald')" style="font-family: 'Oswald', sans-serif">Oswald</p>
          <p @click="changeFont('Zen Loop')" style="font-family: 'Zen Loop', cursive">Zen Loop</p>
          <p @click="changeFont('Fuggles')" style="font-family: 'Fuggles', cursive">Fuggles</p>
          <p @click="changeFont('STIX Two Math')" style="font-family: 'STIX Two Math', serif">STIX Two Math</p>
          <p @click="changeFont('Crimson')" style="font-family: 'Crimson Text', serif">Crimson</p>
          <p @click="changeFont('Roboto')" style="font-family: 'Roboto Mono', monospace">Roboto</p>
          <p @click="changeFont('verdana')" style="font-family: verdana">Verdana</p>
          <p @click="changeFont('Courier New')" style="font-family: 'Courier New', monospace">Courier New</p>
        </div>
      </div>

      <!-- Font Size -->
      <div class="menu-section">
        <p class="section-title" @click="toggleSection('fontSize')">
          {{ getLanguage() === 'en-us' ? 'Font Size' : 'Tamanho da Fonte' }}
        </p>
        <div v-if="activeSection === 'fontSize'" class="section-content">
          <div class="font-size-controls">
            <p>{{ fontSize }}px</p>
            <div class="size-buttons">
              <button @click="changeFontSize(-1)">-</button>
              <button @click="changeFontSize(1)">+</button>
            </div>
            <div class="font-weight-options">
              <p @click="setFontWeight('normal')" :class="{ active: fontWeight === 'normal' }">Normal</p>
              <p @click="setFontWeight('bold')" :class="{ active: fontWeight === 'bold' }">Bold</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Templates -->
      <div class="menu-section">
        <p class="section-title" @click="toggleSection('templates')">Templates</p>
        <div v-if="activeSection === 'templates'" class="section-content templates">
          <div class="template-option" @click="selectTemplate(1)" :class="{ active: props.template === 1 }">
            Template 1
          </div>
          <div class="template-option" @click="selectTemplate(2)" :class="{ active: props.template === 2 }">
            Template 2
          </div>
          <div class="template-option" @click="selectTemplate(3)" :class="{ active: props.template === 3 }">
            Template 3
          </div>
        </div>
      </div>
    </div>

    <!-- Language options -->
    <div v-if="item === 'lang'" class="lang">
      <p :class="{ active: props.language === 'pt-br'}" @click="updateLanguage('pt-br')">Portuguese</p>
      <p :class="{ active: props.language === 'en-us'}" @click="updateLanguage('en-us')">English</p>
    </div>

    <!-- Save options -->
    <div v-if="item === 'save'" class="save">
      <p @click="dbSave">{{ getLanguage() === 'en-us' ? 'Save to Cloud' : 'Salvar na Nuvem' }}</p>
    </div>

    <!-- Share options -->
    <div v-if="item === 'share'" class="share">
      <p @click="share">{{ getLanguage() === 'en-us' ? 'Share as PDF' : 'Compartilhar PDF' }}</p>
    </div>

    <!-- Download options -->
    <div v-if="item === 'download'" class="download">
      <p @click="downloadDoc">{{ getLanguage() === 'en-us' ? 'Download Document' : 'Baixar Documento' }}</p>
    </div>

    <!-- Print options -->
    <div v-if="item === 'print'" class="print">
      <p @click="imprimir">{{ getLanguage() === 'en-us' ? 'Print Document' : 'Imprimir Documento' }}</p>
    </div>

    <!-- Info options -->
    <div v-if="item === 'info'" class="info">
      <p @click="about">{{ getLanguage() === 'en-us' ? 'About Site' : 'Sobre o Site' }}</p>
      <p @click="more">{{ getLanguage() === 'en-us' ? 'See More' : 'Ver Mais' }}</p>
      <p @click="support">{{ getLanguage() === 'en-us' ? 'Support' : 'Apoiar' }}</p>
      <p @click="howToLogin">{{ getLanguage() === 'en-us' ? 'How Login Works' : 'Como Funciona o Login' }}</p>
      <p @click="deleteAccount">{{ getLanguage() === 'en-us' ? 'Delete Account' : 'Deletar Conta' }}</p>
      <p @click="$emit('reset-password')">{{ getLanguage() === 'en-us' ? 'Reset Password' : 'Recuperar Senha' }}</p>
      <p @click="deleteLocalData">{{ getLanguage() === 'en-us' ? 'Delete Local Data' : 'Apagar Dados Locais' }}</p>
    </div>

    <!-- About options -->
    <div v-if="item === 'about'" class="about">
      <p @click="aboutMe">{{ getLanguage() === 'en-us' ? 'About Me' : 'Sobre Mim' }}</p>
      <p @click="contact">{{ getLanguage() === 'en-us' ? 'Contact' : 'Contato' }}</p>
    </div>

    <!-- Login options -->
    <div v-if="item === 'login'" class="login">
      <div v-if="!isLoggedIn">
        <p @click="emit('show-login')">{{ getLanguage() === 'en-us' ? 'Login' : 'Entrar' }}</p>
      </div>
      <div v-else>
        <p @click="toggleSync">{{ getLanguage() === 'en-us' ? 'Sync: ' : 'Sincronizar: ' }}{{ syncUser ? 'On' : 'Off' }}</p>
        <p @click="logoff">{{ getLanguage() === 'en-us' ? 'Logout' : 'Sair' }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import authService from "../../services/authService.js";
import * as localStorageService from '../services/LocalStorageService.js';
import UserModel from '../../model/userModel.js';
import ShareService from '../../services/ShareService.js';
import $ from 'jquery';
import PageConfig from '../../model/configModel';
import { showAlert } from 'simple-alerts/dist/showAlert.js';
import 'simple-alerts/dist/simpleAlertsVue.css';
import SimpleAlerts from 'simple-alerts';

// VARS
const item = ref(null);
const isLoggedIn = ref(false);
const alertVisible = ref(false);
const alertTitle = ref(null);
const alertMessage = ref(null);
const activeSection = ref(null);
const fontSize = ref(14);
const fontWeight = ref('normal');
const customAlert = ref(false);
const alert = ref({
  autoClose: true,
  timer: 2000,
  backgroundColor: 'black',
  textColor: 'white',
  closeButtonText: 'Close'
});

// PROPS AND EMITS
const props = defineProps({
  language: {
    type: String,
    required: true,
    default: "us-en"
  },
  user: {
    type: Object,
    default: () => ({})
  },
  syncUser: {
    type: Boolean,
    default: false
  },
  inLogin: {
    type: Boolean,
    default: false
  },
  template: {
    type: Number,
    required: true
  }
});

const emit = defineEmits([
  'language-update',
  'show-login',
  'toggle-sync',
  'reset-password',
  'register-user',
  'register-error',
  'changefont',
  'update-configs',
  'change-main-color',
  'change-font-color',
  'update-social',
  'now-template1',
  'now-template2',
  'now-template3',
  'update-user'
]);

// METHODS
function more() {
  showAlert(getLanguage() === 'en-us' ?
  "If you'd like to see more of my projects, feel free to follow my GitHub at SoderJuliano(https://github.com/SoderJuliano). You can also visit my personal webpage at https://juliano-soder.netlify.app. This generator is still in development, so please consider supporting it."
  : "Se você quiser ver mais de meus projetos, fique à vontade para seguir meu GitHub em SoderJuliano. Você também pode visitar minha página pessoal em juliano-soder.netlify.app. Este gerador ainda está em desenvolvimento, então considere apoiá-lo .");
  setTimeout(() => {
    window.open("https://github.com/SoderJuliano");
  }, 2000);
}

function imprimir () {
  window.print();
}

function setItem(option) {
  item.value = item.value === option ? null : option;
}

function getLanguage() {
  return props.language;
}

function updateLanguage(lang) {
  emit('language-update', lang);
}

function openLogin() {
  emit('show-login');
}

function logoff() {
  authService.logoff();
  window.location.reload();
}

function toggleSync() {
  emit('toggle-sync', !props.syncUser);
}

async function share() {
  $(".footer").css({"display": "none !important"})
  const loadingElement = $('<div id="loading"><p>Carregando...</p></div>');
  $("#app").append(loadingElement);
  loadingElement.show();

  let loadingDots = 0;
  const interval = setInterval(() => {
    loadingDots = (loadingDots + 1) % 4;
    loadingElement.html(`<p>Carregando${'.'.repeat(loadingDots)}</p>`);
  }, 500);

  await ShareService.share();
  clearInterval(interval);

  setTimeout(() => {
    loadingElement.remove();
    window.location.reload();
  }, 2000);
}

async function dbSave() {
  const confirmed = confirm(getLanguage() === 'en-us' ? 
    "Is Ok save all your information in our database?" : 
    "Podemos salvar todas suas informações em nosso banco de dados?"
  );

  if (confirmed) {
    let userFromModel = new UserModel();
    userFromModel = userFromModel.constructorObject(props.user);
    const emails = Array.from(userFromModel.getEmails());
    
    if (!emails?.length) {
      showAlertComponent("Error", getLanguage() === 'en-us' ?
        "You do not have data to save or is missing at least one email in your cv contact infos" :
        "Não tem dados para salvar, ou está faltando um email nos dados de contato do seu cv"
      );
      return;
    }

    if(userFromModel instanceof UserModel) {
      const isANewUser = !localStorageService.isNOTANewUser();
      const response = await userFromModel.saveIntoDatabase(isANewUser);
      
      handleSaveResponse(response, userFromModel, isANewUser);
    }
  }
}

function handleSaveResponse(response, userFromModel, isANewUser) {
  if (!response) {
    showAlertComponent(null, getLanguage() === 'en-us' ? 
      "Not possible to save" : 
      "Não foi possível salvar"
    );
    return;
  }

  switch(response.status) {
    case 422:
      emit('register-error', response.data.message);
      break;
    case 404:
      localStorageService.setNewUser();
      setTimeout(() => dbSave(), 200);
      break;
    case 201:
      showAlertComponent(null, "Salvo com sucesso! Agora vamos salvar sua senha.");
      emit('register-user', userFromModel.constructorObject(response.data.content), true);
      break;
    case 200:
      emit('register-user', userFromModel.constructorObject(response.data.content), false);
      break;
  }
}

function showAlertComponent(title, message) {
  alertTitle.value = title;
  alertMessage.value = message;
  alertVisible.value = true;
}

function closeSimpleAlert() {
  alertVisible.value = false;
  alertTitle.value = null;
  alertMessage.value = null;
}

function deleteLocalData() {
  localStorage.removeItem("configs");
  localStorage.removeItem("user-pt");
  localStorage.removeItem("user-en");
  setTimeout(() => {
    window.location.reload();
  }, 900);
}

function updateUser(val) {
  const authenticated = authService.getIdUsuario() === props.user?._id;
  emit('update-user', val, authenticated);
}

function toggleSection(section) {
  activeSection.value = activeSection.value === section ? null : section;
}

function changeFont(font) {
  // Mapeamento de nomes de fonte para valores CSS
  const fontMap = {
    'Oswald': "'Oswald', sans-serif",
    'Zen Loop': "'Zen Loop', cursive",
    'Fuggles': "'Fuggles', cursive",
    'STIX Two Math': "'STIX Two Math', serif",
    'Crimson': "'Crimson Text', serif",
    'Roboto': "'Roboto Mono', monospace",
    'verdana': "'verdana', sans-serif",
    'Courier New': "'Courier New', monospace"
  };

  const fontValue = fontMap[font] || font;
  
  // Aplicar a fonte globalmente
  $("body").css({"font-family": fontValue});
  $(".main").css({"font-family": fontValue});
  $(".side").css({"font-family": fontValue});
  $(".template").css({"font-family": fontValue});
  
  // Salvar a configuração
  const fontConfig = new PageConfig().recoverConfigs();
  fontConfig.setFont(fontValue);
  fontConfig.save();
}

function changeFontSize(delta) {
  fontSize.value = Math.min(Math.max(fontSize.value + delta, 12), 20);
  $(".main").css({"font-size": `${fontSize.value}px`});
  $(".side").css({"font-size": `${fontSize.value}px`});
}

function setFontWeight(weight) {
  fontWeight.value = weight;
  $(".main").css({"font-weight": weight});
  $(".side").css({"font-weight": weight});
}

function selectTemplate(number) {
  switch(number) {
    case 1:
      emit('now-template1');
      emit('update-configs');
      break;
    case 2:
      emit('now-template2');
      emit('update-configs');
      break;
    case 3:
      emit('now-template3');
      emit('update-configs');
      break;
  }
  item.value = null;
}

  function about() {
    const message = getLanguage() === 'en-us'
      ? 'This is a free online CV generator.'
      : 'Este é um gerador de currículo online gratuito.';
    showAlert(message);
  }

  function aboutMe(){
    window.open("https://www.linkedin.com/in/julianosoder/");
  }

  function support(){
    const message = getLanguage() === 'en-us' 
      ? 'Support the project by sharing it with your friends!' 
      : 'Apoie o projeto compartilhando com seus amigos!';
    showAlert(message);
  }

  function howToLogin() {
    const message = getLanguage() === 'en-us'
      ? 'Login with your email to save your CV online.'
      : 'Faça login com seu email para salvar seu currículo online.';
    showAlert(message);
  }

  function deleteAccount() {
    const confirmed = confirm(getLanguage() === 'en-us' ? 'Are you sure you want to delete your account?' : 'Tem certeza que deseja deletar sua conta?');
    if (confirmed) {
      // Implemente a lógica para deletar a conta do usuário
      console.log('Conta deletada');
    }
  }

  function contact(){
    window.location.href = "mailto:juliano_soder@hotmail.com?subject=Hi there&body=message%20goes%20here";
  }

// WATCHERS
watch(() => props.language, (newVal, oldVal) => {
  console.log(`Language changed from ${oldVal} to ${newVal}`);
});

watch(() => props.user, (newVal) => {
  isLoggedIn.value = !!newVal?._id;
});
</script>

<style scoped>
.navbar {
  background-color: transparent;
  display: flex;
  width: 100dvw;
  padding: 1rem;
}

.item {
  margin-right: 20px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.item:hover {
  color: #3498db;
}

.item:last-child {
  right: 10px;
  position: absolute;
}

.undernav {
  padding: 1rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.undernav > div {
  margin-left: 70px;
}

.undernav p {
  cursor: pointer;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.undernav p:hover {
  color: #3498db;
}

.undernav p:hover:after {
  content: " ←";
}

.undernav p.active::before {
  content: "* ";
  font-weight: bold;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.menu > * {
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
}

.menu > *:last-child {
  border-bottom: none;
}

.menu-section {
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
}

.menu-section:last-child {
  border-bottom: none;
}

.section-title {
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 0;
}

.section-title:hover {
  color: #3498db;
}

.section-content {
  margin-top: 0.5rem;
  padding-left: 1rem;
}

.section-content p {
  cursor: pointer;
  padding: 0.3rem 0;
}

.section-content p:hover {
  color: #3498db;
}

.font-size-controls {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.size-options {
  display: grid;
  gap: 0.5rem;
}

.size-options p {
  cursor: pointer;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
}

.size-options p:hover {
  background-color: #f5f5f5;
}

.font-weight-options {
  display: flex;
  gap: 1rem;
}

.font-weight-options p {
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
}

.font-weight-options p.active {
  background-color: #3498db;
  color: white;
}

.templates {
  display: grid;
  gap: 0.5rem;
}

.template-option {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

.template-option:hover {
  background-color: #f5f5f5;
}

.template-option.active {
  background-color: #3498db;
  color: white;
  border-color: #3498db;
}

@media print {
  .navbar {
    display: none;
  }

  .undernav {
    display: none;
  }
}
</style>
