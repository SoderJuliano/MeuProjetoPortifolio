<template>
    <div class="component" :class="{'block-layout': block}" :style="css">
        <div class="span1" :style="span1">
            <span v-if="!isEditingTitle" @click="editTitle">{{ title }}</span>
            <input v-else type="text" v-model="editableTitle" @blur="saveTitle" @keyup.enter="saveTitle" />
        </div>
        <div class="span2" :style="span2">
            <span v-if="!isEditingText" @click="editText" v-html="text"></span>
            <div  v-else-if="textArea && isEditingText" >
                <textarea
                rows="4"
                cols="50"
                type="text" v-model="editableText"
            />
            <span class="saveTextArea" @click="saveTextArea">{{ textAreaSaveBnt ? textAreaSaveBnt : "save" }}</span>
            </div>
            <input v-else-if="!textArea && isEditingText" type="text" v-model="editableText" @blur="saveText" @keyup.enter="saveText" />
        </div>
        <span v-if="removeBnt" @click="removeComponent" class="remove-button">-</span>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

// Define the props
const props = defineProps({
    id: Number,
    title: String,
    text: String,
    css: Object,
    block: Boolean,
    span1: Object,
    span2: Object,
    textArea: Boolean,
    textAreaSaveBnt: String,
    noBoldText: Boolean,
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
const textAreaSave = ref(props.textAreaSaveBnt);


// Methods to handle editing
const editTitle = () => {
    isEditingTitle.value = true;
};

const saveTitle = () => {
    isEditingTitle.value = false;
    console.log("'update:title', { id: props.id, title: editableTitle.value }", { id: props.id, title: editableTitle.value })
    emit('update:title', { id: props.id, title: editableTitle.value });
};

const editText = () => {
    isEditingText.value = true;
};

const saveText = () => {
    isEditingText.value = false;
    emit('update:text', { id: props.id, text: editableText.value });
};

const saveTextArea = () => {
    let text = editableText.value;

    // Verifica se o texto já contém tags HTML
    const hasHtmlTags = /<\/?(b|span|br)\s*\/?>/i.test(text);

    // Se o texto não tiver tags HTML, aplica a formatação
    if (!hasHtmlTags) {
        // Separar o texto por quebras de linha
        let lines = text.split('\n');

        // Verifica se a propriedade noBoldText é verdadeira
        if (props.noBoldText) {
            // Envolve a primeira linha com <span></span>
            if (lines.length > 1) {
                lines[0] = `<span class="bold">${lines[0]}</span>`;
            }
        } else {
            // Envolve a primeira linha com <b></b>
            if (lines.length > 1) {
                lines[0] = `<b>${lines[0]}</b>`;
            }
        }

        // Envolve as outras linhas com <span></span>
        for (let i = 1; i < lines.length; i++) {
            lines[i] = `<span>${lines[i]}</span>`;
        }

        // Junta as linhas e adiciona <br /> onde houver quebra de linha
        text = lines.join('<br />');
    }

    // Atualiza o valor e emite o evento com o texto formatado
    editableText.value = text;
    isEditingText.value = false;
    emit('update:text', { id: props.id, text: editableText.value });
};


const removeComponent = () => {
    emit('remove');
};
</script>

<style scoped>
.saveTextArea {
    padding: 5px;
    background-color: black;
    color: white;
    position: absolute;
    margin-left: -20px;
    margin-top: -5px;
    border-radius: 8px;
}
textarea {
    padding: 10px;
    border-radius: 8px;
}
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
    padding: 10px;
    border-radius: 8px;
}

input {
    min-width: 70%;
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