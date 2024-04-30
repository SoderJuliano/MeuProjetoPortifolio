<template>
    <div :class="tstyle">
        <p :style="getStyle()" class="title">{{language == "pt-br" ? titulo[0] : titulo[1]}}
            <showSwitcher :className="tstyle" :startShowing="user.contact.email.length > 0 || user.contact.phone.length > 0 || user.contact.address != ''" />
            <img style="margin-right: 5px; margin-top: 5px" src="../../icons/editar.png" alt="editar" class="editar-contact" @click="$emit('add-info')" />
            <img src="../../icons/animados/editar.gif" alt="editar" class="editar-contact-animado" @click="$emit('add-info')"/>
        </p><br>
        <div v-for="(item, index) in this.user.contact.email" :key="index" class="data-container">
            <img @click="this.$emit('choose-emailIcon')" v-if="item" src="../../icons/envelope.svg" class="email-icon"/>
            <span class="email-text">{{item}}</span>
        </div>
        <div v-for="(item, index) in this.user.contact.phone" :key="index" class="data-container">
            <img @click="this.$emit('choose-phoneIcon')" v-if="item" src="../../icons/phone.png" alt="phone" class="phone-icon">
            <span class="phone-text">{{item}}</span>
        </div>
        <div class="data-container">
            <img @click="$emit('choose-addressIcon')" v-if="this.user.contact.adress" src="../../icons/adress.png" alt="adress" class="adress-icon">
            <span class="endereco-text">{{this.user.contact.adress}}</span>
        </div>
    </div>
</template>
<script>

import "../style.css"
import showSwitcher from '../iconComponent/showSwitcher.vue';

export default {
    name: 'contact',
    components: {
        showSwitcher
    },
    props:{
        language: String,
        titulo: Array,
        template: Number,
        user: Object,
        sideColor: String,
    },
    emits:["add-info", "choose-addressIcon", "choose-phoneIcon", "choose-emailIcon"],
    data(){
        return {/*
            email: [],
            phone: [],
            adress: '', */
            tstyle: "contact-template"+this.template,
        }
    },
    /* mounted(){
        this.email = this.user.contact.email;
        this.phone = this.user.contact.phone;
        this.adress = this.user.contact.adress;
    }, */
    methods:{
        getStyle(){
            return {
                "border-bottom": "1px solid "+this.sideColor,
                "width": this.template == 2 ? "90%" : "100% !important"
            }
        }
    }
}
</script>

<style scoped>
.editar-contact:active {
    transform: scale(.9);
}
</style>