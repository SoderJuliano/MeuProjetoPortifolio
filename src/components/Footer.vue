<template>
    <multi-menu
        v-if="hover==true"
        class="multiMenu"
        :user="user"
        :template="template"
        :language="this.language"
        @click="changefontM"
        @now-template1="this.$emit('now-template1')"
        @now-template2="this.$emit('now-template2')"
        @now-template3="this.$emit('now-template3')"
        @now-template4="this.$emit('now-template4')"
        @update-user="update"
        @login="showLogin"
        @reset-password="this.$emit('reset-password')"
        @ativationAccount="this.$emit('ativationAccount')"
    />
    <div class="footer">
        <img @click="hover = true" v-if="hover==false" @mousedown="hover = true" src="../icons/menustatic.png" alt="">
        <img v-else src="../icons/openedmenu.png" alt="menu-gif">
        <img @click="hover = false" class="close-bnt" @mousedown="hover = false" v-if="hover==true" src="../icons/close.png" alt="close" />
        <span v-if="this.language != 'pt-br'" @click="this.$emit('language-update', 'pt-br')" >pt-br</span>
        <span v-if="this.language != 'us-en'" @click="this.$emit('language-update', 'us-en')" >en-us</span>
        <imprimir
            class="imprimirbotao"
        />
        <img class="menuupimg-down" @click="menuDown" src="../assets/arrow-up.png" alt="menu down"/>
    </div>
</template>

<script>
import MultiMenu from './MultiMenu.vue'
import imprimir from './Imprimir-bnt.vue'
import TemplateChooser from './multimenuComponentes/TemplateChooser.vue'
import $ from 'jquery'
import { isMobilePortrait } from './componentesCompartilhados/utilJS/functions'

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
    emits:[
        "language-update",
        "font-changed",
        "now-template2",
        "now-template1",
        "now-template3",
        "now-template4",
        "change-main-color",
        "change-font-color",
        "login",
        'reset-password',
        'ativationAccount'
    ],
    methods:{
        showLogin() {
            this.$emit('login');
            setTimeout(() => {
                this.menuDown();
            }, 500);
        },
        update(val, authenticad) {
            // Quando o update vem do mobile e estiver autenticado, vai ser feito request pro back-end
            const sync = authenticad === isMobilePortrait();
            this.$emit("update-user", val, !sync);
            $(".footer-menu-bar").css("display", "none");
            $(".menuupimg").css("display", "block");
            $(".menuupimg-down").css("display", "none");
        },
        menuDown(){
            $(".footer-menu-bar").css("display", "none");
            $(".menuupimg").css("display", "block");
            $(".menuupimg-down").css("display", "none");
            $(".footer-mobile-title").css({
                "left": "30%"
            })
        },
        changefontM(p){
            // formas
            if(p.target.id=="square"){

                $(".pic")[0].style['border-radius'] = '0px';
                $(".pic")[0].style['border'] = '2px solid black';

            }else if(p.target.id=="triangleUp"){

                $(".pic")[0].style['border-radius'] = '11px';
                $(".pic")[0].style['border'] = '2px solid black';

            }else if(p.target.id=="circle"){

                $(".pic")[0].style['border-radius'] = '50%';
                $(".pic")[0].style['border'] = '2px solid black';

            }else if(p.target.id=="colorfull-circle"){

                $(".pic")[0].style['border-radius'] = '50%';
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
                setTimeout(() => {
                    let eyeIcons = $(".icon-show-title");
                    let editarIcons = $(".editar");
                    if(p.target.id == "#1F271B") {
                        eyeIcons.addClass("icone-branco");
                        editarIcons.addClass("icone-branco");
                    }else {
                        eyeIcons.removeClass("icone-branco");
                        editarIcons.removeClass("icone-branco");
                    }
                }, 300);
                if(confirm(this.language.includes("pt") ? "Cor alterada. Ver cor?" : "Color set. See it?")) {
                    this.hover = false;
                } else {
                    this.hover = true;
                }
                // alert(this.language.includes("pt") ? "Cor alterada" : "Color set");
            }
            else if(p.target.textContent.includes('#')==true){
                if(p.target.textContent.split('').length>0 && p.target.textContent.split('').length<8){
                    const side = $(".side")[0];
                    if(side) {
                        side.style.backgroundColor = p.target.textContent;
                        if(confirm(this.language.includes("pt") ? "Cor alterada. Ver cor?" : "Color set. See it?")) {
                            this.hover = false;
                        } else {
                            this.hover = true;
                        }
                    } else {
                        alert(this.language.includes("pt") ? "Este template não tem cor lateral" : "This selected template do not has side color")
                    }
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
                        this.$emit('font-changed', "'STIX Two Math', serif")
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

.footer {
    padding: 5px;
    width: 100%;
    display: flex;
    justify-content: start;
}

.footer img {
    margin-left: 20px;
}

.footer img:active {
    transform: scale(.9);
}

.footer span {
    padding: 5px;
    width: 60px;
    margin: auto 10px;
    border: solid 1px black;
    border-radius: 15px;
    text-align: center;
}

.imprimirbotao {
    display: flex;
    align-items: center;
    margin: 0 5px;
    padding: 5px;
}

.imprimirbotao:active {
    transform: scale(.9);
}

img{
    width: 25px;
}
.close-bnt {
    right: 30px;
    width: 40px;
    justify-content: center;
}
.multiMenu{
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 20px;
    background-color: white;
    top: 0px;
    right: 0;
    z-index: 10;
}
/* 
.multiMenu:hover .l2 {
    display: none;
} */

@media screen and (max-width: 700px) and (min-width: 400px) {
    .imprimirbotao{
        margin: 2px 10px;
    }
    .multiMenu-options.multiMenu{
        position: relative;
        padding: 10px;
        width: 100dvw;
        height: calc(100% - 40px);
        position: fixed;
        bottom: 20px;
        top: 0%;
        left: 0;
        z-index: 10;
        overflow-y: scroll;
        cursor: pointer;
        right: 0;
        margin-top: 50px;
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

@media screen and (max-width: 400px) {
    .footer img {
        margin-left: 10px;
    }
    .footer span {
        margin: auto 10px;
        min-width: 60px;
    }
}
</style>
