<template>
    <div class="container">
        <Resumo
            class="template-data"
            :user="user"
            :titulo="titles.resumo"
            :language="language"
            @add-resumo="$emit('add-resumo')"
            template=2
            :sideColor="sideColor"
        />
        <Competencias
            class="template-data"
            :user="user"
            :titulo="titles.competencias"
            :language="language"
            template=2
            @add-competencia="$emit('add-competencia')"
            @update-competences="onUpdateCompetences"
            :sideColor="sideColor"
        />
        <Formacao
            class="template-data"
            :user="user"
            template=2
            @update-formacao="onUpdateFormacao"
            @add-formacao="$emit('add-formacao')"
            @choose-educationIcon="$emit('choose-educationIcon')"
            :sideColor="sideColor"
            :titulo="titles.formacao"
            :language="language"
        />
        <Habilidade
            @add-habilidade="$emit('add-habilidade')"
            @adicionar-habilidade="$emit('adicionar-habilidade')"
            @choose-skillIcon="$emit('choose-skillIcon')"
            class="template-data"
            :titulo="titles.habilidades"
            :language="language"
            backgroundColor="#808080"
            :ability="ability"
            template=2
            :user="user"
            :sideColor="sideColor"
        />
    </div>
</template>
<script>
import Competencias from '../componentesCompartilhados/Competencias.vue'
import Resumo from '../componentesCompartilhados/Resumo.vue'
import Formacao from '../componentesCompartilhados/Formacao.vue'
import Habilidade from '../componentesCompartilhados/Habilidade.vue'

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
    methods: {
        onUpdateFormacao(data) {
            this.$emit("update-formacao", data);
        },
        onUpdateCompetences(competences){
            this.$emit('update-competences', competences)
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
    emits:[
        "add-resumo",
        "add-habilidade",
        "adicionar-habilidade",
        "choose-educationIcon",
        "update-competences",
        "update-formacao"
    ]
}
</script>
<style scoped>
.container {
    width: 50%;
    padding: 10px;
}
@media screen and (max-width: 1000px){
    .container{
        width: 100%;
    }
}
</style>
