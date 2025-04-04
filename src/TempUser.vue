<template>
    <div class="row">
        <h3>
            {{ isEnglish ?
            "This is a temporary view with AI genereted data" :
            "Esta é uma view temporária gerada com dados de IA" 
            }}
        </h3>
        <div class="bnts">
            <button @click="keepData">{{ isEnglish ? "Keep data" : "Manter dados" }}</button>
            <button @click="goBackToHome()">{{ isEnglish ? "Discart data and return" : "Descartar dados e voltar" }}</button>
        </div>
    </div>
    <Templete3
        class="template"
        :user="tempUser"
        :language="this.configs?.language"
    />
    <SimpleAlerts
        :title="confirmTitle"
        :message="confirmText"
        :show="showConfirm"
        :confirm="true"
        :custom="true"
        :customProperties="customConfirm"
        @confirm="ConfirmedEmail"
        :confirmText="this.isEnglish ? 'Yes' : 'Sim'"
        :confirmmCancelText="this.isEnglish ? 'Cancel' : 'Cancelar'"
    />
   
</template>

<script>
import Templete3 from "./templates/Templete3.vue";
import {saveUserInfosInDataBase} from "./components/configs/requests";
import { isNOTANewUser, setNoNewUser,setNewUser } from "./components/services/LocalStorageService.js";
import SimpleAlerts from 'simple-alerts';
import 'simple-alerts/dist/simpleAlertsVue.css';

export default {
    name: "TempUser",

    components: {
        Templete3,
        SimpleAlerts
    },
    data() {
        return {
            tempUser: JSON.parse(localStorage.getItem('tempUser')),
            configs: JSON.parse(localStorage.getItem("configs")),
            isEnglish: false,
            confirmText: "",
            confirmTitle: "",
            showConfirm: false,
            customConfirm: {
                autoClose: false
            }
        }
    },
    beforeMount() {
        this.isEnglish = this.configs?.language.includes("en");
        this.confirmText = this.isEnglish ? "Please set your own email, need to be confirmed later" : "Porfavor coloque seu próprio e-mail, vamos confirmar ele"
        this.confirmTitle = this.isEnglish ? "Attention" : "Atenção"
    },
    methods: {
        goBackToHome() {
            window.location.href = "/";
        },
        keepData() {
            this.showConfirm = true;
        },
        async ConfirmedEmail(val) {
            if(val) {
                // const response = await saveUserInfosInDataBase(this.tempUser, !isNOTANewUser(), this.configs?.language);
                // console.log("response", response.data);
                setNoNewUser();
                const key = "user-" + (this.isEnglish ? "en" : "pt");
                localStorage.setItem(key, JSON.stringify(this.tempUser));
                window.location.href = "/";
            }else {
                this.showConfirm = false;
                setNewUser();
            }
            
        },
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