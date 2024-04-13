<template>
    <div class="colors-container">
        <p class="tside" @click="openContainer()">COR PRINCIPAL</p>
        <div class="colors">
            <div class="closeDiv" @click="closeDiv()">X</div>
            <div class="dots-container">
                <div class="dot" id="#FFA07A" style="background-color: #FFA07A">pag-#FFA07A</div>
                <div class="dot" id="#FFB6C1" style="background-color: #FFB6C1" >pag-#FFB6C1</div>
                <div class="dot" id="#F08080" style="background-color: #F08080" >pag-#F08080</div>
                <div class="dot" id="#87CEEB" style="background-color: #87CEEB" >pag-#87CEEB</div>
            </div>
            <div class="dots-container">
                <div class="dot" id="#849483" style="background-color: #849483">pag-#849483</div>
                <div class="dot" id="#4E937A" style="background-color: #4E937A" >pag-#4E937A</div>
                <div class="dot" id="#B4656F" style="background-color: #B4656F" >pag-#B4656F</div>
                <div class="dot" id="#948392" style="background-color: #948392" >pag-#948392</div>
            </div>
            <div class="dots-container">
                <div class="dot" id="#A61C3C" style="background-color: #A61C3C">pag-#A61C3C</div>
                <div class="dot" id="#279AF1" style="background-color: #279AF1" >pag-#279AF1</div>
                <div class="dot" id="#ED6A5A" style="background-color: #ED6A5A" >pag-#ED6A5A</div>
                <div class="dot" id="#1F271B" style="background-color: #1F271B; color: white;" >pag-#1F271B</div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'

export default {
    name: 'page-cores',
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
}

.dot{
    width: 40%;
    height: 30px;
    border: solid gray 1px;
    margin: 2px;
    overflow-y: hidden;
    font-size: 10px;
}
.dot:hover{
    border: 2px solid black;
    box-shadow: 0px 1px 1px 1px;
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
.colors-container{
    display: block;
    background-color: white;
    margin-top: 10px;
}
</style>
<style>
.colors-container .title{
    text-align: initial;
}
</style>