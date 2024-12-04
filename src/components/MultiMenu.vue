<template>
    <div class="multiMenu-options">
        <div class="header">
            <h3>{{ language.includes("en") ? "OPTIONS" : "OPÇÕES" }}</h3>
        </div>
        <div class="option">
            <fonts :language="language" @update-configs="$emit('update-configs')" />
            <p class="multimenu-line first"></p>
        </div>

        <div class="option">
            <FontsSize :language="language" @update-configs="$emit('update-configs')" />
            <p class="multimenu-line second"></p>
        </div>

        <div class="option">
            <Colors :language="language" />
            <p class="multimenu-line"></p>
        </div>

        <div class="option">
            <pageColor :language="language" />
            <p class="multimenu-line"></p>
        </div>

        <div class="option">
            <Avatares :user="user" :language="language" @update-user="update" />
            <p class="multimenu-line"></p>
        </div>

        <div class="option">
            <PicureShape :language="language" />
            <p class="multimenu-line"></p>
        </div>

        <div class="option">
            <Templates
                :language="language" :template="template" @now-template1="this.$emit('now-template1')"
                @now-template2="this.$emit('now-template2')" @now-template3="this.$emit('now-template3')" />
            <p class="multimenu-line"></p>
        </div>
        <div v-if="mobileOptions" class="option">
            <p class="tside" @click="$emit('login')" >LOGIN</p>
            <p class="multimenu-line"></p>
        </div>
        <div @click="update(this.user)" v-if="mobileOptions">
            <p class="tside">{{ this.isEnglish() ? "SAVE" : "SALVAR" }}</p>
            <p class="multimenu-line"></p>
        </div>
        <div id="accDelete" @click="deleteAccount" v-if="mobileOptions">
            <p class="tside">{{ this.isEnglish() ? "DELETE MY ACCOUNT" : "DELETAR MINHA CONTA"}}</p>
            <p class="multimenu-line"></p>
        </div>
        <div @click="insertDeleteToken" v-if="mobileOptions">
            <p class="tside">{{ this.isEnglish() ? "INSERT DELETE CONFIRMATION TOKEN" : "INSERIR TOKEN DE CONFIRMAÇÃO PARA DELEÇÃO"}}</p>
            <p class="multimenu-line"></p>
        </div>
        <div v-on:click="(this.$emit('reset-password'), this.menuDown())" v-if="mobileOptions">
            <p class="tside">{{ this.isEnglish() ? "RECOVER PASSWORD" : "RECUPERAR SENHA" }}</p>
            <p class="multimenu-line"></p>
        </div>
        <div v-on:click="this.$emit('ativationAccount')" v-if="mobileOptions">
            <p class="tside">{{ this.isEnglish() ? "INSERT ACTIVATION TOKEN" : "INSERIR TOKEN DE ATIVAÇÃO DA CONTA" }}</p>
            <p class="multimenu-line"></p>
        </div>
        <div v-on:click="deleteLocalData()" v-if="mobileOptions">
            <p class="tside">{{ this.isEnglish() ? "DELETE ALL MY DATA FROM THIS BROWSER" : "APAGAR TODOS OS MEUS DADOS DO NAVEGADOR" }}</p>
            <p class="multimenu-line"></p>
        </div>
        <div v-on:click="share()" v-if="mobileOptions">
            <p class="tside">{{ this.isEnglish() ? "SHARE" : "COMPARTILHAR" }}</p>
            <p class="multimenu-line"></p>
        </div>
        <GlobalModal
            ref="globalModalMultimenu"
            >
            <h1>{{ this.globalModalTitleMultimenu }}</h1>
            <p>{{ this.globalModalMessageMultimenu }}</p>
            <div class="globalModal">
            <input id="input-token" type="text">
            <button @click="submitDeleteToken()">{{ this.language == 'us-en' ? "Submit token" : "Enviar token" }}</button>
            </div>
        </GlobalModal>
    </div>
</template>

<script lang="js">
import Fonts from "./Fonts.vue";
import FontsSize from "./FontsSize.vue";
import Colors from "./Colors.vue";
import pageColor from "./pageColor.vue";
import Avatares from "./Avatares.vue";
import PicureShape from "./PictureShape.vue";
import Templates from "./multimenuComponentes/Templates.vue";
import GlobalModal from "./componentesCompartilhados/GlobalModal.vue";
import UserModel from "../model/userModel";
import { showAlert } from 'simple-alerts/dist/showAlert.js';
import authService from "../services/authService";
import { deleteUser } from "./configs/requests.js";
import $ from 'jquery';
import ShareService from '../services/ShareService.js';

export default {
    name: "multi-menu",
    emits: [
    "changefont",
    "update-configs",
    "update-user",
    'now-template1',
    'now-template2',
    'now-template3',
    'login',
    'reset-password',
    'ativationAccount',
],
    components: {
        Fonts,
        Colors,
        pageColor,
        Avatares,
        PicureShape,
        Templates,
        FontsSize,
        GlobalModal
    },
    props: {
        template: Number,
        user: Object,
        language: String
    },
    data() {
        return {
            globalModalTitleMultimenu: '',
            globalModalMessageMultimenu: '',
            loading: false,
        }
    },
    methods: {
        async share() {
            // Create a loading message element
            const loadingElement = $('<div id="loading"><p>Carregando...</p></div>');
            $("#app").append(loadingElement); // Append to #app
            loadingElement.show(); // Show loading message

            let loadingDots = 0;

            // Interval to update the loading message
            const interval = setInterval(() => {
                loadingDots = (loadingDots + 1) % 4; // Cycle through 0 to 3 dots
                loadingElement.html(`<p>Carregando${'.'.repeat(loadingDots)}</p>`);
            }, 500); // Update every 500ms

            await ShareService.share();

            clearInterval(interval); // Stop updating the loading message

            setTimeout(() => {
                loadingElement.remove(); // Remove loading message after 2 seconds
                window.location.reload(); // Reload the page
            }, 2000);
        },
        menuDown(){
            $("html, body").animate({ scrollTop: 0 }, "fast");
            $(".footer-menu-bar").css("display", "none");
            $(".menuupimg").css("display", "block");
            $(".menuupimg-down").css("display", "none");
            $(".footer-mobile-title").css({
                "left": "30%"
            })
        },
        update(val) {
            const authenticated = authService.getIdUsuario() === this.user?._id;
            this.$emit("update-user", val, authenticated);
        },
        checkWindowWidth() {
            this.mobileOptions = window.innerWidth < 720;
        },
        isEnglish() {
            return this.language.includes("en");
        },

        // código copiado do navbar
        async deleteAccount() {
            if(this.user?._id?.length != 24) {
                localStorage.removeItem("user-pt");
                localStorage.removeItem("user-en");
                showAlert(this.language == 'us-en' ? 'Deleted successfully!' : "Deletado com sucesso!");
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
                return;
            }
            let userFromModel = new UserModel();
            userFromModel = userFromModel.constructorObject(this.user);
            const response = await userFromModel.requestDeleteThisUser();
            // const response = {status: 200, data: {content: "salvo com sucesso"}}
            if(response && response.status == 200) {
                showAlert(
                    this.language == 'us-en' ? response.data.content : "",
                    this.language == 'us-en' ? 'Get the token we send to your e-mail address' : 'Use o token que enviamos para seu e-mail'
                );
                this.globalModalTitleMultimenu = this.isEnglish() ? 'Double confirmation factor' : 'Duplo fator de confirmação';
                this.globalModalMessageMultimenu = this.isEnglish() ? 'Confirm account deletion using the token we sent to your email.' :
                "Confirme a deleção da conta através do token que enviamos para seu email.";
                this.$refs.globalModalMultimenu.open();
                return;
            }
            showAlert(
                this.language == 'us-en' ? response.data.content : "",
                this.language == 'us-en' ? 'Failed to delete the account' : 'Falha ao excluir a conta'
            );
        },
        insertDeleteToken() {
            this.globalModalTitleMultimenu = this.isEnglish() ? 'Double confirmation factor' : 'Duplo fator de confirmação';
            this.globalModalMessageMultimenu = this.isEnglish() ? 'Confirm account deletion(insert token).' :
            "Confirmar deleção da conta (inserir token).";
            this.$refs.globalModalMultimenu.open();
        },
        async submitDeleteToken() {
            const token = $("#input-token").val();
            if(token == null || token == "" || token == "undefined") {
                return;
            }
            await deleteUser(this.user._id, token).then((response) => {
            // console.log(response);
            if (response?.status == 200) {
                localStorage.removeItem("user-pt");
                localStorage.removeItem("user-en");
                showAlert(null, this.language == 'us-en' ? 'Deleted successfully!' : "Deletado com sucesso!");
                this.$refs.globalModal.close();
                setTimeout(() => {
                    window.location.href = "/";
                }, 3000);
                return;
            } else {
                showAlert('us-en' ? 'Fail. You may start over requesting a new token.' : 'Falha. Talvez tente novamente com um token novo');
            }
            });
        },
        deleteLocalData() {
            localStorage.removeItem("configs");
            localStorage.removeItem("user-pt");
            localStorage.removeItem("user-en");
            setTimeout(() => {
            window.location.reload()
            }, 900);
        },
    },
    data() {
        return {
            mobileOptions: false
        }
    },
    mounted() {
        this.checkWindowWidth();
        window.addEventListener('resize', this.checkWindowWidth); // Update on window resize
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkWindowWidth); // Clean up the event listener
    },
    watch: {
        language(newLang, oldLang) {
            console.log(`Language changed from ${oldLang} to ${newLang}`);
        }
    },
};
</script>
<style scoped>
.bnt-close {
    position: relative;
    right: 10px;
    top: 10px;
}

.header {
    display: flex;
    width: 50%;
    height: 30px;
    text-align: center;
    margin-bottom: 20px;
    margin-left: 10px;
}

.multimenu-line {
    transition: ease-in-out 500ms;
    border-radius: 0px;
    margin-left: 10px;
    width: 0px;
    border-bottom: 4px solid black;
    border-radius: 10px;
    position: absolute;
    margin-top: -15px;
}

/* The first child has a different padding for some reason */
.multimenu-line.first {
    margin-top: 0px !important;
}

/* The second element */
.multimenu-line.second {
    margin-top: -5px;
}

/* The second one was to close of the others */
.option:nth-child(3) {
    margin-bottom: 20px;
}

.option:hover .multimenu-line {
    width: 100px;
}

@media only screen and(min-width:1001px) {
    .multiMenu-options {
        max-height: 100%;
        width: 80%;
        background-color: white;
    }
}

@media only screen and(max-width:1000px) {
    .multiMenu-options {
        height: 150px;
        overflow: scroll;
        width: 80%;
        background-color: white;
        overflow: scroll;
        cursor: pointer;
    }
}

@media screen and (max-width: 768px) {
    .close-bnt {
        top: -20px;
        right: -30%;
    }

    #input-token {
        width: 100%;
    }

    .globalModal button {
        margin: 0%;
    }
}
</style>
