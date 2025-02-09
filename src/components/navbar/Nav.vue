<template>
  <div class="bavbar">
        <span class="item">Menu</span>
        <span @click="setItem('lang')" class="item">Language</span>
        <span class="item">Save</span>
        <span class="item">Share img</span>
        <span class="item">Download doc</span>
        <span class="item">Print pdf</span>
        <span class="item">Info</span>
        <span class="item">About me</span>
        <span class="item">Login</span>
  </div>
  <div v-if="item" class="undernav">
    <div v-if="item && item === 'menu'" class="menu"></div>
    <div v-if="item && item === 'lang'" class="lang">
        <p :class="{ active: props.language === 'pt-br'}" @click="updateLanguage('pt-br')">Portuguese</p>
        <p :class="{ active: props.language === 'en-us'}" @click="updateLanguage('en-us')">English</p>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";

    // VARS
    const item = ref(null);

    // PROPS AND WATCHS
    const props = defineProps({
        language: {
            type: String,
            required: true,
            default: "us-en"
        }
    });

    watch(() => props.language, (newVal, oldVal) => {
        console.log(`Language changed from ${oldVal} to ${newVal}`);
    });


    // FUNCS
    function setItem(option) {
        item.value = option;
        console.log(item.value)
    }


    // EMITS
    const emit = defineEmits(['language-update']);

    function updateLanguage(lang) {
        emit('language-update', lang)
    }

</script>

<style scoped>
    .navbar {
        background-color: transparent;
        display: flex;
        width: 100dvw;
    }

    .item {
        margin-right: 20px;
        cursor: pointer;
    }

    .item:last-child {
        right: 10px;
        position: absolute;
    }

    .undernav .lang {
        margin-left: 70px;
        cursor: pointer;
    }

    .lang p:hover:after {
        content: " ←";
    }

    .lang p.active::before {
        content: "* ";
        font-weight: bold;
    }
</style>
