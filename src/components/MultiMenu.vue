<template>
    <div class="multiMenu-options">
        <fonts />
        <Colors />
        <page-color />
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
.multiMenu-options{
    height: 100%;
    width: 80%;
    background-color: white;
}
</style>