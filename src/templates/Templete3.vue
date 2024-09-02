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
        <br/>
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
    </div>
</template>

<script setup>
    import ComponentWrap from '../components/componentesCompartilhados/ComponentWrap.vue';

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
.template {
    margin-top: 30px;
    width: 100%;
    min-height: 100vh;
    max-height: 100%;
    border-radius: 8px;
    border: solid black 1px;
    background-color: #FAFAFA;
}
@media print {
    .template {
        margin-top: 10px;
        border: none;
        background-color: white;
    }
}
</style>