<template>
    <div class="fonts-size">
        <p @click="showMenu()">{{this.language.includes("en") ? "FONT SIZE" : "TAMANHO DA FONTE"}}</p>
        <div class="fonts-size-dropdown">
            <div class="fonts-size-item">
                <p>Font Size {{this.size}} pixels</p>
                <div class="dropdown">
                    <button @click="showOptions()" class="dropbtn">{{this.size}}</button>
                    <p @click="miniClose" class="mini-close">x</p>
                    <div class="size-dropdown-content">
                        <p @click="changeSize(12)">12</p>
                        <p @click="changeSize(13)">13</p>
                        <p @click="changeSize(14)">14</p>
                        <p @click="changeSize(15)">15</p>
                        <p @click="changeSize(16)">16</p>
                        <p @click="changeSize(17)">17</p>
                        <p @click="changeSize(18)">18</p>
                        <p @click="changeSize(19)">19</p>
                        <p @click="changeSize(20)">20</p>
                    </div>
                </div>
            </div>
            <div class="fonts-size-item">
                <div class="closeDiv" @click="closeDiv()">X</div>
            </div>
            <div class="fonts-size-item">
                <div class="fonts-size-options">
                    <p @click="setFontWeight('lighter')" style="font-weight: lighter;">
                        <span v-if="this.fontweight === 'lighter'">* </span>
                        lighter</p>
                    <p @click="setFontWeight('normal')" style="font-weight: normal;">
                        <span v-if="this.fontweight === 'normal'">* </span>
                        normal</p>
                    <p @click="setFontWeight('bold')" style="font-weight: bold;">
                        <span v-if="this.fontweight === 'bold'">* </span>
                        bold</p>
                    <p @click="setFontWeight('bolder')" style="font-weight: bolder;">
                        <span v-if="this.fontweight === 'bolder'" >* </span>
                        bolder</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'

export default {
    name: "FontsSize",
    props: {
        language: String
    },
    data() {
        return {
            size: 14,
            fontweight: "normal"
        }
    },
    methods: {
        closeDiv() {
            $(".fonts-size-dropdown").css({"display": "none"})
        },
        showMenu() {
            $(".fonts-size-dropdown").css({"display": "flex"})
        },
        showOptions() {
            $(".size-dropdown-content").css({"display": "block"})
            $(".mini-close").css({"display": "flex"})
        },
        changeSize(newSize) {
            this.size = newSize;
            $(".main").css({"font-size": this.size})
            $(".side").css({"font-size": this.size})
        },
        miniClose() {
            $(".size-dropdown-content").css({"display": "none"})
            $(".mini-close").css({"display": "none"})
        },
        setFontWeight(val) {
            this.fontweight = val;
            $(".main").css({"font-weight": this.fontweight})
            $(".side").css({"font-weight": this.fontweight})
        }
    },
}
</script>
<style scoped>

p 
{
    margin-left: 10px;
}

.font-size {
    display: flex;
    flex-direction: column;
    width: 85%;
    align-self: center;
}

.size-dropdown-content {
  display: none;
  position: absolute;
  background-color: bisque;
  min-width: 100px;
  z-index: 1;
  border-radius: 10px;
  border: 1px solid gray;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.size-dropdown-content p {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center
}

.size-dropdown-content p:hover {
    background-color: white;
    border-radius: 10px;
} 

.fonts-size-dropdown {
    display: none;
    transition: ease-in-out 300ms;
    width: 80%;
    height: 400px;
    position: absolute;
    background-color: white;
    border: 1px solid black;
    padding: 10px;
    justify-content: space-between;
    flex-wrap: wrap;
}

.fonts-size-item {
    padding: 20px;
    background-color: bisque;
    width: 35%;
    height: 40%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
}

.mini-close {
    display: none;
    position: absolute;
    right: 5px;
    top: 20px;
    width: 20px;
    height: 20px;
    font-weight: bolder;
    text-align: center;
    background-color: red;
    color: white;
    z-index: 2;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
}

.dropbtn {
    min-width: 110px;
    border-radius: 10px;
    justify-self: center;
}

.closeDiv {
    justify-self: center;
    align-self: center;
    margin: auto auto;
}

.fonts-size-item .closeDiv {
    left: 0%;
}

.fonts-size-options p:active{
    transform: scale(.9);
}

</style>