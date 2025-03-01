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
.print-icon {
    width: 16px;
    height: 16px;
    margin-left: 8px;
}

.print-div {
    display: flex;
    align-items: center;
    gap: 6px;
    border: solid black 1px;
    border-radius: 20px;
    padding: 2px 0; /* Reduzido o padding vertical */
    cursor: pointer;
    transition: background-color 0.2s;
    height: 24px; /* Altura fixa para corresponder ao botão de idioma */
}

.print-div:hover {
    background-color: #f5f5f5;
}

.impreimir-text {
    font-size: 14px;
    margin-right: 8px;
}
</style>
