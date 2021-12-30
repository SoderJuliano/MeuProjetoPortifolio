<template>
  <editorInformacoes 
        :mainTitle="modal.mainTitle"
        :title="modal.title1"
        :placeholder="modal.placeholder1"
        :competencia="user.competence"
        :title2="modal.title2"
        :placeholder2="modal.placeholder2"
        :experiences="userExperiences"
  />
  <nav-bar  
    @close="close" 
    :style="getStyle()" 
    id="navbar" 
    class="navbar navbar-expand-lg navbar-light bg-light"
  >
  </nav-bar>
  <div :style="getStyle()" class="main">
    <div class="main-left" @click="closeEditarContato">
      <multi-menu 
        class="multi-menu-class"
        @click="changefont"
        @close="close"
      />
    </div>
    <template1 
        @add-info="addInfo"
        @add-resumo="editarResumo"
        @add-competencia="editarCompetencias"
        @add-experiencia="editarExperiencias"
        @add-nome="this.showModal('nome')"
        @add-profissao="this.showModal('profissao')"
        @add-formacao="this.showModal('formacao')"
        class="template"
       :style="getStyle()"
       :mainColor=mainColor
       :sideColor=sideColor
       :user="user"
       :userExperiences="userExperiences"
    />
    <Footer 
      class="footer"
    />
    <div class="right">
    </div>
  </div>
</template>

<script>
import Template1 from './templates/Template1.vue'
import MultiMenu from './components/MultiMenu.vue'
import Footer from './components/Footer.vue'
import navBar from './components/navBar.vue'
import editorInformacoes from './components/editorIformacoes.vue'

export default {
  name: 'App',
  emits:['close'],
  data(){
    return{
      font: 'Oswald',
      fontSize: '15px',
      fontSizeTitles: '17px',
      sideColor: "#B0C4DE",
      mainColor:  "#87CEEB",
      modal: {
                mainTitle: "",
                title1: "",
                placeholder1: "",
                title2: "",
                placeholder2: "",
                list: [],
            },
      user: {
        name: 'Digite nome',
        profession: 'Sua profissão',
        resume: 'Digite aqui um resumo sobre você.',
        competence: []
      },
      userExperiences: [],
    }
  },
  components: {
    MultiMenu,
    Footer,
    navBar,
    Template1,
    editorInformacoes,
  },
  methods: {
    addInfo(){
      this.showModal('email')
    },
    editarExperiencias(){
      this.showModal('experiencias')
    },
    editarCompetencias(){
      this.showModal('competencias')
    },
    editarResumo(){
      this.showModal('resumo')
    },
    showDivModal(){
            document.getElementsByClassName("main-modal-container")[0].style.width = "100vw";
            document.getElementsByClassName("main-modal-container")[0].style.heigth = "100vh";
            document.getElementsByClassName("main-modal-container")[0].style.opacity = "100";
            document.getElementsByClassName("main-modal-container")[0].style.zIndex = "10";
        },
        showModal(qual){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            switch (qual) {
                case 'email':
                    this.modal.mainTitle = "Informacoes pessoais"
                    this.modal.title1 = "Email"
                    this.modal.placeholder1 = "digite seu email aqui"
                     this.modal.title2 = "Telefone"
                    this.modal.placeholder2 = "(99) 999999999"
                    this.modal.list = []
                    this.showDivModal()
                    break;
                case 'nome':
                    this.modal.mainTitle = "Informacoes pessoais"
                    this.modal.title1 = "Nome"
                    this.modal.placeholder1 = "digite seu nome aqui"
                    this.modal.list = []
                    this.showDivModal()
                    break;
                case 'profissao':
                    this.modal.mainTitle = "Informacoes pessoais"
                    this.modal.title1 = "Profissao"
                    this.modal.placeholder1 = "digite seu cargo/profissao"
                    this.modal.list = []
                    this.showDivModal()
                    break;
                case 'competencias':
                    this.modal.mainTitle = "Competencias"
                    this.modal.title1 = "Nova competencia"
                    this.modal.placeholder1 = "escreva uma hasbilidade sua"
                    this.modal.list = this.user.competence
                    this.showDivModal()
                    break;
                case 'resumo':
                    this.modal.mainTitle = "Resumo profissional"
                    this.modal.title1 = "Sobre voce"
                    this.modal.placeholder1 = "Descreva que tipo de proficional voce e..."
                    this.modal.list = this.user.competence
                    this.showDivModal()
                    break;
                case 'experiencias':
                    this.modal.mainTitle = "Experiencia profissional"
                    this.modal.title1 = "Nome da empresa"
                    this.modal.placeholder1 = "Digite aqui"
                    this.modal.title2 = "Cargo que ocupava"
                    this.modal.placeholder2 = "Digite aqui"
                    this.showDivModal()
                    break;
                case 'formacao':
                    this.modal.mainTitle = "Escolaridade"
                    this.modal.title1 = "Formacao"
                    this.modal.placeholder1 = "Digite aqui"
                    this.showDivModal()
                    break;
                default:
                    break;
            }
        },
    closeEditarContato(){
      document.getElementsByClassName('editar-contato-container')[0].style.display= 'none'
    },
    close(){
        document.getElementsByClassName("multi-menu-class")[0].style.opacity = "0"
        document.getElementsByClassName("multi-menu-class")[0].style.zIndex = "-1"
    },
    changefont(p){
        if(p.target.id=="square"){
          console.log("teste")
          document.getElementsByClassName("pic")[0].style['border-radius'] = '0px';
          document.getElementsByClassName("img-pic")[0].style['border-radius'] = '0px';
          document.getElementsByClassName("pic")[0].style['border'] = '2px solid black';
        }else if(p.target.id=="triangleUp"){
          document.getElementsByClassName("pic")[0].style['border-radius'] = '11px';
          document.getElementsByClassName("img-pic")[0].style['border-radius'] = '11px';   
          document.getElementsByClassName("pic")[0].style['border'] = '2px solid black';
        }else if(p.target.id=="circle"){
          document.getElementsByClassName("pic")[0].style['border-radius'] = '50%';
          document.getElementsByClassName("img-pic")[0].style['border-radius'] = '50%';
          document.getElementsByClassName("pic")[0].style['border'] = '2px solid black';
        }else if(p.target.id=="colorfull-circle"){
          document.getElementsByClassName("pic")[0].style['border-radius'] = '50%';
          document.getElementsByClassName("img-pic")[0].style['border-radius'] = '50%';
          document.getElementsByClassName("pic")[0].style['border-top'] = '5px solid rgb(255, 2, 2)';
           document.getElementsByClassName("pic")[0].style['border-left'] = '5px solid rgb(68, 0, 255)';
            document.getElementsByClassName("pic")[0].style['border-right'] = '5px solid rgb(0, 158, 61)';
             document.getElementsByClassName("pic")[0].style['border-bottom'] = '5px solid rgb(255, 0, 221)';
        }
        else if(p.target.textContent.includes('pag-')==true){
          let i = 0;
          let all;
          //console.log(p.target.id)
          if(p.target.textContent=="pag-#1F271B"){
            all = document.getElementsByClassName('title');
            for (i; i < all.length; i++) {
              all[i].style.color = 'white';
              all[i].style.backgroundColor = "#1F271B"
            }
          }else{
            all = document.getElementsByClassName('title');
            for (i; i < all.length; i++) {
              all[i].style.color = 'black';
              all[i].style.backgroundColor = "white"
            }
          }
          p.target.id.split('').length<8 && p.target.id.split('').length>1 ?
          (
          this.mainColor = p.target.id,
          localStorage.setItem("mainColor", p.target.id)) :
          localStorage.getItem('mainColor') ?
            this.mainColor = localStorage.getItem('mainColor') : this.mainColor = "#87CEEB"
        }
        else if(p.target.textContent.includes('#')==true){
          if(p.target.textContent.split('').length>0 && p.target.textContent.split('').length<8){
            this.sideColor = p.target.textContent;
            localStorage.setItem("sideColor",  p.target.textContent)
          }
        }else{
            this.font = p.target.textContent
        }
         console.log(p.target.textContent)
    },
    getStyle(){
      switch(this.font){ 
        case 'Oswald':
          return{
            'font-family': "'Oswald', sans-serif !important"
          }

        case 'Zen Loop':
          return{
             'font-family': "'Zen Loop', cursive",
             'font-weight': 'bold'
          }
          
        case 'Fuggles':
          return{
            'font-family': "'Fuggles', cursive",
            'text-transform': 'uppercase',
            'font-weight': 'bold'
          }
          
        case 'STIX Two Math':
          return{
            'font-family': "'STIX Two Math', serif"
          }

        case 'Hina Mincho':
          return{
            'font-family': "'Hina Mincho', serif"
          }
        case 'Inconsolata':
          return{
            'font-family': "'Inconsolata', monospace"
          }
        case 'Kaisei Decol':
          return{
            'font-family': "'Kaisei Decol', serif"
          }
        case 'Teko':
          return{
            'font-family': "'Teko', sans-serif"
          }


        case 'Crimson':
          return{
            'font-family': "'Crimson Text', serif"
          }
        case 'Dongle':
          return{
            'font-family':  "'Dongle', sans-serif"
          }
        case 'Mochiy':
          return{
            'font-family': "'Mochiy Pop One', sans-serif"
          }
        case 'Roboto':
          return{
            'font-family': "'Roboto Mono', monospace"
          }
        case 'verdana':
          return{
            'font-family':  "verdana"
          }
        case 'Courier New':
           return{
            'font-family': "'Courier New'"
          }
      }
    },
    getColors(){
      const mc = localStorage.getItem("mainColor")
      const sc = localStorage.getItem("sideColor")
      if(mc){
        this.mainColor = mc
      }
      if(sc){
        this.sideColor = sc
      }
    },
        getContatoDataPage(){ 
            const nname = localStorage.getItem('user-name')
            if(nname){
                this.user.name = nname
            }
            const prof = localStorage.getItem('profession')
            if(prof){
                this.user.profession = prof
            }
            const about = localStorage.getItem('about')
            if(about){
                this.user.resume = about
            }
            const competencias = localStorage.getItem('cpta')
            if(competencias){
                const arr = competencias.split(',')
                this.user.competence = arr
            }
        },
        getExperienceData(){
            let jobs = JSON.parse(localStorage.getItem('jobs'))
            if(jobs){
                console.log(jobs)
                this.userExperiences = jobs
            }
        }
  }, 
  beforeMount(){
    this.getColors()
    this.getContatoDataPage()
    this.getExperienceData()
  }
}
</script>

<style>
.multi-menu-class{
  padding: 30px;
  opacity: 0;
  z-index: -1;
  -webkit-transition-duration: 450ms;
  transition-duration: 450ms;
  -webkit-box-shadow: inset -1px 3px 8px 5px gray, 2px 5px 16px 0px gray, 5px 5px 15px 5px gray; 
  box-shadow: inset -1px 3px 8px 5px gray, 2px 5px 16px 0px gray, 5px 5px 15px 5px gray;
}
@media screen and (max-width:1000px) {
 .main{
  display: block;
  width: 100%;
  height: 100%;
} 
 .main-left{
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
  }

  .right{
    display: none;
  }

}
@media screen and (min-width:1001px) {
  .template{
    margin: 0 auto;
  }
 .main{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
  } 
  .footer{
    display: none;
  }
  .main-left{
    width: 25%;
    height: 100vh;
    padding: 10px;
    margin-right: 10px;
  }
  .right{
      width: 25%;
      margin: 0 auto;
  }
}
@media print {
  #navbar{
    display: none !important;
  }
  .navbar{
    display: none !important;
  }
  .main{
    display: flex;
    position: absolute;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0 !important;
    -webkit-print-color-adjust: exact;
  } 

  .right{
    display: none !important;
  }

  .main-left{
    display: none !important;
  }
  .footer{
    display: none !important;
  }
  #navbar{
    display: none !important;
  }
  .navbar{
    display: none !important;
  }
}
</style>
