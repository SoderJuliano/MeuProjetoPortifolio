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
            console.log("side: " + $(".side").height())
            console.log("main-container: "+ $(".main-container").height())
            $(".side").height() > 514 ? $(".side").height($(".side").height()) : $(".side").css("height", "100vh")
            $(".main-container").height() > $(".side").height() ? $(".side").height($(".main-container").height()) : ""
                
            window.print()
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