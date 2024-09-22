<template>
    <div v-if="job" class="wrapMain" >
        <div class="item" >
            <span>Comapny: </span><input id="company" type="text" :value="job?.company"  />
        </div>
        <div class="item" >
            <span>Position: </span><input id="position" type="text" :value="job?.position"  />
        </div>
        <div v-if="job?.dateHired?.length == 10" class="item">
            <span>Date Start: </span><input type="date" :value="job?.dateHired" />
        </div>
        <div v-else class="item" >
            <span>Date start: </span><input id="dateStart" type="month" :value="job?.dateHired"  />
        </div>

        <div v-if="job?.dateHired?.length == 10" class="item" >
            <span>Date end: </span><input id="dateEnd" type="date" :value="job?.dateFired"  />
        </div>
        <div v-else class="item" >
            <span>Date end: </span><input id="dateEnd" type="month" :value="job?.dateFired"  />
        </div>
        <div class="item" >
            <span>Description: </span><textarea id="description" cols="40" rows="5" :value="job?.description"  />
        </div>
        <div class="div-bnts">
            <button @click="updateExperiences">{{this.language?.includes("pt") ? "Atualizar" : "Update"}}</button>
            <button @click="editarEnd">{{this.language?.includes("pt") ? "Fechar" : "Close"}}</button>
        </div>
    </div>
    <div v-if="job == null && text == null && data" class="wrapMain">
        <div class="item" v-for="(value, key) in data" :key="key">
            <span>{{ key }}</span>
            <input @change="changeData(data[key])" v-model="data[key]" />
        </div>
        <div class="div-bnts">
            <button @click="salvar('data')">{{this.language.includes("pt") ? "Salvar" : "Save"}}</button>
            <button @click="editarEnd">{{this.language.includes("pt") ? "Cancelar" : "Cancel"}}</button>
        </div>
        </div>
    <div v-if="job == null && data == null && text" class="wrapMain">
        <div class="item">
            <span>{{this.language.includes("pt") ? "Texto" : "Text"}}</span>
            <input type="text" id="text" :value="text" />
        </div>
        <div class="div-bnts">
            <button @click="salvar('text', this.eventEmit)">{{this.language.includes("pt") ? "Atualizar" : "Update"}}</button>
            <button @click="editarEnd">{{this.language.includes("pt") ? "Cancelar" : "Cancel"}}</button>
        </div>
    </div>
</template>
<script>

import jobModel from '../../model/jobModel.js';
import $ from 'jquery';

export default {
    name: "wrap-editModel",
    props: {
        job: jobModel,
        font: String,
        language: String,
        objeto: Object,
        textItem: String,
        textIndex: Number,
        event: String
    },
    emits: [
        "update-experiences", "editar-end",
        "update-competence", "update-social",
        "update-formacao"
    ],
    data() {
        return {
            job: this.job,
            font: this.font,
            language: this.language,
            data: this.objeto,
            text: this.textItem,
            index: this.textIndex,
            eventEmit: this.event
        }
    },
    methods: {
        updateExperiences() {
            this.job.setCompany($('#company').val())
            this.job.setPosition($('#position').val())
            this.job.setDateHired($('#dateStart').val())
            this.job.setDateFired($('#dateEnd').val())
            this.job.setDescription($('#description').val())
            this.$emit("update-experiencias", this.job)

            setTimeout(() => {
                this.editarEnd();
            }, 800);
        },
        editarEnd() {
            this.$emit("editar-end")
        },
        salvar(value, whereTo) {
            if (value === 'text') {
                let textObj = {
                    text: $("#text").val(),
                    index: this.index
                }
                if (typeof whereTo === 'string') {
                    this.$emit(whereTo, textObj)
                }else {
                    console.error("whereTo  não é do tipo string", whereTo);
                }
            } else if (value === 'data') {
                this.$emit(whereTo, this.data)
            }
            setTimeout(() => {
                this.editarEnd();
            }, 900);
        },
        updateData(value) {
            this.data.forEach(el => {
                if (el == value) {
                    el = value
                }
            });
            console.log('on change update data:', this.data);
        },
    },
}
</script>
<style scoped >
    .wrapMain {
        width: 92%;
        height: 100%;
        background-color: #fff;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    .item {
        position: relative;
        text-align: start;
        width: 100%;
        display: flex;
        margin-bottom: 10px;
    }

    .item input {
        position: absolute;
        right: 0;
        border: none;
        width: 70%;
        padding: 5px;
        font-size: 16px;
    }

    .item textarea {
        position: absolute;
        right: 0;
        border: none;
        width: 70%;
        height: 100%;
        resize: none;
        padding: 5px;
    }

    .div-bnts {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-top: 20px;
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        .wrapMain {
            width: 80vw;
        }
        
    }
</style>