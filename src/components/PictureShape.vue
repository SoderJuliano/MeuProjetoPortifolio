<template>
    <div class="shape-container">
        <p class="tside">TIPO DE IMAGEM CONTAINER</p>
        <div class="shapes">
            <div id="square" class="square"></div>
            <div id="triangleUp" class="triangle-up"></div>
            <div id="circle" class="circle"></div>
            <div id="colorfull-circle" class="colorfull-circle"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'shapes',
}
</script>
<style scoped>
.shape-container:hover .shapes{
  display: flex;
}
.shapes{
    margin-left: 10px;
    margin-top: 10px;
    justify-content: space-around;
    display: none;
}
.square {
  width: 25px;
  height: 25px;
  border: 2px solid black;
}
.colorfull-circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border-top: 5px solid rgb(255, 2, 2);
  border-left: 5px solid rgb(68, 0, 255);
  border-right: 5px solid rgb(0, 158, 61);
  border-bottom: 5px solid rgb(255, 0, 221);
}
.circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid black;
}
.triangle-up {
    width: 25px;
    height: 25px;
    border: 2px solid black;
    border-radius: 11px;
}
</style>