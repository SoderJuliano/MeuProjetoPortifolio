<template>

    <div>
        <p class="tside" @click="openTemplates">TEMPLATES</p>
    </div>
    <div class="dropdown">
        <TemplateChooser 
            :template="template"
            @now-template1="this.$emit('now-template1')"
            @now-template2="this.$emit('now-template2')"
        />
    </div>

</template>

<script>

import TemplateChooser from './TemplateChooser.vue'

export default {
    name: 'Templates',
    emits:['now-template1', 'now-template2'],
    props:{
        template: Number,
    },
    components: {
        TemplateChooser
    }
}
</script>