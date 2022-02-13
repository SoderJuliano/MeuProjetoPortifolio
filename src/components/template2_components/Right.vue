<template>
    <div class="container">
        <Contact
            template="template2"
         />
        <Social />
    </div>
</template>
<script>
import Contact from '../Contact.vue'
import Social from '../Social.vue'

export default {
    components: {
        Social,
        Contact
    }
}
</script>

<style scoped>
.container {
    width: 50%;
    border-left: 1px solid black;
    padding: 10px;
}
</style>