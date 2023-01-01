<template>
    <div class="colors-container">
        <p class="tside" @click="openContainer()">COR LATERAL</p>
        <div class="side-colors">
            <div class="closeDiv" @click="closeDiv()">X</div>
            <div class="dots-container">
                <div class="dot" style="background-color: #ff8533">#ff8533</div>
                <div class="dot" style="background-color: #ff6699" >#ff6699</div>
                <div class="dot" style="background-color: #ffc266" >#ffc266</div>
                <div class="dot" style="background-color: #B0C4DE" >#B0C4DE</div>
            </div>
            <div class="dots-container">
                <div class="dot" style="background-color: #E6EBE0">#E6EBE0</div>
                <div class="dot" style="background-color: #909590" >#909590</div>
                <div class="dot" style="background-color: #9AE19D" >#9AE19D</div>
                <div class="dot" style="background-color: #537A5A" >#537A5A</div>
            </div>
            <div class="dots-container">
                <div class="dot" style="background-color: #FCEADE">#FCEADE</div>
                <div class="dot" style="background-color: #B49A67" >#B49A67</div>
                <div class="dot" style="background-color: #C4C6E7" >#C4C6E7</div>
                <div class="dot" style="background-color: #BAA5FF" >#BAA5FF</div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'

export default {
    name: 'cores',
    methods: {
        openContainer(){
            $(".side-colors").css({"display": "grid", "position": "absolute"});
        },
        closeDiv(){
            $(".side-colors").css({"display": "none"});
        }
    }
}
</script>

<style>
.closeDiv{
    border-radius: 5px;
    border: solid 1px black;
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: 16px !important;
    background-color: black;
    color: white;
}
</style>