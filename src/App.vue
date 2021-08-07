<template>
  <div :style="getStyle()" class="main">
    <div class="main-left" @click="closeEditarContato">
      <multi-menu 
        @click="changefont"
      />
    </div>
    <Side
      :cor="sideColor"
    />
    <Page
      @click="closeEditarContato"
      :cor="mainColor"
    />
    <Footer 
      class="footer"
    />
    <div class="right">
      <Imprimir />
    </div>
  </div>
</template>

<script>
import Side from './components/Side.vue'
import Page from './components/Page.vue'
import MultiMenu from './components/MultiMenu.vue'
import Footer from './components/Footer.vue'
import Imprimir from './components/Imprimir-bnt.vue'

export default {
  name: 'App',
  data(){
    return{
      font: 'Oswald',
      sideColor: "#B0C4DE",
      mainColor:  "#87CEEB",
    }
  },
  components: {
    Side,
    Page,
    MultiMenu,
    Footer,
    Imprimir
  },
  methods: {
    closeEditarContato(){
      document.getElementsByClassName('editar-contato-container')[0].style.display= 'none'
    },
    changefont(p){
        if(p.target.textContent.includes('pag-')==true){
          console.log(p.target.id)
          this.mainColor = p.target.id
        }
        else if(p.target.textContent.includes('#')==true){
          this.sideColor = p.target.textContent;
        }else{
            this.font = p.target.textContent
        }
         console.log(p.target.textContent)
    },
    getStyle(){ console.log(this.font)
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
          
        default:
          return{
            'font-family': "'STIX Two Math', serif"
          }
      }
    }
  }
}
</script>

<style>
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
 .main{
    display: flex;
    width: 100%;
    height: 100%;
  } 
  .footer{
    display: none;
  }

  .right{
    padding: 10px;
  }
}
@media print {
  .main{
    display: flex;
    width: 100%;
    height: 100%;
    -webkit-print-color-adjust: exact;
  } 

  .right{
    display: none;
  }

  .main-left{
    display: none;
  }
  .footer{
    display: none;
  }
}
.main-left{
  width: 20%;
  height: 100vh;
}
</style>
