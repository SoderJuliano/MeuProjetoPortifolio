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

<style>
.closeDiv {
  text-align: center;
  position: relative;
  width: 40px;
  padding: 10px;
  left: 70%;
  border-radius: 5px;
  border: solid 1px black;
  font-size: 20px !important;
  background-color: red;
  color: white;
}

.colors-container {
    max-height: 100%;
}
</style>