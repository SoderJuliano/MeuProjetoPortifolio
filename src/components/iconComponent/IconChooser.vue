<template>
    <div>
        <emailicons />
    </div>
</template>

<script>

import emailIcons from "./emailIcons.vue"

export default {
    name: 'iconChooser',
    methods: {

    },
    props: {
        showEmail: Boolean,
    },
    component:{
        emailIcons
    }
}
</script>

<style scoped>

</style>