<template>
  <GlobalModal
      ref="globalModal"
      :title="globalModalTitle"
      :message="globalModalMessage"
    >
    <div class="globalModal">
      <input id="input-token" type="text">
      <button id="submit-token" @click="submitToken()">{{ this.languageIsEN() ? "Submit token" : "Enviar token" }}</button>
    </div>
    </GlobalModal>

  <!-- A LOADER -->
  <Loader :show="loading" :language="this.configs.getLanguage()" ></Loader>

  <SimpleAlerts
    @close="closeSimpleAlert"
    :title="alertTitle"
    :message="alertMessage"
    :customProperties="alert"
    custom="true"
    :show="showAlertError"
    >
  </SimpleAlerts>

  <SimpleAlerts
    @close="closeSimpleAlert"
    :title="alertTitle"
    :message="alertMessage"
    :show="show"
    >
  </SimpleAlerts>

  <editorInformacoes
    :mainTitle="modal.mainTitle"
    :title="modal.title1"
    :placeholder="modal.placeholder1"
    :title2="modal.title2"
    :placeholder2="modal.placeholder2"
    :user="user"
    :language="this.configs.getLanguage()"
    :template="this.configs.getTemplate()"
    @adicionar-formacao="adicionarNovaFormacao"
    @adicionar-habilidade="adicionarNovaHabilidade"
    @update-name="updateName"
    @add-profissao="editarProfissao"
    @update-user="updateUser"
  />
  <nav-bar
    :language="this.configs.getLanguage()"
    @close="close"
    @language-update="lupdate"
    @show-login-diagram="this.showDiagramsModalFunction"
    @register-user="registerUser"
    @show-login="showLogin"
    @register-error="alertErrorFromBkend"
    @ativationAccount="showGlobalModal"
    @check-abra-messages="onCheckAbraMessages"
    @toggle-sync="toggleSync"
    @reset-password="resetPassword"
    :logedIn="logedIn"
    :style="getStyle()"
    :syncUser="syncUser"
    id="navbar"
    :user="user"
    :inlogin="inlogin"
    class="navbar navbar-expand-lg navbar-light bg-light"
  >
  </nav-bar>
  <login
    v-if="inlogin"
    :email="user?.contact?.email"
    :customTitle="loginTitle"
    :language="this.configs?.getLanguage()"
    :inOnboarding="inOnboarding"
    @login="login"
    @cancel="cancelLogin"
    @alert="fireGlobalAlert"
  ></login>
  <diagrams-modal
    :diagram="diagram"
    v-if="showDiagramsModal"
    :language="this.configs.getLanguage()"
    @close="this.showDiagramsModalFunction(null)"
  ></diagrams-modal>
  <div :style="getStyle()" class="main">
    <div class="main-left" @click="closeEditarContato">
      <multi-menu
        :template="this.configs.getTemplate()"
        :user="user"
        :language="this.configs.getLanguage()"
        @update-configs="updateConfigs"
        @update-user="updateUser"
        @now-template1="change_template(1)"
        @now-template2="change_template(2)"
        @now-template3="change_template(3)"
        @login="showLogin"
        class="multi-menu-class"
        @changefont="changefont"
        @click="changeOptions"
        @close="close"
      />
    </div>
    <div style="display: contents;" id="template">
      <template1
        v-if="configs.getTemplate() == 1"
        :language="this.configs.getLanguage()"
        @update-user="updateUser"
        @local-update-user="updateUser"
        @add-info="addInfo"
        @add-resumo="editarResumo"
        @add-competencia="editarCompetencias"
        @add-experiencia="editarExperiencias"
        @add-nome="editarNome"
        @choose-addressIcon="editarIcons('adress')"
        @choose-skillIcon="editarIcons('skill')"
        @add-profissao="editarProfissao"
        @add-formacao="this.showModal('formacao')"
        @add-habilidade="this.showModal('habilidade')"
        @add-SocialLink="this.showModal('socialLink')"
        @adicionar-habilidade="adicionarNovaHabilidade"
        @choose-emailIcon="editarIcons('email')"
        @choose-educationIcon="editarIcons('education')"
        @choose-phoneIcon="editarIcons('phone')"
        @update-experiencias="adicionarExperiencias"
        @update-competences="updateCompetences"
        @update-social="handleUpdateSocial"
        class="template"
        :style="getStyle()"
        :mainColor="this.configs?.getMainColor()"
        :sideColor="this.configs?.getSideColor()"
        :fontColor="this.configs?.getFontColor()"
        :user="user"
      />
      <template2
        v-if="configs.getTemplate() == 2"
        :language="this.configs.getLanguage()"
        @add-info="addInfo"
        @add-resumo="editarResumo"
        @adicionar-habilidade="adicionarNovaHabilidade"
        class="template"
        @add-experiencia="editarExperiencias"
        @add-competencia="editarCompetencias"
        @add-nome="editarNome"
        @choose-skillIcon="editarIcons('skill')"
        @choose-phoneIcon="editarIcons('phone')"
        @choose-addressIcon="editarIcons('adress')"
        @choose-emailIcon="editarIcons('email')"
        @add-profissao="editarProfissao"
        @add-formacao="this.showModal('formacao')"
        @add-habilidade="this.showModal('habilidade')"
        @add-SocialLink="this.showModal('socialLink')"
        @choose-educationIcon="editarIcons('education')"
        @update-competences="updateCompetences"
        @update-experiences="adicionarExperiencias"
        @local-update-user="updateUser"
        @update-user="updateUser"
        :style="getStyle()"
        :mainColor="this.configs?.getMainColor()"
        :sideColor="this.configs?.getSideColor()"
        :fontColor="this.configs?.getFontColor()"
        :user="user"
      />
      <Template3
        class="template"
        v-if="configs.getTemplate() == 3"
        :user="user"
        :language="this.configs.getLanguage()"
        @updateUser="updateUser"
      />
    </div>
    <div class="footer">
      <img class="menuupimg" @click="footerUp" src="./assets/arrow-down.png" alt="menu up"/>
      <span class="footer-mobile-title">FreeHubCV</span>
      <div class="footer-menu-bar" style="display: none; position: relative;" >
        <Footer
          :language="this.configs.getLanguage()"
          @language-update="lupdate"
          :template="this.configs.getTemplate()"
          @font-changed="setFont"
          :user="user"
          @now-template1="change_template(1)"
          @now-template2="change_template(2)"
          @now-template3="change_template(3)"
          @change-main-color="changeMainColor"
          @change-font-color="changeFontColor"
          @update-user="updateUser"
          @login="showLogin"
        />
      </div>
    </div>
    <div class="right">
      <Tips
        :lang="this.configs.getLanguage()"
        :strings="this.strings"
        :novaMensagem="newTipMessege"
        :novasMensagens="newListOfAbraMessages"
        :keyDragonite="(user?.contact?.email[0] || '') + (user?._id || '')"
      />
    </div>
  </div>

    <!-- animated bg -->
    <div class='ripple-background'>
      <div class='circle-animated xxlarge shade1'></div>
      <div class='circle-animated xlarge shade2'></div>
      <div class='circle-animated large shade3'></div>
      <div class='circle-animated mediun shade4'></div>
      <div class='circle-animated small shade5'></div>
    </div>
</template>

<script>
import Template1 from "./templates/Template1.vue";
import MultiMenu from "./components/MultiMenu.vue";
import Footer from "./components/Footer.vue";
import navBar from "./components/navBar.vue";
import editorInformacoes from "./components/editorIformacoes.vue";
import Template2 from "./templates/Template2.vue";
import Template3 from "./templates/Templete3.vue";
import strings from "./components/configs/strings.json";
import Tips from "./components/tips/Tips.vue";
import PageConfig from "./model/configModel.js";
import login from "./components/login/login.vue";
import $ from "jquery";
import axios from 'axios';
import UserModel from './model/userModel.js';
import * as funcs from "./components/configs/requests.js";
import * as functions from "./components/componentesCompartilhados/utilJS/functions.js";
import diagramsModal from "./components/tips/diagramsModal.vue";
import SimpleAlerts from 'simple-alerts';
import { showAlert } from 'simple-alerts/dist/showAlert.js'
import 'simple-alerts/dist/simpleAlertsVue.css';
import AlertComponent from 'simple-alerts';
import Loader from "./components/componentesCompartilhados/Loader.vue";
import GlobalModal from "./components/componentesCompartilhados/GlobalModal.vue";
import * as localStorageService from "./components/services/LocalStorageService.js";
import authService from "./services/authService.js";

export default {
  name: "Home",
  emits: ["close"],
  data() {
    return {
      alertComponent: null,
      syncUser: false,
      logedIn: false,
      globalModalTitle: '',
      globalModalMessage: '',
      loading: false,
      newTipMessege: null,
      newListOfAbraMessages: [],
      alertTitle: 'Alert',
      alertMessage: "",
      alert: {
        autoClose: true,
        timer: 2000,
        backgroundColor: 'red',
        textColor: 'white',
        closeButtonText: 'Close',
      },
      customAlert: false,
      show: false,
      showAlertError: false,
      diagram: null,
      showDiagramsModal: false,
      // loginTitle, null == default title
      loginTitle: null,
      inlogin: false,
      inOnboarding: false,
      strings: strings,
      configs: PageConfig.class,
      localStorageKey: 'user-pt',
      modal: {
        mainTitle: "",
        title1: "",
        placeholder1: "",
        title2: "",
        placeholder2: "",
        list: [],
      },
      // user: new userModel() futuro trabalhar com classes
      user:
      {
        _id: Math.floor(Math.random() * 1000).toString(),
        name: "",
        profession: "",
        resume: "",
        competence: [],
        social: [],
        grade: [],
        hability: "",
        avatarImg: "",
        realImg: "",
        contact: {
          email: [],
          phone: [],
          address: "",
        },
        userExperiences: [],
        spokenLanguages: []
      },
    }
  },
  components: {
    MultiMenu,
    Footer,
    navBar,
    editorInformacoes,
    Template1,
    Template2,
    Template3,
    Tips,
    login,
    diagramsModal,
    SimpleAlerts,
    Loader,
    GlobalModal,
    AlertComponent
  },
  methods: {
    // testMethod() {
    //   showAlert("hello world")
    // },
    async resetPassword() {
      let response = null;
      try {
        if(!this.user._id) {
          response = await funcs.resetPasswordByEmail(this.user.contact.email[0], this.configs.getLanguage());
        }else {
          response = await funcs.resetPassword(this.user._id);
        }
        // Check if the response status is 200 (success)
        if (response?.status === 200) {
          this.fireGlobalAlert(
            this.languageIsEN()
              ? "Password reset email sent successfully."
              : "Email de redefinição de senha enviado com sucesso."
          );
        } else {
          this.fireGlobalAlert(
            this.languageIsEN()
              ? "Failed to send password reset email."
              : "Falha ao enviar email de redefinição de senha."
          );
        }
      } catch (error) {
        // Handle the error in the catch block
        if (error.response && error.response.status === 409) {
          this.fireGlobalAlert(
            this.languageIsEN()
              ? "A conflict occurred. Password reset not possible at the moment."
              : "Ocorreu um conflito. Redefinição de senha não possível no momento."
          );
        } else {
          this.fireGlobalAlert(
            this.languageIsEN()
              ? "Failed to send password reset email."
              : "Falha ao enviar email de redefinição de senha."
          );
        }

        // Optionally log the error for debugging purposes
        console.error('Password reset error:', error);
      }
    },
    toggleSync(val) {
      this.syncUser = val;
      // console.log("Toggling sync", val);
    },
    async onCheckAbraMessages() {
      // console.log("Check onAbraMessages");
      const response = await funcs.getDragoniteMesseges(this.user?.contact?.email[0]+this.user?._id);
      if(response.length > 0) {
        this.newTipMessege = response[response.length - 1];
      }
    },
    async submitToken() {
      const bnt = $("#submit-token")
      bnt.text(this.languageIsEN() ? "Sending..." : "Enviando...");
      bnt.prop("disabled", true);
      try {
        const token = $("#input-token").val();
        const response = await funcs.activateAccount(this.user._id, token, this.user.contact.email[0], this.configs.getLanguage());
        console.log("response:", response);

        if (response && response?.status === 200) {
          // Handle success
          this.fireGlobalAlert("Success! Agora você pode acessar sua conta de qualquer dispositivo.");
          let userFromModer = new UserModel();
          userFromModer = userFromModer.constructorObject(response.data.content);
          // true notSync, login should not call bk unnecessary
          this.updateUser(userFromModer, true);
          this.logedIn = true;
          localStorageService.setAccActived(userFromModer.getEmails[0], userFromModer._id);
          localStorageService.setNoNewUser();
        } else {
          // Handle non-200 responses
          this.fireGlobalAlert(response?.data || "An error occurred");
        }
      } catch (error) {
        console.error("Error during activateAccount:", error);

        // Axios errors typically have a response object with data
        const errorMessage = error.response?.data || error.message || "An unknown error occurred";
        this.fireGlobalAlert(errorMessage);
      }
      bnt.prop("disabled", false);
      bnt.text(this.languageIsEN() ? "Submit token" : "Enviar token");
      this.$refs.globalModal.close();
    },
    fireGlobalAlert(msg) {
      this.alertTitle = null;
      this.alertMessage = msg;
      this.showAlertToTrue();
    },
    showGlobalModal() {
      this.$refs.globalModal.open();
    },
    alertErrorFromBkend(msg){
      if (msg.includes("Must have a name") && this.configs.getLanguage().includes("pt")) {
        this.alertMessage = "O nome deve ser informado"
      }else {
        this.alertMessage = msg
      }
      this.showAlertErrorToTrue()
    },
    showLogin() {
      this.inlogin = true
    },
    showAlertToTrue() {
      if(!this.showAlert) {this.show = true}
    },
    showAlertErrorToTrue(){
      this.showAlertError = true
    },
    closeSimpleAlert() {
      this.show = false
      this.showAlertError = false
    },
    registerUser(data, newUser) {
      // console.log('id agora data', data)
      // console.log('newUser', newUser)

      const id = data._id;
      if(this.user?._id == id) {
        this.inlogin = false;
      }else if (this.user?._id?.length < 24 && this.user?._id != id) {
        // in ligin open de login/register menu
        // in onboarding set the titles and fields to the first registration
        this.inOnboarding = true;
        this.inlogin = true;
        this.user._id = id;
        this.updateUser(this.user, true);
      }else if(this.user?._id?.length == 24 && !newUser) {
        // Despite that we sava the id on the first registerying, we made the register and the all data
        // saves using the emai and not the id, we will have the id more for some front step controller
        this.user._id = id;
        this.inOnboarding = false;
        this.inlogin = true;
      }else if(this.user?._id?.length == 24 && newUser) {
        // Precisa atualizar o id aqui, caso contrario a request
        // pra cadastrar o login pode ir com id errado
        this.updateUser(data, true);
        this.inOnboarding = true;
        this.inlogin = true;
      }
    },
    showDiagramsModalFunction(val) {
      this.diagram = val;
      this.showDiagramsModal = !this.showDiagramsModal;
    },
    cancelLogin() {
      this.inlogin = false;
    },
    async login(email, password) {
      let userFromModel = new UserModel();
      userFromModel = userFromModel.constructorObject(this.user);
      if(userFromModel instanceof UserModel && this.inOnboarding == true) {
        const response = await userFromModel.firstLogin(email, password);
        // console.log('response from backend login -->', response);
        // console.log('response status -->', response?.status);
        if (response && response.status == 200) {
          this.toggleSync(true);
          this.logedIn = true;
          this.inlogin = false;
          this.inOnboarding = false;
          this.globalModalTitle = this.languageIsEN() ? "Account confirmation" : "Confirmação de conta";
          this.globalModalMessage = this.languageIsEN() ?
          "We sent a token to your e-mail, please copy and paste this token in the below field." :
          "Enviamos um token para seu email, copie e cole ele no campo abaixo.";
          this.showGlobalModal();
          // this.user.getBackEndDataAndResolveYourSelf(response?.data.content);
        }
      }else if (userFromModel instanceof UserModel && this.inOnboarding == false) {
        let responseUser;
        if(typeof email == 'string') {
          responseUser = await userFromModel.getBackEndDataAndResolveYourSelf(
            {"email": email, "password": password, "userId": this.user._id, "language" : this.configs.getLanguage()}
          );
        }else {
          responseUser = await userFromModel.getBackEndDataAndResolveYourSelf(
            {"email": email[0], "password": password, "userId": this.user._id, "language" : this.configs.getLanguage()}
          );
        }
        console.log('response from backend login -->', responseUser);
        if (responseUser?._id.length == 24) {
          // true notSync, login should not call bk unnecessary
          this.updateUser(responseUser, true)
          // when login then we can tur on sycn, not before to not make an unecessary
          // PUT request to update user into backend
          this.toggleSync(true);
          console.log('response app', responseUser)
          this.alertTitle = "Bem vindo de volta!";
          this.alertMessage = "Você já possui uma conta no CustomCV!";
          this.showAlertToTrue();
          this.inlogin = false;
          this.logedIn = true;
          localStorageService.setAccActived(email[0] ? email[0] : email, this.user._id);
        }else if (responseUser == null) {
          console.log('response app', responseUser)
          this.alertTitle = "Erro ao fazer login";
          this.alertMessage = "Email ou senha inválidos";
          this.showAlertErrorToTrue();
          this.inlogin = false;
          setTimeout(() => {
            this.closeSimpleAlert();
          }, 2000);
        }
      }
      const response = await funcs.getDragoniteMesseges(this.user?.contact?.email[0]+this.user?._id);

      if(response && response.length > 0) {
        setTimeout(() => {
          this.closeSimpleAlert();
          this.alertTitle = "Você tem novas mensagens";
          this.alertMessage = "";
          this.showAlertToTrue();
          this.newTipMessege = response[0];
        }, 4000);
      }

    },
    handleUpdateFormacao(value) {
      // console.log(value)
      this.user.grade = value;
      this.updateUser(this.user, false);
    },
    handleUpdateSocial(value) {
      // console.log("handleUpdateSocial", value)
      this.user.social = value;
      this.updateUser(this.user, false);
    },
    updateCompetences(value) {
      this.user.competence = value;
      this.updateUser(this.user, false);
    },
    updateConfigs(){
      this.configs.updateMyself();
    },
    editarIcons(value)
    {
      if(value.includes("email")){
        this.showModal('iconChooserEmailIcons')
        this.setIconContainerVisible()
      }
      else if(value.includes("education")){
        this.showModal('iconChooserEducationIcons')
        this.setIconContainerVisible()
      }
      else if(value.includes("phone")){
        this.showModal('iconChooserPhoneIcons')
        this.setIconContainerVisible()
      }
      else if(value.includes("skill")){
        this.showModal('iconChooserSkillIcons')
        this.setIconContainerVisible()
      }
      else if(value.includes("adress")){
        this.showModal('iconChooserAdressIcons')
        this.setIconContainerVisible()
      }
      else if(value.includes("adressT2")){
        this.showModal('iconChooserAdressIconsT2')
        this.setIconContainerVisible()
      }
    },
    setIconContainerVisible(){
      $(".main-modal-container").css({opacity: 0.1})
      $('.iconsChooser').css({'display': 'flex'})
    },
    footerUp() {
      // Hide the 'up' image smoothly
      $(".menuupimg").fadeOut(100);

      // Show the 'down' image smoothly
      $(".menuupimg-down").fadeIn(500);

      // Show the footer-menu-bar and animate it sliding in from left to right
      $(".footer-menu-bar")
        .css({
          "display": "block",  // Make it visible
          "left": "-100%",     // Start from off-screen
          "width": "20dvw"
        })
        .animate({
          left: "0%",           // Animate to fully visible position
          width: "100dvw"
        }, 1000);               // 500ms animation

        $(".footer-mobile-title").css({
          "left": "30%"
        })
    },
    // footerUp() {
    //   $(".footer-menu-bar").css("display", "block");
    //   $(".menuupimg").css("display", "none");
    //   $(".menuupimg-down").css("display", "block");
    // },
    changefont(newFont) {
      this.configs.setFont(newFont);
      localStorage.setItem("configs", JSON.stringify(this.configs));
    },
    changeFontColor(color) {
      this.configs.setFontColor(color);
      localStorage.setItem("configs", JSON.stringify(this.configs));
    },
    changeMainColor(color) {
      this.configs.setMainColor(color);
      localStorage.setItem("configs", JSON.stringify(this.configs));
    },
    updateUser(userData, notSync) {
      // console.log('user update', userData);
      // console.log("not sync", notSync)
      // todo saveIntoDatabase
      if(this.syncUser && !notSync) {
        this.doUpdateUserAsync();
      }
      this.user = userData;
      localStorage.setItem(this.localStorageKey, JSON.stringify(userData));
    },
    async doUpdateUserAsync() {
      this.loading = true;
      let userFromModel = new UserModel();
        userFromModel = userFromModel.constructorObject(this.user);
        const response = await userFromModel.saveIntoDatabase(false);
        console.log('user on update user', response);
        if(response.status != 200) {
          console.log('user on update user status', response.status);
          this.syncUser = false;
        }
      this.loading = false;
    },
    adicionarExperiencias(experiencias) {
      this.user.userExperiences = experiencias;
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.user));
    },
    adicionarNovaHabilidade(habilidade) {
      this.user.hability = habilidade;
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.user));
    },
    adicionarNovaFormacao(formacao) {
      this.user.grade.push(formacao);
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.user));
    },
    languageIsEN() {
      return this.configs.getLanguage() == "us-en";
    },
    change_template(template) {
      this.configs.setTemplate(template);
      localStorage.setItem("configs", JSON.stringify(this.configs));
      if(this.configs.getTemplate() == 2) {
        $(".footer .close-bnt").css({"right": "60px"})
        // console.log('set t2')
      }else {
        $(".footer .close-bnt").css({"right": "30px"})
        // console.log('set t1')
      }
    },
    lupdate(lng) {
      // console.log('executing lupdate')
      this.user = [];
      if(lng){
        this.configs.setLanguage(lng);
        this.updateLocalStorageKey(lng);
        localStorage.setItem("configs", JSON.stringify(this.configs));

        this.getUserData();

        // update localStorage when language changes as well
        this.updateUser(this.user, true);
      }
      // console.log("finished lupdate")
    },
    updateName(name) {
      if (this.user instanceof UserModel && name != this.user.mame) {
        this.user.setName(name);
        this.updateUser(this.user, false);
      } else if (typeof this.user !== 'undefined' && this.user !== null && name != this.user.mame) {
        const userFromModer = new UserModel();
        userFromModer.constructorObject(this.user);
        // userFromModer.setName(name);
        this.user = userFromModer;
        this.updateUser(this.user, false);
      } else {
        console.error('Unexpected user type or value:', typeof this.user, this.user);
      }
    },
    setFont(fnt) {
      this.font = fnt;
    },
    addInfo() {
      setTimeout(() => {
        document.getElementById("modal-input").value =
          this.user.contact?.email != "Set your email @test.com"
            ? this.user.contact?.email
            : "";
        document.getElementById("modal-input2").value =
          this.user.contact?.phone != "Phone number"
            ? this.user.contact?.phone
            : "";
      }, 500);
      this.showModal("email");
    },
    editarExperiencias() {
      this.showModal("experiencias");
    },
    editarCompetencias() {
      this.showModal("competencias");
    },
    editarResumo() {
      this.showModal("resumo");
    },
    editarProfissao() {
      this.showModal('profissao');
      setTimeout(() => {
        $("#modal-input").val(this.user.profession);
      }, 600);
    },
    editarNome(){
      this.showModal('nome')
      setTimeout(() => {
        $("#modal-input").val(this.user.name);
      }, 400);
    },
    showDivModal() {
      document.getElementsByClassName("main-modal-container")[0].style.width =
        "100vw";
      document.getElementsByClassName("main-modal-container")[0].style.heigth =
        "100vh";
      document.getElementsByClassName("main-modal-container")[0].style.opacity =
        "100";
      document.getElementsByClassName("main-modal-container")[0].style.zIndex =
        "17";
    },
    showModal(qual) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      switch (qual) {
        case "email":
          this.modal.mainTitle = this.languageIsEN()
            ? strings[1].yinfo
            : strings[0].yinfo;
          this.modal.title1 = "Email";
          this.modal.placeholder1 = this.languageIsEN()
            ? strings[1].tHere
            : strings[0].tHere;
          this.modal.title2 = this.languageIsEN()
            ? strings[1].phone
            : strings[0].phone;
          this.modal.placeholder2 = "(99) 999999999";
          this.modal.list = [];
          this.showDivModal();
          break;

        case "nome":
          this.modal.mainTitle = this.languageIsEN()
            ? strings[1].yinfo
            : strings[0].yinfo;
          this.modal.title1 = this.languageIsEN()
            ? strings[1].yname
            : strings[0].yname;
          this.modal.placeholder1 = this.languageIsEN()
            ? strings[1].tHere
            : strings[0].tHere;
          this.modal.list = [];
          this.showDivModal();
          break;

        case "profissao":
          this.modal.mainTitle = this.languageIsEN()
            ? strings[1].yinfo
            : strings[0].yinfo;
          this.modal.title1 = this.languageIsEN()
            ? strings[1].yjob
            : strings[0].yjob;
          this.modal.placeholder1 = this.languageIsEN()
            ? strings[1].tHere
            : strings[0].tHere;
          this.modal.list = [];
          this.showDivModal();
          break;

        case "competencias":
          this.modal.mainTitle = this.languageIsEN()
            ? "Competence"
            : "Competencia";
          this.modal.title1 = this.languageIsEN()
            ? strings[1].nskill
            : strings[0].nskill;
          this.modal.placeholder1 = this.languageIsEN()
            ? strings[1].tHere
            : strings[0].tHere;
          this.modal.list = this.user.competence;
          this.showDivModal();
          break;

        case "resumo":
          this.modal.mainTitle = this.languageIsEN()
            ? "About you"
            : "Resumo profissional";
          this.modal.title1 = this.languageIsEN()
            ? "Write about you"
            : "Sobre voce";
          this.modal.placeholder1 = this.languageIsEN()
            ? "Talk what kind of person you are"
            : "Descreva que tipo de proficional voce e...";
          this.modal.list = this.user.competence;

          this.showDivModal();

          $("#modal-input").val($("#resume").text())
          break;

        case "experiencias":
          this.modal.mainTitle = this.languageIsEN()
            ? strings[1].yhprofession
            : strings[0].yhprofession;
          this.modal.title1 = this.languageIsEN()
            ? strings[1].companyName
            : strings[0].companyName;
          this.modal.placeholder1 = this.languageIsEN()
            ? strings[1].tHere
            : strings[0].tHere;
          this.modal.title2 = this.languageIsEN()
            ? strings[1].yourJob
            : strings[0].yourJob;
          this.modal.placeholder2 = this.languageIsEN()
            ? strings[1].tHere
            : strings[0].tHere;
          this.showDivModal();
          break;

        case "formacao":
          this.modal.mainTitle = this.languageIsEN()
            ? strings[1].education
            : strings[0].education;
          this.modal.title1 = this.languageIsEN()
            ? strings[1].acadamic
            : strings[0].acadamic;
          this.modal.placeholder1 = this.languageIsEN()
            ? strings[1].tHere
            : strings[0].tHere;
          this.showDivModal();
          break;

        case "habilidade":
          // console.log('habilidade')
          // console.log(strings[1].skill)
          this.modal.mainTitle = this.languageIsEN()
            ? strings[1].skill
            : strings[0].skill;
          this.modal.title1 = this.languageIsEN()
            ? strings[1].skill
            : strings[0].skill;
          this.modal.placeholder1 = this.languageIsEN()
            ? strings[1].tHere
            : strings[0].tHere;
          this.showDivModal();
          if (this.user.hability) {
            setTimeout(() => {
              document.getElementById("modal-input").value =
                this.user.hability + ",";
            }, 800);
          }
          break;

        case "socialLink":
        this.modal.mainTitle = this.languageIsEN()
            ? strings[1].social
            : strings[0].social;
          this.modal.title1 = "Add link";
          this.modal.placeholder1 = "link da rede (https://www...)";
          this.showDivModal();
          break;

        case "iconChooserEmailIcons":
        this.modal.mainTitle = "iconChooser";
          this.modal.title1 = "iconChooserEmailIcons";
          this.showDivModal();
          break;

        case "iconChooserEducationIcons":
        this.modal.mainTitle = "iconChooser";
          this.modal.title1 = "iconChooserEducationIcons";
          this.showDivModal();
          break;

        case "iconChooserPhoneIcons":
        this.modal.mainTitle = "iconChooser";
          this.modal.title1 = "iconChooserPhoneIcons";
          this.showDivModal();
          break;

        case "iconChooserSkillIcons":
          this.modal.mainTitle = "iconChooser";
          this.modal.title1 = "iconChooserSkillIcons";
          this.showDivModal();
          break;

        case "iconChooserAdressIcons":
          this.modal.mainTitle = "iconChooser";
          this.modal.title1 = "iconChooserAdressIcons";
          this.showDivModal();

        break;
        default:
          break;
      }
    },
    closeEditarContato() {
      $(".editar-contato-container")
        ? $(".editar-contato-container").css({ display: "none" })
        : "";
    },
    close() {
      document.getElementsByClassName("multi-menu-class")[0].style.opacity =
        "0";
      document.getElementsByClassName("multi-menu-class")[0].style.zIndex =
        "-1";
      document.getElementsByClassName("multi-menu-class")[0].animate(
        [
          // keyframes
          {
            transform:
              "translateY(0px) scale(0.9) perspective(400px) rotateY(25deg)",
            opacity: "1",
          },
          {
            transform:
              "translateY(-300px) scale(0.1) perspective(400px) rotateY(-35deg)",
            marginLeft: "150px",
            opacity: "0.2",
          },
        ],
        {
          // timing options
          duration: 300,
          iterations: 1,
        }
      );
    },
    changeOptions(p) {
      // evento - jquery- configs
      this.configs = functions.heavyEventHandling(p, $, this.configs);
    },
    getStyle() {
      switch (this.configs?.getFont()) {
        case "Oswald":
          return {
            "font-family": "'Oswald', sans-serif !important",
          };

        case "Zen Loop":
          return {
            "font-family": "'Zen Loop', cursive",
            "font-weight": "bold",
          };

        case "Fuggles":
          return {
            "font-family": "'Fuggles', cursive",
            "text-transform": "uppercase",
            "font-weight": "bold",
          };

        case "STIX Two Math":
          return {
            "font-family": "'STIX Two Math', serif",
          };

        case "Hina Mincho":
          return {
            "font-family": "'Hina Mincho', serif",
          };
        case "Inconsolata":
          return {
            "font-family": "'Inconsolata', monospace",
          };
        case "Kaisei Decol":
          return {
            "font-family": "'Kaisei Decol', serif",
          };
        case "Teko":
          return {
            "font-family": "'Teko', sans-serif",
          };

        case "Crimson":
          return {
            "font-family": "'Crimson Text', serif",
          };
        case "Dongle":
          return {
            "font-family": "'Dongle', sans-serif",
          };
        case "Mochiy":
          return {
            "font-family": "'Mochiy Pop One', sans-serif",
          };
        case "Roboto":
          return {
            "font-family": "'Roboto Mono', monospace",
          };
        case "verdana":
          return {
            "font-family": "verdana",
          };
        case "Courier New":
          return {
            "font-family": "'Courier New'",
          };
        default:
          return {
            "font-family": this.configs.getFont(),
          };
      }
    },
    updateLocalStorageKey(newInput) {
      // console.log('newInput');
      // console.log(newInput);
      this.localStorageKey = newInput.includes("pt") ? "user-pt" : "user-en";
      // console.log(this.localStorageKey);
    },
    getUserData() {
      try {
        let lsUser = JSON.parse(localStorage.getItem(this.localStorageKey));
        // console.log('found')
        // console.log(lsUser)
        if(lsUser == null) {
          lsUser = new UserModel();
        }
        if(lsUser != null) {
          let userFromModer = new UserModel();
          userFromModer = userFromModer.constructorObject(lsUser);
          userFromModer.language = this.configs.getLanguage();
          this.user = userFromModer;
          // console.log('set')
          // console.log(this.user)
        }
      }catch (err) {
        // console.log(err);
        // console.log("created new user with id: " + this.user.id);
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.user))
      };
    },
  },
  // fim methods

  beforeMount() {
    // General configs
    if(!localStorage.getItem("configs")){
      this.configs = new PageConfig();
      localStorage.setItem("configs", JSON.stringify(this.configs));
    }else{
      this.configs = new PageConfig().recoverConfigs();
    }
    if(!localStorage.getItem('deletedDefaultNotifications'+'-'+this.configs.getLanguage())) {
      const lang = this.configs.getLanguage();
      const icons = {
          "id": Math.random(),
          "title": lang.includes("en") ? "Icons" : "Icones",
          "content": lang.includes("en") ? "You can click over some icons to see other options."
          : "Você pode clicar sobre alguns icons para ver outras opções.",
          "language": lang,
          "read": false,
          "local": true
      }

      const skills = {
          "id": Math.random(),
          "title": lang.includes("en") ? "Skills" : "Habilidades",
          "content": lang.includes("en") ? "You can write many skills puting comma (,) between them"
          : "Você pode por varias habilidadedes separadas por virgula (,).",
          "language": lang,
          "read": false,
          "local": true
      }

      const input = {
          "id": Math.random(),
          "title": lang.includes("en") ? "Easy input" : "Salvamento fácil",
          "content": lang.includes("en") ?
          "[PC] - You can press 'ENTER' to save the value inside you input, do not need go over save button. In text area, where you can go to next line with 'ENTER', just press 'SHIFT'+'ENTER' to commit your change."
          : "[PC] - É possivel clicar 'ENTER' para salvar um valor preenchido em qualquer campo. Em campos grandes de texto, onde você usa o enter pra ir pra linha abaixo, você pode apertar 'SHIFT'+'ENTER' pra salvar.",
          "language": lang,
          "read": false,
          "local": true
      }

      //newListOfAbraMessages
      let listOfMessagens = [icons, skills, input];

      localStorage.setItem('tips', JSON.stringify(listOfMessagens));

    }
    this.localStorageKey = this.configs.getLanguage().includes("pt") ? "user-pt" : "user-en";
    this.getUserData();
  },
  async mounted() {
    try {
      const res = await funcs.ping();

      this.configs.setIconsCollor();

      const isUserIdValid = this.user?._id?.length === 24;
      const isConnected = !!res.data;
      const lng = JSON.parse(localStorage.getItem("configs")).language;
      const authenticated = authService.getIdUsuario() === this.user?._id;

      if (isUserIdValid && isConnected && !authenticated) {
        this.inlogin = true;
        this.inOnboarding = false;
        const malert = lng.includes("en") ? "Welcome back" : "Bem vindo de volta";
        showAlert(malert);

        this.newTipMessege = {
          "id": Math.random(),
          "title": lng.includes("en") ? "Tip on login" : "Dica ao logar-se",
          "content": lng.includes("en")
              ? "If you have unsaved changes, login will overwrite them with the last saved state."
              : "Se você dados locais não salvos, ao logar-se eles serão sobreescritos pelo último save.",
          "language": this.lang,
          "read": false,
          "local": true
        }
      } else if(isUserIdValid && isConnected && authenticated) {
        this.logedIn = true;
        this.inOnboarding = false;
        const malert = lng.includes("en") ? "Welcome back" : "Bem vindo de volta";
        showAlert(malert);

        this.newTipMessege = {
          "id": Math.random(),
          "title": lng.includes("en") ? "Tip on sava data" : "Dica ao salvar dados",
          "content": lng.includes("en")
              ? "If you are loged in and the togle of syncing data is on the data will auto update based on changes."
              : "Se você estiver logado e o botão de sincronização estiver ativo, os dados serão atualizados automativamente ao serem alterados.",
          "language": this.lang,
          "read": false,
          "local": true
        }
      } else {
        this.inlogin = false;
      }
    }
    catch (error) {
      console.error('Error during ping:', error);
      this.inlogin = false;

      const lng = JSON.parse(localStorage.getItem("configs")).language;
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString(); // Formato local, ex: '15/11/2024, 10:30:00'

      const malert = lng.includes("en")
          ? `No connection with the server. Please try again later (${formattedDate}).`
          : `Sem conexão com o servidor. Por favor, tente novamente mais tarde (${formattedDate}).`;

      showAlert(malert);

      this.newTipMessege = {
          "id": Math.random(),
          "title": lng.includes("en") ? "No connection" : "Sem conexão",
          "content": lng.includes("en")
              ? `The server is not available at the moment (${formattedDate}). Please try again later.`
              : `O servidor não está disponível no momento (${formattedDate}). Por favor, tente novamente mais tarde.`,
          "language": this.lang,
          "read": false,
          "local": true
      }
    }
  }
};

</script>

<style>
.ripple-background {
  position: relative;
  z-index: -1;
}

.icone-branco {
  filter: invert(100%);
}

@media print {
  .template {
    width: 100vw !important;
    height: 100vh !important;
    border-radius: 0px !important;
  }
}

.main.template {
  width: 70%;
  height: 100%;
  margin-top: 20px;
  border-radius: 10px;
}

.multi-menu-class:hover {
  transform: perspective(400px) rotateY(5deg);
}

.multi-menu-class {
  position: relative;
  padding: 30px;
  opacity: 0;
  z-index: -1;
  transform: perspective(400px) rotateY(35deg);
  -webkit-transition-duration: 450ms;
  transition-duration: 450ms;
  cursor: pointer;
}

@media screen and (max-width: 1000px) {
  .main {
    display: block;
    width: 100%;
    height: 100%;
    margin-top: 50px;
  }

  .main.template {
    width: 100vw;
  }

  .main-left {
    display: none;
  }

  .footer {
    position: fixed;
    /* width: 93dvw !important; */
    left: 0;
    top: 0;
    background-color: #FFF;
    width: 100%;
    height: 40px;
    text-align: start;
    display: flex;
    z-index: 11;
  }

  .right {
    display: none;
  }
  #navbar {
    display: none;
  }

  .menuupimg-down {
    display: none;
  }

  .menuupimg {
    width: 25px;
    height: 25px;
    margin-left: 10px;
    margin-top: 10px;
  }

}
@media screen and (min-width: 1001px) {
  .template {
    margin: 0 auto;
    max-width: 1200px;
  }
  .main {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
  }
  .footer {
    display: none;
  }
  .main-left {
    width: 25%;
    height: 100vh;
    padding: 1px;
    margin-right: 5px;
  }

  .main-left:hover {
    z-index: 11;
  }

  .right {
    width: 25%;
    margin: 0 auto;
  }
}
@media print {
  .navbar-login {
    display: none;
  }

  .ripple-background {
    display: none;
  }

  #navbar {
    display: none !important;
  }
  .navbar {
    display: none !important;
  }
  .main {
    display: flex;
    width: 100% !important;
    position: absolute;
    top: 0 !important;
    -webkit-print-color-adjust: exact;
  }

  .template {
    width: 100% !important;
    border-radius: 10px;
  }

  .right {
    display: none !important;
  }

  .main-left {
    display: none !important;
  }
  .footer {
    display: none !important;
  }

  #navbar {
    display: none !important;
  }

  .navbar {
    display: none !important;
  }
}

/* animated bg css */
body{
  background: #9fcfff;
}


.circle-animated {
  position: absolute;
  border-radius: 50%;
  background: white;
  animation: ripple 15s infinite;
  box-shadow: 0px 0px 1px 0px #508fb9;
}

.small{
  width: 200px;
  height: 200px;
  left: -100px;
  bottom: -100px;
}

.medium{
  width: 400px;
  height: 400px;
  left: -200px;
  bottom: -200px;
}

.large{
  width: 600px;
  height: 600px;
  left: -300px;
  bottom: -300px;
}

.xlarge{
  width: 800px;
  height: 800px;
  left: -400px;
  bottom: -400px;
}

.xxlarge{
  width: 1000px;
  height: 1000px;
  left: -500px;
  bottom: -500px;
}

.shade1{
  opacity: 0.2;
}
.shade2{
  opacity: 0.5;
}

.shade3{
  opacity: 0.7;
}

.shade4{
  opacity: 0.8;
}

.shade5{
  opacity: 0.9;
}

@keyframes ripple{
  0%{
    transform: scale(0.8);
  }

  50%{
    transform: scale(1.2);
  }

  100%{
    transform: scale(0.8);
  }
}

</style>
<style scoped>
.footer-mobile-title {
  align-self: center;
  position: relative;
}

@media screen and (min-width: 500px) {
  .footer-mobile-title {
    left: 40%;
  }
}
@media screen and (max-width: 500px) {
  .footer-mobile-title {
    left: 30%;
  }
}
</style>