<template>
    <div class="colors-container">
        <p class="title">TIPOS DE COR PRINCIPAL</p>
        <div class="dots-container">
            <div class="dot" style="background-color: #FFA07A">pag-#FFA07A</div>
            <div class="dot" style="background-color: #FFB6C1" >pag-#FFB6C1</div>
            <div class="dot" style="background-color: #F08080" >pag-#F08080</div>
            <div class="dot" style="background-color: #87CEEB" >pag-#87CEEB</div>
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
    min-height: 100px;
}
.dot{
    width: 50px;
    height: 50px;
    border: solid gray 1px;
    margin: 1px;
    font-size: 10px;
}
.colors-container{
    margin-top: 10px;
    display: block;
    background-color: white;
}
</style>