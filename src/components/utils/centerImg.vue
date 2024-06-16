<template>
    <div class="main centerImg">
        <p>{{this.isPortuguese() ? "Ajuste a foto para esquerda ou para direita" : "Move your pic to rigth and left to center it"}}</p>
        <div class="d-flex column">
            <div class="row d-flex">
                <img @click="move(-10)" src="../../assets/arrow-left.svg" alt="-">
                <img @click="move(+10)" src="../../assets/arrow-rigth.svg" alt="+">
            </div>
            <div class="row d-flex">
                <img @click="resize(-50)" src="../../icons/minus.svg" alt="smaller" />
                <img @click="resize(+50)" src="../../icons/plus.svg" alt="bigger" />
            </div>
            <div class="row d-flex">
                <span>{{this.isPortuguese() ? "Centralize a foto" : "Auto center pic"}}</span>
                <img @click="autoAjustar()" src="../../icons/center.svg" alt="center">
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";

export default {
    name: "CenterImg",
    props: {
        language: String
    },
    data() {
        return {
            local_language: this.language
        }
    },
    methods: {
        autoAjustar() {
            $('.img-pic').width(150);
            $('.img-pic').height(150);
            $('.img-pic').css({ left: '0' + 'px', top: '0' + 'px' });
            $('.img-pic').css({ 'margin-left': '0' + 'px', 'margin-rigth': '0' + 'px' });
        },
        resize(value) {
            const novo_valor = $('.img-pic').width() + value;
            // console.log('antes width', $('.img-pic').width());
            // console.log('antes heigth', $('.img-pic').height());
            $('.img-pic').css({"width": novo_valor+"px", "height": novo_valor+"px"});
            // console.log('depois width', $('.img-pic').width());
            // console.log('depois heigth', $('.img-pic').height());
        },
        move(more) {
            let newPosition = this.getIntValueFromPixel($(".img-pic").css("margin-left"));
            // console.log(newPosition);
            $(".img-pic").css("margin-left", newPosition+more);
            // console.log('movendo '+newPosition)
        },
        getIntValueFromPixel(val) {
            return Number(val.split('px')[0]);
        },
        isPortuguese() {
            return this.local_language.includes("pt");
        }
    },
    watch: {
        language(newValue){
            // console.log("someData changed!", newValue);
            this.local_language = newValue;
        }
    }
}
</script>

<style scoped>

.main {
    display: block;
    position: absolute;
    width: 235px;
    height: auto;
    max-height: 350px;
    background-color: #ffffffde;
    border-radius: 45px;
    padding: 20px;
    box-shadow: -5px 10px 10px 0px gray;
}

p {
    margin: auto 0 10px;
    color: black;
    font-size: 16px;
    font-weight: bold;
}

.d-flex {
    display: flex;
    align-items: center;
    justify-content: center;
}

.column {
    flex-direction: column;
}

.row 
{
    width: 170px;
    height: 30px;
    background-color: whitesmoke;
    padding: 20px;
    align-self: center;
    position: relative;
    justify-content: space-between;
    border-radius: 45px;
    box-shadow: -5px 10px 10px 0px gray;
    margin-bottom: 10px;
}

.row img 
{
    width: 60px;
}

img:active {
    transform: scale(0.8);
}

@media print {
    .main {
        display: none;
    }
}
</style>