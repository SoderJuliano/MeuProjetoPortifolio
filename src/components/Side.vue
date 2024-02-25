<template>
  <div :style="getStyle()" class="side">
    <div id="contatoAndPic">
        <div @click="$refs.fileInput.click()" class="pic">
        <img :src="imageURL" alt="perfil" class="img-pic" />
      </div>
      <div v-if="exibirLinks" class="contato template-data">
        <input
          type="file"
          id="input"
          ref="fileInput"
          style="display: none"
          @change="onIMGChange"
        />
        <p class="title title-template1">
          {{ language == "pt-br" ? "CONTATO" : "CONTACT" }}
          <showSwitcher
            className="contato.template-data"
            :startShowing="user.contact.email.length > 0
            || user.contact.phone.length > 0
            || user.contact.address != '' ? true : false"
          />
          <img
            src="../icons/editar.png"
            alt="editar"
            class="editar"
            @click="$emit('add-info')"
          />
        </p>
        <br />
        <div
          v-for="(item, index) in user.contact.email"
          :key="index"
          class="data-container"
        >
          <img v-if="item" @click="this.$emit('choose-emailIcon')" src="../icons/envelope.svg" class="email-icon" />
          <span class="email-text">{{ item }}</span>
        </div>

        <!-- todo phone style -->
        <div
          v-for="(item, index) in user.contact.phone"
          :key="index"
          class="data-container"
        >
          <img
            v-if="item"
            src="../icons/phone.png"
            alt="phone"
            class="phone-icon"
            @click="this.$emit('choose-phoneIcon')"
          />
          <span class="phone-text">{{ normalizePhone(item) }}</span>
          <img @click="toglePhoneMask()" src="../icons/phone/enabled.svg" id="enabled" class="phone-enabled">
          <img @click="toglePhoneMask()" src="../icons/phone/disabled.svg" id="disabled" class="phone-disabled">
        </div>
        <div class="data-container">
          <img
            @click="$emit('choose-addressIcon')"
            v-if="user.contact.adress"
            src="../icons/adress.png"
            alt="adress"
            class="adress-icon"
          />
          <span class="endereco-text">{{ user.contact.adress }}</span>
        </div>
      </div>
    </div>

    <Formacao
      @add-formacao="$emit('add-formacao')"
      @choose-educationIcon="$emit('choose-educationIcon')"
      v-if="exibirFormacao"
      class="template-data"
      :titulo="titles.formacao"
      :backgroundColor="cor"
      :user="user"
      template=1
      :language="language"
    />

    <Habilidade
      @choose-skillIcon="$emit('choose-skillIcon')"
      @add-habilidade="$emit('add-habilidade')"
      @adicionar-habilidade="$emit('adicionar-habilidade')"
      v-if="exibirHabilidade"
      class="template-data"
      :titulo="titles.habilidades"
      backgroundColor="#808080"
      :user="user"
      template=1
      :language="language"
    />

    <Social
      @add-SocialLink="$emit('add-SocialLink')"
      v-if="exibirSocial"
      class="template-data"
      backgroundColor="#808080"
      :user="user"
      template=1
      :titulo="titles.social"
      :language="language"
    />
  </div>
</template>
<script>
import Formacao from "./componentesCompartilhados/Formacao.vue";
import Habilidade from "./componentesCompartilhados/Habilidade.vue";
import Social from "./componentesCompartilhados/Social.vue";
import showSwitcher from "./iconComponent/showSwitcher.vue";

export default {
  components: {
    Formacao,
    Habilidade,
    Social,
    showSwitcher
  },
  props: {
    cor: String,
    user: Object,
    titles: Object,
    language: String,
  },
  name: "Side",
  emits: [
    "add-info",
    "add-formacao",
    "add-habilidade",
    "add-SocialLink",
    "adicionar-habilidade",
    "choose-emailIcon",
    "choose-educationIcon",
    "choose-phoneIcon",
    "update-user",
    "choose-addressIcon",
    "choose-skillIcon"
  ],
  data() {
    return {
      userData: this.user,
      imageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAES0lEQVR4nO2dy4scVRTGf92jxJBEoogaH1mI2QiuogaJEUWjIeBCJaKICxEkKzdu3Iivv0CRLELIKggGF1mpEMRIxEfQuNFRENHB1yg6EzJGMokz7eL2QNlO6UzVvfc7t/r84Oyq6nznfF2vW1W3wXEcx3Ecx3EcJy89tYAI9ICNwCXDmAdmhnFWqKsRJRpyNXAfcCtwI3ADsKZm2a+BY8BR4AhwPofAcaAP7AE+BBaBQYOYAnbnFt5FtgOTNDNhNBaAx/LK7w494EXgL+KYsRRngFeBR4HLs1VTOD1gH3GNWC7OAgeAa/KUVS7PkN6MavyGn19q2Ua4GsppyIBwuXx3hvqK4zj5zViKGfy88g/uQmfGUuxPXmVBHEJvyDxwWepCS2AN8Ad6QwbA3sS11tJXJV6GrcA6tYghd6gSWzLkFrWACttUiS0Zcr1aQIVrgQsViS0ZYulueQK4QpHYkiEb1QJGWKtIasmQC9QCRpDosWSItYdlkqeNlgyZUwsY4ZQiqSVDTqsFVJgDZhWJLRkyrRZQ4TtVYkuGTKkFVJBpsWTIN2oBFb5UJbZkyEm1gAofqwVY4Sf0I70DhKMGlvYQgE/UAoAfhiHBmiEn1AKAt5TJ3ZB/44ZUuF8tANipFmCFXehP5ktxb+Jaa7G0hzyoFlBBpsWSIZbe9JBpsWTIGbWACn+qElsy5Au1gAqfqxJbMuRdtYAKlrTI6BHvw5w2MYm9p5cy7gHOoTPj3FCDU2EnYbQ1txkf4TeFtWwivyFXZqmsYKbJZ8YvmWr6XyxdZY3yTkdz/SeWDXk9Y643MuYqlgngW9IfrqYRvVi9HJb3kAXCJ8upOYhPubFiLibtc/bThCs6ZxU8TjpDns5YR2foAW8T34wTGDp3lMYG4APimfEVRr9Ht3xSrzIHfBpxe5PArxG3F41SDIHwy47FYsRtRWVcDYm5rai4IcYoyZCYH2FeFHFbUSnJkPVGtxUVN8QYbojTiEsJH2HGujGcB67LWkHHeIX4QyeHs1bQIfaSbnDxuYx1FM8E8ALhuUgqQwbAy9RPVe4M2Qq8T1ojqvEZsCNLZYVxE/Aa6feKujgC3Ja8SuP0Cf92cBSNCcvFSeBJRFM0qbgKeBb4Hr0BdfEz8BKwOVEP5PQJs0cfRvsO72pjgbAH78HevF6NWA88RZg+Q93ctjFFeBa/IWqHMrGOcFj6HX0jY8cs8DyFDMP0gCcIx2B141LHNOECwOw3JZuxdcWUK45ja6pbIMwIPYO+OaqYBe5s3cVIPEyYOFLdFHXMA4+07GVrbh8KUTfDSpxH+OcwWxjvw1RdzCA6p6R4zbMr8WaLvjZidyThXY5djbvbgPcSFdGlOLaahra5mdlEmAqvpBclFCwS7s1+XMnCbZr5UMv1x4U+8MBqFm7KzS3WHTdW3Ks2hmxpse64seJetTHE3LiNYfzH6ziO4ziO4ziO4zhF8jeb7W7hC+joGwAAAABJRU5ErkJggg==",
      exibirLinks: true,
      exibirFormacao: true,
      exibirHabilidade: true,
      exibirSocial: true,
      phoneMask: true
    };
  },
  methods: {
    toglePhoneMask() {
      if(this.phoneMask == true) {
        document.getElementById("enabled").style.display = "none";
        document.getElementById("disabled").style.display = "block";
        this.phoneMask = false;
        let phone = document.getElementsByClassName("phone-text")[0].textContent;
        phone = phone.replaceAll(" ", "");
        phone = phone.replaceAll("-", "");
        phone = phone.replaceAll("(", "");
        phone = phone.replaceAll(")", "");
        document.getElementsByClassName("phone-text")[0].textContent =  phone;
      } else {
        document.getElementById("enabled").style.display = "block";
        document.getElementById("disabled").style.display = "none";
        this.phoneMask = true;
        let phone = document.getElementsByClassName("phone-text")[0].textContent;
        document.getElementsByClassName("phone-text")[0].textContent =  this.normalizePhone(phone);
      }
    },
    getStyle() {
      return {
        "background-color": `${this.cor}`,
      };
    },
    onIMGChange(img) {
      if (img.target.files[0].size > 2762231) {
        alert("Arquivo muito grande, tente uma img menor que 3Mb");
      } else {
        this.imageURL = URL.createObjectURL(img.target.files[0]);
        this.toDataURL(this.imageURL, function (data) {
          localStorage.setItem("newImage", data);
        });
          setTimeout(() => {
            this.userData.realImg = localStorage.getItem("newImage");
            console.log(this.userData);
            localStorage.setItem(this.language.includes("en") ? "user-en" : "user-pt", JSON.stringify(this.userData));
          }, 400);
      }
    },
    toDataURL(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
          callback(reader.result);
        };
        reader.readAsDataURL(xhr.response);
      };
      xhr.open("GET", url);
      xhr.responseType = "blob";
      xhr.send();
    },
    setRealImg(){
      this.imageURL = this.userData.realImg.length > 5 ? this.userData.realImg : this.userData.avatarImg.length > 5 ? this.userData.avatarImg
            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAES0lEQVR4nO2dy4scVRTGf92jxJBEoogaH1mI2QiuogaJEUWjIeBCJaKICxEkKzdu3Iivv0CRLELIKggGF1mpEMRIxEfQuNFRENHB1yg6EzJGMokz7eL2QNlO6UzVvfc7t/r84Oyq6nznfF2vW1W3wXEcx3Ecx3EcJy89tYAI9ICNwCXDmAdmhnFWqKsRJRpyNXAfcCtwI3ADsKZm2a+BY8BR4AhwPofAcaAP7AE+BBaBQYOYAnbnFt5FtgOTNDNhNBaAx/LK7w494EXgL+KYsRRngFeBR4HLs1VTOD1gH3GNWC7OAgeAa/KUVS7PkN6MavyGn19q2Ua4GsppyIBwuXx3hvqK4zj5zViKGfy88g/uQmfGUuxPXmVBHEJvyDxwWepCS2AN8Ad6QwbA3sS11tJXJV6GrcA6tYghd6gSWzLkFrWACttUiS0Zcr1aQIVrgQsViS0ZYulueQK4QpHYkiEb1QJGWKtIasmQC9QCRpDosWSItYdlkqeNlgyZUwsY4ZQiqSVDTqsFVJgDZhWJLRkyrRZQ4TtVYkuGTKkFVJBpsWTIN2oBFb5UJbZkyEm1gAofqwVY4Sf0I70DhKMGlvYQgE/UAoAfhiHBmiEn1AKAt5TJ3ZB/44ZUuF8tANipFmCFXehP5ktxb+Jaa7G0hzyoFlBBpsWSIZbe9JBpsWTIGbWACn+qElsy5Au1gAqfqxJbMuRdtYAKlrTI6BHvw5w2MYm9p5cy7gHOoTPj3FCDU2EnYbQ1txkf4TeFtWwivyFXZqmsYKbJZ8YvmWr6XyxdZY3yTkdz/SeWDXk9Y643MuYqlgngW9IfrqYRvVi9HJb3kAXCJ8upOYhPubFiLibtc/bThCs6ZxU8TjpDns5YR2foAW8T34wTGDp3lMYG4APimfEVRr9Ht3xSrzIHfBpxe5PArxG3F41SDIHwy47FYsRtRWVcDYm5rai4IcYoyZCYH2FeFHFbUSnJkPVGtxUVN8QYbojTiEsJH2HGujGcB67LWkHHeIX4QyeHs1bQIfaSbnDxuYx1FM8E8ALhuUgqQwbAy9RPVe4M2Qq8T1ojqvEZsCNLZYVxE/Aa6feKujgC3Ja8SuP0Cf92cBSNCcvFSeBJRFM0qbgKeBb4Hr0BdfEz8BKwOVEP5PQJs0cfRvsO72pjgbAH78HevF6NWA88RZg+Q93ctjFFeBa/IWqHMrGOcFj6HX0jY8cs8DyFDMP0gCcIx2B141LHNOECwOw3JZuxdcWUK45ja6pbIMwIPYO+OaqYBe5s3cVIPEyYOFLdFHXMA4+07GVrbh8KUTfDSpxH+OcwWxjvw1RdzCA6p6R4zbMr8WaLvjZidyThXY5djbvbgPcSFdGlOLaahra5mdlEmAqvpBclFCwS7s1+XMnCbZr5UMv1x4U+8MBqFm7KzS3WHTdW3Ks2hmxpse64seJetTHE3LiNYfzH6ziO4ziO4ziO4zhF8jeb7W7hC+joGwAAAABJRU5ErkJggg=="
    },
    showEditarContato() {
      document.getElementsByClassName(
        "editar-contato-container"
      )[0].style.display = "block";
      document.getElementsByClassName(
        "editar-contato-container"
      )[0].style.opacity = "90%";
    },
    normalizePhone(phone) {
      if(phone.length == 11 && this.language == "pt-br") {
        return "("+phone.slice(0, 2) +") "+phone.slice(2, 3) +" "+phone.slice(3, 7)+"-"+phone.slice(7, 11);
      } else if (phone.length == 14 && this.language == "pt-br") {
        return phone.slice(0, 3) +" "+phone.slice(3, 5) +" "+phone.slice(5, 10)+"-"+phone.slice(10, 14);
      } else if (phone.length == 13 && this.language == "pt-br") {
        return "+"+phone.slice(0, 2) +" "+phone.slice(2, 4) +" "+phone.slice(4, 9)+"-"+phone.slice(9, 13);
      } else if (phone.length == 9 && this.language == "pt-br") {
        return phone.slice(0, 5) +"-"+phone.slice(5, 9);
      }

      if(phone.length == 12 && this.language != "pt-br") {
        return phone.slice(0, 2)+" ("+phone.slice(2, 5)+")-"+phone.slice(5, 9)+"-"+phone.slice(9, 12);
      }else if(phone.length == 11 && this.language != "pt-br") {
        return "+"+phone.slice(0, 1)+" ("+phone.slice(1, 4)+")-"+phone.slice(4, 8)+"-"+phone.slice(8, 11);
      }

      return phone;
    }
  },
  mounted() {
    this.setRealImg()
  }
};
</script>
<style>
.editar {
  width: 24px;
  height: 24px;
  float: right;
  margin-right: 5px;
}
.side .editar {
  width: 24px;
  height: 24px;
  float: right;
}
.img-pic {
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
}
.side {
  height: 100%;
  display: block;
  box-shadow: 0 0 50px #ccc;
}
.template-data {
  width: 100%;
}
@media only screen and (max-width: 1000px) {
  .side {
    width: 100%;
    background-color: rgb(214, 86, 86);
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 10px;
  }
  .pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid black;
    align-self: center;
    margin: 0 auto;
  }
  .editar-dados-contato {
    width: 95%;
    position: absolute;
    top: 10%;
    border: 2px solid white;
  }
  .editar-dados-escolares {
    width: 95%;
    position: absolute;
    border: 2px solid white;
    top: 10%;
    display: none;
    padding: 1px;
  }
  .editar-habilidade {
    width: 95%;
    display: none;
    padding: 1px;
    position: absolute;
    top: 10%;
    margin-right: 1%;
    border: 2px solid white;
    font-weight: bold;
    z-index: 10;
  }
  .editar-social {
    width: 95%;
    display: none;
    margin-right: 1%;
    padding: 1px;
    background-color: whitesmoke;
    z-index: 1000;
    position: absolute;
    top: 10%;
    border: 2px solid white;
    font-weight: bold;
  }
}
@media screen and (min-width: 1001px) {
  .side {
    padding: 5px;
    min-height: 800px;
    width: 40%;
    min-width: 250px;
    background-color: gray;
    justify-content: center;
    padding-top: 50px;
    font-size: 14px;
    overflow-x: hidden;
    overflow-y: show;
    word-break: break-all !important;
  }
  .pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid black;
    align-self: center;
    margin: 0 auto;
  }
  .editar-dados-escolares {
    width: 300px;
    max-height: 100%;
    border-radius: 20px;
    box-shadow: gray -2px 2px 2px;
    display: none;
    background-color: whitesmoke;
    margin-top: -200px;
    margin-left: 200px;
    opacity: 90%;
    padding: 10px;
    position: absolute;
  }
  .editar-habilidade {
    width: 300px;
    max-height: 100%;
    border-radius: 20px;
    box-shadow: gray -2px 2px 2px;
    display: none;
    background-color: whitesmoke;
    margin-top: -200px;
    margin-left: 200px;
    opacity: 90%;
    padding: 10px;
    position: absolute;
    z-index: 10;
  }
  .editar-social {
    width: 400px;
    max-height: 100%;
    border-radius: 20px;
    box-shadow: gray -2px 2px 2px;
    display: none;
    background-color: whitesmoke;
    margin-top: -200px;
    margin-left: 200px;
    opacity: 90%;
    padding: 10px;
    position: absolute;
    z-index: 1000;
    border: 2px solid white;
    color: white;
    font-size: 16px;
  }
}
@media print {
  .editar-social {
    display: none;
  }
  body {
    -webkit-print-color-adjust: exact !important; /* Chrome, Safari, Edge */
    color-adjust: exact !important; /*Firefox*/
  }

  #contatoAndPic {
    margin-top: 35px;
  }
/** ver isso */
  .side {
    min-height: 900px;
    height: 100%;
    width: 40%;
    justify-content: center;
    font-size: 12px;
    word-break: break-all !important;
  }
  .pic {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid black;
    align-self: center;
    margin: 0 auto;
  }

  .editar {
    display: none;
  }

  .editar-dados-escolares {
    display: none;
  }

  .editar-habilidade {
    display: none;
  }

  .editar-dados-contato {
    display: none !important;
  }
  .editar-social {
    display: none !important;
  }
  .title {
    margin-top: 10px !important;
  }
  .formacao-container {
    padding-top: 0px !important;
  }
  .habilidade-container {
    padding-top: 0px !important;
  }
  .social-container {
    padding-top: 0px !important;
  }
}

.title {
  align-self: center;
  background-color: white;
  color: black;
  font-weight: bolder;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
  padding: 5px;
}
.data-container {
  display: flex;
  width: 80%;
  padding-bottom: 10px;
  align-self: center;
  margin: 0 auto;
  margin-top: 1px;
  margin-bottom: 10px;
}

.contact-template2 .data-container{
  margin: 0%;
  margin-left: 10px;
}

.email-icon {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
.phone-icon {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
.adress-icon {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
</style>
