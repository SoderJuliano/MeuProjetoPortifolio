<template>
    <div class="component" :class="{'block-layout': block}" :style="css">
        <div class="span1" :style="span1">
            <span v-if="!isEditingTitle" @click="editTitle">{{ title }}</span>
            <input v-else type="text" v-model="editableTitle" @blur="saveTitle" @keyup.enter="saveTitle" />
        </div>
        <div class="span2" :style="span2">
            <span v-if="!isEditingText" @click="editText" v-html="text"></span>
            <input v-else type="text" v-model="editableText" @blur="saveText" @keyup.enter="saveText" />
        </div>
        <span v-if="removeBnt" @click="removeComponent" class="remove-button">-</span>
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
span1: Object,
span2: Object,
removeBnt: {
    type: Boolean,
    default: false,
}
});
const emit = defineEmits(['update:title', 'update:text', 'remove']);

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
    emit('update:title', editableTitle.value);
};

const editText = () => {
    isEditingText.value = true;
};

const saveText = () => {
    isEditingText.value = false;
    emit('update:text', editableText.value);
};

const removeComponent = () => {
    emit('remove');
};
</script>

<style scoped>
.remove-button {
    cursor: pointer;
    font-size: 24px;
    text-align: center;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: center;
}
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

input {
flex: 80%;
margin-left: 10px;
}

@media print {
    span {
        font-size: 70%;
    }
    .block-layout {
        padding-left: 10px !important;
        padding-right: 10px !important;
        margin-bottom: 0% !important;
        margin-top: 0% !important;
    }
    .component {
        margin-top: 1px !important;
        padding-left: 10% !important;
        padding-right: 10% !important;
    }
    .remove-button {
        display: none;
    }
}
</style>