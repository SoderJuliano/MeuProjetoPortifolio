<template>
    <div :class="tstyle">
        <p :style="getStyle()" class="title">{{language == "pt-br" ? titulo[0] : titulo[1]}}
            <showSwitcher :className="tstyle" :startShowing="user.contact.email.length > 0 || user.contact.phone.length > 0 || user.contact.address != ''" />
            <img src="../../assets/new_edit_icon.png" alt="editar" class="editar-contact-animado" @click="$emit('add-info')"/>
        </p><br>
        <div v-for="(item, index) in this.user.contact.email" :key="index" class="data-container">
            <img @click="this.$emit('choose-emailIcon')" v-if="item" src="../../icons/envelope.svg" class="email-icon"/>
            <span class="email-text">{{item}}</span>
        </div>
        <div v-for="(item, index) in this.user.contact.phone" :key="index" class="data-container">
            <img @click="this.$emit('choose-phoneIcon')" v-if="item" src="../../icons/phone.png" alt="phone" class="phone-icon">
            <span class="phone-text">{{ normalizePhone(item) }}</span>
            <img @click="toglePhoneMask()" alt="phone" src="../../icons/phone/enabled.svg" id="enabled" class="phone-enabled">
            <img @click="toglePhoneMask()" alt="phone" src="../../icons/phone/disabled.svg" id="disabled" class="phone-disabled">
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
            address: '', */
            tstyle: "contact-template"+this.template,
        }
    },
    /* mounted(){
        this.email = this.user.contact.email;
        this.phone = this.user.contact.phone;
        this.adress = this.user.contact.adress;
    }, */
    methods:{
        toglePhoneMask() {
            if (this.phoneMask == true) {
                document.getElementById("enabled").style.display = "none";
                document.getElementById("disabled").style.display = "block";
                this.phoneMask = false;
                let phone = document.getElementsByClassName("phone-text")[0].textContent;
                phone = phone.replaceAll(" ", "");
                phone = phone.replaceAll("-", "");
                phone = phone.replaceAll("(", "");
                phone = phone.replaceAll(")", "");
                document.getElementsByClassName("phone-text")[0].textContent = phone;
            } else {
                document.getElementById("enabled").style.display = "block";
                document.getElementById("disabled").style.display = "none";
                this.phoneMask = true;
                let phone = document.getElementsByClassName("phone-text")[0].textContent;
                document.getElementsByClassName("phone-text")[0].textContent = this.normalizePhone(phone);
            }
        },
        normalizePhone(phone) {
            if (phone.length == 11 && this.language == "pt-br") {
                return "(" + phone.slice(0, 2) + ") " + phone.slice(2, 3) + " " + phone.slice(3, 7) + "-" + phone.slice(7, 11);
            } else if (phone.length == 14 && this.language == "pt-br") {
                return phone.slice(0, 3) + " " + phone.slice(3, 5) + " " + phone.slice(5, 10) + "-" + phone.slice(10, 14);
            } else if (phone.length == 13 && this.language == "pt-br") {
                return "+" + phone.slice(0, 2) + " " + phone.slice(2, 4) + " " + phone.slice(4, 9) + "-" + phone.slice(9, 13);
            } else if (phone.length == 9 && this.language == "pt-br") {
                return phone.slice(0, 5) + "-" + phone.slice(5, 9);
            }

            if (phone.length == 12 && this.language != "pt-br") {
                return phone.slice(0, 2) + " (" + phone.slice(2, 5) + ")-" + phone.slice(5, 9) + "-" + phone.slice(9, 12);
            } else if (phone.length == 11 && this.language != "pt-br") {
                return "+" + phone.slice(0, 1) + " (" + phone.slice(1, 4) + ")-" + phone.slice(4, 8) + "-" + phone.slice(8, 11);
            }

            return phone;
        },
        getStyle(){
            return {
                "border-bottom": "1px solid "+this.sideColor+"!important",
                "width": this.template == 2 ? "90%" : "100% !important"
            }
        }
    }
}
</script>

<style scoped>
.phone-enabled {
    right: 30px;
}
.phone-disabled {
    right: 30px;
 }
.editar-contact:active {
    transform: scale(.9);
}
.contact-template2:hover .editar-contact {
    display: none;
}


.contact-template2 .editar-contact-animado {
    left: 30px;
    position: sticky;
}
</style>