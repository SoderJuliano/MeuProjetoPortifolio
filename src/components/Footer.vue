<template>
    <multi-menu
        v-if="hover==true"
        class="multiMenu"
        :user="user"
        :template="template"
        @click="changefontM"
        @now-template1="this.$emit('now-template1')"
        @now-template2="this.$emit('now-template2')"
    />
    <div class="footer">
        <img v-if="hover==false" @mouseover="hover = true" src="../icons/menustatic.png" alt="">
        <img v-else src="../icons/openedmenu.png" alt="menu-gif">
        <img class="close-bnt" @mouseover="hover = false" v-if="hover==true" src="../icons/close.png" alt="close" />
        <span v-if="this.language != 'pt-br'" @click="this.$emit('language-update', 'pt-br')" >pt-br</span>
        <span v-if="this.language != 'us-en'" @click="this.$emit('language-update', 'us-en')" >en-us</span>
        <imprimir
            class="imprimirbotao"
        />
        <img class="menuupimg-down" @click="menuDown" src="../assets/arrow-down.png" alt="menu down"/>
    </div>
</template>

<script>
import MultiMenu from './MultiMenu.vue'
import imprimir from './Imprimir-bnt.vue'
import TemplateChooser from './multimenuComponentes/TemplateChooser.vue'
import $ from 'jquery'

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
        language: String,
        user: Object
    },
    emits:["language-update", "font-changed", "now-template2", "now-template1", "change-main-color", "change-font-color"],
    methods:{
        menuDown(){
            $(".footer-menu-bar").css("display", "none");
            $(".menuupimg").css("display", "block");
            $(".menuupimg-down").css("display", "none");
        },
        changefontM(p){
            // formas
            if(p.target.id=="square"){
                
                $(".pic")[0].style['border-radius'] = '0px';
                $(".img-pic")[0].style['border-radius'] = '0px';
                $(".pic")[0].style['border'] = '2px solid black';

            }else if(p.target.id=="triangleUp"){

                $(".pic")[0].style['border-radius'] = '11px';
                $(".img-pic")[0].style['border-radius'] = '11px';   
                $(".pic")[0].style['border'] = '2px solid black';

            }else if(p.target.id=="circle"){
                
                $(".pic")[0].style['border-radius'] = '50%';
                $(".img-pic")[0].style['border-radius'] = '50%';
                $(".pic")[0].style['border'] = '2px solid black';

            }else if(p.target.id=="colorfull-circle"){
                
                $(".pic")[0].style['border-radius'] = '50%';
                $(".img-pic")[0].style['border-radius'] = '50%';
                $(".pic")[0].style['border-top'] = '5px solid rgb(255, 2, 2)';
                $(".pic")[0].style['border-left'] = '5px solid rgb(68, 0, 255)';
                $(".pic")[0].style['border-right'] = '5px solid rgb(0, 158, 61)';
                $(".pic")[0].style['border-bottom'] = '5px solid rgb(255, 0, 221)';
            }
            // cores
            if(p.target.textContent.includes('pag-')==true && p.target.id != '' && p.target.id != null){
                
                p.target.id == "#1F271B" ? this.$emit("change-font-color", "white") : this.$emit("change-font-color", "black"); 
                this.$emit("change-main-color", p.target.id)
                localStorage.setItem("mainColor", p.target.id)
                localStorage.setItem("fontColor", p.target.id == "#1F271B" ? "white" : "black")

            }
            else if(p.target.textContent.includes('#')==true){
                if(p.target.textContent.split('').length>0 && p.target.textContent.split('').length<8){
                    $(".side")[0].style.backgroundColor = p.target.textContent
                    localStorage.setItem("sideColor",  p.target.textContent)
                }
            }else{
                switch(p.target.textContent){ 
                    case 'Oswald':
                        $(".main")[0].style.fontFamily = "'Oswald', sans-serif" 
                        this.$emit('font-changed', 'Oswald')
                        break
                    case 'Zen Loop':
                        $(".main")[0].style.fontFamily = "'Zen Loop', cursive" 
                        $(".main")[0].style.fontWeight = "bold";
                        this.$emit('font-changed', 'Zen Loop')
                        break
                    case 'Fuggles':
                        $(".main")[0].style.fontFamily = "'Fuggles', cursive"
                        $(".main")[0].style.fontWeight = "bold";
                        this.$emit('font-changed', 'Fuggles')
                        break
                    case 'STIX Two Math':
                        $(".main")[0].style.fontFamily = "'STIX Two Math', serif"
                        this.$emit('font-changed', 'Oswald')
                        break
                    case 'Hina Mincho':
                        $(".main")[0].style.fontFamily = "'Hina Mincho', serif"
                        this.$emit('font-changed', 'Hina Mincho')
                        break
                    case 'Inconsolata':
                        $(".main")[0].style.fontFamily = "'Inconsolata', monospace"
                        this.$emit('font-changed', 'Inconsolata')
                        break
                    case 'Kaisei Decol':
                        $(".main")[0].style.fontFamily = "'Kaisei Decol', serif"
                        this.$emit('font-changed', 'Kaisei Decol')
                        break
                    case 'Teko':
                        $(".main")[0].style.fontFamily = "'Teko', sans-serif"
                        this.$emit('font-changed', 'Teko')
                        break
                    case 'Crimson':
                        $(".main")[0].style.fontFamily = "'Crimson Text', serif"
                        this.$emit('font-changed', 'Crimson Text')
                        break
                    case 'Dongle':
                        $(".main")[0].style.fontFamily = "'Dongle', sans-serif"
                        this.$emit('font-changed', 'Dongle')
                        break
                    case 'Mochiy':
                        $(".main")[0].style.fontFamily = "'Mochiy Pop One', sans-serif"
                        this.$emit('font-changed', 'Mochiy Pop One')
                        break
                    case 'Roboto':
                        $(".main")[0].style.fontFamily = "'Roboto Mono', monospace"
                        this.$emit('font-changed', 'Roboto Mono')
                        break
                    case 'verdana':
                        $(".main")[0].style.fontFamily = "verdana"
                        this.$emit('font-changed', 'verdana')
                        break
                    case 'Courier New':
                        $(".main")[0].style.fontFamily = "'Courier New'"
                        this.$emit('font-changed', 'Courier New')
                        break
                }
            }
        },
    }
}
</script>
<style scoped>

.footer span {
    padding: 5px;
    width: 45px;
    margin: auto 10px;
    border: solid 1px black;
    border-radius: 15px;
    text-align: center;
}

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
    width: 80%;
    background-color: whitesmoke;
    height: 100%;
    position: fixed;
    bottom: 20px;
    background-color: white;
    top: 50px;
    z-index: 10;
}

.multiMenu:hover .l2 {
    display: none;
}

@media screen and (max-width: 700px){
    .imprimirbotao{
        margin: 10px 10px;
    }
    .multiMenu-options.multiMenu{
        padding: 10px;
        width: 90vw;
        height: calc(100% - 40px);
        position: fixed;
        bottom: 20px;
        top: 0%;
        z-index: 10;
        overflow-y: scroll;
    }
    .multiMenu::-webkit-scrollbar {
        width: 16px;
    }
    .multiMenu::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
    }

    .multiMenu::-webkit-scrollbar-thumb {
        background-color: #d4aa70;
        border-radius: 100px;
    }

    .menuupimg-down {
        margin-top: 4px;
        position: relative;
        float: right;
        height: 30px;
    }

/*     .multiMenu:hover .template {
        display: none !important;
    }
    .multiMenu:hover .custom-container {
        display: none !important;
    } */

}
</style>