<template>
    <div v-if="title.includes('emailIcons')">
        <Emailicons  />
    </div>
</template>

<script>

import EmailIcons from './EmailIcons.vue'

export default {
    name: 'iconChooser',
    methods: {

    },
    props: {
        title: String
    },
    component:{
        EmailIcons
    }
}
</script>

<style scoped>

</style>