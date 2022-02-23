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
            :user="user"
            templete="templete2"
            @add-formacao="$emit('add-formacao')"
        />
         <Habilidade
            @add-habilidade="$emit('add-habilidade')"
            class="template-data"
            titulo="HABILIDADES"
            backgroundColor="#808080"
            :hability="hability"
            templete="templete2"
            :user="user"
        />
    </div>
</template>
<script>
import Competencias from '../Competencias.vue'
import Resumo from '../Resumo.vue'
import Formacao from '../Formacao.vue'
import Habilidade from '../Habilidade.vue'

export default {
    name: 'left',
    components: {
        Resumo,
        Competencias,
        Formacao,
        Habilidade
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