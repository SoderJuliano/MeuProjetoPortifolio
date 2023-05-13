    <template>
    <div class="container" :style="getStyle()">
        <Contact
            class="template-data"
            @choose-emailIcon="this.$emit('choose-emailIcon')"
            @choose-phoneIcon="this.$emit('choose-phoneIcon')"
            @choose-addressIcon="$emit('choose-addressIcon')"
            @add-info="$emit('add-info')"
            template=2
            :user="user"
            :sideColor="sideColor"
            :language="language"
            :titulo="titulo.contato"
        />
        <Social
            class="template-data"
            @add-SocialLink="$emit('add-SocialLink')"
            template=2
            :language="language"
            :titulo="titulo.social"
            :user="userData"
            :sideColor="sideColor"
        />
        <Experiencias
            class="template-data"
            @add-Experiencia="$emit('add-Experiencia')"
            @update-experiences="$emit('update-experiences')"
            template=2
            :language="language"
            :titulo="titulo.experiencias"
            :user="userData"
            :experiences="user.userExperiences"
            :sideColor="sideColor"
        />
    </div>
</template>
<script>
import Contact from '../componentesCompartilhados/Contact.vue'
import Social from '../componentesCompartilhados/Social.vue'
import Experiencias from '../componentesCompartilhados/Experiencias.vue'

export default {
    components: {
        Social,
        Contact,
        Experiencias
    },
    emits:["add-info", "add-SocialLink", "add-Experiencia", "update-experiences", "choose-addressIcon",
            "choose-phoneIcon", "choose-emailIcon"],
    props:{
        user: Object,
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
    min-height: 550px;
    width: 50%;
    padding: 10px;
}

@media screen and (max-width: 1000px){
    .container{
        width: 100%;
    }
}
</style>
