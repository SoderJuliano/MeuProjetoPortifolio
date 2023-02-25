<template>
  <editorInformacoes
    :mainTitle="modal.mainTitle"
    :title="modal.title1"
    :placeholder="modal.placeholder1"
    :title2="modal.title2"
    :placeholder2="modal.placeholder2"
    :user="user"
    :language="language"
    :template="template"
    @adicionar-formacao="adicionarNovaFormacao"
    @adicionar-habilidade="adicionarNovaHabilidade"
    @update-name="updateName"
    @add-profissao="this.showModal('profissao')"
    @update-user="updateUser"
  />
  <nav-bar
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
        :template="template"
        :user="user"
        @update-user="updateUser"
        @now-template1="change_template(1)"
        @now-template2="change_template(2)"
        class="multi-menu-class"
        @changefont="changefont"
        @click="changefontOld"
        @close="close"
      />
    </div>
    <template1
      v-if="template == 1"
      :language="language"
      @update-user="updateUser"
      @add-info="addInfo"
      @add-resumo="editarResumo"
      @add-competencia="editarCompetencias"
      @add-experiencia="editarExperiencias"
      @add-nome="editarNome"
      @add-profissao="this.showModal('profissao')"
      @add-formacao="this.showModal('formacao')"
      @add-habilidade="this.showModal('habilidade')"
      @add-SocialLink="this.showModal('socialLink')"
      @adicionar-habilidade="adicionarNovaHabilidade"
      @choose-emailIcon="editarIcons('email')"
      @choose-educationIcon="editarIcons('education')"
      @choose-phoneIcon="editarIcons('phone')"
      class="template"
      :style="getStyle()"
      :mainColor="mainColor"
      :sideColor="sideColor"
      :fontColor="fontColor"
      :user="user"
    />
    <template2
      v-if="template == 2"
      :language="language"
      @add-info="addInfo"
      @add-resumo="editarResumo"
      @adicionar-habilidade="adicionarNovaHabilidade"
      class="template"
      @add-experiencia="editarExperiencias"
      @add-competencia="editarCompetencias"
      @add-nome="editarNome"
      @add-profissao="this.showModal('profissao')"
      @add-formacao="this.showModal('formacao')"
      @add-habilidade="this.showModal('habilidade')"
      @add-SocialLink="this.showModal('socialLink')"
      :style="getStyle()"
      :mainColor="mainColor"
      :sideColor="sideColor"
      :fontColor="fontColor"
      :user="user"
    />
    <div class="footer">
      <img class="menuupimg" @click="footerUp" src="./assets/arrow-up.png" alt="menu up"/>
      <div class="footer-menu-bar" style="display: none;" > 
        <Footer
          :language="language"
          @language-update="lupdate"
          :template="template"
          @font-changed="setFont"
          :user="user"
          @now-template1="change_template(1)"
          @now-template2="change_template(2)"
          @change-main-color="changeMainColor"
          @change-font-color="changeFontColor"
        />
      </div>
    </div>
    <div class="right"></div>
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
import $ from "jquery";

export default {
  name: "App",
  emits: ["close"],
  data() {
    return {
      language: "",
      imageURL: "",
      template: 1,
      font: "Oswald",
      fontSize: "15px",
      fontSizeTitles: "17px",
      fontColor: "black",
      sideColor: "#B0C4DE",
      mainColor: "#87CEEB",
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
  },
  methods: {
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
      this.font = newFont;
      localStorage.setItem("font", newFont);
    },
    changeFontColor(color) {
      this.fontColor = color;
    },
    changeMainColor(color) {
      this.mainColor = color;
    },
    updateUser(userData) {
      // futuramente pode ser usado classes this.user.updator(userData);
      this.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
    },
    adicionarExperiencias(experiencias) {
      this.user.userExperiences = experiencias;
    },
    adicionarNovaHabilidade(habilidade) {
      this.user.hability = habilidade;
    },
    adicionarNovaFormacao(formacao) {
      this.user.grade.push(formacao);
    },
    languageIsEN() {
      return this.language == "us-en";
    },
    change_template(template) {
      template > 0
        ? localStorage.setItem("template", template)
        : localStorage.setItem("template", 1);
      this.template = template;
    },
    lupdate(lng) {
      lng ? localStorage.setItem("lng", lng) : "";
      this.language = lng;
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
        "10";
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
          console.log('habilidade')
          console.log(strings[1].skill)
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
          this.modal.mainTitle = "Redes sociais";
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
    changefontOld(p) {
      if (p.target.id == "square") {
        console.log("teste");
        document.getElementsByClassName("pic")[0].style["border-radius"] =
          "0px";
        document.getElementsByClassName("img-pic")[0].style["border-radius"] =
          "0px";
        document.getElementsByClassName("pic")[0].style["border"] =
          "2px solid black";
      } else if (p.target.id == "triangleUp") {
        document.getElementsByClassName("pic")[0].style["border-radius"] =
          "11px";
        document.getElementsByClassName("img-pic")[0].style["border-radius"] =
          "11px";
        document.getElementsByClassName("pic")[0].style["border"] =
          "2px solid black";
      } else if (p.target.id == "circle") {
        document.getElementsByClassName("pic")[0].style["border-radius"] =
          "50%";
        document.getElementsByClassName("img-pic")[0].style["border-radius"] =
          "50%";
        document.getElementsByClassName("pic")[0].style["border"] =
          "2px solid black";
      } else if (p.target.id == "colorfull-circle") {
        document.getElementsByClassName("pic")[0].style["border-radius"] =
          "50%";
        document.getElementsByClassName("img-pic")[0].style["border-radius"] =
          "50%";
        document.getElementsByClassName("pic")[0].style["border-top"] =
          "5px solid rgb(255, 2, 2)";
        document.getElementsByClassName("pic")[0].style["border-left"] =
          "5px solid rgb(68, 0, 255)";
        document.getElementsByClassName("pic")[0].style["border-right"] =
          "5px solid rgb(0, 158, 61)";
        document.getElementsByClassName("pic")[0].style["border-bottom"] =
          "5px solid rgb(255, 0, 221)";
      } else if (p.target.textContent.includes("pag-") == true) {
        let i = 0;
        let all = document.getElementsByClassName("title");
        let page_header = document.getElementsByClassName("page-header");
        //console.log(p.target.id)
        if (p.target.textContent == "pag-#1F271B") {
          setTimeout(() => {
            for (i; i < all.length; i++) {
              all[i].style.color = "white";
              all[i].style.backgroundColor = "#1F271B";
              
              if(page_header[0]){
              page_header[0].style.color = "white"
              }else{
                document.getElementById("text_header").style.color = "white";
              }
            }  
          }, 500);
          
        } else {

          if(page_header[0]){
            page_header[0].style.color = "black"
          }else{
            document.getElementById("text_header").style.color = "black";
          }

          all = document.getElementsByClassName("title");
          for (i; i < all.length; i++) {
            all[i].style.color = "black";
            all[i].style.backgroundColor = "white";
          }

        }
        p.target.id.split("").length < 8 && p.target.id.split("").length > 1
          ? ((this.mainColor = p.target.id),
            localStorage.setItem("mainColor", p.target.id))
          : localStorage.getItem("mainColor")
          ? (this.mainColor = localStorage.getItem("mainColor"))
          : (this.mainColor = "#87CEEB");
      } else if (p.target.textContent.includes("#") == true) {
        if (
          p.target.textContent.split("").length > 0 &&
          p.target.textContent.split("").length < 8
        ) {
          this.sideColor = p.target.textContent;
          localStorage.setItem("sideColor", p.target.textContent);
        }
      } else if (
        p.target.textContent.length < 20 &&
        p.target.textContent != "X"
      ) {
        this.font = p.target.textContent;
        localStorage.setItem("font", p.target.textContent);
      }
      console.log(p.target.textContent);
    },
    getStyle() {
      switch (this.font) {
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
            "font-family": this.font,
          };
      }
    },
    getColors() {
      const mc = localStorage.getItem("mainColor");
      const sc = localStorage.getItem("sideColor");
      const fntc = localStorage.getItem("fontColor");
      if (mc) {
        this.mainColor = mc;
      }
      if (sc) {
        this.sideColor = sc;
      }
      if (fntc) {
        this.fontColor = fntc;
      }
    },
    getUserData() {
      // esse vai ser o único objeto que precisa
      const localUser = localStorage.getItem("user");
      this.user = localUser ? JSON.parse(localUser) : this.user; 
    },
    getUserProfileIMG() {

      const pimg = localStorage.getItem("avatarImg");
      const realImg = localStorage.getItem("profileImg");

      if (realImg && realImg != "none") {
        this.user.realImg = this.imageURL = "data:image/" + realImg;
      } else {
        this.user.realImg = pimg;
      }

    }
  },
  beforeMount() {
    this.getColors();

    this.getUserData();

    localStorage.getItem("font")
      ? (this.font = localStorage.getItem("font"))
      : (this.font = "Oswald");

    this.template = localStorage.getItem("template")
      ? parseInt(localStorage.getItem("template"))
      : 1;

    this.language = localStorage.getItem("lng")
      ? localStorage.getItem("lng")
      : "pt-br";
    
  },
  /* mounted() {
    this.languageIsEN() ? this.setToEn() : this.setToPT();
  }, */
};
</script>

<style>
@media print {
  .template {
    width: 100vw !important;
    height: 100vh !important;
  }
}

.main.template {
  width: 66%;
  height: 100%;
  margin-top: 10px;
}

.multi-menu-class:hover {
  transform: perspective(400px) rotateY(5deg);
}

.multi-menu-class {
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
    width: 23%;
    height: 100vh;
    padding: 10px;
    margin-right: 10px;
  }
  .right {
    width: 25%;
    margin: 0 auto;
  }
}
@media print {
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
</style>
