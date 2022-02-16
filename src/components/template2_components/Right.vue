<template>
    <div class="container">
        <Contact
            @add-info="$emit('add-info')"
            template="template2"
            :user="user"
         />
        <Social 
            @add-SocialLink="$emit('add-SocialLink')"
            template="template2"
            titulo="SOCIAL"
            :user="userData"
        />
    </div>
</template>
<script>
import Contact from '../Contact.vue'
import Social from '../Social.vue'

export default {
    components: {
        Social,
        Contact
    },
    emits:["add-info", "add-SocialLink"],
    props:{
        user: Object
    },
    data() {
        return{
            userData: this.user
        }
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