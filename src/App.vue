<template>
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
    :style="getStyle()"
    id="navbar"
    class="navbar navbar-expand-lg navbar-light bg-light"
  >
  </nav-bar>
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
        class="multi-menu-class"
        @changefont="changefont"
        @click="changeOptions"
        @close="close"
      />
    </div>
    <template1
      v-if="this.configs.getTemplate() == 1"
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
      v-if="this.configs.getTemplate() == 2"
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
    <div class="footer">
      <img class="menuupimg" @click="footerUp" src="./assets/arrow-up.png" alt="menu up"/>
      <div class="footer-menu-bar" style="display: none;" >
        <Footer
          :language="this.configs.getLanguage()"
          @language-update="lupdate"
          :template="this.configs.getTemplate()"
          @font-changed="setFont"
          :user="user"
          @now-template1="change_template(1)"
          @now-template2="change_template(2)"
          @change-main-color="changeMainColor"
          @change-font-color="changeFontColor"
          @update-user="updateUser"
        />
      </div>
    </div>
    <div class="right">
      <Tips
        :lang="this.configs.getLanguage()"
        :strings="this.strings"
      />
    </div>
  </div>

    <!-- animated bg -->
    <div class='ripple-background'>
      <div class='circle xxlarge shade1'></div>
      <div class='circle xlarge shade2'></div>
      <div class='circle large shade3'></div>
      <div class='circle mediun shade4'></div>
      <div class='circle small shade5'></div>
    </div>

</template>

<script>
import Template1 from "./templates/Template1.vue";
import MultiMenu from "./components/MultiMenu.vue";
import Footer from "./components/Footer.vue";
import navBar from "./components/navBar.vue";
import editorInformacoes from "./components/editorIformacoes.vue";
import Template2 from "./templates/Template2.vue";
import strings from "../src/components/configs/strings.json";
import Tips from "./components/tips/Tips.vue";
import PageConfig from "./model/configModel.js";
import $ from "jquery";
import axios from 'axios';
import * as funcs from "./components/configs/requests";
import * as functions from "./components/componentesCompartilhados/util/functions";

export default {
  name: "App",
  emits: ["close"],
  data() {
    return {
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
        id: Math.floor(Math.random() * 1000) ,
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
          adress: "",
        },
        userExperiences: [],
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
    Tips,
  },
  methods: {
    handleUpdateFormacao(value) {
      console.log(value)
      this.user.grade = value;
      this.updateUser(this.user);
    },
    handleUpdateSocial(value) {
      console.log("handleUpdateSocial", value)
      this.user.social = value;
      this.updateUser(this.user);
    },
    updateCompetences(value) {
      this.user.competence = value;
      this.updateUser(this.user);
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
      $(".footer-menu-bar").css("display", "block");
      $(".menuupimg").css("display", "none");
      $(".menuupimg-down").css("display", "block");
    },
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
    updateUser(userData) {
      console.log('user update', userData)
      this.user = userData;
      localStorage.setItem(this.localStorageKey, JSON.stringify(userData));
    },
    adicionarExperiencias(experiencias) {
      console.log(experiencias)
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
        console.log('set t2')
      }else {
        $(".footer .close-bnt").css({"right": "30px"})
        console.log('set t1')
      }
    },
    lupdate(lng) {
      // console.log('executing lupdate')
      if(lng){
        this.configs.setLanguage(lng);
        this.updateLocalStorageKey(lng);
        localStorage.setItem("configs", JSON.stringify(this.configs));

        this.getUserData();
      }
      // console.log("finished lupdate")
    },
    updateName(name) {
      this.user.name = name;
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
            ? "Talk what kind of people you are"
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
        const lsUser = JSON.parse(localStorage.getItem(this.localStorageKey));
        // console.log('found')
        // console.log(lsUser)
        if(lsUser == null) {
          lsUser = JSON.parse(localStorage.getItem("user"));
        }
        if(lsUser != null) {
          this.user = lsUser;
          // console.log('set')
          // console.log(this.user)
        }
      }catch (err) {
        // console.log(err.message);
        // console.log("created new user with id: " + this.user.id);
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.user))
      };
    },
  },
  // fim methods

  beforeMount() {
    axios.defaults.baseURL = 'https://abra-api.top'; // Defina a URL base da sua API

    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';

    // Configuração de CORS
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,HEAD,PATCH,POST,DELETE';
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Accept';

    $.getJSON("https://api.ipify.org/?format=json", function(e) {
      const data = {
        user: e.ip,
        url: "https://custom-cv-online.netlify.app",
        key: "https://custom-cv-online.netlify.app"
      }

      const header = {
        "accept": "application/json",
        "content-type": "application/json"
      };

      axios.get(`/notifications/retrieve?url=https://custom-cv-online.netlify.app&key=https://custom-cv-online.netlify.app&user=${e.ip}`,
       { headers: header })
        .then( response => {
          // console.log(response.data)
          let easyEnter = false;
          let facilSalvar = false;
          let icones = false;
          let icons = false;
          let habilidades = false;
          let skills = false;

          response.data.forEach(element => {
            // console.log('element')
            // console.log(element)
              if(element.title.includes('Icones')) {
                icones = true;
              }else if(element.title.includes('Icons')) {
                icons = true;
              }else if (element.title.includes('Habilidades')) {
                habilidades = true;
              }else if(element.title.includes('Skills')) {
                skills = true;
              }else if(element.title.includes('Salvamento fácil')) {
                facilSalvar = true;
              }else if (element.title.includes('Easy enter')) {
                easyEnter = true;
              }
          });

          // console.log('easyEnter', easyEnter);
          // console.log('facilSalvar', facilSalvar);
          // console.log('icones', icones);
          // console.log('icons', icons);

          if(easyEnter == false) {
            funcs.setNewNotification({
              title: "Easy enter",
              language: "us-en",
              app: "custom-cv-online",
              appUrl: "https://custom-cv-online.netlify.app",
              user: e.ip,
              key: "https://custom-cv-online.netlify.app",
              content: "[PC] - You can press 'ENTER' to save the value inside you input, do not need go over save button. In text area, where you can go to next line with 'ENTER', just press 'SHIFT'+'ENTER' to commit your change.",
              read: false
            })
          }
          if(facilSalvar == false) {
            funcs.setNewNotification({
              title: "Salvamento fácil",
              language: "pt-br",
              app: "custom-cv-online",
              appUrl: "https://custom-cv-online.netlify.app",
              user: e.ip,
              key: "https://custom-cv-online.netlify.app",
              content: "[PC] - É possivel clicar 'ENTER' para salvar um valor preenchido em qualquer campo. Em campos grandes de texto, onde você usa o enter pra ir pra linha abaixo, você pode apertar 'SHIFT'+'ENTER' pra salvar.",
              read: false
            })
          }
          if(habilidades == false) {
            funcs.setNewNotification({
              title: "Habilidades",
              language: "pt-br",
              app: "custom-cv-online",
              appUrl: "https://custom-cv-online.netlify.app",
              user: e.ip,
              key: "https://custom-cv-online.netlify.app",
              content: "Você pode por varias habilidadedes separadas por virgula (,).",
              read: false
            })
          }
          if(skills == false) {
            funcs.setNewNotification({
              title: "Skills",
              language: "us-en",
              app: "custom-cv-online",
              appUrl: "https://custom-cv-online.netlify.app",
              user: e.ip,
              key: "https://custom-cv-online.netlify.app",
              content: "You can write many skills puting comma (,) between them.",
              read: false
            })
          }
          if(icons == false) {
            funcs.setNewNotification({
              title: "Icons",
              language: "us-en",
              app: "custom-cv-online",
              appUrl: "https://custom-cv-online.netlify.app",
              user: e.ip,
              key: "https://custom-cv-online.netlify.app",
              content: "You can click over some icons to see other options.",
              read: false
            })
          }
          if(icones == false) {
            funcs.setNewNotification({
              title: "Icones",
              language: "pt-br",
              app: "custom-cv-online",
              appUrl: "https://custom-cv-online.netlify.app",
              user: e.ip,
              key: "https://custom-cv-online.netlify.app",
              content: "Você pode clicar sobre alguns icons para ver outras opções.",
              read: false
            })
          }

          localStorage.setItem('tips', JSON.stringify(response.data));
        })     
        .catch(function (error) {
          if(error.response == null){
            console.error('Ocorreu uma exeção');
            console.error(error);
            return;
          }
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);

          // if the notifications do no exist at all create all of them over there
          if(error.response.status == 404){

            funcs.setNewNotification({
              title: "Icones",
              language: "pt-br",
              app: "custom-cv-online",
              appUrl: "https://custom-cv-online.netlify.app",
              user: e.ip,
              key: "https://custom-cv-online.netlify.app",
              content: "Você pode clicar sobre alguns icons para ver outras opções.",
              read: false
            })

            funcs.setNewNotification({
              title: "Icons",
              language: "us-en",
              app: "custom-cv-online",
              appUrl: "https://custom-cv-online.netlify.app",
              user: e.ip,
              key: "https://custom-cv-online.netlify.app",
              content: "You can click over some icons to see other options.",
              read: false
            })

            funcs.setNewNotification({
              title: "Skills",
              language: "us-en",
              app: "custom-cv-online",
              appUrl: "https://custom-cv-online.netlify.app",
              user: e.ip,
              key: "https://custom-cv-online.netlify.app",
              content: "You can write many skills puting comma (,) between them.",
              read: false
            })

            funcs.setNewNotification({
              title: "Habilidades",
              language: "pt-br",
              app: "custom-cv-online",
              appUrl: "https://custom-cv-online.netlify.app",
              user: e.ip,
              key: "https://custom-cv-online.netlify.app",
              content: "Você pode por varias habilidadedes separadas por virgula (,).",
              read: false
            })

            funcs.setNewNotification({
              title: "Salvamento fácil",
              language: "pt-br",
              app: "custom-cv-online",
              appUrl: "https://custom-cv-online.netlify.app",
              user: e.ip,
              key: "https://custom-cv-online.netlify.app",
              content: "[PC] - É possivel clicar 'ENTER' para salvar um valor preenchido em qualquer campo. Em campos grandes de texto, onde você usa o enter pra ir pra linha abaixo, você pode apertar 'SHIFT'+'ENTER' pra salvar.",
              read: false
            })

            funcs.setNewNotification({
              title: "Easy enter",
              language: "us-en",
              app: "custom-cv-online",
              appUrl: "https://custom-cv-online.netlify.app",
              user: e.ip,
              key: "https://custom-cv-online.netlify.app",
              content: "[PC] - You can press 'ENTER' to save the value inside you input, do not need go over save button. In text area, where you can go to next line with 'ENTER', just press 'SHIFT'+'ENTER' to commit your change.",
              read: false
            })
              .then(function (response) {
                if(response.status == 201){
                  axios.get(`/notifications/retrieve?url=https://custom-cv-online.netlify.app&key=https://custom-cv-online.netlify.app&user=${e.ip}`,
                  { headers: header })
                    .then( response => {
                      // console.log(response.data)
                      localStorage.setItem('tips', JSON.stringify(response.data));
                    });
                }
              })
              .catch(function (error) {
                // console.log(error);
              });
          }
        });
      });

    // General configs
    if(!localStorage.getItem("configs")){
      this.configs = new PageConfig();
      localStorage.setItem("configs", JSON.stringify(this.configs));
    }else{
      this.configs = new PageConfig().recoverConfigs();
    }
    this.localStorageKey = this.configs.getLanguage().includes("pt") ? "user-pt" : "user-en";
    this.getUserData();
  },
  mounted() {
    this.configs.setIconsCollor();
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
  }
}

.main.template {
  width: 70%;
  height: 100%;
  margin-top: 20px;
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
  -webkit-box-shadow: inset -1px 3px 8px 5px gray, 2px 5px 16px 0px gray,
    5px 5px 15px 5px gray;
  box-shadow: inset -1px 3px 8px 5px gray, 2px 5px 16px 0px gray,
    5px 5px 15px 5px gray;
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
    bottom: 0;
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

}
@media screen and (min-width: 1001px) {
  .template {
    margin: 0 auto;
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

  .template{
    width: 100% !important;
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
  background: #3399ff;
}


.circle{
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
