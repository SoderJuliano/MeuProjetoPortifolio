<template>
    <div class="template">
        <div @click="$emit('add-profession')" class="row">
            <h3>{{ props.user?.profession == null || props.user.profession == "" ? "MY PROFESSION" : props.user.profession  }}</h3>
        </div>
        <div @click="$emit('add-nome')" class="row"><h1>{{ props.user.name || (isPortuguese ? "MEU NOME" : "MY NAME") }}</h1></div>
        <div class="row">
            <p>
                <span @click="$emit('add-info')" >EMAIL: {{ props.user.contact.email[0] ?? (isPortuguese ? "email" : "EMAIL") }}</span>
                <span class="separator">|</span>
                <span @click="$emit('add-SocialLink')">
                    {{
                        Array.isArray(props.user?.social) && props.user?.social?.length
                        ? props.user.social[props.user.social.length - 1]
                        : isPortuguese
                        ? "webpage"
                        : "PORTFOLIO/SITE"
                    }}
                </span>
            </p>
        </div>
        <div @click="$emit('add-info')" class="row">
            <p>
                <span>PHONE: {{ props.user.contact.phone[0] ?? (isPortuguese ? "phone" : "PHONE") }}</span>
                <span>ADDRES: {{ props.user.contact.address ? props.user.contact.address : (isPortuguese ? "Address" : "ADDRESS") }}</span>
            </p>

        </div>
        <div class="dividedline"></div>
        <div @click="addSummary" class="summary">
            <h4>{{ isPortuguese ? "RESUMO" : "SUMMARY" }}</h4>
            <p>{{ props.user.resume ? props.user.resume : (isPortuguese ? "Resumo" : "SUMMARY") }}</p>
            <span @click="addSummary" class="ia">
                {{ isPortuguese ? "Melhorar com IA 🤖" : "Improve text 🤖" }}
            </span>
        </div>
        <div class="dividedline"></div>
        <div class="row">
            <div class="main">
                <div class="left">
                    <div v-if="props.user.grade?.length > 0"
                        class="education">
                        <h4 @click="$emit('add-formacao')">{{ isPortuguese ? "FORMAÇÃO" : "EDUCATION" }}</h4>
                        <div v-for="(item, index) in props.user.grade" :key="index">
                            <div>
                                {{ index+1 + " - " +item }}
                                <img @click="deleteEducation(index)" :src="deleteIcon" alt="x" class="delete">
                            </div>
                        </div>
                    </div>
                    <div v-else class="education" @click="$emit('add-formacao')">
                        <h4>{{ isPortuguese ? "FORMAÇÃO" : "EDUCATION" }}</h4>
                        <p>1 - School at ...</p>
                        <p>2 - University at ...</p>
                    </div>
                    <div v-if="!localAbility" @click="$emit('add-habilidade')"
                        class="skills">
                        <h4>{{ isPortuguese ? "HABILIDADES" : "SKILLS" }}</h4>
                        <p>Skill 1</p>
                        <p>Skill 2</p>
                        <p>Skill 3</p>
                    </div>
                    <div v-else @click="$emit('add-habilidade')" class="skills">
                        <h4>{{ isPortuguese ? "HABILIDADES" : "SKILLS" }}</h4>
                        <div v-for="item in localAbility.split(',')" :key="item">
                            * {{ item }}
                        </div>
                    </div>
		</div>
                <div class="horizontalline"></div>
                 <div class="right">
                    <div v-if="props.user.userExperiences.length === 0" class="experiencies">
                        <h4 @click="$emit('add-experiencia')">{{ isPortuguese ? "EXPERIÊNCIA PROFISSIONAL" : "WORK EXPERIENCE" }}</h4>
                        <div class="work">
                            <p>Job title</p>
                            <p><span>Company name</span><span> / 2021 - present</span></p>
                            <p>Description</p>
                        </div>
                    </div>
                    <div v-else>
                        <h4 @click="$emit('add-experiencia')">
                            {{ isPortuguese ? "EXPERIÊNCIA PROFISSIONAL" : "WORK EXPERIENCE" }}
                        </h4>
                        <div v-for="item in props.user.userExperiences" :key="item.id">
                            <div class="work">
                                <p>
                                    {{ item.position }}
                                    <img @click="deleteWork(item.id)" class="delete" :src="deleteIcon" alt="x">
                                </p>
                                <p>
                                    <span>{{ item.company +' |'}}</span>
                                    <span v-if="!item.editing">
                                          {{ '| '+formatDateRange(item.dateHired, item.dateFired) }}
                                        <img @click="enableEditing(item)"
                                        class="edit-icon"
                                        src="../assets/edit-pen.png"
                                        alt="✏️"
                                        title="Editar datas">
                                    </span>
                                    <span v-else class="date-editor">
                                        <input v-model="item.tempDateHired" type="text" placeholder="Data início">
                                        <input v-model="item.tempDateFired" type="text" placeholder="Data fim">
                                        <button @click="saveDates(item)">[✓]</button>
                                        <button @click="cancelEditing(item)">[✕]</button>
                                    </span>
                                </p>
                                <p>{{ item.description }}</p>
                                <span
                                    v-if="loggedIn
                                    && showIABnt
                                    && Array.isArray(props.user?.contact?.email)
                                    && props.user.contact.email.length > 0
                                    && successIAText == null"
                                    @click="improveText(item)"
                                    class="ia"
                                    :disabled="loading[item.id] || false"
                                >
                                    <span v-if="loading[item.id]">
                                        <i class="spinner-emoji">⚙️</i>
                                        {{ isPortuguese ? "Processando..." : "Processing..." }}
                                    </span>
                                    <span v-else>
                                        {{ isPortuguese ? "Melhorar com IA 🤖" : "Improve text 🤖" }}
                                    </span>
                                </span>
                                <span class="ia" v-else-if="loading[item.id] == false && successIAText != null">
                                        {{ successIAText }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, defineEmits, watch, ref } from 'vue';
    import { improveTextLlama } from '../components/configs/requests';
    import authService from '../services/authService';
    import { showAlert } from 'simple-alerts/dist/showAlert.js'

    const props = defineProps({
        user: Object,
        language: String
    });

    let isPortuguese = props.language.includes("pt");

    const loading = ref({});

    const successIAText = ref(null);

    let loggedIn = authService.hasToken();

    const showIABnt = ref(true)

    const emit = defineEmits([
        'add-nome',
        'add-info',
        'add-resumo',
        'add-formacao',
        'add-habilidade',
        'add-experiencia',
        'delete-from-education',
        'delete-from-experiences',
        'add-profession',
        'add-SocialLink',
        'updateUser'
    ]);

    const localAbility = ref(props.user?.ability ? props.user.ability : props?.user?.hability);

    watch(() => props.user,
    	(u) => { 
            localAbility.value = u?.ability || null; console.log("New user", u); },
    	{ deep: true }
    );

    watch(() => props.language, () => {
        isPortuguese = props.language.includes("pt");
    });

    const deleteIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXklEQVR4nO2Z2U7bUBCGeZa2dGULhITEWciCs0GgZSlIVcVFH6A3tOx7xXNVRaLqK6BSEi/ZbJaEq5JkqnGUioJrH09Q6wuPNFfxxffZv8+ZE3d1OeWUU07Zsq6y85ladkG8yi5AbWIeauPYr6GWwZ6Dahp7Fqop7BmoJmfgMjHdav5Vq8dean0Rn2p1bBIuothZOI9gT8D5KPY4nIexM3AWysBZMN3qQArOuJSgcqmUZYHaxLxgA3hQuSQovkSe8AT+M3ygBa/6E6D6EkB5AraBV308QcBG8MrIGEXAPvCKlyJgI3jFG6cI2Ade8RAEWOHV+BSIkXEoRbPM8IVAEvJ+HspckgleGY5RBMzhK/FJOH3zDmpH30Ba2wU5nDGFl7gECMvbUDv8CicziyD7eVP4ijtKEGC48wh/raiA1azXQdr8BFI4/Vd4keNBXNvTrsW6rijwffotlEZ4Q3iigHHmMTZ452+WJrGxD1IoZQrfruqXI8h5YobwlaEIQcDkhcXMY2xuA/2WCCZN4Zv1OghLGyB5Y4bwlcFR6wIsqw1mXlq/CwaNBkjbByBwiRb8qo5oowHi+j7kPVFT+DJZgGGpRAlR70mgxNbBvcCXXWGCgIV1Xg6ldUGh0dRgO4UvD4SIAhY2KTmYAnF1567EPcCX+ykChB1WCiRBXNnR3oE78M0mGb7cH6QJWB0PcJPSoqQjgHFCgZw7ahm+1EcQIMObRWhtD3JDEUvwpd4AUaBDeIzN7Ti1JHbh1BVmhi/1cgSBTuHbL+yHTd3fhNVdyKEEA3yphyLAAM+ySeWHo5Bf2tCXWNmGH/1BU/jiCz9FwHwkxqlSdzxY2fljtcm7IyB83NK99vT9MggoYQBffO6zLmB2GMF5HkdiM/j2apMbDOvG6fLzIZz0cIbwRAHjkxQeRk5mF7WR2Ay+vdpg5m/G6We5AseZOZD7AobwxWcjBAGGP50K/oQ2z1cPj7SpkmWTyg2EtNjgnT/OzIHAAF986qUImP9jhicpPIzgPM8yErdXG8w8xkZmhC+QBDo4gFvdpEom8IUnHoqAfeALjwkCdoIvdA8TBGwEL3e7iQI2gZcfUQRsBC8/HCIIaF9G7AEvP3BZ/8CBn3VUPy/YAV5+6EpaFnDKKaec6voX9QukVjNwcptqWQAAAABJRU5ErkJggg==";

    const deleteEducation = (index) => {
        emit('delete-from-education', index);
    }

    const deleteWork = (id) => {
        emit('delete-from-experiences', id);
    }

    // const improveResume = async (text) => {
    //     try {
            
    //     } catch (error) {

    //     }
    // }
    
    const improveText = async (item) => {
        try {
            loading.value[item.id] = true;

            const response = await improveTextLlama({
                text: item.description.trim(),
                email: props.user?.contact?.email[0],
                language: props.language
            });

            item.description = response.data;
            successIAText.value = isPortuguese ?
            "Texto melhorado com sucesso! ✅" 
            : "Text improved successfully! ✅";
        } catch (error) {
            console.error("Erro ao melhorar texto:", error);
            loggedIn = false;
            showAlert(isPortuguese ? 
            'Função temporariamente indisponível, botão será desabilitado momentaniamente'
            : 'Function unavailable, button will be disabled for now'
            );
        } finally {
            loading.value[item.id] = false;
        }

    }

    const formatDateRange = (start, end) => {
        if (!start && !end) return "Período não definido";
        const endText = (end === "null" || !end) ? "present" : end;
        return `${start || "?"} - ${endText}`;
    };

    const enableEditing = (item) => {
        showIABnt.value = false;
        item.editing = true;
        item.tempDateHired = item.dateHired;
        item.tempDateFired = item.dateFired;
    };

    const cancelEditing = (item) => {
        item.editing = false;
        showIABnt.value = true;
    };

    const saveDates = async (item) => {
        try {
            // Atualiza as datas temporárias para as definitivas
            item.dateHired = item.tempDateHired;
            item.dateFired = item.tempDateFired;
            item.editing = false;

            // Encontra o índice do item no array userExperiences (agora usando props.user)
            const experienceIndex = props.user.userExperiences.findIndex(
                exp => exp.company === item.company
            );

            if (experienceIndex !== -1) {
                // Cria uma cópia do array para imutabilidade
                const updatedExperiences = [...props.user.userExperiences];
                
                // Atualiza o item específico
                updatedExperiences[experienceIndex] = item;

                // Emite o evento com o usuário atualizado (sem .value)
                emit('updateUser', {
                    ...props.user, // Acessa a prop diretamente
                    userExperiences: updatedExperiences
                });
            }

            showIABnt.value = true;
        } catch (error) {
            console.error("Erro ao salvar datas:", error);
            showIABnt.value = true;
        }
    };

    const addSummary = () => {
        emit('add-resumo');
        setTimeout(() => {
            document.getElementById("modal-input").value = props.user?.resume;
        }, 900)
    }
</script>

<style scoped>

    .date-editor {
        display: inline-flex;
        align-items: center;
        gap: 5px;
    }

    .date-editor input {
        width: 80px;
        padding: 2px 5px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }

    .date-editor button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 14px;
    }

    .edit-icon {
        width: 20px;
        height: 20px;
        margin-left: 5px;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.2s;
    }

    .edit-icon:hover {
        opacity: 1;
    }
    .spinner-emoji {
        display: inline-block;
        animation: spin-gear 1.5s linear infinite;
    }
    .ia {
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
        position: absolute;
        padding: 10px;
        border: solid 1px black;
        display: inline-flexbox;
        right: 40px;
        top: 20px;
        cursor:pointer;
    }

    .ia:hover {
        background-color: black;
        color: white;
    }

    h4 {
        padding: 1px;
        padding-left: 0px;
        border: solid 1px transparent;
        /* transition: border-color 0.3s ease; */
        transition: all 0.3s ease;
    }

    h4:hover {
        border: solid 1px black;
        padding-left: 5px;
    }

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
            cursor: pointer;
        }

        && h1 {
            font-size: 55px;
        }

        && p {
            text-align: center;
            justify-content: center; /* Centraliza os itens horizontalmente */
            align-items: center;
            display: flex;
            cursor: pointer;

            && span {
                margin: 0 10px; /* Espaçamento entre o texto e o separador */
                white-space: nowrap; /* Evita quebra de linha */
            }

            &&.separator {
                margin: 0 10px; /* Margem ao redor do | */
                font-weight: bold; /* Estilização opcional */
            }
        }

        && .main {
            padding: 10px 5%;

            && .left {
                width: 35%;

                && .education {
                    text-align: start;
                    cursor: pointer;

                    && p {
                        justify-content: start;
                    }

                    && .delete {
                        position: absolute;
                        width: 24px;
                        height: 24px;
                        z-index: 2;
                    }
                }

                && .education:hover h4::before {
                    content: "ADD NEW ";
                }

                && .skills {
                    text-align: start;
                    cursor: pointer;

                    && p {
                        justify-content: start;
                    }
                }

                && .skills:hover h4::before {
                    content: "ADD NEW ";
                }
            }

            && .right {
                width: 54%;

                && p {
                    justify-content: start;
                    text-align: start;

                    && span {
                        margin: 0;
                    }
                }

                && h4 {
                    cursor: pointer;
                }
            }

            .right:hover h4::before {
                content: "ADD NEW ";
                cursor: pointer;
            }

            && .horizontalline {
                border-right: solid 2px gray;
                min-height: 500px;
                height: auto;
                color: gray;
            }
        }
    }

    .dividedline {
        width: 90%;
        height: 0%;
        border-bottom: solid 2px gray;
        justify-self: center;
        margin: 0 auto;
    }

    .summary {
        width: 100%;
        display: block;
        padding: 0 5%;
        cursor: pointer;

        && h4 {
            font-size: 26px;
        }

        && p {
            text-align: start;
            justify-content: start;
            padding-top: 10px;
        }
    }

    .work {
        position: relative;

        && p:first-child {
            text-transform: uppercase;
            font-weight: bold;

            .delete {
                width: 24px;
                height: 24px;
            }
        }
    }
    
    .work:hover .ia {
        opacity: 1;
        pointer-events: auto;
    }

    .summary:hover .ia {
        opacity: 1;
        pointer-events: auto;
    }

    @media print {
        .template {
            width: 100%;
            min-height: 100vh;
            max-height: 100%;
            border: none !important;
            box-shadow: none !important;
            background-color: white;
        }

        .main
        {
            position: relative !important;
        }

        .main .right {
            display: flex !important;
            margin-left: 20px;
        }

        .delete {
            display: none;
        }

        h4 {
            border: none;
        }

        .edit-icon {
            display: none;
        }
    }

    @media screen and (max-width: 786px) {
        .template {
            width: 100dvw !important;
        }

        .row {
            && p {
                flex-direction: column;
            }
        }

        .main {
            && .horizontalline {
                display: none;
            }
        }
    }

    @media screen and (max-width: 1900px) and (min-width: 768px) {
        .horizontalline {
            display: none;
        }

        .main {
            display: block;

            && .left, .right {
                width: 100%;
                display: block;
            }

            && .right {
                margin-left: 0;
            }
        }
    }
</style>
