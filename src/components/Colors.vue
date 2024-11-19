<template>
    <div class="colors-container">
        <p class="tside" @click="openContainer()">{{ this.language.includes("en") ? "SECONDARY COLOR" : "COR LATERAL"}}</p>
        <div class="side-colors">
            <div class="closeDiv" @click="closeDiv()">X</div>
            <div class="dots-container">
                <div class="color-picker">
                <div class="color-box" style="background-color: #ff8533;">
                    <p>#ff8533</p>
                </div>
                <div class="color-box" style="background-color: #00ff00;">
                    <p>#00ff00</p>
                </div>
                <div class="color-box" style="background-color: #0000ff;"><p>#0000ff</p></div>
                <div class="color-box" style="background-color: #ffff00;"><p>#ffff00</p></div>
                <div class="color-box" style="background-color: #ff00ff;"><p>#ff00ff</p></div>
                <div class="color-box" style="background-color: #00ffff;"><p>#00ffff</p></div>
            </div>
            </div>
            <div class="dots-container">
                <div class="color-picker">
                <div class="color-box" style="background-color: #ff6699;">
                    <p>#ff6699</p>
                </div>
                <div class="color-box" style="background-color: #ffc266;">
                    <p>#ffc266</p>
                </div>
                <div class="color-box" style="background-color: #9AE19D;"><p>#9AE19D</p></div>
                <div class="color-box" style="background-color: #B0C4DE;"><p>#B0C4DE</p></div>
                <div class="color-box" style="background-color: #E6EBE0;"><p>#E6EBE0</p></div>
                <div class="color-box" style="background-color: #909590;"><p>#909590</p></div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'

export default {
    name: 'cores',
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
        openContainer() {
            this.closeAll();
            $(".side-colors").css({"display": "grid", "position": "absolute"});
        },
        closeDiv() {
            $(".side-colors").css({"display": "none"});
        }
    }
}
</script>

<style scoped>

.color-box p {
    display: none;
}

.dots-container {
    margin-top: 20px;
}
</style>

<style>
.closeDiv {
    text-align: center;
    position: absolute;
    width: 40px;
    padding: 10px;
    left: 90%;
    border-radius: 5px;
    border: solid 1px black;
    font-size: 20px !important;
    background-color: red;
    color: white;
}

@media screen and (max-width: 768px) {
    .closeDiv {
        left: 90%;
        top: 5px;
        width: 20px;
        height: 25px;
        padding: 5px;
    }
}

.colors-container {
    max-height: 100%;
}

.color-picker {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}
.color-box {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
}
</style>