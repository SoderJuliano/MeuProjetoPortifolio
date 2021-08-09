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
@media screen and(max-width: 1000px) {
    .print-icon{
        width: 30px;
        height: 25px;
    }
    .impreimir-text{
        color: black !important;
        font-weight: bold;
    }
}
@media screen and(min-width: 1001px) {
    .print-icon{
        width: 30px;
        height: 25px;
        padding: 10px;
    }
    
}
.print-div{
    display: flex;
    width: 120px;
    height: 40px;
    border: solid black 1px;
    border-radius: 20px;
    
}
.impreimir-text{
        padding: 3%;
}
</style>