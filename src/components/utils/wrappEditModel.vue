<template>
    <div v-if="job" class="wrapMain" >
        <div class="item" >
            <span>Comapny: </span><input type="text" :value="job?.company"  />
        </div>
        <div class="item" >
            <span>Position: </span><input type="text" :value="job?.position"  />
        </div>
        <div class="item" >
            <span>Date start: </span><input type="month" :value="job?.item"  />
        </div>
        <div class="item" >
            <span>Date end: </span><input type="month" :value="job?.item"  />
        </div>
        <div class="item" >
            <span>Description: </span><textarea cols="40" rows="5" :value="job?.description"  />
        </div>
        <div class="div-bnts">
            <button @click="updateExperiences">Update</button>
            <button @click="editarEnd">Cancel</button>
        </div>
    </div>
    <div v-if="job == null && data">
        <div v-for="(value, key) in data" :key="key">
            <span>{{ key }}</span>
            <input v-model="data[key]" />
        </div>
        <button @click="cancelar">Cancelar</button>
        <button @click="salvar">Salvar</button>
    </div>
</template>
<script>

import jobModel from '../../model/jobModel.js'

export default {
    name: "wrap-editModel",
    props: {
        job: jobModel,
        font: String,
        language: String,
        objeto: Object
    },
    emits: ["update-experiences", "editar-end"],
    data() {
        return {
            job: this.job,
            font: this.font,
            language: this.language,
            data: this.objeto
        }
    },
    methods: {
        updateExperiences() {
            this.$emit("update-experiences", this.job)
        },
        editarEnd() {
            this.$emit("editar-end")
        }
    }
}
</script>
<style scoped >
    .wrapMain {
        width: 90%;
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
    }
</style>