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
                :job="component.job"
                :jobs="props.user?.userExperiences"
                :language="props.language"
                @update:title="updateTitle"
                @update:text="updateText"
                @remove="removeExperiencesComponents(index)"
                @update-experiencias="updateUserExperiecies"
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
            :css="{ ...base_css, 'display': 'flex', 'flex-wrap': 'wrap', 'margin-top': '20px', 'margin-bottom': '30px' }"
            :listCss="{'width': '70%', 'height': '30px', 'text-align': 'start', 'color': 'black', 'display': 'block'}"
            :listTitleCss="{'width': '25%', 'height': '100%', 'text-align': 'start', 'font-weight': 'bold'}"
            :listTitle="isEnglish ? 'Competences' : 'Competências'"
            :listOfStrings="props.user?.competence"
            @updated-list="updateCompetence"
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

        <div v-for="(item, index) in props.user?.otherInfos" :key="index">
            <ComponentWrap
                :id="index"
                :title="item?.split(';')[0] || ''"
                :text="item?.split(';')[1] || ''"
                otherInfosUpdate="true"
                removeBnt="true"
                :span1="span1"
                :span2="{...span2, 'margin-left': '7%'}"
                :css="{ ...base_css, 'display': 'flex' }"
                @remove="removeOtherInfosText(index)"
                @other-infos:title="otherInfosTitleUpdate"
                @other-infos:text="otherInfosTextUpdate"
            />
        </div>

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
            text: props.user.contact.address ?
                props.user.contact?.address : isEnglish ?
                'Your address: Type in here' :
                'Seu endereço: Digite aqui',
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
            title: props?.user?.otherExperiencies?.title ? props.user.otherExperiencies.title :
            isEnglish ? 'May type Date 2019-2020' : 'Talvez uma data 2019-2020',
            text: props?.user?.otherExperiencies?.text ? props?.user?.otherExperiencies?.text :
            isEnglish ? 'A description what you had been doing' : 'Uma descrição do que você fez',
            norender: true
        },
        {
            id: 1010,
            title: isEnglish ? 'Languages' : 'línguas',
            text: isEnglish ? 'ex. Portuguese: Native speaker.' : 'exemplo, nativo falante de português.',
            norender: true
        },
        // {
        //     id: 1011,
        //     title: isEnglish ? 'Other skills' : 'Outras habilidades',
        //     text: isEnglish ? 'ex. Team work.' : 'exemplo, trabalho em time.',
        //     norender: true
        // },
        {
            id: 1012,
            title: isEnglish ? 'Personal' : 'Pessoal',
            text: props?.user?.resume ? props.user.resume : isEnglish ? 'about you.' : 'sobre você.',
            norender: true
        },
    ]);

    const educationComponents = ref([]);

    if (props.user.grade && props.user.grade.length > 0) {
        // Itera sobre o array de grades e empurra componentes para educationComponents
        props.user.grade.forEach((grade, index) => {
            const ano = extrairDatas(grade);
            const textoSemDatas = removerDatas(grade); // Remove datas do texto

            educationComponents.value.push({
                id: 2000 + index, // Gera ID começando de 2000
                text: textoSemDatas.length > 0 ? textoSemDatas : isEnglish ? 'Add education' : 'Adicionar educação',
                title: ano != null ? ano.anoInicio + ' - ' + ano.anoFim : '2020 - 2021',
                norender: false
            });
        });
    } else {
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
        localUpdatedUser.grade.splice(index, 1);
        emit('updateUser', localUpdatedUser)
    };

    // educationComponents
    watch(() => localUpdatedUser.grade, (newEducation, oldEducation) => {
        if (newEducation !== oldEducation) {
            emit('updateUser', localUpdatedUser);
        }
    });

    watch(() => props.user, (newUser, oldUser) => {
        if (newUser !== oldUser) {
            additionalComponents.value = [
                {
                    id: 1000,
                    title: "RESUME",
                    text: newUser.name ? newUser.name : isEnglish ? 'Your name: Type in here' : "Seu nome: Digite aqui",
                    norender: true
                },
                {
                    id: 1001,
                    title: null,
                    text: newUser.contact.address ?
                        newUser.contact?.address : isEnglish ?
                        'Your address: Type in here' :
                        'Seu endereço: Digite aqui',
                    norender: true
                },
                {
                    id: 1002,
                    title: null,
                    text: newUser.contact.phone.length > 0 ? newUser.contact?.phone[0] : isEnglish ? 'Phone: Type in here' : 'Telefone: Digite aqui',
                    norender: true
                },
                {
                    id: 1003,
                    title: null,
                    text: newUser.contact.email.length > 0 ? newUser.contact?.email[0] : isEnglish ? 'Email: Type in here' : 'E-mail: Digite aqui',
                    norender: true
                },
                {
                    id: 1004,
                    title: isEnglish ? 'Objective' : 'Objetivo',
                    text: newUser.profession ? newUser.profession : isEnglish ? 'Type in here' : 'Digite aqui',
                    norender: true
                },
                {
                    id: 1005,
                    title: isEnglish ? 'Skills summary' : 'Habilidades',
                    text: newUser.hability ? newUser.hability : isEnglish ? 'Type in here' : 'Digite aqui',
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
                    title: newUser?.otherExperiencies?.title ? newUser.otherExperiencies.title :
                        isEnglish ? 'May type Date 2019-2020' : 'Talvez uma data 2019-2020',
                    text: newUser?.otherExperiencies?.text ? newUser?.otherExperiencies?.text :
                        isEnglish ? 'A description what you had been doing' : 'Uma descrição do que você fez',
                    norender: true
                },
                {
                    id: 1010,
                    title: isEnglish ? 'Languages' : 'línguas',
                    text: isEnglish ? 'ex. Portuguese: Native speaker.' : 'exemplo, nativo falante de português.',
                    norender: true
                },
                {
                    id: 1012,
                    title: isEnglish ? 'Personal' : 'Pessoal',
                    text: newUser?.resume ? newUser.resume : isEnglish ? 'about you.' : 'sobre você.',
                    norender: true
                },
            ];
        }
    });

    const updateLocalUserGradeData = (index, title, text) => {
        localUpdatedUser.grade[index] = title + ' ' + text;
        emit('updateUser', localUpdatedUser);
    }

    const experiencesComponents = ref([]);

    const updateUserExperiecies = (experiencies) => {
        localUpdatedUser.userExperiences = [...experiencies];

        // precisa garantir reatividade
        Object.assign(localUpdatedUser, { userExperiences: [...experiencies] });

        emit('updateUser', { ...localUpdatedUser });
    };

    // Watch for changes in props.user.userExperiences
    watch(() => props.user.userExperiences, (newExperiences) => {
        experiencesComponents.value = []; // Reset the array
        if (newExperiences && newExperiences.length > 0) {
            newExperiences.forEach((ex, index) => {
                let innerText = ex.position ? "<b>"+ex.position+" - </b>" : "";
                innerText += ex.company ? "<b>"+ex.company+"</b><br/>" : "<br/>";
                innerText += ex.description ? ex.description : "";
                const id = ex.id ? ex.id : index;
                const dataFiredContent = ex.dateFired ? ex.dateFired : isEnglish ? "current job" : "trabalho atual"
                experiencesComponents.value.push({
                    id: 3000 + index,
                    title: ex.dateHired ? ex.dateHired + ' - ' + dataFiredContent : isEnglish ? 'Add date' : 'Adicionar data',
                    text: innerText ? innerText : '',
                    job: { ...ex, id } || {},
                    norender: false
                });
            });
        } else {
            experiencesComponents.value.push({
                id: 3000,
                title: '2020 - present',
                text: isEnglish ? '(click here) position - company ↵ description' : '(clicar aqui) cargo - empresa ↵ descricao',
                job: {
                    id: 0
                },
                norender: false
            });
        }
    }, { immediate: true }); // This will run on component mount as well

    const addExperiencesComponents = () => {
        const newId = generateNewId();
        experiencesComponents.value.push({
            id: newId,
            title: '2020 - present',
            text: isEnglish ? '(click here) position - company ↵ description' : '(clicar aqui) cargo - empresa ↵ descricao',
            job: {id : newId},
            norender: false
        });
        localUpdatedUser.userExperiences.push({
            id: newId - 3000,
            position: '',
            company: '',
            description: '',
            dateHired: '',
            dateFired: '',
        })
        emit('updateUser', { ...localUpdatedUser });
    };

    const generateNewId = () => {
        // Começa com o ID base
        let newId = experiencesComponents.value.length;

        // Verifica se o ID já existe na lista
        while (localUpdatedUser.userExperiences.some(component => component.id === newId)) {
            newId++; // Incrementa o ID até encontrar um disponível
        }

        return newId + 3000; // Retorna o novo ID disponível
    };

    const removeExperiencesComponents = (index) => {
        experiencesComponents.value.splice(index, 1);
        localUpdatedUser.userExperiences.splice(index, 1);
        emit('updateUser', localUpdatedUser);
    };


    // Function to add a new ComponentWrap instance
    const addComponent = () => {
        // additionalComponents.value.push({
        //     id: additionalComponents.value.length + 1,
        //     text: "New Text Here",
        //     title: "New Title Here"
        // });
        localUpdatedUser.otherInfos.push("title;text");
        emit('updateUser', localUpdatedUser);
    };

    const getById = (id) => {
        return additionalComponents.value.find(component => component.id === id);
    };

    const removeComponent = (index) => {
        if (index !== undefined && additionalComponents.value.length > index) {
            additionalComponents.value.splice(index, 1);
        }
    };

    const removeOtherInfosText = (index) => {
        if(index !== undefined && localUpdatedUser.otherInfos.length > index) {
            localUpdatedUser.otherInfos.splice(index, 1);
            emit('updateUser', localUpdatedUser);
        }
    }

    const updateTitle = ({ id, title }) => {
        // Find the corresponding component (education or experience)
        let component = additionalComponents.value.find(c => c.id === Number(id))
            || educationComponents.value.find(c => c.id === Number(id))
            || experiencesComponents.value.find(c => c.id === Number(id));

            if (component) {
                // Update the title of the component
                component.title = title;

                if(Number(id) === 1009) {
                    localUpdatedUser.otherExperiencies.title = title;
                }

                let dateHired = null;
                let dateFired = null;

                // Determine the date format from the title
                if (title.includes(' - ')) {
                    // Format: "2024-01 - 2024-11" or "2020 - 2021"
                    [dateHired, dateFired] = title.split(' - ').map(date => date.trim());
                } else if (title.includes('-')) {
                    // Format: "2020 - current job" or "2020 - trabalho atual"
                    const parts = title.split('-').map(part => part.trim());
                    dateHired = parts[0];  // The starting year
                    dateFired = null;       // Set dateFired to null for current jobs
                } else {
                    // Single year or job description
                    dateHired = title.trim();
                    dateFired = null; // No end date if only a single year or current job
                }

                // Update localUpdatedUser based on the component ID
                const experienceIndex = localUpdatedUser.userExperiences.findIndex(ex => ex.id === component.id - 3000);
                if (experienceIndex !== -1) {
                    // Update the existing experience
                    localUpdatedUser.userExperiences[experienceIndex].dateHired = dateHired || localUpdatedUser.userExperiences[experienceIndex].dateHired; // Update only if a new value is present
                    localUpdatedUser.userExperiences[experienceIndex].dateFired = dateFired; // Set to null to indicate current job
                    // Emit the updated user
                    emit('updateUser', localUpdatedUser);
                } else {
                    console.warn('Experience not found:', component.id);
                }

            // If the component is of type education, update the text in the grade
            if (educationComponents.value.some(c => c.id === Number(id))) {
                const index = component.id - 2000; // Calculate the correct index
                updateLocalUserGradeData(index, title, component.text);
            }
        }
    };

    const updateAddress = (text) => {
        // Inicializa o objeto adressObject se ele não existir
        if (!localUpdatedUser.contact.adressObject) {
            localUpdatedUser.contact.adressObject = {
                street: '',
                number: '',
                district: '',
                city: '',
                state: '',
                country: ''
            };
        }

        let address = localUpdatedUser.contact.adressObject;

        // Usa regex para capturar o número (primeira sequência de dígitos no texto)
        const numberMatch = text.match(/\d+/);
        if (numberMatch) {
            address.number = numberMatch[0]; // Captura o número
        }

        // Remove espaços extras e divide por vírgulas, hífens, ponto final ou ponto e vírgula
        let parts = text.split(/,| - |\.|;/).map(part => part.trim());

        parts.forEach((part, index) => {
            part = part.trim(); // Limpar espaços em branco

            // Verifica se é rua/avenida
            if (part.toLowerCase().includes('rua') || part.toLowerCase().includes('street') ||
                part.toLowerCase().includes('avenida') || part.toLowerCase().includes('avenue') ||
                part.toLowerCase().includes('av.')) {
                address.street = part.replace(/\d+/, '').trim(); // Remove o número da rua
            }

            // Verifica se é bairro/distrito. Evita confundir com o número ou cidade/estado
            if (part.toLowerCase().includes('bairro') || part.toLowerCase().includes('district') ||
                (!part.match(/\d+/) && !part.toLowerCase().includes('rua') && !part.toLowerCase().includes('avenida') &&
                !part.includes(' - ') && index > 0 && index < parts.length - 2)) {
                address.district = part;
            }

            // Verifica cidade e estado juntos (último segmento após o último hífen)
            if (index === parts.length - 2 && part.includes(" - ")) {
                let [city, state] = part.split(" - ");
                address.city = city.trim();
                address.state = state.trim();
            }

            // Verifica estado (quando isolado e abreviado)
            if (part.length === 2 && /^[A-Z]{2}$/.test(part)) {
                address.state = part;
            }

            // Verifica se é país (última parte ou seguido por ponto final/ponto e vírgula)
            if (index === parts.length - 1 && (part.toLowerCase().includes('brasil') || part.toLowerCase().includes('country'))) {
                address.country = part;
            }
        });

        // Atualiza o campo de endereço com o texto original
        localUpdatedUser.contact.address = text;
        // Atualiza o objeto de endereço completo
        localUpdatedUser.contact.adressObject = address;

        // Emite o evento com o usuário atualizado
        emit('updateUser', localUpdatedUser);
    };

    const updateText = ({ id, text }) => {
        let component = additionalComponents.value.find(c => c.id === Number(id));

        if (component) {
            component.text = text;

            if (Number(id) === 1009) {
                localUpdatedUser.otherExperiencies.text = text;
            }else if (Number(id) === 1001) {
                updateAddress(text);
            }
        }

        // If not found, try to find it in educationComponents
        if (!component) {
            component = educationComponents.value.find(c => c.id === Number(id));
            if (component) {
                component.text = text;
            }
            localUpdatedUser.grade = educationComponents.value.map(c => `${c.title} ${c.text}`);
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
                        id: component.id - 3000
                    });
                }
            }
        }

        if (!component) {
            console.error(`Component with id ${id} not found.`);
        } else {
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
                    localUpdatedUser.contact.address = component.text;
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
    }, { deep: true });


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


    function extrairDatas(texto) {
        // Expressão regular para capturar o formato de datas como "2020 - 2021", "2020 à 2021" e "2020 -"
        const regex = /(\d{4})\s*[–\-à]?\s*(\d{4})?/;

        // Executa a RegEx no texto fornecido
        const resultado = texto.match(regex);

        // Se o regex encontrar datas, extrair as duas partes (ano inicial e final)
        if (resultado) {
            const anoInicio = resultado[1]; // Primeiro grupo de captura (primeiro ano)
            const anoFim = resultado[2] || null; // Segundo grupo de captura (segundo ano), pode ser nulo

            return {
                anoInicio,
                anoFim
            };
        }

        // Retorna null se não encontrar datas
        return null;
    }

    function removerDatas(texto) {
        // Expressão regular para capturar o formato de datas como "2020 - 2021", "2020 à 2021" e "2020 -"
        const regex = /(\d{4})\s*[–\-à]?\s*(\d{4})? ?/g;
        // Substitui as datas por uma string vazia
        return texto.replace(regex, '').trim(); // Remove as datas e espaços extras
    }

    const otherInfosTitleUpdate = (updateItem) => {
        const bkText = localUpdatedUser.otherInfos[updateItem.index];
        const parts = bkText.split(';');
        if( parts.length > 1) {
            localUpdatedUser.otherInfos[updateItem.index] = updateItem.value + ';' + parts[1];
        }else {
            localUpdatedUser.otherInfos[updateItem.index] = updateItem.value + ';';
        }
        emit('updateUser', localUpdatedUser);
    }

    const otherInfosTextUpdate = (updateItem) => {
        const bkText = localUpdatedUser.otherInfos[updateItem.index];
        const parts = bkText.split(';');
        if( parts.length > 1) {
            localUpdatedUser.otherInfos[updateItem.index] = parts[0] + ';' + updateItem.value;
        }else {
            localUpdatedUser.otherInfos[updateItem.index] = ';' + updateItem.value;
        }
        emit('updateUser', localUpdatedUser);
    }


    const updateCompetence = (updatedList) => {
        localUpdatedUser.competence = updatedList;
        emit('updateUser', localUpdatedUser);
    }
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