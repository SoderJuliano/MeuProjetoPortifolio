<template>
    <div class="container">
        <Resumo 
            titulo="RESUMO"
            :user="user"
            title="Resumo"
            @add-resumo="$emit('add-resumo')"
            template="template2"
            :sideColor="sideColor"
        />
        <Competencias 
            :user="user"
            titulo="COMPETÊNCIAS"
            template="template2"
            @add-competencia="$emit('add-competencia')"
            :sideColor="sideColor"
        />
        <Formacao 
            titulo="FORMAÇÃO ACADÊMICA"
            :user="user"
            template="template2"
            @add-formacao="$emit('add-formacao')"
            :sideColor="sideColor"
        />
         <Habilidade
            @add-habilidade="$emit('add-habilidade')"
            class="template-data"
            titulo="HABILIDADES"
            backgroundColor="#808080"
            :hability="hability"
            template="template2"
            :user="user"
            :sideColor="sideColor"
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
        user: Object,
        sideColor: String
    },
    emits:["add-resumo", "add-habilidade"]
}
</script>
<style scoped>
.container {
    width: 50%;
}
</style>