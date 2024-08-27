<template>
    <component :is="activeComp"></component>
</template>
<script>
import Home from './Home.vue';
import PasswordReset from './components/pages/PasswordReset.vue';
import NotFound from './components/pages/NotFound.vue';
export default {
    name: "App",
    components: {
        Home,
        PasswordReset,
        NotFound
    },data() {
        return {
            activeComp: ''
        }
    },
    mounted() {
        const uri = window.location.href;
        console.log(uri);
        if(uri == 'http://localhost:8080/' || uri == 'https://custom-cv-online.netlify.app/') {
            this.activeComp = 'Home';
        }else if(uri.includes('reset')){
            this.activeComp = 'PasswordReset';
        }else {
            this.activeComp = 'NotFound';
        }
    }
}
</script>