<template>
    <div class="fonts-container">
        <p class="title">TIPOS DE FONTES</p>
        <div class="list-container">
            <p style="font-family: 'Oswald', sans-serif !important; font-weight: bold" @click='$emit("changefont")' class="pFont">Oswald</p>
            <p style="font-family:'Zen Loop', cursive !important; font-weight: bold" @click='$emit("changefont")' class="pFont">Zen Loop</p>
            <p style="font-family: 'Fuggles', cursive; font-weight: bold" @click='$emit("changefont")' class="pFont">Fuggles</p>
            <p style="font-family': 'STIX Two Math', serif; font-weight: bold" @click='$emit("changefont")' class="pFont">STIX Two Math</p>
        </div>
        
    </div>
</template>

<script>
export default {
 name: 'fonts',
}
</script>

<style scoped>
.fonts-container{
    min-height: 100px;
    max-height: 100%;
    width: 100%;
    background-color: white;
}
.list-container{
    padding: 1px;
    display: flex;
    width: 90%;
    height: 50px;
    margin-left: 10px;
}
.pFont{
    width: 30%;
    height: 35px;
    border: solid 2px gray;
    text-align: center;
    box-shadow: gray -1px 1px 1px 1px;
    font-size: 10px;
    margin-left: 10px;
    background-color: whitesmoke;
    overflow: hidden;
}
.pFont:hover{
    background-color: gray;
    color: white;
    box-shadow: whitesmoke -2px -2px;
}
.pFont:active{
    background-color: black;
    color:white;
}
</style>