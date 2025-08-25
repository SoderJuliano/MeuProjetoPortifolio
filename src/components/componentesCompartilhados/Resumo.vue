<template>
    <div class="main-resumo-container">
        <div :style="cor" class="title-container">
            <p class="titulo">{{language.includes('pt') ? titulo[0] : titulo[1]}}</p>
            <img @click="$emit('add-resumo')" src="../../icons/whiteEdit.png" alt="editar" class="editar">
        </div>
        <p id="resume">{{user.resume ? user.resume : language.includes('pt') ? 'sobre você.' : 'about you.'}}
        </p>
    </div>
</template>

<script>
export default {
    name: "resumo",
    props:{
        language: String,
        titulo: Array,
        cor: String,
        user: Object,
        template: String,
        fontColor: String,
    },
    emits: ["add-resumo"]
}
</script>

<style scoped>
.title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.titulo {
    flex-grow: 1;
}
.editar {
    display: none;
}
.title-container:hover .editar {
    display: block;
}
</style>
