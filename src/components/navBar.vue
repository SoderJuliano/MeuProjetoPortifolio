<template>
    <div class="container-fluid">
      <nav class="navbar" :class="{ 'navbar-collapsed': isCollapsed }">
            <div class="nav-item is-right">
                <img 
                  id="showMenu"
                  v-if="show==false"
                  @click="showMenu"
                  src="../icons/menustatic.png" 
                  alt="menu">
                <button class="bnt-close" v-else @click="close">
                    X
                </button>
            </div>

            <div class="toggle-icon" @click="toggleNavbar">
              <svg v-if="isCollapsed" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 21 12 15 6"></polyline>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 3 12 9 6"></polyline>
              </svg>
            </div>


            <div
              class="midle-options"
              :class="{ 'fade-out': isCollapsed, 'fade-in': !isCollapsed }"
            >
              <button @click="changeLanguage('pt-br')" class="bnt-languages">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZklEQVR4nO2W70tTURjHz/9VkvmjVC5qQ2IlBPkDfKVvxNheBEpZL+pNBAVtgwRf6sTfA/EHm0gqiixY0WglWYa1XViRSfGV59Kt1HvvOXf3bDg5X3hgcMfd+Xy/z3meMaakpKSkpHQWpEWbUU7FFED0jCfQOtmIeKoKq68v4sZUY3kB3I/XQ/9YAeydMyr/6Twer9SdfoDWP66bBz9eMtNgsgGOu25XstJgsgB4rhcrDSYDwMr17NtLCD0Lor07gsv+MaM6usMIhYLGM1lpMC8Adq4vzLaj/loUF65MWRY9W4x1SEmDFQpg1+t0+ErfpO3hzaLvWEHkXabhGsCp13PvfAjeTeDWnTUEB9fR2ZuAr20OlT5riIbro8hlaj3dDVcAvAmzuTEPKx0c/MbLV1kMj6bR1bd8BCgcCniaVEIAohNm+UUaG8kvSKzuYn1rD6k3OrK5/RNA2x++4eGTJGqvzhgXGx4mFRdAdK5T1fmtL27zzTkEBtcwHnuPrP7zL8jO7nf0P1gRerddGlyAgaUGfN0RA3CaPGZVt0zj3qMtZLbzBsSP/V9C7yYTycyCWsg/0YSZZDX3R2jm8wDMqmqZxtOhFNKZz9z3UvtSG3u+xLw0aEmJApg19Py2a9c9jVGnNGjDirTRvzE6Aj1T49p1KYvMLg1aTqKLbCnWVpDrmgwApzQIgpaUk/NWh48Lui4NwCkN2rC0pDp7IsZ4paLPkXDgRNvoLl2XDuBmUslwXSsGAO9ueO11rVQAIml4dV0rNoBdGrJc10oF8P8fQZmua6UEKHYxBRA9ZQkoKSkpKSmxMtQhlLbo6Z/lAAQAAAAASUVORK5CYII=">
              </button>
              <button @click="changeLanguage('us-en')" class="bnt-languages">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nO2VrQoCQRSFx5eybhAWtmkSxGLWJzD4ACbrWn0FFxQVDGKzCQo2g2lAFydZruyCFg3uMr/O+eDA3HYP9565jAEAAADAMERUCRoJyZaoVZWJ/aWBqDWn0Xj/bqBo3etvcxkxEDZndDjdKGMw3FHRut1dU3p/5MremQF+TZWJfZtAPDnSanOhemdJZerp4pzrNQHtBgLJMmIgkpgD7SEOJefAyDcaS8yB83eA685AJPkOaDUQ4g4kH3fA+QwIGKj+PgGVgdMSYm5BU9xrA0Jh4LT8QsKCpoTXBrgFe829DjF33YCwYK+F1yEWLhsAAAAAAGCleAKWmufwwWk9CQAAAABJRU5ErkJggg==">
              </button>
            </div>
            <div
              class="right-options"
              :class="{ 'fade-out': isCollapsed, 'fade-in': !isCollapsed }"  
            >
              <li class="nav-item">
                <svg class="li-img-ia" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <linearGradient id="SVGID_1__JV8I2qAOf5Ts_gr1" x1="37.562" x2="10.438" y1="10.438" y2="37.561" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#60e8fe"></stop><stop offset=".033" stop-color="#6ae9fe"></stop><stop offset=".197" stop-color="#97f0fe"></stop><stop offset=".362" stop-color="#bdf5ff"></stop><stop offset=".525" stop-color="#dafaff"></stop><stop offset=".687" stop-color="#eefdff"></stop><stop offset=".846" stop-color="#fbfeff"></stop><stop offset="1" stop-color="#fff"></stop></linearGradient><path fill="url(#SVGID_1__JV8I2qAOf5Ts_gr1)" d="M40.475,20.803c0.774-2.528,0.53-5.23-0.722-7.583c-2.018-3.792-6.225-5.638-10.284-5.086	c-1.802-1.935-4.265-3.074-6.929-3.166c-4.294-0.149-7.996,2.572-9.547,6.363c-2.576,0.593-4.794,2.156-6.206,4.417	c-2.275,3.643-1.771,8.21,0.737,11.449c-0.774,2.528-0.53,5.23,0.722,7.583c2.018,3.792,6.225,5.638,10.284,5.086	c1.802,1.935,4.265,3.074,6.929,3.167c4.293,0.148,7.996-2.573,9.547-6.364c2.576-0.593,4.794-2.156,6.205-4.417	C43.487,28.607,42.983,24.041,40.475,20.803z"></path><path fill="#10cfe3" d="M38.844,17.559l-7.523-4.343c-0.493-0.284-1.1-0.285-1.594-0.003l-10.245,5.855l0.021-4.018l7.913-4.569	c3.445-1.989,7.938-1.371,10.44,1.722c0.594,0.734,1.04,1.539,1.341,2.382c0.211,0.592,0.772,0.984,1.4,0.984	c1.037,0,1.772-1.03,1.421-2.006c-0.416-1.158-1.033-2.265-1.853-3.275c-2.488-3.065-6.393-4.357-10.151-3.807	c-1.987-2.124-4.699-3.373-7.63-3.473c-4.733-0.161-8.814,2.839-10.525,7.018c-2.842,0.654-5.289,2.378-6.847,4.873	c-3.318,5.313-1.284,12.41,4.142,15.543l7.523,4.343c0.493,0.284,1.1,0.285,1.594,0.003l10.245-5.855l-0.021,4.018l-7.902,4.563	c-3.448,1.991-7.945,1.378-10.451-1.715c-0.591-0.73-1.035-1.53-1.336-2.368c-0.212-0.591-0.772-0.982-1.4-0.982h0	c-1.039,0-1.774,1.033-1.421,2.01c0.326,0.901,0.774,1.771,1.344,2.589c2.43,3.487,6.613,5.039,10.645,4.465	c1.987,2.129,4.7,3.381,7.634,3.483c4.736,0.163,8.82-2.838,10.531-7.02c2.841-0.654,5.288-2.378,6.844-4.872	C46.303,27.788,44.269,20.691,38.844,17.559z M34,33.723c0,4.324-3.313,8.077-7.633,8.269c-1.837,0.082-3.585-0.463-5.024-1.496	c0.274-0.13,0.546-0.266,0.812-0.42l7.521-4.342c0.493-0.285,0.799-0.81,0.802-1.38l0.054-9.883c0.003-0.55-0.441-0.999-0.992-1	c-0.549-0.002-0.995,0.441-0.998,0.99l-0.011,2.172L18.498,32.37l-7.918-4.571c-3.745-2.163-5.339-6.908-3.345-10.745	c0.848-1.633,2.196-2.875,3.812-3.605C11.022,13.753,11,14.058,11,14.367v8.684c0,0.569,0.302,1.095,0.794,1.382l8.73,5.055	c0.475,0.275,1.082,0.113,1.358-0.361c0.277-0.476,0.114-1.085-0.362-1.361L14,23.42v-9.143c0-4.325,3.313-8.077,7.634-8.269	c1.835-0.081,3.582,0.462,5.02,1.494c-0.264,0.127-0.526,0.259-0.782,0.407l-7.548,4.357c-0.494,0.285-0.799,0.81-0.802,1.38	l-0.054,9.797c-0.003,0.55,0.441,0.999,0.992,1c0.549,0.002,0.995-0.441,0.998-0.99l0.011-2.087l4.552-2.603L34,24.58V33.723z M40.765,30.946c-0.848,1.633-2.195,2.875-3.812,3.604C36.978,34.248,37,33.944,37,33.636v-8.687c0-0.569-0.302-1.095-0.794-1.382	l-10.191-5.943l3.487-1.994l7.918,4.571C41.165,22.364,42.759,27.109,40.765,30.946z"></path>
                </svg>
                <a @click="generateFullCV()" class="nav-link">Autopreencher com IA</a>
              </li>
              <li class="nav-item">
                <img class="li-img" src="../icons/database.png" alt="database">
                <a v-on:click="dbSave()" class="nav-link">{{ this.printDatadaseText() }}</a>
              </li>
              <li class="nav-item">
                <img class="li-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDklEQVR4nO2Yv0scQRTHB4UkmFQpEhJPb97ZmV77VKnExtYdgqQ4PNLHPbY1u7EQbt4hEQRL/4CzswxpTIoUwdYmpAic75mQkB8bVlH2li1297ydW5gPTHnzvp837x7HCWGxWCxjiWoHYfyMshZo2n+0E05VVwA5BE0fZrHfqK4Acig19+ualisrAJcv8Q+QN4UXTlRTAK8OHTWQHxgVmNM/ZqDL64B0CJo/A/J5elhOPRLpVHbOFksXqHW/TwPyjkT6nScwpEv8lJpfliYg8WxJaqZhg0NcAOlFKQJScwuQ/t5g+FPo9hdyhy8iEHU+LbzU9CkagbkOP3kYfLmb9llIE9DUq73t3y8UPq9ANPPJsZGafoGmZpZ1CKbXqETeTYZvID/NWguuw/O3euf82VDB8wpcrEpNfxJdbFbmpwRc7PnBmRcH4WSeWhJ5t74X3hE3SWYBTb1BgQI7exRkFZDIJ3GB2S7Ni4oJcFxgvvP1nhgHVNYRSuxvMS4oK2AYZV/AMMq+gGGUfQHDqBL/lRgJVsB0A5XhEVLD1ndcn+MXrHmbNVESauPNTLy20w4o9yWO678f6ILr96KLRTnhDwdrB+9yX+Rs+K3kMxo8zdwCrdb2beUGH02Hd9zgeMXzbokirL7amjYp4bjB8XPv9WMxDJG9agfr0Rwmv9ijCe1zVCsam8Kdt1gsFlEW/wFewL4UtVpN6wAAAABJRU5ErkJggg==" alt="share-3">
                <a 
                  v-on:click.prevent="generateAndSharePdf" 
                  class="nav-link" 
                  :class="{ 'disabled': isGenerating }"
                  :disabled="isGenerating"
                >
                  <span v-if="!isGenerating">{{ this.language == 'us-en' ? 'Share' : 'Compartilhar' }}</span>
                  <span v-else class="loading-wrapper">
                    <span class="spinner"></span>
                    {{ this.language == 'us-en' ? 'Generating...' : 'Gerando...' }}
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <downloadDoc text="DOWNLOAD" />
              </li>
              <li v-on:click="imprimir" class="nav-item" id="imprimir-item">
                <img class="li-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABPklEQVR4nO2XMW7CQBBF9xQgJOi8orcPYM0UPsesb0CTc/gSFCAkbpFELnOOBAWkFFSLHIwEimAXcHY2ZJ70Gwr4z/MRQilBEP4PVb21IaJE4AxygVomdB8yoZppQohom4S6ALafJwJ/9gJENCKiBRFtjDGWM7TvsCzLcnxN+Q/u4uZnVk03H4FFBGXtmcx9BNhnY9r0Xie2/zI5fm3tFOAubY7SlO8/nwi4v9jcpY0jImDkAkYmdJHDz3isUS64C6II4ANOKE1Tq7W2SZIEidbaZlnWncChPE6/giRpJToTaJ7G9xsGEtBdX4DrHxneKLCJVQAAPp0CALC8RmDw9HZ3Kv8LzHwExoi4ik0AAN7zPB8qH4qiGCHiHADW3BOCfYeZd/lLhBJQv0VXExKBW3nICVUisA13AUEQVHTsABN3zNX4tTuWAAAAAElFTkSuQmCC">
                <a href="#" class="nav-link">{{this.printText()}}</a>
              </li>
              <li @click="showDropDown(1)" class="nav-item" id="navbarDropdown">
                <img class="li-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFUlEQVR4nGNgGEoguOmAYXTH4Y6YjkPtoS37DehiaVLvsZbKZfdfd217/x+EK5bdf53Yd6yZppbGdhwIqlv1+GP39g//kTFILL7zUADNLE6ecHIVuqUwnNx/YiXNLE6fcm4zLotBcjSzOKHr2MTOre8wLAWJJXQdmUgzi/1KN/BmTbtwoXv7eySL3//PnHb+Qmj9fh4GWoLQ+v0SyRNOrcqZcelKzvRLV5InnF7pW7lHnGFYgdiuIxMT+09MwoVB8jSxOH/OtUe4UjMIg+RpYnFC7/E9WdMu7gLh6uUPP9DNYkK+H7WYJiB/NKi3jyYuGoH80cS1fTRx0bF2ql7+8ANMHqSWbvVxN61qqlgCLRC6tEaoBQAx5jQdfEl+ZQAAAABJRU5ErkJggg==">
                <a class="nav-link" href="#" >
                  {{this.informacoesText()}}
                </a>
                <div v-if="info" class="dropdown-menu" >
                  <a v-on:click="about" class="dropdown-item" href="#">{{this.sobreSiteText()}}</a>
                  <a v-on:click="more" class="dropdown-item" href="#">{{this.exemplesText()}}</a>
                  <a v-on:click="support" class="dropdown-item" href="#">{{this.suportText()}}</a>
                  <a v-on:click="hotToLogin" class="dropdown-item" href="#">{{this.getHowLoginText()}}</a>
                  <a v-on:click="deleteAccount" class="dropdown-item" href="#">{{this.getDeleteAccText()}}</a>
                  <a v-on:click="confirmDeleteAccount" class="dropdown-item" href="#">{{ this.getConfirmDeleteAccText() }}</a>

                  <a v-on:click="this.$emit('ativationAccount')" class="dropdown-item" href="#">
                    {{this.getActivateAccText()}}
                  </a>

                  <a v-on:click="this.$emit('reset-password')" class="dropdown-item" href="#">
                    {{this.getResetPasswordText()}}
                  </a>
                  <a v-on:click="deleteLocalData()" class="dropdown-item" href="#">{{ getDeleteLocalData() }}</a>
                </div>
                </li>
                <li @click="showDropDown(2)" class="nav-item" id="navbarDropdown">
                  <img class="li-img" src="data:image/png;base64,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">
                  <a class="nav-link" href="#" >
                    {{this.sobreSiteMim().toUpperCase()}}
                  </a>
                  <div v-if="myInfo" class="dropdown-menu" >
                    <a v-on:click="aboutMe" class="dropdown-item">{{this.sobreSiteMim()}}</a>
                    <a v-on:click="contact" class="dropdown-item">{{this.contatoText()}}</a>
                  </div>
                </li>
              </div>
        </nav>
        <nav class="navbar-login">
          <span v-if="isLoggedInClicked" @click="isLoggedInClicked = false" class="mini-close">x</span>
          <button v-if="!isLoggedIn || !this.user.name" @click="openLogin" :disabled="this.login">
            {{this.login ? "Login..." : "Login"}}</button>
          <button @click="isLoggedInClicked = !isLoggedInClicked" v-else-if="isLoggedIn">
            <img src="../assets/navbar/check.png" alt="ok">
            <span>{{ this.user.name.split(' ')[0] }}</span>
          </button>
          <div v-if="isLoggedIn && isLoggedInClicked" class="toggle-container">
            <span class="toggle-text">
              {{ this.language == 'us-en' ? 'syncronized' : 'sincronizado' }}
              <img src="@/assets/navbar/question.svg" @click="questionHandler" alt="Question Icon" width="20" height="20" />
            </span>
            <input
              type="checkbox"
              id="syncToggle"
              class="toggle-input"
              :checked="syncUser"
              @change="this.$emit('toggle-sync', !syncUser)"
            >
            <label for="syncToggle" class="toggle-label"></label>
          </div>
          <button v-if="isLoggedInClicked" class="logoff" @click="logoff()" >{{ this.language.includes('pt-br') ? 'Deslogar' : 'Logout' }}</button>
        </nav>
    </div>
  <options-menu
    @close="closeMenu"
    :show = show
  />
  <SimpleAlerts
    @close="closeSimpleAlert"
    :title="alertTitle"
    :message="alertMessage"
    :show="showAlert"
    :customProperties="alert"
    :custom="customAlert"
    >
  </SimpleAlerts>
  <SimpleAlerts
      :title="confirmTitle"
      :message="confirmText"
      :show="showConfirm"
      :customProperties="customConfirm"
      confirm="true"
      custom="true"
      @close="closeSimpleAlert"
      @confirm="confirmChangeLanguage"
  />
  <SimpleAlerts
      :title="confirmShareTitle"
      :message="confirmShareText"
      :show="showShareConfirm"
      :customProperties="customConfirm"
      confirm="true"
      custom="true"
      @close="closeSimpleAlert"
      @confirm="confirmSahre"
  />

  <!-- Confirm AI -->
   <!-- TODO -->
  <SimpleAlerts
    class="AIAlert"
    :title="confirmAITitle"
    :message="confirmAIText"
    :show="showConfirmAI"
    :customProperties="customConfirm"
    :confirm="true"
    :custom="true"
    @close="closeSimpleAlert"
    @confirm="ConfirmGenerateCV"
    :confirmText="this.language.includes('en') ? 'Yes' : 'Sim'"
    :confirmmCancelText="this.language.includes('en') ? 'Cancel' : 'Cancelar'"
  />
  <GlobalModal
      ref="globalModal"
      :title="globalModalTitle"
      :message="globalModalMessage"
    >
    <div class="globalModal">
      <input id="input-token" type="text">
      <button @click="submitDeleteToken()">{{ this.language == 'us-en' ? "Submit token" : "Enviar token" }}</button>
    </div>
    </GlobalModal>
</template>

<script>
import UserModel from '../model/userModel.js';
import $ from 'jquery';
import downloadDoc from './componentesCompartilhados/downloadDoc.vue';
import 'simple-alerts/dist/simpleAlertsVue.css';
import SimpleAlerts from 'simple-alerts';
import { showAlert } from 'simple-alerts/dist/showAlert.js'
import GlobalModal from './componentesCompartilhados/GlobalModal.vue';
import { deleteUser } from "./configs/requests.js";
import * as localStorageService from './services/LocalStorageService.js';
import authService from "../services/authService.js";
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { PDFDocument, rgb } from 'pdf-lib';
import { generateFullCv, generatePDF } from '../components/configs/requests.js';

export default {
    name: 'nav-bar',
    props: {
      logedIn: Boolean,
      language: String,
      user: Object,
      inlogin: Boolean,
      syncUser: Boolean,
      configs: Object
    },
    data() {
      return{
        isGenerating: false,
        backupUser: null,
        confirmAITitle: this.language.includes("en") ? "Generate data with AI" : "Gerar dados com uma IA",
        confirmAIText: this.language.includes("en") ? "Generate for free now!" : "Gere de graça agora!",
        inputProfessionConfirm: this.language.includes("en") ? "For which position do you want to generate a resume?" : "Para qual cargo você deseja gerar um currículo?",
        showConfirmAI: false,
        pdf: null,
        showShareConfirm: false,
        confirmShareText: "",
        confirmShareTitle: "",
        showQrCode: false,
        lng: this.language ?? null,
        showConfirm: false,
        confirmTitle: "",
        confirmText: "",
        isLoggedInClicked: false,
        isLoggedIn: this.logedIn,
        show: false,
        myInfo: false,
        info: false,
        language: this.language,
        // null is the default value for isAnewUser, after try save infos gonna figure it out
        isANewUser: null,
        login: this.inlogin != null ? this.inlogin : false,
        alertTitle: null,
        alertMessage: null,
        showAlert: false,
        globalModalTitle: '',
        globalModalMessage: '',
        customAlert: { type: Boolean, value: false },
        alert: {
          autoClose: false,
          timer: 5000,
          backgroundColor: 'black',
          textColor: 'white',
          closeButtonText: 'Close',
        },
        customConfirm: {
          autoClose: false
        },
        isCollapsed: false,
      }
    },
    components: {
      downloadDoc,
      SimpleAlerts,
      GlobalModal
    },
    emits:[
      'close',
      'language-update',
      'now-template1',
      'now-template2',
      'show-login-diagram',
      'register-user',
      'register-error',
      'update-user',
      'change-main-color',
      'change-font-color',
      'update-social',
      'show-login',
      'ativationAccount',
      'check-abra-messages',
      'toggle-sync',
      'reset-password'
    ],
    methods:{
      toggleNavbar() {
        this.isCollapsed = !this.isCollapsed;
      },
      async ConfirmGenerateCV(confirm) {
        if(!confirm) this.showConfirmAI = false;

        $('.confirm-buttons button').hide();

        let iaProfession = this.user.profession;
        let iaEmail = this.user.contact.email[0];

        this.language.includes("en") ? $('.confirm-buttons').text("🤖 Generating...") : $('.confirm-buttons').text("🤖 Criando...");

        if(!iaProfession) iaProfession = sessionStorage.getItem("iaProfession");
        if(!iaEmail) iaEmail = sessionStorage.getItem("iaEmail");

        const body = {
          profession: iaProfession,
          email: iaEmail,
          language: this.language
        }
        try {
          const response = await generateFullCv(body);
          console.log(response.data)
          localStorage.setItem("backupUser", JSON.stringify(this.user))
          localStorage.setItem("tempUser", JSON.stringify(response.data))
        } catch (error) {
          console.error('Error generating CV:', error);
          this.showConfirmAI = false;
          showAlert(this.language.includes('pt-br') ? 'Erro ao gerar o currículo' : 'Error generating CV');
          return;
        }

        this.showConfirmAI = false; 
        
        window.location.href = "/tempUser";
      },
      validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      },
      generateFullCV() {
        if(this.user.profession == null || this.user.profession == "") {
          this.confirmAIText = this.inputProfessionConfirm;

          const titleInnertText = $('.AIAlert .inner-alert h3').text();
          const english = titleInnertText.includes('Generate');

          $('.confirm-buttons').hide();

          $(document).ready(function () {
            $('.input-class').remove();
            $('.email-input-class').remove();
            $('.ok-button').remove();

            // Campo de entrada para profissão
            var inputElement = $('<input>', {
              type: 'text',
              placeholder: english ? 'Input your desired role' : 'Coloque seu cargo',
              class: 'input-class',
              css: {
                padding: '10px',
                borderRadius: '10px',
                marginTop: '10px',
                border: 'solid black 1px',
              },
            });

            // Campo de entrada para email
            var emailInputElement = $('<input>', {
              type: 'email',
              placeholder: english ? 'Input your email' : 'Coloque seu email',
              class: 'email-input-class',
              css: {
                padding: '10px',
                borderRadius: '10px',
                marginTop: '10px',
                border: 'solid black 1px',
                marginLeft: '5px',
              },
            });

            // Botão de confirmação
            var okButton = $('<button>', {
              text: english ? 'Set!' : 'Definir',
              class: 'ok-button',
              css: {
                minWidth: '40px',
                width: '100px',
                padding: '5px',
                marginLeft: '5px',
              },
            });

            // Adiciona os campos e o botão na interface
            if ($('.AIAlert .input-class').length === 0) $('.AIAlert .inner-alert p').append(inputElement);
            if ($('.AIAlert .email-input-class').length === 0) $('.AIAlert .inner-alert p').append(emailInputElement);
            if ($('.AIAlert .ok-button').length === 0) $('.AIAlert .email-input-class').after(okButton);

            // Evento de clique no botão
            okButton.on('click', function () {
              // Obtém os valores dos campos de entrada
              var professionValue = $('.AIAlert .input-class').val();
              var emailValue = $('.AIAlert .email-input-class').val();

              // Valida se ambos os campos estão preenchidos
              if (!professionValue || !emailValue) {
                alert(english ? 'Please fill in both fields!' : 'Por favor, preencha ambos os campos!');
                return;
              }

              // Armazena os valores no sessionStorage
              sessionStorage.setItem('iaProfession', professionValue);
              sessionStorage.setItem('iaEmail', emailValue);

              // Atualiza o texto da mensagem
              if (english) {
                $('.inner-alert p').text(
                  "Generate for free now a " + professionValue + " resume! We'll send it to " + emailValue + "."
                );
              } else {
                $('.inner-alert p').text(
                  "Gere de graça agora um currículo para " + professionValue + "! Enviaremos para " + emailValue + "."
                );
              }

              // Mostra os botões de confirmação
              $('.confirm-buttons').show();
            });
          });
        }
        this.showConfirmAI = true;
      },
      logoff() {
        authService.logoff();
      },
      questionHandler(){
        showAlert(this.language.includes('pt-br') ? 'Manter essa opção ativa garante que a cada alteração seus dados sejam salvos no back-end' :
        'Keep this option on grants that all changes on your cv will be sync with the back-end');
      },
      confirmChangeLanguage(value) {
        if(value) {
          this.$emit('language-update', this.lng)
          this.lng == "pt-br" ?
          (document.getElementsByClassName("bnt-languages")[0].style.backgroundColor = "blue",
          document.getElementsByClassName("bnt-languages")[1].style.backgroundColor = "white",
          document.getElementsByClassName("bnt-languages")[1].style.color = "black",
          document.getElementsByClassName("bnt-languages")[0].style.color = "white"
          )
          : (document.getElementsByClassName("bnt-languages")[1].style.backgroundColor = "blue",
          document.getElementsByClassName("bnt-languages")[0].style.backgroundColor = "white",
          document.getElementsByClassName("bnt-languages")[0].style.color = "black",
          document.getElementsByClassName("bnt-languages")[1].style.color = "white")
          this.showConfirm = false;
        }else {
          this.lng = this.language;
          this.showConfirm = false;
        }
      },
      deleteLocalData() {
        localStorage.removeItem("configs");
        localStorage.removeItem("user-pt");
        localStorage.removeItem("user-en");
        setTimeout(() => {
          window.location.reload()
        }, 900);
      },
      getDeleteLocalData() {
        return this.language == 'us-en' ? 'Delete all my account data from my browser' : 'Apagar todos dados da conta do meu anvegador';
      },
      getResetPasswordText() {
        return this.language == 'us-en' ? 'Reset Password' : 'Recuperar senha';
      },
      openCloseTips(value) {
        if(value) {
          $(".tip-conteiner-content").css({"display": "none"});
        }else {
          $(".tip-conteiner-content").css({"display": "block"});
        }
      },
      confirmDeleteAccount() {
        this.globalModalTitle = this.language == 'us-en' ? 'Confirm Account Deletion' : 'Confirmar deleção da conta';
        this.globalModalMessage = this.language == 'us-en' ? 'Are you sure you want to delete your account?' : "Você tem certeza de que deseja deletar sua conta?";
        this.$refs.globalModal.open();
      },
      getActivateAccText() {
        return this.language == 'us-en' ? 'Insert activation token' : 'Inserir token de ativação';
      },
      async submitDeleteToken() {
        const token = $("#input-token").val();
        if(token == null || token == "" || token == "undefined") {
            return;
        }
        await deleteUser(this.user._id, token).then((response) => {
          // console.log(response);
          if (response?.status == 200) {
              localStorage.removeItem("user-pt");
              localStorage.removeItem("user-en");
              this.showAlertComponent(null, this.language == 'us-en' ? 'Deleted successfully!' : "Deletado com sucesso!");
              this.$refs.globalModal.close();
              setTimeout(() => {
                window.location.href = "/";
              }, 3000);
              return;
          } else {
            this.alertTitle = this.language == 'us-en' ? 'Error' : 'Erro';
            this.alertMessage = this.language == 'us-en' ? 'Fail. You may start over requesting a new token.' : 'Falha. Talvez tente novamente com um token novo';
            this.showAlert = true;
          }
        });
      },
      getDeleteAccText() {
        return this.language == 'us-en' ? 'Delete my account' : 'Deletar minha conta';
      },
      getConfirmDeleteAccText() {
        return this.language == 'us-en' ? 'Confirm account deletion(insert token)' : 'Confirmar deleção da conta (inserir token)';
      },
      async deleteAccount() {
        if(this.user?._id?.length != 24) {
            localStorage.removeItem("user-pt");
            localStorage.removeItem("user-en");
            this.showAlertComponent(null, this.language == 'us-en' ? 'Deleted successfully!' : "Deletado com sucesso!");
            setTimeout(() => {
              window.location.reload();
            }, 3000);
            return;
        }
        let userFromModel = new UserModel();
        userFromModel = userFromModel.constructorObject(this.user);
        const response = await userFromModel.requestDeleteThisUser();
        if(response && response.status == 200) {
            this.$emit("check-abra-messages");
            this.showAlertComponent(
              this.language == 'us-en' ? response.data.content : "",
              this.language == 'us-en' ? 'Get the token we send to your e-mail address' : 'Use o token que enviamos para seu e-mail'
            );
            this.globalModalTitle = 'Duplo fator de confirmação';
            this.globalModalMessage = "Confirme a deleção da conta através do token que enviamos para seu email.";
            this.$refs.globalModal.open();
            return;
        }
        this.showAlertComponent(
          this.language == 'us-en' ? response.data.content : "",
          this.language == 'us-en' ? 'Failed to delete the account' : 'Falha ao excluir a conta'
        );
      },
      closeSimpleAlert() {
        console.log("recEbi os emits")
         // Remove os elementos dinamicamente adicionados
        $(".inner-alert").find("#btc-address").remove();
        $(".inner-alert").find("#copy-address-btn").remove();
        $(".inner-alert").find("img").remove();
        $(".inner-alert").find(".jqueryadded").remove();
        this.showAlert = false;
        this.alertTitle = null;
        this.alertMessage = null;
        this.customAlert = false;
      },
      openLogin(){
        this.login = true;
        this.$emit('show-login');
      },
      hotToLogin() {
        this.$emit('show-login-diagram', 'login');
      },
      async dbSave() {
        const notNew = localStorage.getItem('notNew')|| false;
        let confirmed = false;
        
        if(notNew) {
          confirmed = true;
        }else {
          confirmed = confirm(this.getAlertConfirmText());
        }

        if (confirmed) {
          let userFromModel = new UserModel();
          userFromModel = userFromModel.constructorObject(this.user);
          const emails = Array.from(userFromModel.getEmails());
          if (emails == null || emails.length === 0) {
            this.showAlertComponent("Error", this.getErroSalvarNoBancoSemInfos());
            return;
          }
          if(userFromModel instanceof UserModel) {
            let response;
            this.isANewUser = !localStorageService.isNOTANewUser();
            response = await userFromModel.saveIntoDatabase(this.isANewUser);
            if (response) {
              // console.log('response from backend stats -->', response);
              if (response.status == 422) {
                // console.log('Error: Request failed', response.data);
                this.isANewUser == false;
                this.$emit('register-error', response.data.message);
              } else if(response.status == 404) {
                // goes in here is case is a new user
                // console.log('Error: Request failed with status code', response.status);
                this.isANewUser = true;
                localStorageService.setNewUser()
                setTimeout(() => {
                  this.dbSave();
                }, 200);
              } else if(response.status == 201) {
                //todo aqui
                this.isANewUser = true;
                this.showAlertComponent(null, "Salvo com sucesso! Agora vamos salvar sua senha.");
                this.$emit('register-user', userFromModel.constructorObject(response.data.content), this.isANewUser);
              } else if (response.status == 200) {
                this.showAlertComponent(null, "Salvo com sucesso!");
                this.isANewUser = false;
                this.$emit('register-user', userFromModel.constructorObject(response.data.content), this.isANewUser);
              }
            }else {
              this.isANewUser = true;
            }
          }else {
            // alert("Não foi possível salvar");
            this.showAlertComponent(null, this.getLanguage() == 'us-en' ? "Not possible to save" : "Não foi possível salvar");
          }
          //todo
        } else {
          // Código a ser executado se o usuário clicar em "Cancelar"
          // alert("Você escolheu Não!");
          this.showAlertComponent(null, this.getLanguage() == 'us-en' ? "You choose do not save" : "Você escolheu não salvar");
        }
      },
      getHowLoginText() {
        return this.getLanguage() == 'us-en' ? "How the Login works" : "Como o Login funciona"
      },
      showAlertComponent(title, message) {
        this.alertTitle = title;
        this.alertMessage = message;
        this.showAlert = true;
        this.forceCloseAlerts();
      },
      getErroSalvarNoBancoSemInfos() {
        return this.getLanguage() == 'us-en' ?
        "You do not have data to save or is missing at last one email in your cv contact infos" :
        "Não tem dados para salvar, ou está faltando um email nos dados de contato do seu cv"
      },
      getAlertConfirmText() {
        return this.getLanguage() == 'us-en' ?
        "Is Ok save all yor information in our database?"
        : "Podemos salvar todas suas informações em nosso banco de dados?"
      },
      exemplesText(){
        return this.getLanguage() == 'us-en' ? "See more" : "Mais Exemplos"
      },
      suportText(){
        return this.getLanguage() == 'us-en' ? "Suport the site" : "Apoiar este Projeto"
      },
      contatoText(){
        return this.getLanguage() == 'us-en' ? "Send me an e-mail" : "Entre em contato"
      },
      informacoesText() {
        return this.getLanguage() == 'us-en' ? "INFO" : "INFORMAÇÕES"
      },
      sobreSiteMim() {
        return this.getLanguage() == 'us-en' ? "About me" : "Sobre Min"
      },
      sobreSiteText(){
        return this.getLanguage() == 'us-en' ? "About this website" : "Sobre o site"
      },
      printText(){
        return this.getLanguage() == 'us-en' ? "PRINTER" : "IMPRIMIR"
      },
      printDatadaseText() {
        return this.getLanguage() == 'us-en' ? "SAVE REMOTLY" : "SALVAR NA NUVEM"
      },
      getLanguage(){ return this.language },
      close(){
        this.$emit('close')
        this.show = false
      },
      showDropDown(qual){
        switch (qual) {
          case 1:
            if(this.info){
              this.info = false
              break;
            }
            this.info = true
            this.myInfo = false
            break;
          case 2:
            if(this.myInfo){
              this.myInfo = false
              break;
            }
            this.myInfo = true
            this.info = false
            break;
        }
      },
      showMenu(){
        this.show = true
        document.getElementsByClassName("multi-menu-class")[0].style.opacity = "1"
        document.getElementsByClassName("multi-menu-class")[0].style.zIndex = "17"
        //! Este valor de z-index precisa ser maior que o do .side que tem a img do usuario,
        //! caso contrário a img aparecerá por cima do menu
        document.getElementsByClassName("multi-menu-class")[0].animate([
            // keyframes
            { transform: 'translateY(-300px) scale(0.1)', marginLeft:'150px', opacity: '0.5'},
            { transform: 'translateY(0px) scale(0.8)', opacity: '1'}
          ], {
            // timing options
            duration: 330,
            iterations: 1
          });
      },
      closeMenu(){
        this.show = false
      },
      about() {
        const text = this.language == 'us-en' ?
        "We store all your information locally in the browser's memory (on localhost). We do not use cookies, nor do we save any of your data on our servers without your consent. If you wish to share your information and save it to our database, please click 'Save Remotely' and register."
        : "Armazenamos todas as suas informações localmente na memória do navegador (em localhost). Não usamos cookies, nem salvamos nenhum dos seus dados em nossos servidores, sem a sua permissão. Se você deseja compartilhar suas informações e salvá-las em nosso banco de dados, clique em 'Salvar remotamente' e registre-se.";
        this.customAlert = true;
        this.alertMessage = text;
        this.alertTitle = 'INFO'
        this.showAlert = true;
      },
      forceCloseAlerts() {
        setTimeout(() => {
          this.showAlert = false;
        }, 3000);
      },
      aboutMe(){
        window.open("https://www.linkedin.com/in/julianosoder/");
      },
      support(){
        const text = this.language == 'us-en' ?
        "Support this project with a minimum donation of 0.000006 BTC by using the following QR code:"
        : "Contribua para o desenvolvimento deste projeto com um PIX de qualquer valor para a chave aleatória: baae423e-b98a-4f7b-b32b-fb8174b175b3.";
        this.customAlert = true;
        this.alertMessage = text;
        this.alertTitle = 'SUPPORT'
        this.showAlert = true;

        if(this.language === 'pt-br') {
          $(".inner-alert").append(`
            <img
              src="data:image/png;base64,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"
              alt="QR Code"
              style="max-width: 100%; height: auto; display: block; margin: 10px auto;">
          `);
        }else {
          const qrCodeBase64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABuCAIAAACiDgqvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEJ0lEQVR4nO2dPW4UQRCFvUC2IJFgISJugBAWZ0COLPswIAQEtuSUAK4B4hwkiGgdrtPZQ5hgpdWop6r8uvq5Z43el+389JRqX3dXV/XOLp6/eHkgmnkwtwH/CfIjB/mRg/zI4ZF59Oz05Mvnj4eHzzpbs88Mw+b84vLHz1/m2YePnzwtDp2dnnz/9nW5XN69bfeJ5XJ5fPxuvb5era6mZxfTuOfvn99SoscwbF69fjs9boyPcmKA5xzNMxzkRw7yIwf5kYMdP5osFova1m9uboJ2tmeLj/GzgmuKZ3lPwTGN95AeOVTocQv4LY2/f1NxB45GTJXFasKFkzAeRHrkID9yqO7XO0zxxx0n0WfNFszxYXcQaTBhfIz0yCGvx3YQHZkC3FLc6M1mfZAeOciPHLr2a3N+SEw+RWcvbgmGgrtDeuSQ12PiCzeVggQxSChTZQ9drdIjB/mRQ3W/Tqzhd5iJMiTuK7o50k5VOq4d6ZFDhR7TY7Oppim1WvPmK/raGUF65NCa70FSszviAdHUWiJUCsJycHxMiFd65CA/cqiuF8YdGenmVfNM0Y55Fi/7VNVnVC+cAVq+Jxj7W6p9gQDjBE88U9FzQtIjB/mRA3k9E08I8fwQN3irYXFYWnVLAumRA22flCk95Gs3RerNEoENVRNLHMNpPTMb8iOHrnkz+tngljjkRPbPaD0zA/m6Aj5pgPsf8b22xcF4DjErjomtVTHSI4f8ftx0MdprMGED/jG2pCobbSI9cpAfObSuZ5AMa1W0URCXD6dXejZ4F99qAIj0yIH2uw88XRr/xgjRWtXUhPwCxXxKFdIjB/mRQ359jfwaKzg4bXZ8mdeRq8r5tz6rZbgokB45tK6vkUkjTpciEi5uqdr/F8wzqivsHa3r6+nx8dl4SA2Cdu8p5hgaGHDgqD5O/ySQHjnIjxzIedwdwVkk2kCmLzA9PL3R+4gY7yE9csjne+gL4XELxIgksY1Pda7ZkB85tK6vvbKcWfzDV8dIFSixZ1fzzL6Tn2dicY11FOdH43URvkyqKlq0bygskB45yI8cWvdJtWzSNbtnHJaOb6kq+3gmBddUIT1y6PreQnxzSNV6Bs/RgfGN1jOz0eO9hd6pYOSKC1IJk+JRUuPjviA/cujx3kIwQEE2kCA1HMTOonGtZ/aFru83QwKUIlZnqT5R8lbcMwPyI4ce/TqRx/UIcrSIDXF6WPtx56fHewur9rmmK3nmXqrpWcTOBNIjB/mRQ9f3Fm6JVxFmNtfM44LLmEQ6TvHjbPT4/bXXQrpQgVzZUpLW+no25EcO8iMH+ZGD4cdh2PS3477gOcfw4/nF5R0bc4/xnGP83/BqdbVeXx8dvdFfDo8Zhs37D5+8/202/m9YJNA8w0F+5CA/cpAfOciPHORHDvIjB/mRwz9cKVOCvxyXQgAAAABJRU5ErkJggg==";

          $(".inner-alert").append(`
          <p class="jqueryadded">
            Scan the QR Code to send a minimum of 0.000006 BTC or use the following BTC <b>Address</b>:
            <span class="jqueryadded" id="btc-address">1JQ1Ha4JJgDHYAQahCwUrv1hGVa78SLnEd</span>
            <button class="jqueryadded" id="copy-address-btn" style="margin-left: 10px; padding: 5px 10px; font-size: 14px; cursor: pointer;">👉 Copy Adress</button>

            <p class="jqueryadded">Paste the adress on the cryptocurrency broker, like <a href="https://www.binance.com/en/my/wallet/account/main/withdrawal/crypto/BTC" target="_blank">link</a></p>
          </p>
          <img src="${qrCodeBase64}" alt="QR Code BTC" style="width: 300px; max-width: 100%; height: auto; display: block; margin: 10px auto;">
        `);

        // Adiciona funcionalidade de copiar ao botão
        $(document).on("click", "#copy-address-btn", function () {
          const btcAddress = $("#btc-address").text();
          navigator.clipboard.writeText(btcAddress).then(() => {
            console.log("BTC Address copied to clipboard:", btcAddress);
            $(this).text("👍 Copied ✅");
            // $(this).remove(); // Remove o botão diretamente do elemento clicado
          }).catch(err => {
            console.error("Failed to copy BTC Address:", err);
          });
        });
        }
      },
      more() {
        const text = this.language == 'us-en' ?
        "If you'd like to see more of my projects, feel free to follow my GitHub at SoderJuliano(https://github.com/SoderJuliano). You can also visit my personal webpage at https://juliano-soder.netlify.app. This generator is still in development, so please consider supporting it."
        : "Se você quiser ver mais de meus projetos, fique à vontade para seguir meu GitHub em SoderJuliano. Você também pode visitar minha página pessoal em juliano-soder.netlify.app. Este gerador ainda está em desenvolvimento, então considere apoiá-lo .";
        this.customAlert = true;
        this.alertMessage = text;
        this.alertTitle = 'SUPPORT'
        this.showAlert = true;
      },
      contact(){
        window.location.href = "mailto:juliano_soder@hotmail.com?subject=Hi there&body=message%20goes%20here";
      },
      imprimir(){
        // const sideHeight = $(".side").height()
        // const mainHeight = $(".main-container").width()

        // // console.log("side: " + sideHeight)
        // // console.log("main-container: " + mainHeight )

        // sideHeight > mainHeight ? $(".main-container").height(sideHeight) : $(".side").height(mainHeight)
        // $("#template").height($(".side").height())

        this.adjustForPrint();

        window.print()

      },
      calculatePageHeight() {
        // Valores padrão para A4 em diferentes DPI
        const A4_HEIGHT_MM = 297;
        const MM_TO_INCH = 25.4;
        const DEFAULT_DPI = 96;
        
        // Calcula a altura com margem de segurança (5% a mais)
        return Math.round((A4_HEIGHT_MM * DEFAULT_DPI / MM_TO_INCH) * 1.05);
      },
      adjustForPrint() {
        const side = document.querySelector('.side');
        if (!side) return;

        // Calcula a altura necessária
        const pageHeight = this.calculatePageHeight();
        const sideHeight = side.scrollHeight;
        const pagesNeeded = Math.ceil(sideHeight / pageHeight);

        // Aplica a altura dinamicamente
        if (pagesNeeded > 1) {
          side.style.height = `${pagesNeeded * 100}vh`;
          side.style.minHeight = `${pagesNeeded * 100}vh`;
          
          // Força o repaint antes da impressão
          void side.offsetHeight;
        }

        // Configura um timeout para garantir que o ajuste seja aplicado
        setTimeout(() => {
          window.print();
          
          // Reseta após a impressão (opcional)
          setTimeout(() => {
            side.style.height = '';
            side.style.minHeight = '';
          }, 1000);
        }, 100);
      },
      changeLanguage(lng) {
        this.getLanguage() == 'us-en'
        ? (
          this.confirmTitle = "Change language changes user`s data",
          this.confirmText = "Each language is a different user, you can keep different data in each language.",
          this.showConfirm = true
        )
        :
        (
          this.confirmTitle = "Trocar de linguage altera dados de usuário",
          this.confirmText = "Cada linguagem é um usuário diferente, você pode manter dados distintos em cada uma das linguagens.",
          this.showConfirm = true
        )
        this.lng = lng;
      },

      async generateAndSharePdf() {
        if (this.isGenerating) return;
        try {
          this.isGenerating = true;
          
          // Generate PDF
          const response = await generatePDF(this.user, this.configs);

          // faz download
          const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', this.user.name+'cv.pdf');
          document.body.appendChild(link);
          link.click();
          link.remove();
          
          // Create Blob from response
          const pdfBlob = new Blob([response.data], { type: 'application/pdf' });

          if (navigator.share) {

            // For mobile devices with Web Share API
            const file = new File([pdfBlob], this.user.name+"cv.pdf", { 
              type: "application/pdf",
              lastModified: new Date().getTime()
            });


            await navigator.share({
              title: this.language.includes("pt-br") 
                ? "Compartilhar Currículo" 
                : "Share Resume",
              text: this.language.includes("pt-br")
                ? "Veja o meu currículo!"
                : "Check out my resume!",
              files: [file],
            });
            console.log("Sharing successful");
          } else {
            // Fallback for desktop browsers
            const pdfUrl = URL.createObjectURL(pdfBlob);
            
            // Create download link
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'curriculo.pdf';
            document.body.appendChild(link);
            link.click();
            
            // Clean up
            setTimeout(() => {
              document.body.removeChild(link);
              URL.revokeObjectURL(pdfUrl);
            }, 100);

            // Show confirmation dialog for email option
            this.confirmShareText = this.language.includes("en") 
              ? "Can not provide share between apps, but I can open your email and download the file as pdf." 
              : "Sem suporte para compartilhar via apps, mas posso abrir o cliente de email e baixar o CV como PDF.";
            this.confirmShareTitle = this.language.includes("en") 
              ? "Confirm this action?" 
              : "Confirma essa ação?";
            this.showShareConfirm = true;
          }
        } catch (error) {
          console.error("Error generating PDF:", error);
          this.errorMessage = this.language.includes("en")
            ? "Error generating PDF. Please try again."
            : "Erro ao gerar PDF. Por favor, tente novamente.";
        } finally {
          this.isGenerating = false;
        }
      },

      // Add this method for email fallback
      async shareViaEmail() {
        const pdfBlob = await generatePDF(user, configs);
        const pdfUrl = URL.createObjectURL(pdfBlob);
        
        const subject = this.language.includes("pt-br") 
          ? "Meu Currículo" 
          : "My Resume";
        const body = this.language.includes("pt-br")
          ? "Segue em anexo o meu currículo."
          : "Please find my resume attached.";
        
        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&attachment=${encodeURIComponent(pdfUrl)}`;
        
        // Note: Attachment might not work in all browsers
        // Alternative is to guide user to download first then attach manually
      },
    },
    mounted(){
      this.language == "us-en" ? (document.getElementsByClassName("bnt-languages")[1].style.backgroundColor = "blue",
        document.getElementsByClassName("bnt-languages")[1].style.color = "white", document.getElementsByClassName("bnt-languages")[0].style.color = "black",
        document.getElementsByClassName("bnt-languages")[0].style.backgroundColor = "white"
      ) : '';
    },
    watch: {
        language(newValue){
            this.local_language = newValue;
        },
        isANewUser(newValue){
          // console.log('isANewUser', newValue);
          this.$emit('isANewUser', newValue);
        },
        inlogin(newValue){
          // console.log('inlogin', newValue);
          this.login = newValue;
        },
        logedIn(newValue) {
          // console.log('logedIn', newValue);
          this.isLoggedIn = newValue;
        },
        isLoggedInClicked(newValue) {
          this.openCloseTips(newValue);
        },
        syncUser(newValue) {
          const checkbox = $("#syncToggle");
          if(newValue == true) {
            checkbox.prop("checked", true);
          }else {
            checkbox.prop("checked", false);
          }
        }
    }
}
</script>
<!-- global -->
<style>
.nav-item {
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
}
.nav-item:hover .nav-link{
  opacity: 1;
  transition: 0.3s ease-in-out;
}
.nav-item:hover .li-img{
  transform: translateY(-40px);
  transition: 0.3s ease-in-out;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  padding: 10px;
}

.li-img-ia {
  width: 60px;
}

.nav-item:hover .li-img-ia {
  opacity: 0;
}

.nav-item .nav-link {
  opacity: 0;
  position: absolute;
}
.nav-item{
  width: 100px;
}
.nav-item a {
  color: #000;
  font-size: 0.9rem;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.3s ease-out;
  text-shadow: .5px -1px slategray;
  font-size: 16px;
}
</style>

<style scoped>

.open-close-icon {
  width: 40px;
  height: 100%;
  margin: 10px;

  && img {
    width: 40px;
  }
}

#showMenu {
  width: 35px;
}

.mini-close {
  position: absolute;
  cursor: pointer;
  right: 0;
  top: -5px;
  border: solid 1px black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  line-height: 1;
  padding: 0;
  background-color: red;
  color: white;
}


/* Toggle start */
.toggle-container {
  position: relative;
  display: flex;
  width: 100%;
}

.toggle-text {
  margin-right: 10px; /* Add spacing between text and toggle */
}

.toggle-input {
  display: none;
}

.toggle-label {
  display: flex;
  width: 60px;
  height: 30px;
  background-color: rgb(190, 190, 190); /* Default color */
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.toggle-label:before {
  content: "";
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: transform 0.2s ease;
}

.toggle-input:checked + .toggle-label {
  background-color: blue; /* Change color when checked */
}

.toggle-input:checked + .toggle-label:before {
  transform: translateX(30px); /* Move the switch */
  background-color: green;
}

li img {
  width: 50px;
  height: 50px;
}

@media print {
  .bnt-languages{
    display: none;
  }

  .toggle-icon {
    display: none;
  }
}
.bnt-languages {
  min-width: 80px;
  padding: 1px;
  border-radius: 10px;
  box-shadow: black -1px 2px;
}
.bnt-languages img {
  width: 40px;
}
.bnt-languages:first-child {
  margin-right: 10px;
  background-color: blue;
  color: white;
}
.container-fluid {
  width: 100%;
  /* height: 50px; */
  margin-bottom: 20px;
  justify-content: center;
  padding-top: 10px;
  display: flex;
  position: relative;
}

.navbar {
  max-width: 1000px;
  max-height: 60px;
  justify-content: center;
  padding: 10px;
  height: 100%;
  justify-self: center;
  align-self: center;
  border-radius: 10px;
  width: 50%;
  box-shadow: black -1px 2px 5px;
  display: flex;
  background-color: whitesmoke;
  transition: width 1s ease-in-out, color 1s, background-color 0.5s;
}

.navbar-collapsed {
  width: 50px !important;
  background-color: transparent;
  border: none;
  box-shadow: none;

  && .toggle-icon {
     transition: all 1s;
    position: absolute;
    left: 70%;
  }
}

.toggle-icon {
  left: 30%;
  transition: all 1s;
  cursor: pointer;
  margin-right: 10px;
}

.toggle-icon:hover .midle-options {
  display: none;
}

.fade-in {
  opacity: 1;
  transition: opacity 2s ease-in-out;
}

.fade-out {
  opacity: 0;
  transition: opacity 1s ease-in-out;
  z-index: -10;
}

.navbar-login {
  position: absolute;
  right: 0;
  align-self: right;
  padding: 10px;
  background-color: rgba(245, 245, 245, 0.205);
  border-radius: 10px;
  display:block;
}

.navbar-login:hover {
  background-color: whitesmoke;
}

.navbar-login button {
  background-color: #3498db;
  color: white;
  padding: 10px;
  font-weight: bolder;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
}

.navbar-login button:first-child {
  justify-content: center;
}

.navbar-login button:last-child img {
  margin-right: 10px;
}

.navbar-login button:last-child span {
  margin-top: 5px;
}

.dropdown-menu{
  z-index: 10;
  top: 40px;
  padding: 20px;
  position: absolute;
  background-color: whitesmoke;
  justify-content: center;
  display: grid;
  width: 150px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  border-radius: 10px;
}
.dropdown-item:hover{
  background-color: rgb(48, 47, 47);
  border-radius: 10px;
  color: white;
}
.dropdown-item{
  padding: 10px;
}

li{
  display: flex;
}
@media only screen and (max-width: 720px) {
 .container-fluid{display: none;}
}
.nav-item.is-right{
  width: 100px;
  display: flex;
  position: absolute;
  left: 10px;
}
.right-options{
  position: relative;
  width: 100%;
  display: flex;
}

.right-options a{
  font-size: 11px;
}
.nav-item .nav-link{
  background-color: #3498db;
  color: white;
  padding: 10px;
  border-radius: 25px;
}
.bnt-close {
  min-width: 40px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
}
.midle-options{
  justify-content: center;
  width: 100%;
  display: flex;
}

.logoff {
  margin-top: 20px;
  padding: 15px !important;
}

@media screen and (max-width: 1000px) {
  /* Menu sandwish desapear when screen is less than 1000px */
  #showMenu {
    display: none !important;
  }

  .navbar {
    display: none;
  }
}

@media screen and (max-width: 1500px) and (min-width: 1001px) {
  .navbar {
    max-width: 500px !important;
    justify-content: start;

    && .midle-options {
      max-width: 100px;

      && .bnt-languages {
        min-width: 25px;
        height: 30px;

        && img {
          width: 25px;
        }
      }
    }
  }
  
  #microsoft-word {
    height: 30px !important;
  }

  .nav-item svg {
    width: 25px;
    height: 30px;
  }

  .nav-item img {
    width: 25px;
    height: 30px;
  }

  .nav-item {
    height: 30px;
    width: 45px;
  }
}

/* Estilo do spinner */
.spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(0,0,0,0.2);
  border-radius: 50%;
  border-top-color: currentColor; /* Usa a cor do texto */
  animation: spin 1s linear infinite;
  margin-right: 8px;
  vertical-align: middle;
}

.loading-wrapper {
  display: inline-flex;
  align-items: center;
}

/* Animação */
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Estado desabilitado */
.disabled {
  opacity: 0.7;
  cursor: wait;
  pointer-events: none;
}

/* Garante que o link não tenha sublinhado quando desabilitado */
.nav-link.disabled {
  text-decoration: none;
}
</style>
