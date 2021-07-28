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
.print-div{
    display: flex;
    width: 120px;
    height: 40px;
    border: solid black 2px;
    border-radius: 20px;
}
.print-icon{
    width: 30px;
    height: 25px;
    padding: 10px;
}
.impreimir-text{
    padding-top: 10px;
}
</style>