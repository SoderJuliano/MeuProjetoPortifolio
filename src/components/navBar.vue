<template>
    <div class="container-fluid">
        <nav class="navbar">
            <div class="nav-item is-right">
                <img id="showMenu" v-if="show==false" @click="showMenu"  src="../icons/menustatic.png" alt="menu">
                <button class="bnt-close" v-else @click="close">
                    X
                </button>
            </div>
              <div class="midle-options">
                <button @click="changeLanguage('pt-br')" class="bnt-languages">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZklEQVR4nO2W70tTURjHz/9VkvmjVC5qQ2IlBPkDfKVvxNheBEpZL+pNBAVtgwRf6sTfA/EHm0gqiixY0WglWYa1XViRSfGV59Kt1HvvOXf3bDg5X3hgcMfd+Xy/z3meMaakpKSkpHQWpEWbUU7FFED0jCfQOtmIeKoKq68v4sZUY3kB3I/XQ/9YAeydMyr/6Twer9SdfoDWP66bBz9eMtNgsgGOu25XstJgsgB4rhcrDSYDwMr17NtLCD0Lor07gsv+MaM6usMIhYLGM1lpMC8Adq4vzLaj/loUF65MWRY9W4x1SEmDFQpg1+t0+ErfpO3hzaLvWEHkXabhGsCp13PvfAjeTeDWnTUEB9fR2ZuAr20OlT5riIbro8hlaj3dDVcAvAmzuTEPKx0c/MbLV1kMj6bR1bd8BCgcCniaVEIAohNm+UUaG8kvSKzuYn1rD6k3OrK5/RNA2x++4eGTJGqvzhgXGx4mFRdAdK5T1fmtL27zzTkEBtcwHnuPrP7zL8jO7nf0P1gRerddGlyAgaUGfN0RA3CaPGZVt0zj3qMtZLbzBsSP/V9C7yYTycyCWsg/0YSZZDX3R2jm8wDMqmqZxtOhFNKZz9z3UvtSG3u+xLw0aEmJApg19Py2a9c9jVGnNGjDirTRvzE6Aj1T49p1KYvMLg1aTqKLbCnWVpDrmgwApzQIgpaUk/NWh48Lui4NwCkN2rC0pDp7IsZ4paLPkXDgRNvoLl2XDuBmUslwXSsGAO9ueO11rVQAIml4dV0rNoBdGrJc10oF8P8fQZmua6UEKHYxBRA9ZQkoKSkpKSmxMtQhlLbo6Z/lAAQAAAAASUVORK5CYII=">
                </button>
                <button @click="changeLanguage('us-en')" class="bnt-languages">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nO2VrQoCQRSFx5eybhAWtmkSxGLWJzD4ACbrWn0FFxQVDGKzCQo2g2lAFydZruyCFg3uMr/O+eDA3HYP9565jAEAAADAMERUCRoJyZaoVZWJ/aWBqDWn0Xj/bqBo3etvcxkxEDZndDjdKGMw3FHRut1dU3p/5MremQF+TZWJfZtAPDnSanOhemdJZerp4pzrNQHtBgLJMmIgkpgD7SEOJefAyDcaS8yB83eA685AJPkOaDUQ4g4kH3fA+QwIGKj+PgGVgdMSYm5BU9xrA0Jh4LT8QsKCpoTXBrgFe829DjF33YCwYK+F1yEWLhsAAAAAAGCleAKWmufwwWk9CQAAAABJRU5ErkJggg==">
                </button>
              </div>
              <div class="right-options">
                <li class="nav-item">
                  <img class="li-img" src="../icons/database.png" alt="database">
                  <a v-on:click="dbSave()" class="nav-link">{{ this.printDatadaseText() }}</a>
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
                    <a v-on:click="this.$emit('ativationAccount')" class="dropdown-item" href="#">{{this.getActivateAccText()}}</a>
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
          <button @click="openLogin" :disabled="this.login">{{this.login ? "Login..." : "Login"}}</button>
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
import GlobalModal from './componentesCompartilhados/GlobalModal.vue';
import { deleteUser } from "./configs/requests.js";

export default {
    name: 'nav-bar',
    props: {
      language: String,
      user: Object,
      inlogin: Boolean
    },
    data() {
      return{
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
      'check-abra-messages'
    ],
    methods:{
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
          console.log(response);
          if (response.status == 200) {
              localStorage.removeItem("user-pt");
              localStorage.removeItem("user-en");
              this.showAlertComponent(null, this.language == 'us-en' ? 'Deleted successfully!' : "Deletado com sucesso!");
              this.$refs.globalModal.close();
              return;
          } else {
            console.error("Falha ao logar");
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
        let userFromModer = new UserModel();
        userFromModer = userFromModer.constructorObject(this.user);
        const response = await userFromModer.requestDeleteThisUser();
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
        this.showAlert = false
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
        const confirmed = confirm(this.getAlertConfirmText());

        if (confirmed) {
          let userFromModer = new UserModel();
          userFromModer = userFromModer.constructorObject(this.user);
          if(userFromModer.getEmails() == null || userFromModer.getEmails().length == 0) {
            this.showAlertComponent("Error", this.getErroSalvarNoBancoSemInfos());
            return;
          }
          if(userFromModer instanceof UserModel) {
            let response;
            response = await userFromModer.saveIntoDatabase(this.isANewUser);
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
                setTimeout(() => {
                  this.dbSave();
                }, 200);
              } else if(response.status == 201) {
                this.isANewUser = true;
                // alert("Salvo com sucesso! Agora vamos salvar sua senha.", response.data);
                this.showAlertComponent(null, "Salvo com sucesso! Agora vamos salvar sua senha.");
                this.$emit('register-user', response.data.content._id, this.isANewUser);
              } else if (response.status == 200) {
                this.isANewUser = false;
                //alert("Salvo com sucesso!", response.data);
                this.$emit('register-user', response.data.content._id, this.isANewUser);
              }
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
      },
      getErroSalvarNoBancoSemInfos() {
        return this.getLanguage() == 'us-en' ?
        "You do not have data to save or is missing at last one email in your cv contact infos" :
        "Não tem dados para salvar, ou está faltando um email nos dados de contato do seu cv"
      },
      getAlertConfirmText() {
        return this.getLanguage() == 'us-en' ?
        "Is Ok save all yor information in our database?" : "Podemos salvar todas suas informações em nosso banco de dados?"
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
        "We store all your information locally in the browser's memory (on localhost). We do not use cookies, nor do we save any of your data on our servers. If you wish to share your information and save it to our database, please click 'Save Remotely' and register."
        : "Armazenamos todas as suas informações localmente na memória do navegador (em localhost). Não usamos cookies, nem salvamos nenhum dos seus dados em nossos servidores. Se você deseja compartilhar suas informações e salvá-las em nosso banco de dados, clique em 'Salvar remotamente' e registre-se.";
        this.customAlert = true;
        this.alertMessage = text;
        this.alertTitle = 'INFO'
        this.showAlert = true;
      },
      aboutMe(){
        window.open("https://www.linkedin.com/in/julianosoder/");
      },
      support(){
        // caixa baae423e-b98a-4f7b-b32b-fb8174b175b3
        localStorage.getItem('lng') != 'us-en'
          ? alert("Torne-se um apoiador deste projeto com um pix (qualquer valor) para esta chave aleartória -> baae423e-b98a-4f7b-b32b-fb8174b175b3")
          : alert("Support this project sending money or sharing it with friends")
      },
      more() {
        const text = this.language == 'us-en' ?
        "If you'd like to see more of my projects, feel free to follow my GitHub at SoderJuliano(https://github.com/SoderJuliano). You can also visit my personal webpage at https://juliano-soder.netlify.app. This generator is still in development, so please consider supporting it."
        : "Se você quiser ver mais de meus projetos, fique à vontade para seguir meu GitHub em SoderJuliano. Você também pode visitar minha página pessoal em juliano-soder.netlify.app. Este gerador ainda está em desenvolvimento, então considere apoiá-lo .";
        this.customAlert = true;
        this.alertMessage = text;
        this.alertTitle = 'SUPORT'
        this.showAlert = true;
      },
      contact(){
        window.location.href = "mailto:juliano_soder@hotmail.com?subject=Hi there&body=message%20goes%20here";
      },
      imprimir(){
        const sideHeight = $(".side").height()
        const mainHeight = $(".main-container").width()

        // console.log("side: " + sideHeight)
        // console.log("main-container: " + mainHeight )

        sideHeight > 950 ? $(".side").height(sideHeight) : $(".side").css("height", "100vh")
        if(mainHeight > sideHeight && mainHeight > 950){
          $(".side").height(mainHeight)
        }else{
          $(".main-container").height(sideHeight+50)
        }

        window.print()

        $(".side").height(sideHeight)
        $(".main-container").height(mainHeight)

      },
      changeLanguage(lng){
        this.$emit('language-update', lng)
        lng == "pt-br" ?
        (document.getElementsByClassName("bnt-languages")[0].style.backgroundColor = "blue",
        document.getElementsByClassName("bnt-languages")[1].style.backgroundColor = "white",
        document.getElementsByClassName("bnt-languages")[1].style.color = "black",
        document.getElementsByClassName("bnt-languages")[0].style.color = "white"
        )
        : (document.getElementsByClassName("bnt-languages")[1].style.backgroundColor = "blue",
        document.getElementsByClassName("bnt-languages")[0].style.backgroundColor = "white",
        document.getElementsByClassName("bnt-languages")[0].style.color = "black",
        document.getElementsByClassName("bnt-languages")[1].style.color = "white")
      }
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
          console.log('isANewUser', newValue);
          this.$emit('isANewUser', newValue);
        },
        inlogin(newValue){
          console.log('inlogin', newValue);
          this.login = newValue;
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

li img {
  width: 50px;
  height: 50px;
}

@media print {
  .bnt-languages{
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
  height: 50px;
  margin-bottom: 20px;
  justify-content: center;
  padding-top: 10px;
  display: flex;
  position: relative;
}
.navbar {
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
}

.navbar-login {
  justify-content: right;
  position: absolute;
  right: 0;
  align-self: right;
  padding: 10px;
  background-color: rgba(245, 245, 245, 0.205);
  border-radius: 10px;
}

.navbar-login button {
  background-color: #3498db;
  color: white;
  padding: 10px;
  font-weight: bolder;
  border-radius: 10px;
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
}
.midle-options{
  justify-content: center;
  width: 100%;
  display: flex;
}

@media screen and (max-width: 1000px) {
  
  /* Menu sandwish desapear when screen is less than 1000px */
  #showMenu {
    display: none !important;
  }
}
</style>
