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
    name: "TemplateChooser",
    props: {
        template: Number
    },
    emits: ['change-template'],
    data() {
        return {
            templates: [
                { id: 1, name: 'Style 1', image: require('../../assets/templatesImg/template1.png') },
                { id: 2, name: 'Style 2', image: require('../../assets/templatesImg/template2.png') },
                { id: 3, name: 'Normal', image: require('../../assets/templatesImg/templete3.png') },
                { id: 4, name: 'Normal 2', image: require('../../assets/templatesImg/template4.png') }
            ]
        }
    },
    methods: {
        select(templateId) {
            this.$emit('change-template', templateId);
            $(".closeDiv").click();
            $(".navbar__toggle").click();
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