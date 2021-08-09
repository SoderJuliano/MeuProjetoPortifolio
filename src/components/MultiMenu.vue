<template>
    <div class="multiMenu-options">
        <fonts />
        <Colors />
        <pageColor />
        <Avatares />
    </div>
</template>

<script>
import Fonts from './Fonts.vue'
import Colors from './Colors.vue'
import pageColor from './pageColor.vue'
import Avatares from './Avatares.vue'

export default {
    name: 'multi-menu',
    components: {
        Fonts,
        Colors,
        pageColor,
        Avatares,
    },
}
</script>
<style scoped>

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