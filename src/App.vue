<template>
<nav-bar class="nav-bar-container"></nav-bar>
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
      
    </div>
  </div>
</template>

<script>
import Side from './components/Side.vue'
import Page from './components/Page.vue'
import MultiMenu from './components/MultiMenu.vue'
import Footer from './components/Footer.vue'
import navBar from './components/navBar.vue'

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
    navBar
  },
  methods: {
    closeEditarContato(){
      document.getElementsByClassName('editar-contato-container')[0].style.display= 'none'
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
             /* document.getElementsByClassName('title')[1].style.backgroundColor = "#1F271B"
              document.getElementsByClassName('title')[2].style.backgroundColor = "#1F271B"
              document.getElementsByClassName('title')[3].style.backgroundColor = "#1F271B"
              document.getElementsByClassName('title')[4].style.backgroundColor = "#1F271B"
              document.getElementsByClassName('title')[5].style.backgroundColor = "#1F271B"
              document.getElementsByClassName('title')[6].style.backgroundColor = "#1F271B"
              document.getElementsByClassName('title')[7].style.backgroundColor = "#1F271B"*/
            }
          }else{
            all = document.getElementsByClassName('title');
            for (i; i < all.length; i++) {
              all[i].style.color = 'black';
              all[i].style.backgroundColor = "white"
              /*document.getElementsByClassName('title')[1].style.backgroundColor = "white"
              document.getElementsByClassName('title')[2].style.backgroundColor = "white"
              document.getElementsByClassName('title')[3].style.backgroundColor = "white"
              document.getElementsByClassName('title')[4].style.backgroundColor = "white"
              document.getElementsByClassName('title')[5].style.backgroundColor = "white"
              document.getElementsByClassName('title')[6].style.backgroundColor = "white"
              document.getElementsByClassName('title')[7].style.backgroundColor = "white"*/
            }
          }
          this.mainColor = p.target.id
        }
        else if(p.target.textContent.includes('#')==true){
          this.sideColor = p.target.textContent;
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
    transform: scaleY(.9);
    margin-top: -5%;
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
  .nav-bar-container{
    display: none;
  }
}
.main-left{
  width: 20%;
  height: 100vh;
}

</style>
