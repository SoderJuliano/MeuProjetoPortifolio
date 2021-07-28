<template>
    <multi-menu
        v-if="hover==true"
        class="multiMenu"
        @click="changefontM"
    />
    <div class="footer">
        <img v-if="hover==false" @mouseover="hover = true" src="../icons/menustatic.png" alt="">
        <img v-else src="../icons/openedmenu.png" alt="menu-gif">
        <img class="close-bnt" @mouseover="hover = false" v-if="hover==true" src="../icons/close.png" alt="close" />
    </div>
</template>

<script>
import MultiMenu from './MultiMenu.vue'
export default {
    name: 'footermenu',
    components:{
        MultiMenu,
    },
    data(){
        return{
            hover: false,
        }
    },
    methods:{
        changefontM(p){
        if(p.target.textContent.includes('#')==true){
          document.getElementsByClassName("side")[0].style.backgroundColor = p.target.textContent
        }
        
        switch(p.target.textContent){ 
            case 'Oswald':
                document.getElementsByClassName("main")[0].style.fontFamily = "'Oswald', sans-serif" 
                break
            case 'Zen Loop':
                document.getElementsByClassName("main")[0].style.fontFamily = "'Zen Loop', cursive" 
                break
            case 'Fuggles':
                document.getElementsByClassName("main")[0].style.fontFamily = "'Fuggles', cursive"
                break
            default:
                document.getElementsByClassName("main")[0].style.fontFamily = "'STIX Two Math', serif"
        }
        },
    }
}
</script>
<style scoped>
img{
    width: 25px;
}
.close-bnt{
    position: absolute;
    right: 20px;
    width: 35px;
    height: 100%;
}
.multiMenu{
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 20px;
    background-color: white;
}
</style>