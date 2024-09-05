<template>
    <div class="template">
        <ComponentWrap
            id="1000"
            :title="getById(1000).title"
            :text="getById(1000).text"
            :block="true"
            :css="{
                'margin-top': '50px',
                'text-align': 'center',
                'font-size': '36px',
                'padding-left': '20%',
                'padding-right': '20%'
                }"
            @update:title="updateTitle"
            @update:text="updateText"
        />
        <ComponentWrap
            id="1001"
            :text="getById(1001).text"
            :block="true"
            :css="base_css"
            @update:text="updateText"
        />
        <ComponentWrap
            id="1002"
            :text="getById(1002).text"
            :block="true"
            :css="base_css"
            @update:text="updateText"
        />
        <ComponentWrap
            id="1003"
            :text="getById(1003).text"
            :block="true"
            :css="base_css"
            @update:text="updateText"
        />
        <ComponentWrap
            id="1004"
            :text="getById(1004).text"
            :title="getById(1004).title"
            :css="{ ...base_css, 'display': 'flex', 'margin-top': '30px' }"
            :span1="span1"
            :span2="span2"
            @update:title="updateTitle"
            @update:text="updateText"
        />
        <ComponentWrap
            id="1005"
            :text="getById(1005).text"
            :title="getById(1005).title"
            :css="{ ...base_css, 'display': 'flex', 'margin-top': '30px' }"
            :span1="span1"
            :span2="span2"
            @update:title="updateTitle"
            @update:text="updateText"
        />
        <!-- <br/> -->
        <ComponentWrap
            id="1006"
            text="Education"
            :text="getById(1006).text"
            :css="{
                'padding-left': '20%',
                'text-align': 'start',
                'margin-bottom': '0px',
                'margin-top': '20px',
                'font-weight': 'bold'
            }"
            @update:text="updateText"
        />
        <!-- Education -->
        <div>
        <!-- Loop through educationComponents -->
        <ComponentWrap
            v-for="(component, index) in educationComponents.filter(c => !c.norender)"
            :key="index"
            :text="component.text"
            :title="component.title"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
            :id="component.id"
            removeBnt="true"
            @update:title="updateTitle"
            @update:text="updateText"
            @remove="removeEducationComponent(index)"
        ></ComponentWrap>

            <!-- Plus icon to add more education components -->
            <div @click="addEducationComponent" class="plus-icon">+</div>
        </div>
        <ComponentWrap
                text="Work experience"
                id="1009"
                :text="getById(1009).text"
                :css="{
                    'padding-left': '20%',
                    'text-align': 'start',
                    'margin-bottom': '0px',
                    'margin-top': '20px',
                    'font-weight': 'bold'
                }"
                @update:text="updateText"
        />
        <ComponentWrap
            text="<b>ViaHub</b><br/>I work as a fullstack software engineer building rest APIs with Java (8, 11, 13, 17, 21) and making front-ends with AngularJS, Vue.js and React.js. Also had experience with Flutter/Draft on this role. I use daily tecnologies as git, kafka, kubernets, jira, docker, kustumize, Maven, Mongodb and Lombok."
            title="2021 - present"
            id="1010"
            :text="getById(1010).text"
            :title="getById(1010).title"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
            @update:title="updateTitle"
            @update:text="updateText"
        />
        <ComponentWrap
            text="<b>Inova Eletronic Systems</b><br/>
            I use to work as a fullstack Softwere Developer building Rest APIs with Golang and front-ends with AngularJs. Also I used to wotk with SASS, JENKINS, Buckets AWS, AWS database S3, AWS Loadbalance, Docker and SemanticsUI as default css framework."
            title="2020 - 2021"
            id="1011"
            :text="getById(1011).text"
            :title="getById(1011).title"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
            @update:title="updateTitle"
            @update:text="updateText"
        />
        <ComponentWrap
                text="Other experience"
                id="1012"
                :text="getById(1012).text"
                :css="{
                    'padding-left': '20%',
                    'text-align': 'start',
                    'margin-bottom': '0px',
                    'margin-top': '20px',
                    'font-weight': 'bold'
                }"
                @update:text="updateText"
        />
        <ComponentWrap
            text="<b>Freelancer</b><br/>
            Eventually I build websites using AngularJS and Vue.js as main front-end frameworks with bootstrap or pure CSS. Also I have some projects of mine I work on my free times as a hobby, APIs built in NestJs, Python, Java and PHP."
            title="2015 - present"
            id="1013"
            :text="getById(1013).text"
            :title="getById(1013).title"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
            @update:title="updateTitle"
            @update:text="updateText"
        />
        <ComponentWrap
            text="Portuguese: Native speaker.<br/>English: fair, listening I am able to understand anything from a native speaker, but limited to common phrases when I communicate. I studied English for 4 years and lived in Alabama USA for 9 months."
            title="Languages"
            id="1014"
            :text="getById(1014).text"
            :title="getById(1014).title"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
            @update:title="updateTitle"
            @update:text="updateText"
        />
        <ComponentWrap
            text="Team work<br/>Agile development<br/>Leadership experience<br/>I adapt quickly<br/>I work well under pressure"
            title="Other skills"
            id="1015"
            :text="getById(1015).text"
            :title="getById(1015).title"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
            @update:title="updateTitle"
            @update:text="updateText"
        />
        <ComponentWrap
            text="I trevaled to United States of America twice in 2012 and 2013 to work and provide training ia a subsidiary Brazilian company totaling 9 months working abrod, in which I was congratuleted for the great work when I was pesponsible for the night shift for three months."
            title="Personal"
            id="1016"
            :text="getById(1016).text"
            :title="getById(1016).title"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
            @update:title="updateTitle"
            @update:text="updateText"
        />
        <!-- Loop through additional ComponentWraps -->
        <ComponentWrap
            v-for="(component, index) in additionalComponents.filter(c => !c.norender)"
            :key="index"
            :text="component.text"
            :title="component.title"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
            :id="component.id"
            removeBnt="true"
            @update:title="updateTitle"
            @update:text="updateText"
            @remove="removeComponent(index)"
        />

        <!-- Plus icon to add more ComponentWraps -->
        <div @click="addComponent" class="plus-icon">+</div>
        <div class="footer"></div>
    </div>
</template>

<script setup>
    import ComponentWrap from '../components/componentesCompartilhados/ComponentWrap.vue';
    import { ref } from 'vue';
    import { defineProps } from 'vue';

    const props = defineProps({
        user: Object,
        language: String
    });

    const isEnglish = props.language == 'us-en';

    const additionalComponents = ref([
        {
            id: 1000,
            title: "RESUME",
            text: props.user.name ? props.user.name : isEnglish ? 'Your name: Type in here' : "Seu nome: Digite aqui",
            norender: true
        },
        {
            id: 1001,
            title:null,
            text: props.user.contact.adress ? props.user.contact?.adress : isEnglish ? 'Your adress: Type in here' : 'Seu endereço: Digite aqui',
            norender: true
        },
        {
            id: 1002,
            title:null,
            text: props.user.contact.phone.length > 0 ? props.user.contact?.phone[0] : isEnglish ? 'Phone: Type in here' : 'Telefone: Digite aqui',
            norender: true
        },
        {
            id: 1003,
            title:null,
            text: props.user.contact.email.length > 0 ? props.user.contact?.email[0] : isEnglish ? 'Email: Type in here' : 'E-mail: Digite aqui',
            norender: true
        },
        {
            id: 1004,
            title: 'Objective',
            text: props.user.profession ? props.user.profession : isEnglish ? 'Type in here' : 'Digite aqui',
            norender: true
        },
        {
            id: 1005,
            title: 'Skills summary',
            text: props.user.ability ? props.user.profession : isEnglish ? 'Type in here' : 'Digite aqui',
            norender: true
        },
        {
            id: 1006,
            title: null,
            text: isEnglish ? 'Education' : 'Educação',
            norender: true
        }
    ]);

    const educationComponents = ref([]);

    if (props.user.grade && props.user.grade.length > 0) {
        // Iterate over the grade array and push components into educationComponents
        props.user.grade.forEach((grade, index) => {
            educationComponents.value.push({
                id: 2000 + index, // Generate ID starting from 2000
                title: grade.length > 0 ? grade : 'Add education',
                text: isEnglish ? 'Education' : 'Educação',
                norender: true
            });
        });
    } else {
        // Add a default component if the grade array is empty
        educationComponents.value.push({
            id: 2000,
            title: 'Add education',
            text: isEnglish ? 'Education' : 'Educação',
            norender: false
        });
    }

    const addEducationComponent = () => {
        const newId = 2000 + educationComponents.value.length;
        educationComponents.value.push({
            id: newId,
            title: 'Add education',
            text: isEnglish ? 'Education' : 'Educação',
            norender: false
        });
    };

    const removeEducationComponent = (index) => {
        educationComponents.value.splice(index, 1);
    };
    // Function to add a new ComponentWrap instance
    const addComponent = () => {
        additionalComponents.value.push({
            id: additionalComponents.value.length + 1,
            text: "New Text Here",
            title: "New Title Here"
        });
    };

    const getById = (id) => {
        return additionalComponents.value.find(component => component.id === id);
    };

    const removeComponent = (index) => {
        if (index !== undefined && additionalComponents.value.length > index) {
            additionalComponents.value.splice(index, 1);
        }
    };

    const updateTitle = ({ id, title }) => {
        const component = additionalComponents.value.find(c => c.id === Number(id));
        if (component) {
            component.title = title;
        }
    };

    const updateText = ({ id, text }) => {
        const component = additionalComponents.value.find(c => c.id === Number(id));
        if (component) {
            component.text = text;
        }
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