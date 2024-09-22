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
                :css="{ ...base_css, 'display': 'flex', 'padding-right': '6%' }"
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
            id="1007"
            :text="getById(1007).text"
            :css="{
                'padding-left': '20%',
                'text-align': 'start',
                'margin-bottom': '0px',
                'margin-top': '20px',
                'font-weight': 'bold'
            }"
            @update:text="updateText"
        />

<!-- Experiencies -->


        <div>
            <!-- Loop through educationComponents -->
            <ComponentWrap
                v-for="(component, index) in experiencesComponents.filter(c => !c.norender)"
                :key="index"
                :text="component.text"
                :title="component.title"
                :css="{ ...base_css, 'display': 'flex', 'padding-right': '6%' }"
                :span1="span1"
                :span2="span2"
                textArea="true"
                :textAreaSaveBnt="props.language.includes('pt') ? 'salvar' : 'save'"
                :id="component.id"
                removeBnt="true"
                @update:title="updateTitle"
                @update:text="updateText"
                @remove="removeExperiencesComponents(index)"
            ></ComponentWrap>

            <!-- Plus icon to add more education components -->
            <div @click="addExperiencesComponents" class="plus-icon">+</div>
        </div>
        <ComponentWrap
                id="1008"
                :text="getById(1008).text"
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
            id="1009"
            :text="getById(1009)?.text"
            :title="getById(1009)?.title"
            :css="{ ...base_css, 'display': 'flex', 'margin-bottom': '30px' }"
            :span1="span1"
            :span2="span2"
            @update:title="updateTitle"
            @update:text="updateText"
            textArea="true"
            :textAreaSaveBnt="props.language.includes('pt') ? 'salvar' : 'save'"
        />
        <ComponentWrap
            id="1010"
            :text="getById(1010).text"
            :title="getById(1010).title"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
            @update:title="updateTitle"
            @update:text="updateText"
            textArea="true"
            noBoldText="true"
            :textAreaSaveBnt="props.language.includes('pt') ? 'salvar' : 'save'"
        />
        <ComponentWrap
            id="1011"
            :text="getById(1011).text"
            :title="getById(1011).title"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
            @update:title="updateTitle"
            @update:text="updateText"
            textArea="true"
            noBoldText="true"
            :textAreaSaveBnt="props.language.includes('pt') ? 'salvar' : 'save'"
        />
        <ComponentWrap
            id="1012"
            :text="getById(1012).text"
            :title="getById(1012).title"
            :css="{ ...base_css, 'display': 'flex' }"
            :span1="span1"
            :span2="span2"
            @update:title="updateTitle"
            @update:text="updateText"
            textArea="true"
            noBoldText="true"
            :textAreaSaveBnt="props.language.includes('pt') ? 'salvar' : 'save'"
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
    import { ref, watch, defineEmits, reactive } from 'vue';
    import { defineProps } from 'vue';

    const props = defineProps({
        user: Object,
        language: String
    });

    let localUpdatedUser = reactive({ ...props.user });
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
            title: isEnglish ? 'Objective' : 'Objetivo',
            text: props.user.profession ? props.user.profession : isEnglish ? 'Type in here' : 'Digite aqui',
            norender: true
        },
        {
            id: 1005,
            title: isEnglish ? 'Skills summary' : 'Habilidades',
            text: props.user.hability ? props.user.hability : isEnglish ? 'Type in here' : 'Digite aqui',
            norender: true
        },
        {
            id: 1006,
            title: null,
            text: isEnglish ? 'Education' : 'Educação',
            norender: true
        },
        {
            id: 1007,
            title: null,
            text: isEnglish ? 'Work experience' : 'Experiencias',
            norender: true
        },
        {
            id: 1008,
            text: isEnglish ? 'Other experience' : 'Outras experiências',
            norender: true
        },
        {
            id: 1009,
            title: isEnglish ? 'May type Date 2019-2020' : 'Talvez uma data 2019-2020',
            text: isEnglish ? 'A description what you had been doing' : 'Uma descrição do que você fez',
            norender: true
        },
        {
            id: 1010,
            title: isEnglish ? 'Languages' : 'línguas',
            text: isEnglish ? 'ex. Portuguese: Native speaker.' : 'exemplo, nativo falante de português.',
            norender: true
        },
        {
            id: 1011,
            title: isEnglish ? 'Other skills' : 'Outras habilidades',
            text: isEnglish ? 'ex. Team work.' : 'exemplo, trabalho em time.',
            norender: true
        },
        {
            id: 1012,
            title: isEnglish ? 'Personal' : 'Pessoal',
            text: props?.user?.resume ? props.user.resume : isEnglish ? 'about you.' : 'sobre você.',
            norender: true
        },
    ]);

    const educationComponents = ref([]);

    if (props.user.grade && props.user.grade.length > 0) {
        // Iterate over the grade array and push components into educationComponents
        props.user.grade.forEach((grade, index) => {
            educationComponents.value.push({
                id: 2000 + index, // Generate ID starting from 2000
                title: grade.length > 0 ? grade : 'Add education',
                text: isEnglish ? 'Education' : 'Educação',
                norender: false
            });
        });
    } else {
        // Add a default component if the grade array is empty
        educationComponents.value.push({
            id: 2000,
            title: '2020 - 2024',
            text: isEnglish ? 'Add Education (click here)' : 'Adicionar Educação (clicar aqui)',
            norender: false
        });
    }

    const addEducationComponent = () => {
        const newId = 2000 + educationComponents.value.length;
        educationComponents.value.push({
            id: newId,
            title: 'Date in here',
            text: isEnglish ? 'Add Education (click here)' : 'Adicionar Educação (clicar aqui)',
            norender: false
        });
    };

    const removeEducationComponent = (index) => {
        educationComponents.value.splice(index, 1);
    };


    const experiencesComponents = ref([]);

    if (props.user.userExperiences && props.user.userExperiences.length > 0) {
        props.user.userExperiences.forEach((ex, index) => {
            let innerText = ex.position ? "<b>"+ex.position+" - </b>" : "";
            innerText += ex.company ? "<b>"+ex.company+"</b><br/>" : "<br/>";
            innerText += ex.description ? ex.description : "";
            experiencesComponents.value.push({
                id: 3000 + index, // Generate ID starting from 3000
                title: ex.dateHired ? ex.dateHired + ' - ' + ex.dateFired : isEnglish ? 'Add date' : 'Adicionar data',
                text: innerText ? innerText : '',
                norender: false
            });
        });
    } else {
        experiencesComponents.value.push({
            id: 3000,
            title: '2020 - present',
            text: isEnglish ? '(click here) position - company ↵ description' : '(clicar aqui) cargo - empresa ↵ descricao',
            norender: false
        });
    }

    const addExperiencesComponents = () => {
        const newId = 3000 + experiencesComponents.value.length;
        experiencesComponents.value.push({
            id: newId,
            title: '2020 - present',
            text: isEnglish ? '(click here) position - company ↵ description' : '(clicar aqui) cargo - empresa ↵ descricao',
            norender: false
        });
    };

    const removeExperiencesComponents = (index) => {
        experiencesComponents.value.splice(index, 1);
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
        // Find the corresponding component (education or experience)
        let component = additionalComponents.value.find(c => c.id === Number(id))
            || educationComponents.value.find(c => c.id === Number(id))
            || experiencesComponents.value.find(c => c.id === Number(id));

        // Parse the title into start and end dates (e.g., "2024-09 - 2024-10")
        const [dateHired, dateFired] = title.split(' - ');

        // If component found, update the title
        if (component) {
            component.title = title;

            // Update localUpdatedUser based on the component ID
            const experience = localUpdatedUser.userExperiences.find(ex => 3000 + ex.id === component.id);
            if (experience) {
                experience.dateHired = dateHired ? dateHired.trim() : experience.dateHired;
                experience.dateFired = dateFired ? dateFired.trim() : experience.dateFired;
            }
        }
    };

    const updateText = ({ id, text }) => {
        let component = additionalComponents.value.find(c => c.id === Number(id));

        if (component) {
            component.text = text;
        }

        // If not found, try to find it in educationComponents
        if (!component) {
            component = educationComponents.value.find(c => c.id === Number(id));
            if (component) {
                component.text = text;
            }
            localUpdatedUser.education = educationComponents.value.map(c => c.text);
        }

        if (!component) {
            component = experiencesComponents.value.find(c => c.id === Number(id));
            if (component) {
                component.text = text;

                // Try to find the corresponding experience in localUpdatedUser.userExperiences
                const experienceIndex = localUpdatedUser.userExperiences.findIndex(
                    ex => 3000 + ex.id === component.id
                );

                let updatedExperience;

                const strippedTextParts = text.includes('<br/>') ? text.split('<br/>') : text.split('<br />');
                if(strippedTextParts.length < 2) {
                    console.log(strippedTextParts)
                    updatedExperience = {
                        position: '',
                        company: '',
                        description: strippedTextParts[0]
                    };
                }else {
                    let stripedFirstPart = strippedTextParts[0].replaceAll('<b>', '');
                    stripedFirstPart = stripedFirstPart.replaceAll('</b>', '');
                    const parts = stripedFirstPart.includes('-') ? stripedFirstPart.split('-') : stripedFirstPart
                    const position = parts[0] || '';
                    const company = parts[1] || '';

                    let description = strippedTextParts[1] ? strippedTextParts[1] : ''

                    description = description.replace('<span>', '');
                    description = description.replace('</span>', '');

                    // Verificar se há descrição
                    updatedExperience = {
                        position: position.trim(),
                        company: company.trim(),
                        description: description.trim()
                    }
                }
                if (experienceIndex !== -1) {
                    localUpdatedUser.userExperiences[experienceIndex] = {
                        ...localUpdatedUser.userExperiences[experienceIndex],
                        ...updatedExperience
                    };
                } else {
                    // If no matching experience is found, add a new one
                    localUpdatedUser.userExperiences.push({
                        ...updatedExperience,
                        id: component.id - 3000 // Make sure to align the id logic with your structure
                    });
                }
            }
        }

        if (!component) {
            console.error(`Component with id ${id} not found.`);
        } else {
            console.log('sending update user from text update method');
            emit('updateUser', localUpdatedUser);
        }
    };

    const emit = defineEmits(['updateUser']);

    // Watch the `additionalComponents` deeply for any changes
    watch(additionalComponents, (newComponents) => {

        newComponents.forEach(component => {
            // Update user fields based on component `id`
            switch (component.id) {
                case 1000:
                    localUpdatedUser.name = component.text;
                    break;
                case 1001:
                    localUpdatedUser.contact.adress = component.text;
                    break;
                case 1002:
                    localUpdatedUser.contact.phone[0] = component.text;
                    break;
                case 1003:
                    localUpdatedUser.contact.email[0] = component.text;
                    break;
                case 1004:
                    localUpdatedUser.profession = component.text;
                    break;
                case 1005:
                    localUpdatedUser.hability = component.text;
                    break;
                case 1012:
                    localUpdatedUser.resume = component.text;
                    break;
                }
        });

        emit('updateUser', localUpdatedUser);
    }, { deep: true });

    // educationComponents
    watch(() => localUpdatedUser.education, (newEducation, oldEducation) => {
        if (newEducation !== oldEducation) {
            console.log("EDUCVATION foi alterado:", newEducation);
            emit('updateUser', localUpdatedUser);
        }
    });



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