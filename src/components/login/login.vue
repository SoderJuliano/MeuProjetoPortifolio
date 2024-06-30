<template>
    <div class="modal-login-template">
        <div class="inner-login-tempalte">
            <div class="modal-header">
                <div class="modal-title">
                    <span v-if="customTitle">{{ customTitle }}</span>
                    <span v-else>{{ inOnboarding ? (language === 'pt-br' ? 'Cadastro' : 'Register') : 'Login' }}</span>
                </div>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="email" v-model="email">
                </div>
                <div class="form-group">
                    <div v-if="!showPassword" class="pass-container">
                        <input type="password" class="form-control" :placeholder="this.language === 'pt-br' ? 'Senha' : 'Password'" v-model="password" @input="validatePassword">
                        <img @click="showPassword = !showPassword" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD9ElEQVR4nO1Ya4hVVRTepb0zzSzoAZUgEtFDQiISbhFzOZz9fevMJbcJUlHkEBEE+UsJbiFUiEH9iSCiIqFfQUQEFvkjH+hQik6YglQYWVMSYVOppcZy1oGN5Ln3zNxXcT44cB/7rLW+vfba6+FchQoVKlSoMACo1WoXisi9JJ8D8B7JMQCHSf4J4G+SvwD4muRGAC8DuB/APDco8N7fA+AtAEdInirzKEEAH3vvH0qS5IK+EABAkqORYSdJfkHyJZLL0jS9vV6vz1VPhRBmeO8v994vEBEP4BkAn6i3IlLfk1zVM0JqjB6PyIAfATS99/PLysqybA6Ax0juiuQdULKum/DeryQ5YQr1/D+pO94J2SQTAHsiD78G4GLXSYyMjJwH4I1IydvDw8NXdOHCmAng6fzIAdjpvb+2YwoAfGgEJkRkuesysiy7heR+0/ldkiRXTluoBiqAcQCHvPd3uB6hXq/PBfApyaMalx0RqkEZQrjU9R7nDA0NXdIHvRUq/KdRq9VmFi7Qa47ktyRfcAMKAA8AOK5F51kXJUlynS06AeAuN2CoT17J45pfvPdLCxdb0adZdY9mdDdAIPm6JcltejUXLg4hzNZsamSabkAAoG4n5bhW1u2+dJ+9dIIkXJ+RZdkNJH82b6wu9TLJteaVX9M0vcn1CUmSXAZgt5HYqCVTKQHNZvNcAO+bgB9I3ux6jGyyX9luG7pPv09JUAjhIgCbjMxPIrLI9QgA5lnHqSS+SdP0+mkJ1LI96kN+F5FHXZdB8m4AB3O9InLntAcLUV99endsh97pxgQkhHA+yTUk/zI9x0znWKPRuGpKQgEszicjAF41Ykt1rGO//Uby2U61ujrMAHDAZOtt+Yp2h1H7+1Wj0bi6lFANbOvJVcAGDfz8Px0ykPwo8s4hAC+KyMKyxusu6+SE5N5I3pcAlpyxZqy0Z0jeaKMZffGDs2V3G8btOGNOtVu9B+BB7SY1QLUhU6/p7pK8lWRGch3JzdHROWU13sP/dr2WJiMi10Tu3dTq2IjIU5FXDk9hQPeHTR/185tFukqRiQJ6h4jMKhKsJCPPwfLOYgvWDQC2RP/nuWhUx6kAntfqwTw13yaOx7RoLUFmtIjIZl3QzqgHwBP5bVZUwOVEWsh617yyvpVeI/O5FY7Tg8aNnWktpxtFa9sh4r2/zUauE92YlxUZN5LfMPGNNlUiti4fw65xvYBNHU8HqA6r2zCwLSIaM5zcnHEtjTpmcIHCR8y4va28UYaIyd5uZB7viLEtlO2z2FjRzvoyREQk5JWu6zYAbNWn3b6gDJEQwgxLsrvcoKEMEUNxL94vWG76rN92VKhQwf0/8A83woH5YgC03QAAAABJRU5ErkJggg==">
                        <small v-if="customMessage && password.length > 0 && password.length <= 6">{{ customMessage }}</small>
                        <small v-else-if="password.length > 0 && password.length <= 6" class="text-danger">{{ this.language === 'pt-br' ? 'Sua senha deve ter pelo menos 6 caracteres.' : 'Your password must have at least 6 characters.' }}</small>
                    </div>
                    <div v-if="showPassword" class="pass-container">
                        <input type="text" class="form-control" :placeholder="this.language === 'pt-br' ? 'Senha' : 'Password'" v-model="password" @input="validatePassword">
                        <img @click="showPassword = !showPassword" src="data:image/png;base64,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">
                        <small v-if="customMessage && password.length > 0 && password.length <= 6">{{ customMessage }}</small>
                        <small v-else-if="password.length > 0 && password.length <= 6" class="text-danger">{{ this.language === 'pt-br' ? 'Sua senha deve ter pelo menos 6 caracteres.' : 'Your password must have at least 6 characters.' }}</small>
                    </div>
                    <br><br v-if="inOnboarding && password.length > 0">
                    <input v-if="inOnboarding" type="password" class="form-control" :placeholder="this.language === 'pt-br' ? 'Confirme sua senha' : 'Confirm your password'" v-model="repeatPassword" @input="validatePassword">
                    <small class="confirm-validation" v-if="!passwordMeetTheRequirements && repeatPassword.length > 0">{{ this.language === 'pt-br' ? 'As senhas devem ser iguais.' : 'The passwords must be equal.' }}</small>
                </div>
            </div>
            <div class="modal-footer">
                <div class="form-group">
                    <button :disabled="!passwordMeetTheRequirements" @click="login()" type="button" class="btn btn-primary">{{ inOnboarding ? 'Confirmar' : 'Login' }}</button>
                    <button @click="cancel" type="button" class="btn btn-danger">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'modal-login-template',
    props: {
        email: String,
        customMessage: String,
        customTitle: String,
        language: String,
        inOnboarding: Boolean
    },
    data() {
        return {
            email: this.email,
            password: "",
            repeatPassword: "",
            passwordMeetTheRequirements: false,
            showPassword: false
        }
    },
    emits: ['login', 'cancel'],
    methods: {
        login() {
            this.$emit('login', this.email, this.password);
        },
        cancel() {
            this.$emit('cancel');
        },
        validatePassword() {
            // Lógica para validar a senha
            if (this.password.length > 6 && this.password === this.repeatPassword) {
                this.passwordMeetTheRequirements = true;
            } else if (this.password.length > 6 && this.inOnboarding == false) {
                this.passwordMeetTheRequirements = true;
            }
            else {
                this.passwordMeetTheRequirements = false;
            }
        },
    }
}
</script>
<style scoped>
    .pass-container {
        display: flex;
    }
    .pass-container img {
        position: absolute;
        margin-left: 180px;
        margin-top: 5px;
        width: 30px;
        height: 30px;
    }
    .modal-login-template {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh !important;
        background: #f5f5f569;
        /*
            z-index 2 is the submenus to control photos and shapes
            if keep 2 stays under those menus, 4 is ok
        */
        z-index: 4;
    }
    .inner-login-tempalte {
        flex-direction: column;
        display: flex;
        background-color: white;
        width: 50%;
        border-radius: 10px;
        padding: 20px;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        padding: 20px;
    }

    .modal-header {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .modal-title {
        display: flex;
        justify-content: center;
        text-align: center;
        font-size: 24px;
        padding: 20px;
        font-weight: bold;
        border-radius: 25px;
        width: 200px;
        align-self: center;
    }
    .modal-footer {
        width: 100%;
    }
    .form-group {
        width: 100%;
        justify-content: space-around;
        margin-top: 20px;
    }

    input {
        width: 200px;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid gray;
        margin-bottom: 10px;
        font-size: 16px;
    }

    .modal-footer {
        margin-top: 40px;
        width: 100%;
        text-align: center;
    }

    button {
        position: relative;
        width: 200px;
        padding: 10px;
        border-radius: 15px;
        margin-bottom: 50px;
    }

    button:first-child {
        margin-right: 10px;
    }

    .confirm-validation {
        position: absolute;
        margin-top: 50px;
        margin-left: -200px;
    }

    small {
        position: absolute;
        margin-top: 50px;
        margin-left: 0px;
    }
</style>