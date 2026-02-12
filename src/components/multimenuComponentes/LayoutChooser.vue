<template>
    <div class="select-template">
        <button 
            v-for="template in templates"
            :key="template.id"
            @click="select(template.id)"
            :style="isSelected(template.id) ? 'background-color: blue; color: white' : 'background-color: white; color: black'">
            <p>{{ template.name }}</p>
            <img :src="template.image" :alt="template.name" />
        </button> 
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: "LayoutChooser",
    props: {
        template: Number
    },
    emits: ['change-layout'],
    data() {
        return {
            templates: [
                { id: 5, name: 'Modern', image: require('../../../new-template.png') },
                { id: 6, name: 'Code CV', image: require('../../assets/templatesImg/code_cv.png') },
                { id: 7, name: 'Classic Inverted', image: require('../../assets/templatesImg/template_estilo_direita.png') },
                { id: 8, name: 'Professor', image: require('../../assets/templatesImg/canva-currículo-professor-branco-azul-marrom-e-preto-uMRJCzdeup8.png') }
            ]
        }
    },
    methods: {
        select(templateId) {
            this.$emit('change-layout', templateId);
            if (window.innerWidth < 768) {
                $(".closeDiv").click();
                $(".navbar__toggle").click();
            }
        },
        isSelected(templateId) {
            return this.template === templateId;
        }
    }
}
</script>
<style scoped>
.select-template {
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap */
    justify-content: center; /* Center the items */
    gap: 15px; /* Add space between items */
    width: 100%;
    margin-top: 55px;
    z-index: 2;
}

button {
    flex: 1 1 150px; /* Flex-grow, flex-shrink, flex-basis */
    max-width: 200px; /* Max width for each card */
    border-radius: 15px;
    color: black;
    background-color: white;
    padding: 10px;
    border: 1px solid #ccc;
}

button p {
    margin: 0 0 10px 0;
    font-weight: bold;
}

button img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}
</style>
