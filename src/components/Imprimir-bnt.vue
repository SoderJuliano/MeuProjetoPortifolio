<template>
    <div class="print-div"  @click="print" >
        <img class="print-icon" src="../icons/printer.png" alt="imprimir icon">
        <span class="impreimir-text">imprimir</span>
    </div>
</template>
<script>

import $ from 'jquery'

export default {
    name: 'imprimir-bnt',
    methods:{
        print(){
            const sideHeight = $(".side").height()
            const mainHeight = $(".main-container").width()

            // console.log("side: " + sideHeight)
            // console.log("main-container: " + mainHeight )

            sideHeight > 950 ? $(".side").height(sideHeight) : $(".side").css("height", "100vh")
            if(mainHeight > sideHeight && mainHeight > 950){
            $(".side").height(mainHeight)
            }else{
            $(".main-container").height(sideHeight+50)
            }

            window.print()

            $(".side").height(sideHeight)
            $(".main-container").height(mainHeight)

        },
    }
}
</script>
<style scoped>
.print-icon{
    width: 25%;
    height: 15px;
    padding-top: 7%;
    padding-left: 10%;
}
.print-div{
    display: flex;
    width: 120px;
    border: solid black 1px;
    border-radius: 20px;
    position: relative;
    bottom: 4px;
}
.impreimir-text{
        padding: 3%;
}
</style>
