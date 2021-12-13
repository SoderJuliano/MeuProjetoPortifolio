<template>
    <div class="multiMenu-options">
        <div class="header">
            <h3>OPÇÕES</h3>
        </div>
        
        <fonts />
        <Colors />
        <pageColor />
        <Avatares />
        <PicureShape />
    </div>
</template>

<script>
import Fonts from './Fonts.vue'
import Colors from './Colors.vue'
import pageColor from './pageColor.vue'
import Avatares from './Avatares.vue'
import PicureShape from './PictureShape.vue'

export default {
    name: 'multi-menu',
    components: {
        Fonts,
        Colors,
        pageColor,
        Avatares,
        PicureShape,
    },
}
</script>
<style scoped>
.bnt-close{
    position: relative;
    right: 10px;
    top: 10px;
}
.header{
    display: flex;
    width: 50%;
    height: 30px;
    text-align: center;
}
@media only screen and(min-width:1001px) {
    .multiMenu-options{
        max-height: 100%;
        width: 80%;
        background-color: white;
    }
}
@media only screen and(max-width:1000px) {
     .multiMenu-options{
        height: 150px;
        overflow: scroll;
        width: 80%;
        background-color: white;
    }
}
</style>