<template>
    <div class="colors-container">
        <p class="tside" @click="openContainer()">{{ this.language.includes("en") ? "MAIN COLOR" : "COR PRINCIPAL"}}</p>
        <div class="colors">
            <div class="closeDiv" @click="closeDiv()">X</div>
            <div class="dots-container">
                <div class="dot" id="#FFA07A" style="background-color: #FFA07A"><p>pag-#FFA07A</p></div>
                <div class="dot" id="#FFB6C1" style="background-color: #FFB6C1" ><p>pag-#FFB6C1</p></div>
                <div class="dot" id="#F08080" style="background-color: #F08080" ><p>pag-#F08080</p></div>
                <div class="dot" id="#87CEEB" style="background-color: #87CEEB" ><p>pag-#87CEEB</p></div>
                <div class="dot" id="#ED6A5A" style="background-color: #ED6A5A" ><p>pag-#ED6A5A</p></div>
                <div class="dot" id="#1F271B" style="background-color: #1F271B; color: white;" ><p>pag-#1F271B</p></div>
            </div>
            <div class="dots-container">
                <div class="dot" id="#849483" style="background-color: #849483"><p>pag-#849483</p></div>
                <div class="dot" id="#4E937A" style="background-color: #4E937A" ><p>pag-#4E937A</p></div>
                <div class="dot" id="#B4656F" style="background-color: #B4656F" ><p>pag-#B4656F</p></div>
                <div class="dot" id="#948392" style="background-color: #948392" ><p>pag-#948392</p></div>
                <div class="dot" id="#A61C3C" style="background-color: #A61C3C"><p>pag-#A61C3C</p></div>
                <div class="dot" id="#279AF1" style="background-color: #279AF1" ><p>pag-#279AF1</p></div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'

export default {
    name: 'page-cores',
    props: {language: String},
    methods: {
        closeAll() {
            $(".side-colors").css({"display": "none"});
            $(".colors").css({"display": "none"});
            $(".dropdown-content").css({"display": "none"});
            $(".avatares-subcontainer").css({"display": "none"});
            $(".shapes").css({"display": "none"});
            $(".dropdown-templates").css({"display": "none"});
        },
        openContainer(){
            this.closeAll();
            $(".colors").css({"display": "grid", "position": "absolute"});
        },
        closeDiv(){
            $(".colors").css({"display": "none"});
        }
    }
}
</script>
<style>
.dots-container{
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
}

.dot{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 10px;
}

.dot p {
    display: none;
}

.colors{
    display: none;
    padding: 15px;
    min-height: 120px;
    width: 300px;
    border-style: solid;
    border-color: black;
    background-color: rgba(245, 245, 245, 0.514);
    margin-left: 15px;
    margin-top: -15px;
    justify-content: space-around;
    display: none;
}
.colors-container {
    display: block;
    margin-top: 10px;
}
</style>
<style>
.colors-container .title {
    text-align: initial;
}
</style>