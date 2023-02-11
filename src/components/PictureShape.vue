<template>
    <div class="shape-container">
        <p class="tside" @click="openContainer()">TIPO DE IMAGEM CONTAINER</p>
        <div class="shapes">
            <div class="closeDiv" @click="closeDiv()">X</div>
            <div id="square" class="square"></div>
            <div id="triangleUp" class="triangle-up"></div>
            <div id="circle" class="circle"></div>
            <div id="colorfull-circle" class="colorfull-circle"></div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'

export default {
    name: 'shapes',
    methods: {
        openContainer(){
            $(".shapes").css({"display": "flex", "position": "absolute"});
        },
        closeDiv(){
            $(".shapes").css({"display": "none"});
        }
    }
}
</script>
<style scoped>

.shapes{
    padding: 15px;
    height: 100px;
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
  width: 25px;
  height: 25px;
  border: 2px solid black;
}
.colorfull-circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border-top: 5px solid rgb(255, 2, 2);
  border-left: 5px solid rgb(68, 0, 255);
  border-right: 5px solid rgb(0, 158, 61);
  border-bottom: 5px solid rgb(255, 0, 221);
}
.circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid black;
}
.triangle-up {
    width: 25px;
    height: 25px;
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