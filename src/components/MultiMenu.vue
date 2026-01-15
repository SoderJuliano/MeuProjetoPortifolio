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

        <div
        v-if="template == 1 || template == 2"
        class="option">
            <Colors :language="language" />
            <p class="multimenu-line"></p>
        </div>
        <div
        v-if="template == 1 || template == 2"
        class="option">
            <pageColor :language="language" />
            <p class="multimenu-line"></p>
        </div>

        <div
        v-if="template == 1 || template == 2"
        class="option">
        <Avatares :user="user"
        :language="language"
        @update-user="update" />
            <p class="multimenu-line"></p>
        </div>

        <div
        v-if="template == 1 || template == 2"
        class="option">
            <PicureShape :language="language" />
            <p class="multimenu-line"></p>
        </div>

        <div class="option">
            <Templates
                :language="language"
                :template="template"
                @change-template="this.$emit('change-template', $event)"
            />
            <p class="multimenu-line"></p>
        </div>
        <div class="option">
            <Layouts
                :language="language"
                :template="template"
                @change-layout="this.$emit('change-layout', $event)"
            />
            <p class="multimenu-line"></p>
        </div>
        <div class="option" @click="update(this.user)" v-if="mobileOptions">
            <div class="option__content">
                <svg class="option__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                    <polyline points="17 21 17 13 7 13 7 21"></polyline>
                    <polyline points="7 3 7 8 15 8"></polyline>
                </svg>
                <p class="tside">{{ this.isEnglish() ? "SAVE" : "SALVAR" }}</p>
            </div>
            <p class="multimenu-line"></p>
        </div>
        <div class="option" id="accDelete" @click="deleteAccount" v-if="mobileOptions">
            <div class="option__content option__content--danger">
                <svg class="option__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
                <p class="tside">{{ this.isEnglish() ? "DELETE MY ACCOUNT" : "DELETAR MINHA CONTA"}}</p>
            </div>
            <p class="multimenu-line"></p>
        </div>
        <div class="option" @click="insertDeleteToken" v-if="mobileOptions">
            <div class="option__content">
                <svg class="option__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <p class="tside">{{ this.isEnglish() ? "INSERT DELETE TOKEN" : "INSERIR TOKEN DE DELEÇÃO"}}</p>
            </div>
            <p class="multimenu-line"></p>
        </div>
        <div class="option" v-on:click="(this.$emit('reset-password'), this.menuDown())" v-if="mobileOptions">
            <div class="option__content">
                <svg class="option__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <p class="tside">{{ this.isEnglish() ? "RECOVER PASSWORD" : "RECUPERAR SENHA" }}</p>
            </div>
            <p class="multimenu-line"></p>
        </div>
        <div class="option" v-on:click="this.$emit('ativationAccount')" v-if="mobileOptions">
            <div class="option__content">
                <svg class="option__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <p class="tside">{{ this.isEnglish() ? "ACTIVATE ACCOUNT" : "ATIVAR CONTA" }}</p>
            </div>
            <p class="multimenu-line"></p>
        </div>
        <div class="option" v-on:click="deleteLocalData()" v-if="mobileOptions">
            <div class="option__content option__content--warning">
                <svg class="option__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                    <line x1="18" y1="9" x2="12" y2="15"></line>
                    <line x1="12" y1="9" x2="18" y2="15"></line>
                </svg>
                <p class="tside">{{ this.isEnglish() ? "DELETE BROWSER DATA" : "APAGAR DADOS DO NAVEGADOR" }}</p>
            </div>
            <p class="multimenu-line"></p>
        </div>
        <div class="option" v-on:click="share()" v-if="mobileOptions">
            <div class="option__content">
                <svg class="option__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                <p class="tside">{{ this.isEnglish() ? "SHARE" : "COMPARTILHAR" }}</p>
            </div>
            <p class="multimenu-line"></p>
        </div>
        <div v-if="!user.premium" class="option option--premium">
            <a href="/choose-your-plan" class="option__premium-link">
                <div class="option__content option__content--premium">
                    <svg class="option__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                    </svg>
                    <p class="tside">{{ this.isEnglish() ? "PREMIUM ACCOUNT 🏆" : "CONTA PREMIUM 🏆"  }}</p>
                </div>
            </a>
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
import Layouts from "./multimenuComponentes/Layouts.vue";
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
    'change-template',
    'change-layout',
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
        Layouts,
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
            $(".footer").css({"display": "none !important"})
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
                //window.location.reload(); // Reload the page
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
            $(".navbar__toggle").click();
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
            $(".navbar__toggle").click();
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
            $(".navbar__toggle").click();
            this.globalModalTitleMultimenu = this.isEnglish() ? 'Double confirmation factor' : 'Duplo fator de confirmação';
            this.globalModalMessageMultimenu = this.isEnglish() ? 'Confirm account deletion(insert token).' :
            "Confirmar deleção da conta (inserir token).";
            this.$refs.globalModalMultimenu.open();
        },
        async submitDeleteToken() {
            $(".navbar__toggle").click();
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

p, button, .tside, .option {
    cursor: pointer;
}

a {
    text-decoration: none;
    color: inherit;
    padding-left: 0px;
}

.bnt-close {
    position: relative;
    right: 10px;
    top: 10px;
    cursor: pointer;
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

/* Enhanced option styles with icons */
.option__content {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 12px;
    border-radius: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.option__content:hover {
    background: rgba(110, 142, 251, 0.1);
    transform: translateX(3px);
}

.option__content:active {
    transform: translateX(3px) scale(0.98);
}

.option__icon {
    flex-shrink: 0;
    color: #6e8efb;
    transition: all 0.3s ease;
}

.option__content:hover .option__icon {
    color: #5a7ae8;
}

/* Danger actions (delete account) */
.option__content--danger {
    border-left: 3px solid transparent;
}

.option__content--danger:hover {
    background: rgba(239, 68, 68, 0.1);
    border-left-color: #ef4444;
}

.option__content--danger .option__icon {
    color: #ef4444;
}

.option__content--danger:hover .option__icon {
    color: #dc2626;
}

/* Warning actions (delete browser data) */
.option__content--warning {
    border-left: 3px solid transparent;
}

.option__content--warning:hover {
    background: rgba(251, 146, 60, 0.1);
    border-left-color: #fb923c;
}

.option__content--warning .option__icon {
    color: #fb923c;
}

.option__content--warning:hover .option__icon {
    color: #f97316;
}

/* Premium option */
.option--premium {
    margin-top: 10px;
}

.option__premium-link {
    display: block;
    text-decoration: none;
    color: inherit;
}

.option__content--premium {
    background: linear-gradient(135deg, rgba(110, 142, 251, 0.1), rgba(167, 119, 227, 0.1));
    border: 2px solid transparent;
    background-clip: padding-box;
    position: relative;
}

.option__content--premium::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    padding: 2px;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
}

.option__content--premium:hover {
    background: linear-gradient(135deg, rgba(110, 142, 251, 0.2), rgba(167, 119, 227, 0.2));
    transform: translateX(5px) scale(1.02);
}

.option__content--premium .option__icon {
    color: #a777e3;
    fill: #a777e3;
}

.option__content--premium:hover .option__icon {
    color: #8b5cf6;
    fill: #8b5cf6;
    animation: sparkle 0.6s ease;
}

@keyframes sparkle {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2) rotate(10deg); }
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
    .option__content {
        padding: 12px;
    }
    
    .option__icon {
        width: 22px;
        height: 22px;
    }
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
