<template>
    <div class="colors-container">
        <p class="title">TIPOS DE COR PRINCIPAL</p>
        <div class="dots-container">
            <div class="dot" id="#FFA07A" style="background-color: #FFA07A">pag-#FFA07A</div>
            <div class="dot" id="#FFB6C1" style="background-color: #FFB6C1" >pag-#FFB6C1</div>
            <div class="dot" id="#F08080" style="background-color: #F08080" >pag-#F08080</div>
            <div class="dot" id="#87CEEB" style="background-color: #87CEEB" >pag-#87CEEB</div>
        </div>
        <div class="dots-container">
            <div class="dot" id="#849483" style="background-color: #849483">pag-#849483</div>
            <div class="dot" id="#4E937A" style="background-color: #4E937A" >pag-#4E937A</div>
            <div class="dot" id="#B4656F" style="background-color: #B4656F" >pag-#B4656F</div>
            <div class="dot" id="#948392" style="background-color: #948392" >pag-#948392</div>
        </div>
        <div class="dots-container">
            <div class="dot" id="#A61C3C" style="background-color: #A61C3C">pag-#A61C3C</div>
            <div class="dot" id="#279AF1" style="background-color: #279AF1" >pag-#279AF1</div>
            <div class="dot" id="#ED6A5A" style="background-color: #ED6A5A" >pag-#ED6A5A</div>
            <div class="dot" id="#1F271B" style="background-color: #1F271B" >pag-#1F271B</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'page-cores',
}
</script>
<style scoped>
.dots-container{
    display: flex;
    width: 90%;
    margin-left: 20px;
    margin-right: 50px;
}
.dot{
    width: 50px;
    height: 30px;
    border: solid gray 1px;
    margin: 1px;
    font-size: 10px;
}
.colors-container{
    margin-top: 5px;
    display: block;
    background-color: white;
}
</style>