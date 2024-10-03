<template>
    <!-- listOfStrigs -->
    <div class="component" :style="css" v-if="editableList.length">
        <div class="listTitle" :style="listTitleCss">{{ listTitle || 'Lista' }}</div>
        <div class="list" :style="listCss" v-for="(item, index) in editableList" :key="index">
            <p style="width: 100%;" v-if="!isEditing[index]" @click="editItem(index)">{{ item }}</p>
            <input v-else v-model="editableList[index]" @blur="saveItem(index)" @keyup.enter="saveItem(index)" />
        </div>
    </div>
<!-- Non lists -->
    <div v-else class="component" :class="{'block-layout': block}" :style="css">
        <div class="span1" :style="span1">
            <span v-if="!isEditingTitle" @click="editTitle">{{ title }}</span>
            <input @focus="$event.target.select()"
                v-else type="text"
                v-model="editableTitle"
                @blur="saveTitle"
                @keyup.enter="saveTitle"
            />
        </div>
        <div class="span2" :style="span2">
            <span v-if="!isEditingText" @click="editText" v-html="text"></span>
            <div  v-else-if="textArea && isEditingText" >
                <textarea
                rows="4"
                cols="50"
                type="text"
                v-model="editableText"
                @focus="$event.target.select()"
            />
            <span class="saveTextArea experienciesOptionButton" @click="saveTextArea">{{ textAreaSaveBnt ? textAreaSaveBnt : "save" }}</span>
            <span class="cancelEdit experienciesOptionButton" @click="cancelTextArea">{{ textAreaCancelBnt ? textAreaSaveBnt : "cancel" }}</span>
            <span v-if="job" class="editWithModal experienciesOptionButton" @click="editar(job?.id)">{{ editAreaSaveBnt ? editAreaSaveBnt : "edit" }}</span>
        </div>
            <input v-else-if="!textArea && isEditingText"
                type="text"
                v-model="editableText"
                @blur="saveText"
                @keyup.enter="saveText"
                @focus="$event.target.select()"
            />
        </div>
        <span v-if="removeBnt" @click="removeComponent" class="remove-button">-</span>
    </div>
    <div v-if="showEditing === job?.id" class="job-edit">
        <wrappEditModel
            v-if="job"
            :job="getJobModel(job)"
            :language="language"
            :wrapMainCss="{ border: 'solid 1px black', width: '80%', 'margin-top': '-200px' }"
            :areaCss="{ border: 'dashed 1px gray' }"
            :inputCss="{ border: 'dashed 1px gray' }"
            @editar-end="editar"
            @update-experiencias="updateExperiencias"
        />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { defineProps } from 'vue';
import jobModel from '../../model/jobModel';
import wrappEditModel from "../../components/utils/wrappEditModel.vue";

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
    textAreaCancelBnt: String,
    noBoldText: Boolean,
    jobs: Array,
    job: Object,
    language: String,
    removeBnt: {
        type: Boolean,
        default: false,
    },
    otherInfosUpdate: {
        type: Boolean,
        default: false
    },
    listOfStrings: {
        type: Array,
        default: () => []
    },
    listTitle: String,
    listTitleCss: Object,
    listCss: Object
});



const emit = defineEmits(['update:title',
    'update:text',
    'remove',
    'update-experiencias',
    'other-infos:title',
    'other-infos:text',
    'updated-list'
]);

// Lists update
const editableList = ref([...props.listOfStrings]);
const isEditing = ref(props.listOfStrings.map(() => false));
const editItem = (index) => {
    isEditing.value[index] = true;
};
const saveItem = (index) => {
    isEditing.value[index] = false;
    emit('updated-list', editableList.value);
};

watch(() => props.listOfStrings, (newList) => {
  editableList.value = [...newList];
});
// Lists update finish

// Local state for editing
const isEditingTitle = ref(false);
const isEditingText = ref(false);
const editableTitle = ref(props.title);
const editableText = ref(props.text);
const showEditing = ref(null);
const experiencies = ref(props.jobs)

const updateExperiencias = (job) => {
    // Check if experiencies.value is an array
    if (Array.isArray(experiencies.value) && experiencies.value.length > 0) {
        experiencies.value.forEach((each, index) => {
            console.log('each', each)
            if (each.id === job.id || each.id === job.id - 3000) {
                let updatedJob = { ...job };
                // Preserva o id original do item no array
                updatedJob.id = experiencies.value[index].id;
                console.log('updatedJob ', updatedJob);
                // Atualiza o item no array com o novo job
                experiencies.value[index] = updatedJob;
            }
        });
    } else if (Array.isArray(experiencies.value) && experiencies.value.length == 0) {
        experiencies.value.push(job);
    }
    else {
        console.error("experiencies.value is not an array");
    }

    console.log('antes do emil do array ', experiencies.value)
    emit("update-experiencias", experiencies.value);
};

const getJobModel = (item) => {
    const model = new jobModel();
    return model.retrieveJob(item);
}

const editar = (val) => {
    cancelTextArea();
    showEditing.value = val
}

// Methods to handle editing
const editTitle = () => {
    isEditingTitle.value = true;
};

const saveTitle = () => {
    isEditingTitle.value = false;
    if(props.otherInfosUpdate) {
        emit('other-infos:title', { index: props.id, value: editableTitle.value });
    }else {
        emit('update:title', { id: props.id, title: editableTitle.value });
    }
};

const editText = () => {
    isEditingText.value = true;
};

const cancelTextArea = () => {
    isEditingText.value = false;
}

const saveText = () => {
    isEditingText.value = false;
    if(props.otherInfosUpdate) {
        emit('other-infos:text', { index: props.id, value: editableText.value });
    }
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

const openModal = () => {
    if(props.id >= 3000 && props.id <= 4000) {
        emit('editarExperiencias');
    }
}

const removeComponent = () => {
    emit('remove');
};
</script>

<style scoped>
.list:not(:first-child) {
    margin-left: 30%;
}

span {
    cursor: pointer;
}

button {
    cursor: pointer;
}

.job-edit {
    display: flex;
    justify-content: center;
}

.saveTextArea {
    position: absolute;
    margin-left: -20px;
    margin-top: -5px;
}

.cancelEdit {
    position: absolute;
    margin-left: -20px;
    margin-top: 35px;
}

.editWithModal {
    position: absolute;
    margin-left: 35px;
    margin-top: -5px;
}

.experienciesOptionButton {
    padding: 5px;
    background-color: black;
    text-align: center;
    color: white;
    border-radius: 8px;
    width: 40px;
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

    /* Corrige os 7% a mais que é colocado no modo normal
    se não retirar o texto fica deslocado quando imprime
    */
    .span2 {
        margin-left: 0% !important;
    }
}
</style>