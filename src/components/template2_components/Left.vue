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
            @add-competencia="$emit('add-competencia')"
        />
        <Formacao 
            titulo="FORMAÇÃO ACADÊMICA"
            :formacao="user.grade"
            templete="templete2"
            @add-formacao="$emit('add-formacao')"
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