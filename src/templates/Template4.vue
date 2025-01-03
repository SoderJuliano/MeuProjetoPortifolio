<template>
    <div class="template">
        <div class="row"><h3>{{ props.user.progession ?? "MY PROFESSION" }}</h3></div>
        <div @click="$emit('add-nome')" class="row"><h1>{{ props.user.name ?? "MY NAME" }}</h1></div>
        <div @click="$emit('add-info')" class="row">
            <p>
                <span>EMAIL: {{ props.user.contact.email[0] ?? "email" }}</span>
                <span class="separator">|</span>
                <span> PROTFOLIO/SITE {{ props.user.social[0] ?? "webpage" }}</span>
            </p>
        </div>
        <div @click="$emit('add-info')" class="row">
            <p>
                <span>PHONE: {{ props.user.contact.phone[0] ?? "phone" }}</span>
                <span>ADDRES: {{ props.user.contact.address ? adressObject : "Address" }}</span>
            </p>
        </div>
        <div class="dividedline"></div>
        <div @click="$emit('add-resumo')" class="summary">
            <h4>SUMMARY</h4>
            <p>{{ props.user.resume ? props.user.resume : "Summary" }}</p>
        </div>
        <div class="dividedline"></div>
        <div class="row">
            <div class="main">
                <div class="left">
                    <div v-if="props.user.grade.length > 0" @click="$emit('add-formacao')"
                        class="education">
                        <h4>EDUCATION</h4>
                        <div v-for="(item, index) in props.user.grade" :key="index">
                            {{ index+1 + " - " +item }}
                        </div>
                    </div>
                    <div v-else class="education" @click="$emit('add-formacao')">
                        <h4>EDUCATION</h4>
                        <p>1 - School at ...</p>
                        <p>2 - University at ...</p>
                    </div>
                    <div v-if="!props.user?.ability" @click="$emit('add-habilidade')"
                        class="skills">
                        <h4>SKILLS</h4>
                        <p>Skill 1</p>
                        <p>Skill 2</p>
                        <p>Skill 3</p>
                    </div>
                    <div v-else @click="$emit('add-habilidade')" class="skills">
                        <h4>SKILLS</h4>
                        <div v-for="item in localAbility.split(',')" :key="item">
                            * {{ item }}
                        </div>
                    </div>
                </div>
                <div class="horizontalline"></div>
                <div class="right">
                    <div @click="$emit('add-experiencia')"
                    v-if="props.user.userExperiences.length === 0"
                    class="experiencies">
                        <h4>WORK EXPERIENCE</h4>
                        <div class="work">
                            <p>Job title</p>
                            <p><span>Company name</span><span>/ 2021 - present</span></p>
                            <p>Description</p>
                        </div>
                    </div>
                    <div v-else @click="$emit('add-experiencia')">
                        <h4>WORK EXPERIENCE</h4>
                        <div v-for="item in props.user.userExperiences" :key="item.id">
                            <div class="work">
                                <p>{{ item.position }}</p>
                                <p><span>{{ item.company }}</span><span>/ {{ item.dateHired +"-"+ item.dateFired}} present</span></p>
                                <p>{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, defineEmits, watchEffect, ref } from 'vue';


    const props = defineProps({
        user: Object,
        language: String
    });

    const emit = defineEmits([
        'add-nome',
        'add-info',
        'add-resumo',
        'add-formacao',
        'add-habilidade',
        'add-experiencia'
    ]);

    const localAbility = ref(props.user?.ability);

    watchEffect(() => {
        localAbility.value = props.user?.ability || null;
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
                }

                && .skills {
                    text-align: start;
                    cursor: pointer;

                    && p {
                        justify-content: start;
                    }
                }
            }

            && .right {
                width: 54%;

                && p {
                    justify-content: start;


                    && span {
                        margin: 0;
                    }
                }
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
        && p:first-child {
            text-transform: uppercase;
            font-weight: bold;
        }
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
    }
</style>