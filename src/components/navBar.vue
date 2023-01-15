<template>
    <div class="container-fluid">
        <nav class="navbar">
            <div class="nav-item is-right">
                <img id="showMenu" v-if="show==false" @click="showMenu"  src="../icons/menustatic.png" alt="menu">
                <button class="bnt-close" v-else @click="close">
                    X
                </button>
                <template-chooser 
                  :template="template"
                  @now-template1="this.$emit('now-template1')"
                  @now-template2="this.$emit('now-template2')"
                />
            </div>
              <div class="midle-options">
                <button @click="changeLanguage('pt-br')" class="bnt-languages">Protugues</button>
                <button @click="changeLanguage('us-en')" class="bnt-languages">English</button>
              </div>
              <div class="right-options">
                  <li v-on:click="imprimir" class="nav-item" id="imprimir-item">
                    <img src="../icons/header/print.png" alt="print" />
                    <a href="#" class="nav-link">{{this.printText()}}</a>
                  </li>
                    <li @click="showDropDown(1)" class="nav-item" id="navbarDropdown">
                      <img src="../icons/header/info.png" alt="info" />
                      <a class="nav-link" href="#" >
                        {{this.informacoesText()}}
                      </a>
                      <div v-if="info" class="dropdown-menu" >
                        <a v-on:click="about" class="dropdown-item" href="#">{{this.sobreSiteText()}}</a>
                        <a v-on:click="more" class="dropdown-item" href="#">{{this.exemplesText()}}</a>
                        <a v-on:click="support" class="dropdown-item" href="#">{{this.suportText()}}</a>
                      </div>
                    </li>

                    
                    <li @click="showDropDown(2)" class="nav-item" id="navbarDropdown">
                      <img src="../icons/header/paper.png" alt="paper" />
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
    </div>
  <options-menu 
    @close="closeMenu"
    :show = show
  />
</template>

<script>
import TemplateChooser from './TemplateChooser.vue'
export default {
    name: 'nav-bar',
    data(){
      return{
        show: false,
        myInfo: false,
        info: false
      }
    },
    emits:['close', 'language-update', 'now-template1', 'now-template2'],
    props:{
      template: Number,
    },
    components: {
      TemplateChooser
    },
    methods:{
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
      getLanguage(){ return localStorage.getItem('lng')},
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
        document.getElementsByClassName("multi-menu-class")[0].style.zIndex = "1"
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
      about(){
        localStorage.getItem('lng') == 'us-en' 
          ? alert("We are not using cookies and I do not store any information in server-side")
          : alert("Não usamos cookies e não guardamos nenhuma informação sua")
      },
      aboutMe(){
        window.open("https://www.linkedin.com/in/julianosoder/");  
      },
      support(){
        localStorage.getItem('lng') != 'us-en' 
          ? alert("Torne-se um apoiador deste projeto com um pix (qualquer valor) para esta chave aleartória -> f22a0b49-3c64-41af-9101-266672b139ba")
          : alert("Support this project sending money or sharing it with friends")
      },
      more(){
        alert("Ainda em desenvolvimento.  Apoie este projeto ;)")
      },
      contact(){
        window.location.href = "mailto:juliano_soder@hotmail.com?subject=Hi there&body=message%20goes%20here";
      },
      imprimir(){
        window.print()
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
      localStorage.getItem("lng") == "us-en" ? (document.getElementsByClassName("bnt-languages")[1].style.backgroundColor = "blue",
        document.getElementsByClassName("bnt-languages")[1].style.color = "white", document.getElementsByClassName("bnt-languages")[0].style.color = "black",
        document.getElementsByClassName("bnt-languages")[0].style.backgroundColor = "white"
      ) : '';
    }
}
</script>

<style scoped>

li img {
  width: 35px;
  height: 35px;
}

@media print {
  .bnt-languages{
    display: none;
  }
}
.bnt-languages{
  min-width: 80px;
  padding: 10px;
  border-radius: 20px;
}
.bnt-languages:first-child{
  background-color: blue;
  color: white;
}
.container-fluid {
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  justify-content: center;
  padding-top: 1px;
}
.navbar {
  justify-content: center;
  padding-top: 20px;
  margin: 0 auto;
  width: 54%;
  display: flex;
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
}
.dropdown-item:hover{
  background-color: gray;
}
.dropdown-item{
  padding: 10px;
}

.nav-item {
    width: 100%;
    text-align: center;
    justify-content: center;
}
.nav-item:hover .nav-link{
  opacity: 1;
  transition: 0.3s ease-in-out;
}
.nav-item:hover img{
  transform: translateY(-30px);
  transition: 0.5s ease-in-out;
}
.nav-item .nav-link{
  opacity: 0;
  position: absolute;
}
li{
  display: flex;
}
@media only screen and (max-width: 720px) { 
 .container-fluid{display: none;}
}
.nav-item.is-right{
  position: relative;
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
.bnt-close{
  min-width: 40px;
}
.midle-options{
  justify-content: center;
  width: 100%;
  display: flex;
}
</style>