<template>
    <div class="shape-container">
        <p class="tside" @click="openContainer()">
        {{ this.language.includes("en") ? "PHOTO SHAPE TYPE" : "TIPO DE IMAGEM CONTAINER"}}
        </p>
        <div class="shapes">
            <div>
                <div class="closeDiv" @click="closeDiv()">X</div>
            </div>
            <div class="shapes-itens">
                <div id="square" class="square item"></div>
                <div id="triangleUp" class="triangle-up item"></div>
                <div id="circle" class="circle item"></div>
                <div id="colorfull-circle" class="colorfull-circle item"></div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'

export default {
    name: 'shapes',
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
            $(".shapes").css({"display": "block", "position": "absolute"});
        },
        closeDiv(){
            $(".shapes").css({"display": "none"});
        }
    }
}
</script>
<style scoped>
.shapes-itens {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 20px;
}

.shapes-itens .item:active {
    background-color: white;
    transform: scale(.9);
}

.item {
    width: 40px;
    height: 40px;
}

.shapes 
{
    padding: 15px;
    min-height: 100px;
    width: 300px;
    border-style: solid;
    border-color: black;
    background-color: rgba(245, 245, 245, 0.514);
    margin-left: 15px;
    margin-top: -15px;
    justify-content: space-around;
    display: none;
}

.square {
  border: 2px solid black;
}
.colorfull-circle {
  border-radius: 50%;
  border-top: 5px solid rgb(255, 2, 2);
  border-left: 5px solid rgb(68, 0, 255);
  border-right: 5px solid rgb(0, 158, 61);
  border-bottom: 5px solid rgb(255, 0, 221);
}
.circle {
  border-radius: 50%;
  border: 2px solid black;
}
.triangle-up {
    border: 2px solid black;
    border-radius: 11px;
}

@media screen and (max-width:1000px) {
    .shapes {
        position: absolute;
        top: 10%;
        width: 80vw;
    }
}
</style>