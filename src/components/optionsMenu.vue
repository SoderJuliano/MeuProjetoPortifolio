<template>
    <div v-if="show" class="dropdown">
       <div class="header">
           <h4>Configurações</h4>
            <button @click="$emit('close')" style="background-color: red; color: white">X</button>
       </div>
        <PictureShape />
        
    </div>
</template>

<script>
import PictureShape from './PictureShape.vue'



export default {
   name: 'options-menu',
   components:{
       PictureShape,
   },
   props:{
    show: Boolean
   }
}
</script>

<style scoped>
.dropdown{
    display: block;
    position: absolute;
    background-color: white;
    left: 20%;
}
.header{
    display: flex;
    width: 100%;
}
button{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    float: right;
}
</style>