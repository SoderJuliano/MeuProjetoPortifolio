<template>
    <div class="main-resumo-container">
        <p class="title" :style="getStyle()">
            {{language.includes('pt') ? titulo[0] : titulo[1]}}
            <img @click="$emit('add-resumo')" src="../../assets/new_edit_icon.png" alt="editar" class="editar">
        </p>
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
        template: Number,
        fontColor: String,
        viewOnly: { type: Boolean, default: false }
    },
    emits: ["add-resumo"],
    methods: {
        getStyle(){
            return {
                'background-color': `${this.cor}`,
                'color': `${this.fontColor}`
            }
        }
    }
}
</script>

<style scoped>
.title {
    width: 98.35%;
    padding: 10px 0;
}
.editar {
    display: none;
    width: 20px;
    height: 20px;
    float: right;
    margin-right: 10px;
}
.title:hover .editar {
    display: block;
}
#resume {
    padding: 10px;
}
</style>