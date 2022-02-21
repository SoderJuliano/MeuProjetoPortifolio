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
        <Experiencias
            @add-Experiencia="$emit('add-Experiencia')"
            template="template2"
            titulo="EXPERIÊNCIAS"
            :user="userData"
            :experiences="userExperiences"
        />
    </div>
</template>
<script>
import Contact from '../Contact.vue'
import Social from '../Social.vue'
import Experiencias from '../Experiencias.vue'

export default {
    components: {
        Social,
        Contact,
        Experiencias
    },
    emits:["add-info", "add-SocialLink", "add-Experiencia"],
    props:{
        user: Object,
        userExperiences: Array
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