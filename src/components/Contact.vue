<template>
    <div :class="tstyle">
        <p class="title" :style="getStyle()">{{language == "pt-br" ? titulo[0] : titulo[1]}}
        <img src="../icons/editar.png" alt="editar" class="editar-contact"/>
        <img src="../icons/animados/editar.gif" alt="editar" class="editar-contact-animado" @click="$emit('add-info')"/>
        </p><br>
        <div v-for="(item, index) in this.user.contact.email" :key="index" class="data-container">
            <img v-if="item" src="../icons/envelope.svg" class="email-icon"/>
            <span class="email-text">{{item}}</span>
        </div>
        <div v-for="(item, index) in this.user.contact.phone" :key="index" class="data-container">
            <img v-if="item" src="../icons/phone.png" alt="phone" class="phone-icon">
            <span class="phone-text">{{item}}</span>
        </div>
        <div class="data-container">
            <img v-if="this.user.contact.adress" src="../icons/adress.png" alt="adress" class="adress-icon">
            <span class="endereco-text">{{this.user.contact.adress}}</span>
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
        template: Number,
        user: Object,
        sideColor: String,
    },
    emits:["add-info"],
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
                "border-bottom": "1px solid "+this.sideColor
            }
        }
    }
}
</script>