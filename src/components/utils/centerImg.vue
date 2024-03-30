<template>
    <div class="main centerImg">
        <p>{{language.includes("pt") ? "Ajuste a foto para esquerda ou para direita" : "Move your pic to rigth and left to center it"}}</p>
        <div class="d-flex column">
            <div class="row d-flex">
                <img @click="move(-10)" src="../../assets/arrow-left.svg" alt="-">
                <img @click="move(+10)" src="../../assets/arrow-rigth.svg" alt="+">
            </div>
            <div class="row d-flex">
                <img @click="resize(-50)" src="../../icons/minus.svg" alt="smaller" />
                <img @click="resize(+50)" src="../../icons/plus.svg" alt="bigger" />
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
    methods: {
        resize(value) {
            $('.img-pic').width($('.img-pic').width() + value);
            $('.img-pic').height($('.img-pic').height() + value);
        },
        move(more) {
            let newPosition = this.getIntValueFromPixel($(".img-pic").css("margin-left"));
            // console.log(newPosition);
            $(".img-pic").css("margin-left", newPosition+more);
            // console.log('movendo '+newPosition)
        },
        getIntValueFromPixel(val) {
            return Number(val.split('px')[0]);
        }       
    }
}
</script>

<style scoped>

.main {
    display: block;
    position: absolute;
    width: 235px;
    height: 200px;
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