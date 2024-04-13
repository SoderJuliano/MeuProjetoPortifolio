<template>

    <div>
        <p class="tside" @click="openTemplates">TEMPLATES</p>
    </div>
    <div class="dropdown-templates">
        <div class="closeDiv" @click="closeDiv()">X</div>
        <TemplateChooser 
            :template="template"
            @now-template1="this.$emit('now-template1')"
            @now-template2="this.$emit('now-template2')"
        />
    </div>

</template>

<script>

import $ from 'jquery'
import TemplateChooser from './TemplateChooser.vue'

export default {
    name: 'Templates',
    emits:['now-template1', 'now-template2'],
    props:{
        template: Number,
    },
    components: {
        TemplateChooser
    },
    methods: {
        closeAll() {
            $(".side-colors").css({"display": "none"});
            $(".colors").css({"display": "none"});
            $(".dropdown-content").css({"display": "none"});
            $(".avatares-subcontainer").css({"display": "none"});
            $(".shapes").css({"display": "none"});
            $(".dropdown-templates").css({"display": "none"});
        },
        openTemplates() {
            this.closeAll();
            $(".dropdown-templates").css("display", "block")
        },
        closeDiv() {
            $(".dropdown-templates").css({"display": "none"});
        }
    }
}
</script>