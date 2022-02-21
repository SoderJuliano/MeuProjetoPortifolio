<template>
    <div class="container">
        <Resumo 
            :user="user"
            title="Resumo"
            @add-resumo="$emit('add-resumo')"
        />
    </div>
</template>
<script>

import Resumo from '../Resumo.vue'
export default {
    name: 'left',
    components: {
        Resumo,
    },
    props: {
        user: Object
    },
    emits:["add-resumo"]
}
</script>
<style scoped>
.container {
    width: 50%;
}
</style>