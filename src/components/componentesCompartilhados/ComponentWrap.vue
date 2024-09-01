<template>
<div :class="{'block-layout': block}" :style="css">
    <span v-if="!isEditingTitle" @click="editTitle">{{ title }}</span>
    <input v-else type="text" v-model="editableTitle" @blur="saveTitle" @keyup.enter="saveTitle" />

    <span v-if="!isEditingText" @click="editText">{{ text }}</span>
    <input v-else type="text" v-model="editableText" @blur="saveText" @keyup.enter="saveText" />
</div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

// Define the props
const props = defineProps({
title: String,
text: String,
css: Object,
block: Boolean,
});

// Local state for editing
const isEditingTitle = ref(false);
const isEditingText = ref(false);
const editableTitle = ref(props.title);
const editableText = ref(props.text);

// Methods to handle editing
const editTitle = () => {
isEditingTitle.value = true;
};

const saveTitle = () => {
isEditingTitle.value = false;
};

const editText = () => {
isEditingText.value = true;
};

const saveText = () => {
isEditingText.value = false;
};
</script>

<style lang="scss" scoped>
.component {
display: flex;
align-items: center;
}

.block-layout {
display: block;
}

.block-layout span {
display: block;
margin-bottom: 8px;
}

span {
flex: 1 1 20%;
}

input {
flex: 1 1 80%;
margin-left: 10px;
}
</style>