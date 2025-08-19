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
                { id: 5, name: 'Modern', image: require('../../../new-template.png') }
            ]
        }
    },
    methods: {
        select(templateId) {
            this.$emit('change-layout', templateId);
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

button {
    border-radius: 15px;
    color: black;
    background-color: white;
    margin-left: 10px;
    width: 40px;
}

button img {
    width: 40px;
    height: 80px;
}

.select-template {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 55px;
    z-index: 2;
}
</style>