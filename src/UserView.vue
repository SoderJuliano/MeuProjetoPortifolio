<template>
    <component 
        :is="templates[configs.template - 1]"
        :user="user"
        :language="this.configs?.language"
        :mainColor="this.configs?.mainColor"
        :sideColor="this.configs?.sideColor"
        :fontColor="this.configs?.fontColor"
        :viewOnly="true"
    />
</template>

<script>

import Template1 from "./templates/Template1.vue";
import Template2 from "./templates/Template2.vue";
import Template3 from "./templates/Templete3.vue";
import Template4 from "./templates/Template4.vue";
import ModernTemplate from "./templates/ModernTemplate.vue";
import CodeCV from "./templates/CodeCV.vue";
import ClassicInverted from "./templates/ClassicInverted.vue";

export default {
    name: "userview",

    components: {
        Template1,
        Template2,
        Template3,
        Template4,
        ModernTemplate,
        CodeCV,
        ClassicInverted
    },
    data() {
        return {
            user: {},
            configs: JSON.parse(localStorage.getItem("configs")) || {},
            templates: [Template1,
                        Template2,
                        Template3,
                        Template4,
                        ModernTemplate,
                        CodeCV,
                        ClassicInverted]
        }
    },
    methods: {
        handleKeyDown(event) {
            if (event.key === 'Backspace') {
                window.history.back();
            }
        }
    },
    created() {
        if(this.configs.language.includes('pt-br')) {
            this.user = JSON.parse(localStorage.getItem('user-pt'));
        }else {
            this.user = JSON.parse(localStorage.getItem('user-en'));
        }
    },
    mounted() {
        document.addEventListener('keydown', this.handleKeyDown);
    },
    beforeUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
}
</script>