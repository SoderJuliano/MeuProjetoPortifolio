<template>
  <editorInformacoes
    :mainTitle="modal.mainTitle"
    :title="modal.title1"
    :placeholder="modal.placeholder1"
    :competencia="user.competence"
    :title2="modal.title2"
    :placeholder2="modal.placeholder2"
    :experiences="user.userExperiences"
    :user="user"
    @update-experiences="adicionarExperiencias"
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
      @add-info="addInfo"
      @add-resumo="editarResumo"
      @add-competencia="editarCompetencias"
      @add-experiencia="editarExperiencias"
      @add-nome="this.showModal('nome')"
      @add-profissao="this.showModal('profissao')"
      @add-formacao="this.showModal('formacao')"
      @add-habilidade="this.showModal('habilidade')"
      @add-SocialLink="this.showModal('socialLink')"
      @adicionar-habilidade="adicionarNovaHabilidade"
      class="template"
      :style="getStyle()"
      :mainColor="mainColor"
      :sideColor="sideColor"
      :fontColor="fontColor"
      :user="user"
      :userExperiences="user.userExperiences"
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
      @add-nome="this.showModal('nome')"
      @add-profissao="this.showModal('profissao')"
      @add-formacao="this.showModal('formacao')"
      @add-habilidade="this.showModal('habilidade')"
      @add-SocialLink="this.showModal('socialLink')"
      :style="getStyle()"
      :mainColor="mainColor"
      :sideColor="sideColor"
      :fontColor="fontColor"
      :user="user"
      :userExperiences="user.userExperiences"
    />
    <div class="footer">
      <Footer
        :template="template"
        @font-changed="setFont"
        @now-template1="change_template(1)"
        @now-template2="change_template(2)"
        @change-main-color="changeMainColor"
        @change-font-color="changeFontColor"
      />
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
      user: {
        name: "",
        profession: "",
        resume: "",
        competence: [],
        social: [],
        grade: [],
        hability: "",
        img: "",
        contact: {
          email: [],
          phone: [],
          adress: "",
        },
        userExperiences: [],
      },
    };
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
      // futuramente salvar todo esse objeto na base
      this.user = userData;
    },
    adicionarExperiencias(experiencias) {
      this.user.userExperiences = experiencias;
      console.log(experiencias);
    },
    adicionarNovaHabilidade(habilidade) {
      this.user.hability = habilidade;
    },
    adicionarNovaFormacao(formacao) {
      this.user.grade.push(formacao);
    },
    contatoIsEmpty() {
      return localStorage.getItem("contato") == null;
    },
    nameIsEmpty() {
      return localStorage.getItem("user-name") == null;
    },
    professionIsEmpty() {
      return localStorage.getItem("profession") == null;
    },
    resumeIsEmpty() {
      return localStorage.getItem("about") == null;
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
          this.modal.mainTitle = this.languageIsEN()
            ? strings[1].skills
            : strings[0].skills;
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
    getContatoDataPage() {
      const nname = localStorage.getItem("user-name");
      if (nname) {
        this.user.name = nname;
      }
      const prof = localStorage.getItem("profession");
      if (prof) {
        this.user.profession = prof;
      }
      const about = localStorage.getItem("about");
      if (about) {
        this.user.resume = about;
      }
      const competencias = localStorage.getItem("cpta");
      if (competencias) {
        const arr = JSON.parse(competencias);
        this.user.competence = arr;
      }
    },
    getExperienceData() {
      let jobs = JSON.parse(localStorage.getItem("jobs"));
      if (jobs) {
        console.log(jobs);
        this.user.userExperiences = jobs.slice(0).reverse();
      }
    },
    getContactData() {
      let contato = localStorage.getItem("contato")
        ? JSON.parse(localStorage.getItem("contato"))
        : "";
      this.user.social = localStorage.getItem("redesociais")
        ? localStorage.getItem("redesociais").split(",")
        : "";

      if (contato) {
        this.user.contact.email = contato.email;
        this.user.contact.phone = contato.phone;
        this.user.contact.adress = contato.adress;
      }

      // grade

      const gradeStorage = localStorage.getItem("grade");
      if (gradeStorage) {
        this.user.grade = [];
        this.user.grade = gradeStorage.split(",");
      }

      // habilitys

      const habilityStorage = localStorage.getItem("hability");
      if (habilityStorage) {
        this.user.hability = habilityStorage;
      }
    },
    getUserProfileIMG() {
      const pimg = localStorage.getItem("profileimg");
      const realImg = localStorage.getItem("profileImg");

      if (realImg && realImg != "none") {
        this.user.img = this.imageURL = "data:image/" + realImg;
      } else if (pimg && pimg.includes("av")) {
        let av;
        switch (pimg) {
          case "av1":
            av =
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAES0lEQVR4nO2dy4scVRTGf92jxJBEoogaH1mI2QiuogaJEUWjIeBCJaKICxEkKzdu3Iivv0CRLELIKggGF1mpEMRIxEfQuNFRENHB1yg6EzJGMokz7eL2QNlO6UzVvfc7t/r84Oyq6nznfF2vW1W3wXEcx3Ecx3EcJy89tYAI9ICNwCXDmAdmhnFWqKsRJRpyNXAfcCtwI3ADsKZm2a+BY8BR4AhwPofAcaAP7AE+BBaBQYOYAnbnFt5FtgOTNDNhNBaAx/LK7w494EXgL+KYsRRngFeBR4HLs1VTOD1gH3GNWC7OAgeAa/KUVS7PkN6MavyGn19q2Ua4GsppyIBwuXx3hvqK4zj5zViKGfy88g/uQmfGUuxPXmVBHEJvyDxwWepCS2AN8Ad6QwbA3sS11tJXJV6GrcA6tYghd6gSWzLkFrWACttUiS0Zcr1aQIVrgQsViS0ZYulueQK4QpHYkiEb1QJGWKtIasmQC9QCRpDosWSItYdlkqeNlgyZUwsY4ZQiqSVDTqsFVJgDZhWJLRkyrRZQ4TtVYkuGTKkFVJBpsWTIN2oBFb5UJbZkyEm1gAofqwVY4Sf0I70DhKMGlvYQgE/UAoAfhiHBmiEn1AKAt5TJ3ZB/44ZUuF8tANipFmCFXehP5ktxb+Jaa7G0hzyoFlBBpsWSIZbe9JBpsWTIGbWACn+qElsy5Au1gAqfqxJbMuRdtYAKlrTI6BHvw5w2MYm9p5cy7gHOoTPj3FCDU2EnYbQ1txkf4TeFtWwivyFXZqmsYKbJZ8YvmWr6XyxdZY3yTkdz/SeWDXk9Y643MuYqlgngW9IfrqYRvVi9HJb3kAXCJ8upOYhPubFiLibtc/bThCs6ZxU8TjpDns5YR2foAW8T34wTGDp3lMYG4APimfEVRr9Ht3xSrzIHfBpxe5PArxG3F41SDIHwy47FYsRtRWVcDYm5rai4IcYoyZCYH2FeFHFbUSnJkPVGtxUVN8QYbojTiEsJH2HGujGcB67LWkHHeIX4QyeHs1bQIfaSbnDxuYx1FM8E8ALhuUgqQwbAy9RPVe4M2Qq8T1ojqvEZsCNLZYVxE/Aa6feKujgC3Ja8SuP0Cf92cBSNCcvFSeBJRFM0qbgKeBb4Hr0BdfEz8BKwOVEP5PQJs0cfRvsO72pjgbAH78HevF6NWA88RZg+Q93ctjFFeBa/IWqHMrGOcFj6HX0jY8cs8DyFDMP0gCcIx2B141LHNOECwOw3JZuxdcWUK45ja6pbIMwIPYO+OaqYBe5s3cVIPEyYOFLdFHXMA4+07GVrbh8KUTfDSpxH+OcwWxjvw1RdzCA6p6R4zbMr8WaLvjZidyThXY5djbvbgPcSFdGlOLaahra5mdlEmAqvpBclFCwS7s1+XMnCbZr5UMv1x4U+8MBqFm7KzS3WHTdW3Ks2hmxpse64seJetTHE3LiNYfzH6ziO4ziO4ziO4zhF8jeb7W7hC+joGwAAAABJRU5ErkJggg==";
            break;
          case "av2":
            av = "../img/avatar2.9281ce7f.png";
            break;
          case "av3":
            av =
              "data:image/png;base64,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";
            break;
          case "av4":
            av =
              "data:image/png;base64,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";
            break;
          case "av5":
            av = "none";
            break;
          case "av51":
            av = "../img/avatar5.e57e5808.png";
            break;
          case "av6":
            av = "../img/avatar6.94999127.png";
            break;
          case "av7":
            av = "../img/avatar7.02252c9f.png";
            break;
          case "av8":
            av = "../img/avatar8.60347a72.png";
            break;
        }
        this.user.img = av;
      }
    },
    setToEn() {
      if (this.contatoIsEmpty()) {
        (this.user.contact.email = [strings[1].emailSpan]),
          (this.user.contact.phone = [strings[1].phone]),
          (this.user.contact.adress = strings[1].address),
          (this.user.contact.adress = this.languageIsEN()
            ? strings[1].adress
            : strings[0].adress);
      }
      if (this.nameIsEmpty()) {
        this.user.name = strings[1].yname;
      }
      if (this.professionIsEmpty()) {
        this.user.profession = strings[1].yjob;
      }
      if (this.resumeIsEmpty()) {
        this.user.resume = strings[1].aboutSpan;
      }
    },
    setToPT() {
      if (this.contatoIsEmpty()) {
        (this.user.contact.email = [strings[0].emailSpan]),
          (this.user.contact.phone = [strings[0].phone]),
          (this.user.contact.adress = strings[0].address),
          (this.user.contact.adress = this.languageIsEN()
            ? strings[1].adress
            : strings[0].adress);
      }
      if (this.nameIsEmpty()) {
        this.user.name = strings[0].yname;
      }
      if (this.professionIsEmpty()) {
        this.user.profession = strings[0].yjob;
      }
      if (this.resumeIsEmpty()) {
        this.user.resume = strings[1].aboutSpan;
      }
    },
  },
  beforeMount() {
    this.getColors();

    this.getContatoDataPage();

    this.getExperienceData();

    this.getContactData();

    localStorage.getItem("font")
      ? (this.font = localStorage.getItem("font"))
      : (this.font = "Oswald");

    this.template = localStorage.getItem("template")
      ? parseInt(localStorage.getItem("template"))
      : 1;

    this.language = localStorage.getItem("lng")
      ? localStorage.getItem("lng")
      : "pt-br";

    let img = localStorage.getItem("profileimg");
    let Img = localStorage.getItem("profileImg");
    if (img || Img) {
      this.getUserProfileIMG();
    } else {
      this.user.img =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAES0lEQVR4nO2dy4scVRTGf92jxJBEoogaH1mI2QiuogaJEUWjIeBCJaKICxEkKzdu3Iivv0CRLELIKggGF1mpEMRIxEfQuNFRENHB1yg6EzJGMokz7eL2QNlO6UzVvfc7t/r84Oyq6nznfF2vW1W3wXEcx3Ecx3EcJy89tYAI9ICNwCXDmAdmhnFWqKsRJRpyNXAfcCtwI3ADsKZm2a+BY8BR4AhwPofAcaAP7AE+BBaBQYOYAnbnFt5FtgOTNDNhNBaAx/LK7w494EXgL+KYsRRngFeBR4HLs1VTOD1gH3GNWC7OAgeAa/KUVS7PkN6MavyGn19q2Ua4GsppyIBwuXx3hvqK4zj5zViKGfy88g/uQmfGUuxPXmVBHEJvyDxwWepCS2AN8Ad6QwbA3sS11tJXJV6GrcA6tYghd6gSWzLkFrWACttUiS0Zcr1aQIVrgQsViS0ZYulueQK4QpHYkiEb1QJGWKtIasmQC9QCRpDosWSItYdlkqeNlgyZUwsY4ZQiqSVDTqsFVJgDZhWJLRkyrRZQ4TtVYkuGTKkFVJBpsWTIN2oBFb5UJbZkyEm1gAofqwVY4Sf0I70DhKMGlvYQgE/UAoAfhiHBmiEn1AKAt5TJ3ZB/44ZUuF8tANipFmCFXehP5ktxb+Jaa7G0hzyoFlBBpsWSIZbe9JBpsWTIGbWACn+qElsy5Au1gAqfqxJbMuRdtYAKlrTI6BHvw5w2MYm9p5cy7gHOoTPj3FCDU2EnYbQ1txkf4TeFtWwivyFXZqmsYKbJZ8YvmWr6XyxdZY3yTkdz/SeWDXk9Y643MuYqlgngW9IfrqYRvVi9HJb3kAXCJ8upOYhPubFiLibtc/bThCs6ZxU8TjpDns5YR2foAW8T34wTGDp3lMYG4APimfEVRr9Ht3xSrzIHfBpxe5PArxG3F41SDIHwy47FYsRtRWVcDYm5rai4IcYoyZCYH2FeFHFbUSnJkPVGtxUVN8QYbojTiEsJH2HGujGcB67LWkHHeIX4QyeHs1bQIfaSbnDxuYx1FM8E8ALhuUgqQwbAy9RPVe4M2Qq8T1ojqvEZsCNLZYVxE/Aa6feKujgC3Ja8SuP0Cf92cBSNCcvFSeBJRFM0qbgKeBb4Hr0BdfEz8BKwOVEP5PQJs0cfRvsO72pjgbAH78HevF6NWA88RZg+Q93ctjFFeBa/IWqHMrGOcFj6HX0jY8cs8DyFDMP0gCcIx2B141LHNOECwOw3JZuxdcWUK45ja6pbIMwIPYO+OaqYBe5s3cVIPEyYOFLdFHXMA4+07GVrbh8KUTfDSpxH+OcwWxjvw1RdzCA6p6R4zbMr8WaLvjZidyThXY5djbvbgPcSFdGlOLaahra5mdlEmAqvpBclFCwS7s1+XMnCbZr5UMv1x4U+8MBqFm7KzS3WHTdW3Ks2hmxpse64seJetTHE3LiNYfzH6ziO4ziO4ziO4zhF8jeb7W7hC+joGwAAAABJRU5ErkJggg==";
    }
  },
  mounted() {
    this.languageIsEN() ? this.setToEn() : this.setToPT();
  },
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
    height: 100vh;
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
