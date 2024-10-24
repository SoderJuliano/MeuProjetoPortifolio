<template>
    <component :is="activeComp" v-bind="componentProps"></component>
</template>
<script>
import Home from './Home.vue';
import PasswordReset from './components/pages/PasswordReset.vue';
import NotFound from './components/pages/NotFound.vue';
import * as funcs from "./components/configs/requests.js";

export default {
    name: "App",
    components: {
        Home,
        PasswordReset,
        NotFound
    },
    data() {
        return {
            activeComp: null,
            componentProps: {},
            newPassword: null
        }
    },
    async mounted() {
        const uri = window.location.href;
        console.log(uri);

        if (uri === 'http://localhost:8080/#' ||
            uri === 'http://localhost:8080/' ||
            uri === 'https://custom-cv-online.netlify.app/') {
            this.activeComp = 'Home';
        } else if (uri.includes('recover/password')) {
            this.newPassword = uri.split('newPasswordToken=')[1];
            this.activeComp = PasswordReset;
            this.componentProps = { newPassword: this.newPassword };
        } else {
            this.activeComp = 'NotFound';
        }

        await funcs.getLastEnvUrl();
    }
}
</script>
