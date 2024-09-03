<template>
    <div class="template">
        <ComponentWrap
            title="RESUME"
            text="Juliano Soder"
            :block="true"
            :css="{
                'margin-top': '50px',
                'text-align': 'center',
                'font-size': '36px',
                'padding-left': '20%',
                'padding-right': '20%'
                }"
        />
        <ComponentWrap
            text="Rua Antas 301, Centro, Maondaí SC, Brasil"
            :block="true"
            :css="base_css"
        />
        <ComponentWrap
            text="phone: 49 991883551"
            :block="true"
            :css="base_css"
        />
        <ComponentWrap
            text="email: julianosoder1989@gmail.com"
            :block="true"
            :css="base_css"
        />
        <ComponentWrap
            text="Software Developer at Google"
            title="Objective"
            :css="{ ...base_css, 'display': 'flex', 'margin-top': '30px' }"
            :span1="span1"
            :span2="span2"
        />
        <ComponentWrap
            text="HTML, JAVA, CSS, GOLANG, PHP"
            title="Skills summary"
            :css="{ ...base_css, 'display': 'flex', 'margin-top': '30px' }"
            :span1="span1"
            :span2="span2"
        />
        <!-- <br/> -->
        <ComponentWrap
                text="Education"
                :css="{
                    'padding-left': '20%',
                    'text-align': 'start',
                    'margin-bottom': '0px',
                    'margin-top': '20px',
                    'font-weight': 'bold'
                }"
        />
        <ComponentWrap
            text="Post graduation in Data Scinece by UNIASSELVI University"
            title="2019-2020"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
        />
        <ComponentWrap
            text="Graduated in Software analysis and development by FAEL College"
            title="2015-2019"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
        />
        <ComponentWrap
                text="Work experience"
                :css="{
                    'padding-left': '20%',
                    'text-align': 'start',
                    'margin-bottom': '0px',
                    'margin-top': '20px',
                    'font-weight': 'bold'
                }"
        />
        <ComponentWrap
            text="<b>ViaHub</b><br/>I work as a fullstack software engineer building rest APIs with Java (8, 11, 13, 17, 21) and making front-ends with AngularJS, Vue.js and React.js. Also had experience with Flutter/Draft on this role. I use daily tecnologies as git, kafka, kubernets, jira, docker, kustumize, Maven, Mongodb and Lombok."
            title="2021 - present"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
        />
        <ComponentWrap
            text="<b>Inova Eletronic Systems</b><br/>
            I use to work as a fullstack Softwere Developer building Rest APIs with Golang and front-ends with AngularJs. Also I used to wotk with SASS, JENKINS, Buckets AWS, AWS database S3, AWS Loadbalance, Docker and SemanticsUI as default css framework."
            title="2020 - 2021"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
        />
        <ComponentWrap
                text="Other experience"
                :css="{
                    'padding-left': '20%',
                    'text-align': 'start',
                    'margin-bottom': '0px',
                    'margin-top': '20px',
                    'font-weight': 'bold'
                }"
        />
        <ComponentWrap
            text="<b>Freelancer</b><br/>
            Eventually I build websites using AngularJS and Vue.js as main front-end frameworks with bootstrap or pure CSS. Also I have some projects of mine I work on my free times as a hobby, APIs built in NestJs, Python, Java and PHP."
            title="2015 - present"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
        />
        <ComponentWrap
            text="Portuguese: Native speaker.<br/>English: fair, listening I am able to understand anything from a native speaker, but limited to common phrases when I communicate. I studied English for 4 years and lived in Alabama USA for 9 months."
            title="Languages"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
        />
        <ComponentWrap
            text="Team work<br/>Agile development<br/>Leadership experience<br/>I adapt quickly<br/>I work well under pressure"
            title="Other skills"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
        />
        <ComponentWrap
            text="I trevaled to United States of America twice in 2012 and 2013 to work and provide training ia a subsidiary Brazilian company totaling 9 months working abrod, in which I was congratuleted for the great work when I was pesponsible for the night shift for three months."
            title="Personal"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
        />
        <!-- Loop through additional ComponentWraps -->
        <ComponentWrap
            v-for="(component, index) in additionalComponents"
            :key="index"
            :text="component.text"
            :title="component.title"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
            removeBnt="true"
            @update:title="updateTitle(index, $event)"
            @update:text="updateText(index, $event)"
            @remove="removeComponent(index)"
        />

        <!-- Plus icon to add more ComponentWraps -->
        <div @click="addComponent" class="plus-icon">+</div>
        <div class="footer"></div>
    </div>
</template>

<script setup>
    import ComponentWrap from '../components/componentesCompartilhados/ComponentWrap.vue';
    import { reactive } from 'vue';

    const additionalComponents = reactive([]);

    // Function to add a new ComponentWrap instance
    const addComponent = () => {
        additionalComponents.push({
            text: "New Text Here",
            title: "New Title Here"
        });
    };

    const removeComponent = (index) => {
        additionalComponents.value.splice(index, 1);
    };

    const updateTitle = (index, newTitle) => {
        additionalComponents[index].title = newTitle;
    };

    const updateText = (index, newText) => {
        additionalComponents[index].text = newText;
    };


    let base_css = {
            'margin-top': '10px',
            'text-align': 'center',
            'font-size': '16px',
            'padding-left': '20%',
            'padding-right': '20%',
            'justify-content': 'space-between'
            }
    let span1 = {
            'font-weight': 'bolder',
            'width': '25%',
            'text-align': 'start',
            'font-size': '18px'
        }
    let span2 = {'width': '70%', 'text-align': 'start', 'font-size': '18px'}
</script>

<style scoped>
.plus-icon {
    cursor: pointer;
    font-size: 24px;
    text-align: center;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 20%;
}
.template {
    margin-top: 30px;
    width: 100%;
    min-height: 100vh;
    max-height: 100%;
    border-radius: 8px;
    border: solid black 1px;
    background-color: #FAFAFA;
}
.footer {
    height: 40px;
    display: block;
}
@media print {
    .template {
        margin-top: 10px;
        border: none;
        background-color: white;
    }
    .footer {
        display: none;
    }
    .plus-icon
    {
        display: none;
    }
}
</style>