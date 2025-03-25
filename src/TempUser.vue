<template>
    <div class="row">
        <h3>
            {{ isEnglish ?
            "This is a temporary view with AI genereted data" :
            "Esta é uma view temporária gerada com dados de IA" 
            }}
        </h3>
        <div class="bnts">
            <button>{{ isEnglish ? "Keep data" : "Manter dados" }}</button>
            <button>{{ isEnglish ? "Discart data and return" : "Descartar dados e voltar" }}</button>
        </div>
    </div>
    
    <Templete3
        class="template"
        :user="tempUser"
        :language="this.configs?.language"
    />
</template>

<script>
import Templete3 from "./templates/Templete3.vue";

export default {
    name: "TempUser",

    components: {
        Templete3
    },

    data() {
        return {
            tempUser: JSON.parse(localStorage.getItem('tempUser')),
            configs: JSON.parse(localStorage.getItem("configs")),
            isEnglish: false
        }
    },
    created() {
        this.isEnglish = this.configs?.language.includes("en");
    }
}

</script>

<style scoped>
.row {
    display: flex;
    z-index: 1;
    position: relative;
    text-align: center;
    justify-content: center;
    flex-direction:column;

    && .bnts {
        justify-content: space-evenly;
        display: flex;
        width: 100dvw;
        flex-wrap: wrap;

        && button {
            width: 20%;
            padding: 10px;
        }
    }
}


</style>

<style>
.footer {
    display: none !important;
}
</style>