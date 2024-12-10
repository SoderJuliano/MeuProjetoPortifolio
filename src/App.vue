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
        await funcs.getLastEnvUrl();
        const uri = window.location.href;
        console.log(uri);

        const homeHosts = ['http://localhost:8080/#',
            'http://localhost:8080/',
            'https://custom-cv-online.netlify.app/',
            'https://custom-cv-online.netlify.app/#',
            'https://julianosodermeugeradoronline-dev.netlify.app/',
            'https://julianosodermeugeradoronline-dev.netlify.app/#',
            'https://freehubcv.top',
            'https://freehubcv.top/#',
            'https://freehubcv.top/',
        ]

        if (homeHosts.some(host => uri === host)) {
            this.activeComp = 'Home';
        } else if (uri.includes('recover/password')) {
            this.newPassword = uri.split('newPasswordToken=')[1];
            this.activeComp = PasswordReset;
            this.componentProps = { newPassword: this.newPassword };
        } else {
            this.activeComp = 'NotFound';
        }
    }
}
</script>
