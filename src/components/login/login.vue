<template>
    <div class="modal-login-template">
        <div class="inner-login-tempalte">
            <div class="modal-header">
                <div class="modal-title">
                    <span>Login</span>
                </div>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="email" v-model="email">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="******" v-model="password" @input="validatePassword">
                    <small v-if="password.length > 0 && password.length <= 6" class="text-danger">A senha deve conter mais de 6 caracteres.</small>
                </div>
            </div>
            <div class="modal-footer">
                <div class="form-group">
                    <button type="button" class="btn btn-primary">Login</button>
                    <button type="button" class="btn btn-danger">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'modal-login-template',
    props: {
        email: String
    },
    data() {
        return {
            email: this.email,
            password: ""
        }
    },
    emits: ['login'],
    methods: {
        login() {
            this.$emit('login', this.email, this.password);
        },
        validatePassword() {
            // Lógica para validar a senha
            if (this.password.length > 6) {
                
            }
        }
    }
}
</script>
<style scoped>
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
        background: transparent;
        z-index: 2;
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
        color: white;
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
    }

    small {
        position: absolute;
        margin-top: 50px;
        margin-left: -200px;
    }
</style>