<template>
    <div :class="tstyle">
        <p class="title">CONTATO
        <img src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-info')"/>
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
        template: String,
        
    },
    data(){
        return {
            tstyle: "contact-"+this.template
        }
    }
}
</script>