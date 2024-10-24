<template>
    <div class="reset-password-container">
        <h2>{{strings.resetPasswordTitle}}</h2>
        <!-- Select para escolha do idioma -->
    <div class="language-select">
        <label for="language">
            {{selectedLanguage === 'pt-br' ? 'Selecione o idioma:' : 'Select Language:'}}</label>
        <select id="language" v-model="selectedLanguage" 
        @change="changeLanguage">
            <option value="en-us">English (US)</option>
            <option value="pt-br">Português (BR)</option>
        </select>
    </div>
        <form @submit.prevent="submitNewPassword">
            <div class="input-group">
                <label for="new-password">{{ selectedLanguage === 'pt-br' ? 'Nova Senha' : 'New Password' }}</label>
                <input v-if="notext"
                    type="password" 
                    id="new-password" 
                    v-model="password" 
                    :placeholder="selectedLanguage === 'pt-br' ? 'Digite sua nova senha' : 'Enter your new password'"
                    required 
                />
                <input v-if="!notext"
                    type="text" 
                    id="new-password" 
                    v-model="password" 
                    :placeholder="selectedLanguage === 'pt-br' ? 'Digite sua nova senha' : 'Enter your new password'"
                    required 
                />
                <img
                    @click="notext = !notext"
                    v-if="notext"
                    class="eye"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD9ElEQVR4nO1Ya4hVVRTepb0zzSzoAZUgEtFDQiISbhFzOZz9fevMJbcJUlHkEBEE+UsJbiFUiEH9iSCiIqFfQUQEFvkjH+hQik6YglQYWVMSYVOppcZy1oGN5Ln3zNxXcT44cB/7rLW+vfba6+FchQoVKlSoMACo1WoXisi9JJ8D8B7JMQCHSf4J4G+SvwD4muRGAC8DuB/APDco8N7fA+AtAEdInirzKEEAH3vvH0qS5IK+EABAkqORYSdJfkHyJZLL0jS9vV6vz1VPhRBmeO8v994vEBEP4BkAn6i3IlLfk1zVM0JqjB6PyIAfATS99/PLysqybA6Ax0juiuQdULKum/DeryQ5YQr1/D+pO94J2SQTAHsiD78G4GLXSYyMjJwH4I1IydvDw8NXdOHCmAng6fzIAdjpvb+2YwoAfGgEJkRkuesysiy7heR+0/ldkiRXTluoBiqAcQCHvPd3uB6hXq/PBfApyaMalx0RqkEZQrjU9R7nDA0NXdIHvRUq/KdRq9VmFi7Qa47ktyRfcAMKAA8AOK5F51kXJUlynS06AeAuN2CoT17J45pfvPdLCxdb0adZdY9mdDdAIPm6JcltejUXLg4hzNZsamSabkAAoG4n5bhW1u2+dJ+9dIIkXJ+RZdkNJH82b6wu9TLJteaVX9M0vcn1CUmSXAZgt5HYqCVTKQHNZvNcAO+bgB9I3ux6jGyyX9luG7pPv09JUAjhIgCbjMxPIrLI9QgA5lnHqSS+SdP0+mkJ1LI96kN+F5FHXZdB8m4AB3O9InLntAcLUV99endsh97pxgQkhHA+yTUk/zI9x0znWKPRuGpKQgEszicjAF41Ykt1rGO//Uby2U61ujrMAHDAZOtt+Yp2h1H7+1Wj0bi6lFANbOvJVcAGDfz8Px0ykPwo8s4hAC+KyMKyxusu6+SE5N5I3pcAlpyxZqy0Z0jeaKMZffGDs2V3G8btOGNOtVu9B+BB7SY1QLUhU6/p7pK8lWRGch3JzdHROWU13sP/dr2WJiMi10Tu3dTq2IjIU5FXDk9hQPeHTR/185tFukqRiQJ6h4jMKhKsJCPPwfLOYgvWDQC2RP/nuWhUx6kAntfqwTw13yaOx7RoLUFmtIjIZl3QzqgHwBP5bVZUwOVEWsh617yyvpVeI/O5FY7Tg8aNnWktpxtFa9sh4r2/zUauE92YlxUZN5LfMPGNNlUiti4fw65xvYBNHU8HqA6r2zCwLSIaM5zcnHEtjTpmcIHCR8y4va28UYaIyd5uZB7viLEtlO2z2FjRzvoyREQk5JWu6zYAbNWn3b6gDJEQwgxLsrvcoKEMEUNxL94vWG76rN92VKhQwf0/8A83woH5YgC03QAAAABJRU5ErkJggg=="
                    alt="eye" />
                <img
                    @click="notext = !notext"
                    v-if="!notext"
                    class="eye"
                    src="data:image/png;base64,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"
                    alt="eye" />
            </div>
            <button type="submit" class="submit-button">
                {{ selectedLanguage === 'pt-br' ? 'Redefinir Senha' : 'Reset Password' }}
            </button>
        </form>
        <button @click="goBackHome" class="back-button">
            {{ selectedLanguage === 'pt-br' ? 'Voltar' : 'Return' }}
        </button>
        </div>
        <SimpleAlerts
            @close="handleAlertClose"
            :title="alertTitle"l
            :message="alertMessage"
            :show="showAlert"
            :customProperties="alert"
            custom="true"
        >
        </SimpleAlerts>
    </template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { setNewPassword } from '../configs/requests';
    import UserModel from '../../model/userModel';
    import SimpleAlerts from 'simple-alerts';
    import 'simple-alerts/dist/simpleAlertsVue.css';

     // Função para buscar as configs do localStorage
     const getConfigsFromLocalStorage = () => {
        const configs = localStorage.getItem('configs');
        return configs ? JSON.parse(configs) : null;
    };

    // Carrega o objeto configs do localStorage e define o idioma padrão
    const configs = getConfigsFromLocalStorage();
    const defaultLanguage = configs?.language || 'en-us'; // Define o idioma do localStorage ou inglês como padrão

    const selectedLanguage = ref(defaultLanguage); // Inicializa com base no localStorage
    const strings = ref({
        resetPasswordTitle: '',
    });

    // Inicializa as strings com base no idioma padrão
    onMounted(() => {
        changeLanguage();
    });


    // Função para trocar as strings com base no idioma selecionado
    const changeLanguage = () => {
        if (selectedLanguage.value === 'en-us') {
            strings.value.resetPasswordTitle = 'Reset Your Password';
            // Atualize outras strings para inglês
        } else if (selectedLanguage.value === 'pt-br') {
            strings.value.resetPasswordTitle = 'Redefinir sua Senha';
            // Atualize outras strings para português
        }
        console.log(`Language changed to: ${selectedLanguage.value}`);
    };

    const props = defineProps({
        newPassword: String
    });

    let notext = ref(true);
    let alertTitle = ref('Success');
    let alertMessage = ref('Password changed!');
    let showAlert = ref(false); // Make showAlert reactive
    let alert = {
        autoClose: false,
        timer: 3000,
        backgroundColor: 'gray',
        textColor: 'black'
    };
    let lastResponseStatus = ref(0);

    const password = ref(props.newPassword || '');

    const submitNewPassword = async () => {
        try {
            const u = new UserModel();
            console.log(selectedLanguage.value)
            let us = u.findAndRetrieveInfos(selectedLanguage.value);

            const response = await setNewPassword(us._id, password.value, window.location.href.split('newPasswordToken=')[1]);
            console.log(response);

            if (response.status === 200) {
                // Handle success
                alertTitle.value = 'Success';
                alertMessage.value = 'Password successfully changed!';
                showAlert.value = true;
                lastResponseStatus.value = 200
            } else {
                // Handle failure
                alertTitle.value = 'Error';
                alertMessage.value = 'Failed to change password. Please try again.';
                showAlert.value = true;
            }
        } catch (error) {
            console.error('Error while submitting new password:', error);
            alertTitle.value = 'Error';
            alertMessage.value = 'An error occurred. Please try again later.';
            showAlert.value = true;
        }
        setTimeout(() => {
            handleAlertClose();
        },  4000);
    };

    const goBackHome = () => {
        window.location.href = "/";
    };

    const handleAlertClose = () => {
        showAlert.value = false;
        if(lastResponseStatus.value === 200) {
            window.location.href = '/';
        }
    };

    </script>

<style scoped>
    .eye {
        position: relative;
        float: right;
        width: 30px;
        margin-top: -35px;
    }
    .reset-password-container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        border-radius: 8px;
        background-color: #f9f9f9;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }

    h2 {
        margin-bottom: 20px;
    }

    .input-group {
        margin-bottom: 20px;
        text-align: left;
    }
    
    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    
    input {
        width: 95%;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
    }
    
    .submit-button, .back-button {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: none;
        border-radius: 4px;
        background-color: #007BFF;
        color: white;
        cursor: pointer;
    }
    
    .back-button {
        background-color: #6c757d;
    }
    
    .submit-button:hover, .back-button:hover {
        opacity: 0.9;
    }

    .language-select {
        display: flex;
    }
    </style>