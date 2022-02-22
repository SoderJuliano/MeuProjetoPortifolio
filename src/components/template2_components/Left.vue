<template>
    <div class="container">
        <Resumo 
            titulo="RESUMO"
            :user="user"
            title="Resumo"
            @add-resumo="$emit('add-resumo')"
            templete="templete2"
        />
        <Competencias 
            :user="user"
            titulo="COMPETÊNCIAS"
            templete="templete2"
        />
        <Formacao 
            titulo="FORMAÇÃO ACADÊMICA"
            :formacao="user.formacao"
            templete="templete2"
        />
    </div>
</template>
<script>
import Competencias from '../Competencias.vue'
import Resumo from '../Resumo.vue'
import Formacao from '../Formacao.vue'
export default {
    name: 'left',
    components: {
        Resumo,
        Competencias,
        Formacao,
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