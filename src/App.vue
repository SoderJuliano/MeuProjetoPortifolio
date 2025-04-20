<template>
    <component :is="activeComp" v-bind="componentProps"></component>
</template>
<script>
import Home from './Home.vue';
import PasswordReset from './components/pages/PasswordReset.vue';
import NotFound from './components/pages/NotFound.vue';
import * as funcs from "./components/configs/requests.js";
import TempUser from "./TempUser.vue";
import WelcomePage from "./templates/FirstIn.vue";
import Plans from "./premium/Plans.vue";

export default {
    name: "App",
    components: {
        Home,
        PasswordReset,
        NotFound,
        TempUser,
        WelcomePage,
        Plans
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
            'http://192.168.1.138:8080/'
        ]

        if (homeHosts.some(host => uri === host)) {
            this.activeComp = 'Home';
        } else if (uri.includes('recover/password')) {
            this.newPassword = uri.split('newPasswordToken=')[1];
            this.activeComp = PasswordReset;
            this.componentProps = { newPassword: this.newPassword };
        } 
        else if (uri.includes("tempUser")) {
            this.activeComp = "TempUser";
        }
        else if(uri.includes("welcome")) {
            this.activeComp = "WelcomePage";
        }
        else if (uri.includes("choose-your-plan")){
            this.activeComp = "Plans";
        }
        else {
            this.activeComp = 'NotFound';
        }
    }
}
</script>
