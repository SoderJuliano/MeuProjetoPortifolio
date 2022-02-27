<template>
    <div class="container">
        <Resumo 
            :user="user"
            :titulo="titles.resumo"
            :language="language"
            @add-resumo="$emit('add-resumo')"
            template="template2"
            :sideColor="sideColor"
        />
        <Competencias 
            :user="user"
            :titulo="titles.competencias"
            :language="language"
            template="template2"
            @add-competencia="$emit('add-competencia')"
            :sideColor="sideColor"
        />
        <Formacao 
            :user="user"
            template="template2"
            @add-formacao="$emit('add-formacao')"
            :sideColor="sideColor"
            :titulo="titles.formacao"
            :language="language"
        />
         <Habilidade
            @add-habilidade="$emit('add-habilidade')"
            class="template-data"
            :titulo="titles.habilidades"
            :language="language"
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
    data(){
        return{
            titles: {
                competencias: ["COMPETÊNCIAS", "COMPETENCE"],
                resumo: ["RESUMO", "SUMMARY"],
                formacao: ["FORMAÇÃO ACADÊMICA", "EDUCATION"],
                habilidades: ["HABILIDADES", "SKILLS"]
            }
        }
    },
    components: {
        Resumo,
        Competencias,
        Formacao,
        Habilidade
    },
    props: {
        user: Object,
        sideColor: String,
        language: String,
    },
    emits:["add-resumo", "add-habilidade"]
}
</script>
<style scoped>
.container {
    width: 50%;
}
</style>