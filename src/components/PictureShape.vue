<template>
    <div class="shape-container">
        <div class="shape-trigger" @click="openContainer()">
            <div class="shape-trigger__content">
                <svg class="shape-trigger__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                <p class="tside">
                    {{ this.language.includes("en") ? "PHOTO SHAPE" : "FORMATO DA FOTO"}}
                </p>
            </div>
        </div>
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

.shape-trigger {
    cursor: pointer;
}

.shape-trigger__content {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 12px;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.shape-trigger__content:hover {
    background: rgba(110, 142, 251, 0.1);
    transform: translateX(3px);
}

.shape-trigger__content:active {
    transform: translateX(3px) scale(0.98);
}

.shape-trigger__icon {
    flex-shrink: 0;
    color: #6e8efb;
    transition: all 0.3s ease;
}

.shape-trigger__content:hover .shape-trigger__icon {
    color: #5a7ae8;
}

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