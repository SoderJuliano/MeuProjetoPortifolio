<template>
    <div class="colors-container">
        <p class="title">TIPOS DE COR LATERAL</p>
        <div class="dots-container">
            <div class="dot" style="background-color: #ff8533">#ff8533</div>
            <div class="dot" style="background-color: #ff6699" >#ff6699</div>
            <div class="dot" style="background-color: #ffc266" >#ffc266</div>
            <div class="dot" style="background-color: #B0C4DE" >#B0C4DE</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'cores',
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