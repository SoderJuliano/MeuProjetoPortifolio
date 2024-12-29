<template>
    <div class="template">
        <div class="row"><h3>SOFTWARE ENGINEER</h3></div>
        <div class="row"><h1>JULIANO SODER</h1></div>
        <div class="row">
            <p>
                <span>EMAIL: {{ localUser.email }}</span>
                <span>|</span>
                <span>PROTFOLIO/SITE {{ localUser.social[0] }}</span>
            </p>
        </div>
        <div class="row">
            <p>
                <span>PHONE: XXXXX-XXXXX</span>
                <span>ADDRES: Your addres</span>
            </p>
        </div>
        <div class="dividedline"></div>
        <div class="summary">
            <h4>SUMMARY</h4>
            <p>Summary</p>
        </div>
        <div class="dividedline"></div>
        <div class="main">
            <div class="education">
                <h4>EDUCATION</h4>
                <p>Pós graduado em Ciência de dados pela UNIASSELVI</p>
                <P>Graduado em análise e desenvolvimento de software</P>
            </div>
            <div class="skills">
                <h4>SKILLS</h4>
                <p>Skill 1</p>
                <p>Skill 2</p>
                <p>Skill 3</p>
            </div>
        </div>
        <div class="horizontalline"></div>
        <div class="experiencies">
            <h4>WORK EXPERIENCE</h4>
            <div class="work">
                <p>Job title</p>
                <p><span>Company name</span><span>/ 2021 - present</span></p>
                <p>Description</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, reactive } from 'vue';


    const props = defineProps({
        user: Object,
        language: String
    });

    let localUser = reactive({
        ...props.user
    });




</script>

<style scoped>
    .template {
        max-width: 1200px;
        margin-top: 30px;
        width: 100%;
        min-height: 100vh;
        max-height: 100%;
        border: solid white 1px;
        box-shadow: 0px 0px 10px 2px gray;
        background-color: white;
    }

    .row {
        width: 100%;

        && h1, h3 {
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 10px;
            padding: 10px;
        }

        && h1 {
            font-size: 55px;
        }

        && p {
            text-align: center;
        }
    }

    .dividedline {
        width: 90%;
        height: 0%;
        border-bottom: solid 2px gray;
        justify-self: center;
        margin: 0 auto;
    }
</style>