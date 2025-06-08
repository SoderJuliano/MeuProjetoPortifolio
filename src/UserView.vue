<template>
    <component 
        :is="templates[configs.template - 1]"
        :user="user"
        :language="this.configs?.language"
        :mainColor="this.configs?.mainColor"
        :sideColor="this.configs?.sideColor"
        :fontColor="this.configs?.fontColor"
    />
</template>

<script>

import Template1 from "./templates/Template1.vue";
import Template2 from "./templates/Template2.vue";
import Template3 from "./templates/Templete3.vue";
import Template4 from "./templates/Template4.vue";

export default {
    name: "userview",

    components: {
        Template1,
        Template2,
        Template3,
        Template4
    },
    data() {
        return {
            user: {},
            configs: JSON.parse(localStorage.getItem("configs")) || {},
            templates: [Template1,
                        Template2,
                        Template3,
                        Template4]
        }
    },
    created() {
        if(this.configs.language.includes('pt-br')) {
            this.user = JSON.parse(localStorage.getItem('user-pt'));
        }else {
            this.user = JSON.parse(localStorage.getItem('user-en'));
        }
    }
}
</script>