<template>
    <div class="container" :style="getStyle()">
        <Contact
            @add-info="$emit('add-info')"
            template="template2"
            :user="user"
            :sideColor="sideColor"
         />
        <Social 
            @add-SocialLink="$emit('add-SocialLink')"
            template="template2"
            titulo="SOCIAL"
            :user="userData"
            :sideColor="sideColor"
        />
        <Experiencias
            @add-Experiencia="$emit('add-Experiencia')"
            template="template2"
            titulo="EXPERIÊNCIAS"
            :user="userData"
            :experiences="userExperiences"
            :sideColor="sideColor"
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
        userExperiences: Array,
        sideColor: String
    },
    methods:{
        getStyle(){
            return{
                "border-left": "2px solid "+this.sideColor,
            }
        }
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
    padding: 10px;
}
</style>