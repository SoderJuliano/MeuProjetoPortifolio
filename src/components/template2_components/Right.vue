<template>
    <div class="container" :style="getStyle()">
        <Contact
            @add-info="$emit('add-info')"
            template=2
            :user="user"
            :sideColor="sideColor"
            :language="language"
            :titulo="titulo.contato"
        />
        <Social 
            @add-SocialLink="$emit('add-SocialLink')"
            template=2
            :language="language"
            :titulo="titulo.social"
            :user="userData"
            :sideColor="sideColor"
        />
        <Experiencias
            @add-Experiencia="$emit('add-Experiencia')"
            template=2
            :language="language"
            :titulo="titulo.experiencias"
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
        sideColor: String,
        language: String,
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
            userData: this.user,
            titulo: {
                contato: ["CONTATO", "CONTACT"],
                social: ["SOCIAL", "SOCIAL"],
                experiencias: ["EXPERIÊNCIAS", "EXPERIENCES"]
            }
        }
    }
}
</script>

<style scoped>
.container {
    width: 50%;
    padding: 10px;
}

@media screen and (max-width: 1000px){
    .container{
        width: 100%;
    }
}
</style>