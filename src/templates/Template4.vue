<template>
    <div class="template">
        <div @click="$emit('add-profession')" class="row">
            <h3>{{ props.user?.profession == null || props.user.profession == "" ? "MY PROFESSION" : props.user.profession  }}</h3>
        </div>
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
                <span>ADDRES: {{ props.user.contact.address ? props.user.contact.address : "Address" }}</span>
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
                    <div v-if="props.user.grade.length > 0"
                        class="education">
                        <h4 @click="$emit('add-formacao')">EDUCATION</h4>
                        <div v-for="(item, index) in props.user.grade" :key="index">
                            <div>
                                {{ index+1 + " - " +item }}
                                <img @click="deleteEducation(index)" :src="deleteIcon" alt="x" class="delete">
                            </div>
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
                    <div v-if="props.user.userExperiences.length === 0" class="experiencies">
                        <h4 @click="$emit('add-experiencia')">WORK EXPERIENCE</h4>
                        <div class="work">
                            <p>Job title</p>
                            <p><span>Company name</span><span>/ 2021 - present</span></p>
                            <p>Description</p>
                        </div>
                    </div>
                    <div v-else>
                        <h4 @click="$emit('add-experiencia')">WORK EXPERIENCE</h4>
                        <div v-for="item in props.user.userExperiences" :key="item.id">
                            <div class="work">
                                <p>
                                    {{ item.position }}
                                    <img @click="deleteWork(item.id)" class="delete" :src="deleteIcon" alt="x">
                                </p>
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
        'add-experiencia',
        'delete-from-education',
        'delete-from-experiences',
        'add-profession'
    ]);

    const localAbility = ref(props.user?.ability);

    watchEffect(() => {
        localAbility.value = props.user?.ability || null;
    });

    const deleteIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXklEQVR4nO2Z2U7bUBCGeZa2dGULhITEWciCs0GgZSlIVcVFH6A3tOx7xXNVRaLqK6BSEi/ZbJaEq5JkqnGUioJrH09Q6wuPNFfxxffZv8+ZE3d1OeWUU07Zsq6y85ladkG8yi5AbWIeauPYr6GWwZ6Dahp7Fqop7BmoJmfgMjHdav5Vq8dean0Rn2p1bBIuothZOI9gT8D5KPY4nIexM3AWysBZMN3qQArOuJSgcqmUZYHaxLxgA3hQuSQovkSe8AT+M3ygBa/6E6D6EkB5AraBV308QcBG8MrIGEXAPvCKlyJgI3jFG6cI2Ade8RAEWOHV+BSIkXEoRbPM8IVAEvJ+HspckgleGY5RBMzhK/FJOH3zDmpH30Ba2wU5nDGFl7gECMvbUDv8CicziyD7eVP4ijtKEGC48wh/raiA1azXQdr8BFI4/Vd4keNBXNvTrsW6rijwffotlEZ4Q3iigHHmMTZ452+WJrGxD1IoZQrfruqXI8h5YobwlaEIQcDkhcXMY2xuA/2WCCZN4Zv1OghLGyB5Y4bwlcFR6wIsqw1mXlq/CwaNBkjbByBwiRb8qo5oowHi+j7kPVFT+DJZgGGpRAlR70mgxNbBvcCXXWGCgIV1Xg6ldUGh0dRgO4UvD4SIAhY2KTmYAnF1567EPcCX+ykChB1WCiRBXNnR3oE78M0mGb7cH6QJWB0PcJPSoqQjgHFCgZw7ahm+1EcQIMObRWhtD3JDEUvwpd4AUaBDeIzN7Ti1JHbh1BVmhi/1cgSBTuHbL+yHTd3fhNVdyKEEA3yphyLAAM+ySeWHo5Bf2tCXWNmGH/1BU/jiCz9FwHwkxqlSdzxY2fljtcm7IyB83NK99vT9MggoYQBffO6zLmB2GMF5HkdiM/j2apMbDOvG6fLzIZz0cIbwRAHjkxQeRk5mF7WR2Ay+vdpg5m/G6We5AseZOZD7AobwxWcjBAGGP50K/oQ2z1cPj7SpkmWTyg2EtNjgnT/OzIHAAF986qUImP9jhicpPIzgPM8yErdXG8w8xkZmhC+QBDo4gFvdpEom8IUnHoqAfeALjwkCdoIvdA8TBGwEL3e7iQI2gZcfUQRsBC8/HCIIaF9G7AEvP3BZ/8CBn3VUPy/YAV5+6EpaFnDKKaec6voX9QukVjNwcptqWQAAAABJRU5ErkJggg==";

    const deleteEducation = (index) => {
        emit('delete-from-education', index);
    }

    const deleteWork = (id) => {
        emit('delete-from-experiences', id);
    }

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
        && p:first-child {
            text-transform: uppercase;
            font-weight: bold;

            .delete {
                width: 24px;
                height: 24px;
            }
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

        .main .right {
            display: flex !important;
            margin-left: 20px;
        }

        .delete {
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