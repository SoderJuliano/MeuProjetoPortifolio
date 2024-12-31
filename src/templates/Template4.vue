<template>
    <div class="template">
        <div class="row"><h3>SOFTWARE ENGINEER</h3></div>
        <div class="row"><h1>JULIANO SODER</h1></div>
        <div class="row">
            <p>
                <span>EMAIL: {{ localUser.contact.email[0] ?? "email" }}</span>
                <span class="separator">|</span>
                <span> PROTFOLIO/SITE {{ localUser.social[0] ?? "phone" }}</span>
            </p>
        </div>
        <div class="row">
            <p>
                <span>PHONE: {{ localUser.contact.phone[0] ?? "phone" }}</span>
                <span>ADDRES: {{ localUser.contact.address ?? "Address" }}</span>
            </p>
        </div>
        <div class="dividedline"></div>
        <div class="summary">
            <h4>SUMMARY</h4>
            <p>{{ localUser.resume ?? "Summary" }}</p>
        </div>
        <div class="dividedline"></div>
        <div class="row">
            <div class="main">
                <div class="left">
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
                <div class="right">
                    <div class="experiencies">
                        <h4>WORK EXPERIENCE</h4>
                        <div class="work">
                            <p>Job title</p>
                            <p><span>Company name</span><span>/ 2021 - present</span></p>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
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


    console.log("user t4", localUser)

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
            justify-content: center; /* Centraliza os itens horizontalmente */
            align-items: center;
            display: flex;

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

                    && p {
                        justify-content: start;
                    }
                }

                && .skills {
                    text-align: start;

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

        && h4 {
            font-size: 26px;
        }

        && p {
            text-align: start;
            justify-content: start;
            padding-top: 10px;
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