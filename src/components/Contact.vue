<template>
    <div :class="tstyle">
        <p class="title" :style="getStyle()">{{language == "pt-br" ? titulo[0] : titulo[1]}}
        <img src="../icons/editar.png" alt="editar" class="editar-contact"/>
        <img src="../icons/animados/editar.gif" alt="editar" class="editar-contact-animado" @click="$emit('add-info')"/>
        </p><br>
        <div v-for="(item, index) in email " :key="index" class="data-container">
            <img v-if="item" src="../icons/envelope.svg" class="email-icon"/>
            <span class="email-text">{{item}}</span>
        </div>
        <div v-for="(item, index) in phone" :key="index" class="data-container">
            <img v-if="item" src="../icons/phone.png" alt="phone" class="phone-icon">
            <span class="phone-text">{{item}}</span>
        </div>
        <div class="data-container">
            <img v-if="adress" src="../icons/adress.png" alt="adress" class="adress-icon">
            <span class="endereco-text">{{adress}}</span>
        </div>
    </div>
</template>
<script>
import "./style.css"
export default {
    name: 'contact',
    props:{
        language: String,
        titulo: Array,
        template: String,
        user: Object,
        sideColor: String,
    },
    emits:["add-info"],
    data(){
        return {
            email: [],
            phone: [],
            adress: this.user.adress,
            tstyle: "contact-"+this.template,
        }
    },
    mounted(){
        this.email = this.user.email;
        this.phone = this.user.phone;
    },
    methods:{
        getStyle(){
            return {
                "border-bottom": "1px solid "+this.sideColor
            }
        }
    }
}
</script>