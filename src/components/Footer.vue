<template>
    <multi-menu
        v-if="hover==true"
        class="multiMenu"
        @click="changefontM"
    />
    <div class="footer">
        <img v-if="hover==false" @mouseover="hover = true" src="../icons/menustatic.png" alt="">
        <img v-else src="../icons/openedmenu.png" alt="menu-gif">
        <img class="close-bnt" @mouseover="hover = false" v-if="hover==true" src="../icons/close.png" alt="close" />

        <template-chooser 
            :template="template"
            @now-template1="this.$emit('now-template1')"
            @now-template2="this.$emit('now-template2')"
        />
        <imprimir
          class="imprimirbotao"
        />
    </div>
</template>

<script>
import MultiMenu from './MultiMenu.vue'
import imprimir from './Imprimir-bnt.vue'
import TemplateChooser from './TemplateChooser.vue'

export default {
    name: 'footermenu',
    components:{
        MultiMenu,
        imprimir,
        TemplateChooser
    },
    data(){
        return{
            hover: false,
        }
    },
    props:{
       // mainColor:String
       template: Number,
    },
    emits:["font-changed", "now-template2", "now-template1"],
    methods:{
        changefontM(p){
            
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

        if(p.target.textContent.includes('pag-')==true){
          p.target.id != '' && p.target.id != null ? 
          (
           // this.mainColor = p.target.id,
            document.getElementsByClassName('page-header')[0].style.backgroundColor = p.target.id, 
            document.getElementsByClassName('title')[4].style.backgroundColor = p.target.id,
            document.getElementsByClassName('title')[5].style.backgroundColor = p.target.id,
            document.getElementsByClassName('title')[6].style.backgroundColor = p.target.id,
            document.getElementsByClassName('title')[4].style.textShadow = "1px 1px 2px white",
            document.getElementsByClassName('title')[5].style.textShadow = "1px 1px 2px white",
            document.getElementsByClassName('title')[6].style.textShadow = "1px 1px 2px white",
            localStorage.setItem("mainColor", p.target.id)
          ) : '';
         
        }
        else if(p.target.textContent.includes('#')==true){
          if(p.target.textContent.split('').length>0 && p.target.textContent.split('').length<8){
            document.getElementsByClassName("side")[0].style.backgroundColor = p.target.textContent
            localStorage.setItem("sideColor",  p.target.textContent)
          }
        }else{
            switch(p.target.textContent){ 
                case 'Oswald':
                    document.getElementsByClassName("main")[0].style.fontFamily = "'Oswald', sans-serif" 
                    this.$emit('font-changed', 'Oswald')
                    break
                case 'Zen Loop':
                    document.getElementsByClassName("main")[0].style.fontFamily = "'Zen Loop', cursive" 
                    document.getElementsByClassName("main")[0].style.fontWeight = "bold";
                    this.$emit('font-changed', 'Zen Loop')
                    break
                case 'Fuggles':
                    document.getElementsByClassName("main")[0].style.fontFamily = "'Fuggles', cursive"
                    document.getElementsByClassName("main")[0].style.fontWeight = "bold";
                    this.$emit('font-changed', 'Fuggles')
                    break
                case 'STIX Two Math':
                    document.getElementsByClassName("main")[0].style.fontFamily = "'STIX Two Math', serif"
                    this.$emit('font-changed', 'Oswald')
                    break
                case 'Hina Mincho':
                    document.getElementsByClassName("main")[0].style.fontFamily = "'Hina Mincho', serif"
                    this.$emit('font-changed', 'Hina Mincho')
                    break
                case 'Inconsolata':
                    document.getElementsByClassName("main")[0].style.fontFamily = "'Inconsolata', monospace"
                    this.$emit('font-changed', 'Inconsolata')
                    break
                case 'Kaisei Decol':
                    document.getElementsByClassName("main")[0].style.fontFamily = "'Kaisei Decol', serif"
                    this.$emit('font-changed', 'Kaisei Decol')
                    break
                case 'Teko':
                    document.getElementsByClassName("main")[0].style.fontFamily = "'Teko', sans-serif"
                    this.$emit('font-changed', 'Teko')
                    break
                case 'Crimson':
                    document.getElementsByClassName("main")[0].style.fontFamily = "'Crimson Text', serif"
                    this.$emit('font-changed', 'Crimson Text')
                    break
                case 'Dongle':
                    document.getElementsByClassName("main")[0].style.fontFamily = "'Dongle', sans-serif"
                    this.$emit('font-changed', 'Dongle')
                    break
                case 'Mochiy':
                    document.getElementsByClassName("main")[0].style.fontFamily = "'Mochiy Pop One', sans-serif"
                    this.$emit('font-changed', 'Mochiy Pop One')
                    break
                case 'Roboto':
                    document.getElementsByClassName("main")[0].style.fontFamily = "'Roboto Mono', monospace"
                    this.$emit('font-changed', 'Roboto Mono')
                    break
                case 'verdana':
                    document.getElementsByClassName("main")[0].style.fontFamily = "verdana"
                    this.$emit('font-changed', 'verdana')
                    break
                case 'Courier New':
                    document.getElementsByClassName("main")[0].style.fontFamily = "'Courier New'"
                    this.$emit('font-changed', 'Courier New')
                    break
            }
        }
    },
    }
}
</script>
<style scoped>
.imprimirbotao{
    margin-top: 2%;
    margin-left: 20%;
    height: 25px !important;
    width: 100px !important;
}

img{
    width: 25px;
}
.close-bnt{
    position: absolute;
    right: 20px;
    width: 35px;
    height: 100%;
}
.multiMenu{
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 20px;
    background-color: white;
    top: 50px;
}
@media screen and (max-width: 700px){
 .imprimirbotao{
      margin-left: 10px !important;
 }
}
</style>