<template>
    <div class="temp-user-container">
        <div class="temp-user-banner">
            <div class="banner-content">
                <svg class="banner-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <div class="banner-text">
                    <h2>
                        {{ isEnglish ?
                        "Template Preview with Example Data" :
                        "Visualização de Template com Dados de Exemplo" 
                        }}
                    </h2>
                    <p>
                        {{ isEnglish ?
                        "This is a temporary view with champion template data. Review and decide if you want to keep these changes." :
                        "Esta é uma visualização temporária com dados de template campeão. Revise e decida se deseja manter estas alterações." 
                        }}
                    </p>
                </div>
            </div>
            <div class="banner-buttons">
                <button class="btn-primary" @click="keepData">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {{ isEnglish ? "Apply Changes" : "Aplicar Alterações" }}
                </button>
                <button class="btn-secondary" @click="goBackToHome()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    {{ isEnglish ? "Discard & Return" : "Descartar e Voltar" }}
                </button>
            </div>
        </div>

        <component 
            :is="currentTemplate"
            class="template"
            :user="tempUser"
            :language="this.configs?.language"
            :mainColor="this.configs?.mainColor"
            :sideColor="this.configs?.sideColor"
            :fontColor="this.configs?.fontColor"
        />

        <SimpleAlerts
            :title="confirmTitle"
            :message="confirmText"
            :show="showConfirm"
            :confirm="true"
            :custom="true"
            :customProperties="customConfirm"
            @confirm="ConfirmedApply"
            :confirmText="this.isEnglish ? 'Yes, Apply' : 'Sim, Aplicar'"
            :confirmmCancelText="this.isEnglish ? 'Cancel' : 'Cancelar'"
        />
    </div>
</template>

<script>
import Template1 from "./templates/Template1.vue";
import Template2 from "./templates/Template2.vue";
import Templete3 from "./templates/Templete3.vue";
import Template4 from "./templates/Template4.vue";
import ModernTemplate from "./templates/ModernTemplate.vue";
import CodeCV from "./templates/CodeCV.vue";
import ClassicInverted from "./templates/ClassicInverted.vue";
import ProfessorTemplate from "./templates/ProfessorTemplate.vue";
import {saveUserInfosInDataBase} from "./components/configs/requests";
import { isNOTANewUser, setNoNewUser,setNewUser } from "./components/services/LocalStorageService.js";
import SimpleAlerts from 'simple-alerts';
import 'simple-alerts/dist/simpleAlertsVue.css';

export default {
    name: "TempUser",

    components: {
        Template1,
        Template2,
        Templete3,
        Template4,
        ModernTemplate,
        CodeCV,
        ClassicInverted,
        ProfessorTemplate,
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
    computed: {
        currentTemplate() {
            const templates = [
                Template1,
                Template2,
                Templete3,
                Template4,
                ModernTemplate,
                CodeCV,
                ClassicInverted,
                ProfessorTemplate
            ];
            const templateIndex = (this.configs?.template || 3) - 1;
            return templates[templateIndex] || Templete3;
        }
    },
    beforeMount() {
        this.isEnglish = this.configs?.language.includes("en");
        this.confirmText = this.isEnglish ? 
            "Are you sure you want to apply these changes? This will overwrite your current data." : 
            "Tem certeza que deseja aplicar estas alterações? Isso irá sobrescrever seus dados atuais."
        this.confirmTitle = this.isEnglish ? "Confirm Changes" : "Confirmar Alterações"
    },
    methods: {
        goBackToHome() {
            window.location.href = "/";
        },
        keepData() {
            this.showConfirm = true;
        },
        async ConfirmedApply(val) {
            if(val) {
                const key = "user-" + (this.isEnglish ? "en" : "pt");
                
                // Save to localStorage
                localStorage.setItem(key, JSON.stringify(this.tempUser));
                
                // Check if should sync with backend
                const syncUser = localStorage.getItem('syncUser') === 'true';
                const hasToken = localStorage.getItem('token');
                
                if(syncUser && hasToken) {
                    try {
                        // Import UserModel and save to backend
                        const response = await saveUserInfosInDataBase(
                            this.tempUser, 
                            !isNOTANewUser(), 
                            this.configs?.language
                        );
                        console.log("Backend save response:", response?.data);
                    } catch (error) {
                        console.error("Error saving to backend:", error);
                        // Continue anyway, data is saved locally
                    }
                }
                
                setNoNewUser();
                window.location.href = "/";
            } else {
                this.showConfirm = false;
            }
        },
    }
}

</script>

<style scoped>
.temp-user-container {
    min-height: 100vh;
    background: #f5f5f5;
}

.temp-user-banner {
    position: sticky;
    top: 0;
    z-index: 999;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
}

.banner-content {
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
    min-width: 300px;
}

.banner-icon {
    min-width: 32px;
    animation: rotate 3s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.banner-text h2 {
    margin: 0 0 4px 0;
    font-size: 20px;
    font-weight: 600;
}

.banner-text p {
    margin: 0;
    font-size: 14px;
    opacity: 0.95;
}

.banner-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
}

.btn-primary {
    background: white;
    color: #667eea;
}

.btn-primary:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid white;
}

.btn-secondary:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
}

.template {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

@media (max-width: 768px) {
    .temp-user-banner {
        flex-direction: column;
        align-items: stretch;
        padding: 16px;
    }
    
    .banner-content {
        min-width: 100%;
        text-align: center;
        flex-direction: column;
    }
    
    .banner-text h2 {
        font-size: 18px;
    }
    
    .banner-text p {
        font-size: 13px;
    }
    
    .banner-buttons {
        width: 100%;
        flex-direction: column;
    }
    
    .btn-primary,
    .btn-secondary {
        width: 100%;
        justify-content: center;
        padding: 14px 20px;
    }
    
    .template {
        padding: 12px;
    }
}
</style>

<style>
.footer {
    display: none !important;
}
</style>