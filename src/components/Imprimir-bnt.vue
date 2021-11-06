<template>
    <div class="print-div"  @click="print" >
        <img class="print-icon" src="../icons/printer.png" alt="imprimir icon">
        <span class="impreimir-text">imprimir</span>
    </div>
</template>
<script>
export default {
    name: 'imprimir-bnt',
    methods:{
        print(){
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