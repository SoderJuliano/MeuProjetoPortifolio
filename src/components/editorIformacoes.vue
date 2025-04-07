<template>
    <div class="main-modal-container">
        <h3 id="mainTitle" v-if="mainTitle != 'iconChooser'">{{this.mainTitle.toUpperCase()}}</h3>
        <div v-if="title!='Email' && mainTitle != 'iconChooser'" class="body-modal-container">
                <div v-if="title != null && (ptitle == '' && ptitle3 == '')">

                    <!-- Se for o modal de social pra adicionar link e o link for uma página da web roda esse bloco aqui -->
                    <div style="text-align: start; align-self: start; display: flex;" v-if="(this.mainTitle.toUpperCase().includes('REDES SOCIAIS')) || (this.mainTitle.toUpperCase().includes('SOCIAL NETWORKS'))">
                        <input style="width: 20px; height: 20px;" @change="check($event)" type="checkbox"><label>{{ this.language.includes("en") ? "Add as a web link" : "Adicionar como link de página" }}</label>
                    </div>

                    <div class="modal-internal-content">
                        <!-- Não lembro porque a 3 anos atrás fiz assim, mas vai ficar assim agora -->
                        <p style="margin-right: 10px">{{title == 'Sobre voce' ? 'Sobre você' : title}}</p>
                        <br v-if="title=='Write about you'" />
                        <textarea 
                            v-if="title=='Sobre voce' || title=='Write about you'"
                            name="area" id="modal-input"
                            @keydown.enter="pressedShifAndEnter"
                            cols="40" rows="5"
                            :placeholder="`${this.placeholder}`">
                        </textarea>
                        <textarea
                            v-if="(mainTitle == 'Habilidade' && title == 'Habilidade') || (title == 'Skill')"
                            @keydown.enter="pressedShifAndEnter"
                            cols="40" rows="5" 
                            id="modal-input"
                            type="text"
                            :placeholder="`${this.placeholder}`">
                        </textarea>
                        <input
                            v-if="(title != 'Write about you') && (title != 'Sobre voce') && (title != 'Habilidade') && (title != 'Skill')"
                            @keydown.enter="pressedEnter()"
                            id="modal-input"
                            type="text"
                            :placeholder="`${this.placeholder}`" 
                        >
                        <div v-if="title=='Sobre voce' || title=='Write about you'" class="aboutyou-ia">
                            <span v-if="isEnglish">Improve this text with AI ⋆✴︎˚｡⋆🤖</span>
                            <span v-else>Melhorar esse texto com IA ⋆✴︎˚｡⋆🤖</span>
                            <div @click="go('aboutyou-ia')" class="do-action" v-if="isEnglish">Go!</div>
                            <div @click="go('aboutyou-ia')" class="do-action" v-else>Vai!</div>
                        </div>
                    </div>

                    <span class="balao" v-if="mainTitle == 'Habilidade' && title == 'Habilidade' && language == 'pt-br'">
                        Separe as habilidades por vírgula.
                    </span>

                    <br v-if="!title=='Write about you'"><br>
                    <div class="modal-internal-content" v-if="title == 'Nome da empresa' || title == 'Company name'">
                        <p style="margin-right: 10px" >{{title2}}</p>
                        <input @keydown.enter="pressedEnter()" id="modal-input2" v-if="title == 'Nome da empresa' || title == 'Company name'" type="text" :placeholder="`${this.placeholder2}`">
                    </div>

                    <br v-if="title == 'Nome da empresa' || title == 'Company name'"><br v-if="title == 'Nome da empresa' || title == 'Company name'">

                    <button class="bnt-proximo" v-if="title == 'Nome da empresa' || title == 'Company name'" @click="proximo(title)">{{language == 'pt-br' ? "Proximo" : "Next"}}</button>
                    <button class="save-bnt" v-else v-on:click=add(title)>{{language == 'pt-br' ? "Salvar" : "Save"}}</button><button v-on:click="cancelar">{{language == 'pt-br' ? "Cancelar" : "Cancel"}}</button>
                </div>
                <div v-else>
                    <!-- togle date -->
                    <div v-if="ptitle">
                        <div style="display: flex; justify-content: start;">
                            <span style="margin-right: 10px;">{{language == 'pt-br' ? "Data Simplificada" : "Simplified Data"}}</span>
                            <label class="switch">
                                <input @change="simplifiedDate = !simplifiedDate" type="checkbox" checked  />
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>

                    <div class="modal-internal-content" v-if="ptitle">
                        <p  style="margin-right: 10px">{{ptitle}}</p>
                        <input @keydown.enter="pressedEnterInDate()" v-if="!simplifiedDate" id="input-value-date1" type="date">
                        <input @keydown.enter="pressedEnterInDate()" v-if="simplifiedDate" id="input-value-date1" type="month" />
                    </div>

                    <br v-if="title2">

                    <div v-if="ptitle" class="modal-internal-content">
                        <p style="margin-right: 10px">{{ptitle2}}</p>
                        <input @keydown.enter="pressedEnterInDate()" v-if="!simplifiedDate" id="input-value-date2" type="date">
                        <input @keydown.enter="pressedEnterInDate()" v-if="simplifiedDate" id="input-value-date2" type="month">
                    </div>


                    <br v-if="title2">

                    <div v-if="ptitle3" class="modal-internal-content">
                        <p style="margin-right: 10px;">{{ptitle3}}</p>
                        <textarea @keydown.enter.shift="pressedEnterOk()" id="modal-input3" cols="40" rows="5" :placeholder=this.getJobDescriptionPlaceholderText()></textarea>
                    </div>

                    <br v-if="ptitle3"><br v-if="ptitle3">

                    <button class="bnt-proximo" v-if="ptitle" @click="proximo(title)">{{language == 'pt-br' ? "Proximo" : "Next"}}</button>
                    <button class="save-bnt" v-else v-on:click=add(ptitle3)>{{language == 'pt-br' ? "Salvar" : "Save"}}</button><button v-on:click="cancelar">{{language == 'pt-br' ? "Cancelar" : "Cancel"}}</button>
                </div>
        </div>
        <div v-if="title=='Email'" class="body-modal-container">
            <div v-if="title=='Email' && ptitle!=this.string[0].adress && ptitle!=this.string[1].adress" >
                <p style="margin-right: 10px;">{{title}}</p>
                <input id="modal-input" type="email" :placeholder="`${this.placeholder}`">
                <p style="margin-right: 10px;">{{title2}}</p>
                <input @keydown.enter="pressedEnter()" id="modal-input2" type="text" :placeholder="`${this.placeholder2}`">
                <br><br>
                <button class="bnt-proximo" @click="proximo(title)">{{language == 'pt-br' ? "Próximo" : "Next"}}</button>
                <button v-on:click="cancelar">{{language == 'pt-br' ? "Cancelar" : "Cancel"}}</button>
            </div>

            <!-- Somente quando coloca o endereço -->
            <div class="adress-form" v-else>
                <p>{{ptitle}}</p>
                <input
                    :value="this.userData.getAdressPart('street')"
                    @change="this.userData.setAdressPart('street', $event.target.value)"
                    id="modal-input1"
                    type="text"
                    :placeholder=this.getRua()>
                <input
                    :value="this.userData.getAdressPart('number')"
                    @change="this.userData.setAdressPart('number', $event.target.value)" id="modal-input2" type="text" :placeholder=this.getNumero()>
                <input
                    :value="this.userData.getAdressPart('district')"
                    @change="this.userData.setAdressPart('district', $event.target.value)"
                    id="modal-input3" type="text" :placeholder=this.getBairro()>
                <input
                    :value="this.userData.getAdressPart('city')"
                    @change="this.userData.setAdressPart('city', $event.target.value)"
                    id="modal-input4" type="text" :placeholder=this.getCidade()>
                <input
                    :value="this.userData.getAdressPart('state')"
                    @change="this.userData.setAdressPart('state', $event.target.value)"
                    id="modal-input5" type="text" :placeholder=this.getEstado()>
                <input
                    :value="this.userData.getAdressPart('country')"
                    @change="this.userData.setAdressPart('country', $event.target.value)"
                    @keydown.enter="pressedEnter()" id="modal-input6" type="text" :placeholder=this.getPais()>
                <br>
                <div>
                    <button class="save-bnt" v-on:click=add(ptitle)>{{language == 'pt-br' ? "Salvar" : "Save"}}</button><button v-on:click="cancelar">{{language == 'pt-br' ? "Cancelar" : "Cancel"}}</button>
                </div>
            </div>
        </div>
    </div>
    <!-- New component for chose icons -->
    <div @click="cancelarIsso()" v-if="mainTitle.includes('iconChooser')" class="iconsChooser">
            <iconChooser
                v-if="mainTitle.includes('iconChooser')"
                :title="this.title"
            />
    </div>
</template>

<script>

import strings from '../components/configs/strings.json';
import Job from '../model/jobModel.js';
import UserModel from '../model/userModel';
import IconChooser from './iconComponent/IconChooser.vue';
import * as funcs from './componentesCompartilhados/utilJS/functions';
import $ from 'jquery';
import { improveText, improveTextLlama } from '../components/configs/requests.js';

export default {
    name: 'modal-input',
    data(){
        return{
            string: strings,
            competencias : this.competencia,
            ptitle: '',
            ptitle2: '',
            ptitle3: '',
            job: Object,
            userData: Object,
            simplifiedDate: true,
            mainTitleCaps: this.mainTitle.toUpperCase(),
            pressed: false,
            isPageLink: false,
            isEnglish: true,
        }
    },
    components: {
        IconChooser
    },
    props:{
        mainTitle: String,
        title: String,
        placeholder: String,
        competencia: Array,
        experiences: Array,
        title2: String,
        placeholder2: String,
        template: Number,
        language: String,
        user: Object,
    },
    emits:["update-name", "add-profissao", "adicionar-formacao", "adicionar-habilidade", "update-experiences", "update-user"],
    methods:{
        go(val) {
            $('.do-action').css({
                'opacity': '0.5',
                'cursor': 'not-allowed',
                'pointer-events': 'none'
            });

            if (val === 'aboutyou-ia') {
                this.handleAboutYouIA();
                return;
            }
            
            // Aqui você pode adicionar outros casos posteriormente
            // Exemplo:
            // if (val === 'outro-caso') {
            //     this.handleOutroCaso();
            // }
            
        },
        
        async handleAboutYouIA() {
            if (!$('#modal-input').val().trim()) {
                $('.aboutyou-ia span:first-child').text(this.isEnglish ? 'Input is empty 🤖' : 'O campo esta vazio 🤖');
            
                $('.do-action').css({
                    'opacity': '1',
                    'cursor': 'pointer',
                    'pointer-events': 'auto'
                });
                return;
            }

            $('.aboutyou-ia span:first-child').text(this.isEnglish ? 'Generating, hold on 🤖' : 'Gerando, aguenta ai 🤖');

            if ($('#modal-input').val().trim().length < 10) {
                $('.aboutyou-ia span:first-child').text(this.isEnglish ? 'Minimum 10 characters 🤖' : 'Mínimo 10 caracteres 🤖');
    
                $('.do-action').css({
                    'opacity': '1',
                    'cursor': 'pointer',
                    'pointer-events': 'auto'
                });
                return;
            }
            try {
                // const response = await improveText(
                //     {
                //         text: $('#modal-input').val().trim(),
                //         email: this.userData?.contact?.email[0],
                //         language: this.language
                //     }
                // );
                
                const response = await improveTextLlama(
                    {
                        text: $('#modal-input').val().trim(),
                        email: this.userData?.contact?.email[0],
                        language: this.language
                    }
                );

                $('#modal-input').val(response.data);
                $('.aboutyou-ia span:last-child').text(this.isEnglish ? 'Done!' : 'Feito!');
                $('.aboutyou-ia span:first-child').text(this.isEnglish ? 'what do you think? 🤖' : 'O que achou? 🤖');
            }catch (error) {
                $('.aboutyou-ia span:first-child').text(this.isEnglish ? 'Error! Try again later 🤖' : 'Erro! Tente mais tarde 🤖');
            }
            
            $('.do-action').css({
                'opacity': '1',
                'cursor': 'pointer',
                'pointer-events': 'auto'
            });
        },
        check(event) {
            this.isPageLink = event.target.checked;
        },
        cancelarIsso()
        {
            $('.iconsChooser').css({'display': 'none'})
            this.cancelar()
        },
        getJobDescriptionPlaceholderText(){
            return this.language == 'pt-br' ? "Faça uma descrição resumida" : "Make a short description"
        },
        getRua(){
            return this.language == 'pt-br' ? this.string[0].street : this.string[1].street
        },
        getNumero(){
            return this.language == 'pt-br' ? this.string[0].hNumber : this.string[1].hNumber
        },
        getCidade(){
            return this.language == 'pt-br' ? this.string[0].city : this.string[1].city
        },
        getBairro(){
            return this.language == 'pt-br' ? this.string[0].district : this.string[1].district
        },
        getPais(){
            return this.language == 'pt-br' ? this.string[0].coutry : this.string[1].coutry
        },
        getEstado(){
            return this.language == 'pt-br' ? this.string[0].state : this.string[1].state
        },
        proximo(title){
            this.changePage();
            if(title == "Email"){

                const email = document.getElementById('modal-input').value
                const telefone = document.getElementById('modal-input2').value

                this.userData.contact.phone = telefone ? [telefone] : ''
                this.userData.contact.email = email ? [email] : ''
                this.ptitle = this.language == 'pt-br' ? this.string[0].adress : this.string[1].adress
            }
            else if((title==strings[0].companyName || title==strings[1].companyName)  && this.ptitle == ''){
                const job = new Job(this.userData?.userExperiences?.length);
                this.currentJobId = job.getId();
                job.setCompany($("#modal-input").val())
                job.setPosition($("#modal-input2").val())
                // console.log(job)
                this.userData.userExperiences.push(job);

                this.ptitle = this.language == 'pt-br' ? 'Data de admicao' : 'Date when start to work here'
                this.ptitle2 = this.language == 'pt-br' ? 'Data de demicao' : 'Date of your last day working here'
            }else{
                this.userData?.userExperiences[this.currentJobId]?.setDateHired($("#input-value-date1").val())
                this.userData?.userExperiences[this.currentJobId]?.setDateFired($("#input-value-date2").val())
                //// console.log(this.userData.userExperiences[this.currentJobId])
                // console.log(`$("#input-value-date1").val()`)
                // console.log($("#input-value-date1").val())
                this.ptitle3 = this.language == 'pt-br' ? 'Descrição' : 'Description'
                this.ptitle = ''
                this.ptitle2 = ''
            }
            this.changePage2();
        },
        add(title){
            $('.save-bnt').prop('disabled', true);
            // console.log('clicked')
            // console.log(title);
            //title as string
            switch(title) {
                //  The name should be update by this emit update-name
                // 'cause with use another updateUser will not update the name in ther backend
                //  only update-name does it
                case 'Digite nome':
                    const name = document.getElementById('modal-input').value
                    this.template == 1 ? (this.$emit("update-name", name), this.cancelar())
                    : (this.$emit("update-name", name), setTimeout(() => {this.$emit('add-profissao')}, 800))
                    break;
                case 'Type your name':
                    this.userData.name = document.getElementById('modal-input').value
                    if(this.template == 1) {
                        this.cancelar();
                    }else if(this.template == 2) {
                        setTimeout(() => {this.$emit('add-profissao')}, 800);
                    }
                    this.updateUser();
                    break;
                case 'Sua profissão':
                    this.userData.profession = document.getElementById('modal-input').value
                    this.updateUser()
                    this.cancelar()
                    break;
                case 'Your profession':
                    this.userData.profession = document.getElementById('modal-input').value
                    this.updateUser()
                    this.cancelar()
                    break;
                case 'Nova competência':
                    if(document.getElementById('modal-input').value){
                        this.userData.competence.push(document.getElementById('modal-input').value)
                    }
                    this.updateUser();
                    this.cancelar();
                    break;
                case 'New skill':
                    if(document.getElementById('modal-input').value){
                        this.userData.competence.push(document.getElementById('modal-input').value)
                    }
                    this.updateUser();
                    this.cancelar();
                    break;
                case 'Sobre voce':
                    //document.getElementById('resume').textContent = document.getElementById('modal-input').value
                    this.userData.resume = document.getElementById('modal-input').value;
                    this.updateUser();
                    this.cancelar();
                    break;
                case 'Write about you':
                    //document.getElementById('resume').textContent = document.getElementById('modal-input').value
                    this.userData.resume = document.getElementById('modal-input').value;
                    this.updateUser();
                    this.cancelar();
                    break;
                case 'Descrição':
                    // sobre experiencia de trabalho
                    this.adicionarJobs()
                    this.cancelar();
                    break;
                case 'Description':
                    this.adicionarJobs()
                    this.cancelar();
                    break;
                case 'Seu Endereço':
                    this.adicionarEndereco();
                    this.cancelar();
                    break;
                case 'Your adress':
                    this.adicionarEndereco();
                    this.cancelar();
                    break;
                case 'Academic education':
                    this.adicionarFormacao()
                    this.cancelar()
                    break
                case 'Escolaridade':
                    this.adicionarFormacao()
                    this.cancelar()
                    break
                case 'Habilidade':
                    this.adicionarHabilidade()
                    this.cancelar()
                    break
                case 'Skill':
                    this.adicionarHabilidade()
                    this.cancelar()
                    break
                case 'Add link':
                    this.addSocialLink()
                    this.cancelar()
                    break
                default:
                    break;
            }
            this.ptitle = '';
            this.ptitle2 = '';
            this.cancelar()
            document.getElementById('modal-input') ? document.getElementById('modal-input').value = '' : ""
            //$('.save-bnt').prop('disabled', false);
            setTimeout(() => {
                $('.save-bnt').prop('disabled', false);
            }, 2000);
        },
        adicionarFormacao(){
            this.userData.grade.push($("#modal-input").val())
            this.updateUser()
        },
        adicionarHabilidade(){
            this.userData.ability = $("#modal-input").val()
            this.updateUser()
        },
        addSocialLink(){
            this.userData.social.push(this.isPageLink ? "link:"+$("#modal-input").val() : $("#modal-input").val());
            this.updateUser()
        },
        adicionarJobs(){
            //! Here I put the last modal text area content, the job desciption
            this.userData.userExperiences[this.currentJobId].setDescription($("#modal-input3").val())
            this.updateUser();
        },
        updateUser(){
            this.$emit('update-user', this.userData)
        },
        adicionarEndereco(){
            // console.log("called")
            const rua = document.getElementById("modal-input1").value
            const numero = document.getElementById("modal-input2").value
            const bairro = document.getElementById("modal-input3").value
            const cidade = document.getElementById("modal-input4").value
            const estado = document.getElementById("modal-input5").value
            const pais = document.getElementById("modal-input6").value

            const comma = ", ";

            let endereco = this.returnIfNotEmpty(rua)+"->"+this.returnIfNotEmpty(numero)+"->"+this.returnIfNotEmpty(bairro)+"->"+this.returnIfNotEmpty(cidade)+"->"+this.returnIfNotEmpty(estado)+"->"+this.returnIfNotEmpty(pais)

            endereco = endereco.trim();
            endereco = endereco.replaceAll("undefined->", "");
            endereco = endereco.replaceAll("undefined", "");
            endereco = endereco.replaceAll("->", comma);
            endereco += endereco.split("").length > 0 ? "." : "";
            endereco = endereco.replaceAll(", .", ".");

            this.userData.contact.address = endereco;

            this.updateUser()
        },
        returnIfNotEmpty(item) {
            if(item.length > 0) {
                return item;
            }
        },
        cancelar(){
            document.getElementsByClassName("main-modal-container")[0].style.width = "2%";
            document.getElementsByClassName("main-modal-container")[0].style.heigth = "2%";
            document.getElementsByClassName("main-modal-container")[0].style.opacity = "0";
            document.getElementsByClassName("main-modal-container")[0].style.zIndex = "-1";
            this.ptitle = '';
            this.ptitle2 = '';
            this.ptitle3 = '';
            document.getElementById('modal-input') != null ? document.getElementById('modal-input').value = "" : ""
        },
        changePage(){
            document.getElementsByClassName("body-modal-container")[0].style.opacity = "0";
            document.getElementsByClassName("body-modal-container")[0].style.zIndex = "-1";
        },
        changePage2(){
            document.getElementsByClassName("body-modal-container")[0].style.opacity = "100";
            document.getElementsByClassName("body-modal-container")[0].style.zIndex = "10";
        },
        pressedEnter(){
            $(".save-bnt").css('opacity',0.5);
            $(".bnt-proximo").css('opacity',0.5);
            sessionStorage.setItem('enter', true);
            setTimeout(() => {
                $(".save-bnt").css('opacity', 1);
                $(".bnt-proximo").css('opacity', 1);
            }, 300);
        },
        pressedEnterInDate() {
            $(".bnt-proximo").click();
        },
        pressedEnterOk() {
            $(".save-bnt").click();
        },
        pressedShifAndEnter(event) {
            if (event.shiftKey && event.key === 'Enter') {
                $(".save-bnt").click();
            }
        }
    },
    updated() {
        if(this.user.contact.adress != null && this.ptitle == "Seu Endereço") {
            this.user.contact.adress.split(", ").forEach((word, index) => {
                word = word.replace(".", "");
                document.getElementById("modal-input"+(index+1)).value = word;
            });
        }
    },
    mounted() {
        this.isEnglish = this.language.includes("en") ? true : false;

        this.userData = new UserModel();
        this.userData = this.userData.constructorObject(this.user);

        $(".main-modal-container").change(function(e){
            e.preventDefault();
            setTimeout(() => {
                const maintitle  = $("#mainTitle").text()
                const title1 = $(".body-modal-container p").first().text()
                const inputId = e.target.id
                const data = e.target.value
                const pressed = sessionStorage.getItem('enter')

                const modal = {
                    modal_title: maintitle,
                    input_title: title1,
                    inputId: inputId,
                    pressed: pressed,
                    data: data
                }

                $(funcs.witchModalIAm(modal)).click();
                sessionStorage.setItem('enter', false);
            }, 500)
        });
    },
    watch: {
        user: {
            deep: true,
            handler() {
                let model = new UserModel();
                this.userData = model.constructorObject(this.user);
            }
        }
    }
}
</script>

<style>
button {
    background-color: white;
    border-radius: 10px;
    font-size: 16px;
    margin-bottom: 10px;
}
</style>

<style scoped>

.aboutyou-ia {
    display: flex;
    position: relative;
    margin: 10px;
    justify-content: space-around;

    && .do-action {
            border: solid 1px black;
            padding: 10px;
            border-radius: 50%;
            text-align: center;
            display: inline-flex;       /* Usa flexbox para melhor centralização */
            justify-content: center;    /* Centraliza horizontalmente */
            align-items: center;        /* Centraliza verticalmente */
            width: 50px;               /* Largura fixa para formar um círculo perfeito */
            height: 50px;              /* Altura igual à largura */
            line-height: 1;            /* Remove espaçamento extra do texto */
            font-size: 16px;           /* Tamanho adequado para o texto */
            cursor: pointer;           /* Muda cursor para indicar ação */
        }

            /* Opcional: efeitos de hover */
            .do-action:hover {
                background-color: #f0f0f0;
                transform: scale(1.05);
                transition: all 0.2s ease;
            }
}

.adress-form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    margin: 0 auto;
}

.adress-form input {
    width: 100%;
    margin-bottom: 10px;
}

/* .save-bnt {
    background-color: white;
    border-radius: 20px;
    font-size: 16px;
} */
.main-modal-container {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    z-index: -1;
    background-color: rgb(74, 74, 74);
    justify-content: center;
    text-align: center;
    transition-duration: 900ms;
    transition-delay: 200ms;
}
.body-modal-container {
    width: 80vw;
    max-width: 1000px;
    align-self: center;
    background-color: white;
    display: flex;
    justify-content: center;
    margin: 15vh auto;
    padding: 30px;
    transition-duration: 1500ms;
    transition-delay: 200ms;
    border-radius: 10px;
    font-family: 'Roboto Mono', monospace;
}

.body-modal-container input {
    border-radius: 10px;
    padding: 5px;
    font-family: 'Roboto Mono', monospace;
    padding-left: 10px;
    font-size: 16px;
}

input {
    border-radius: 10px;
    padding: 5px;
    font-family: 'Roboto Mono', monospace;
    padding-left: 10px;
    font-size: 16px;
    width: 100%;
}

h3{
    color: white;
    margin-top: 10vh;
}
button{
    margin-left: 15px;
}

.iconsChooser {
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    z-index: 18;
}

    .switch {
        position: relative;
        display: inline-block;
        width: 70px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #2196F3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    .modal-internal-content{
        display: block;
        justify-content: start;
        text-align: start;
    }

    .modal-internal-content p {
        width: 100%;
        text-align: start;
        padding-left: 10px;
    }

    .body-modal-container p {
        width: 100%;
        text-align: start;
        padding-left: 10px;
    }

    span {
        margin-right: 10px;
        background-color: #1a1a1a;
        color: white;
        border-radius: 10px;
        padding: 10px;
    }

    textarea:focus .balao {
        opacity: 0% !important;
    }


    textarea:active .balao {
        opacity: 0%;
    }

    textarea {
        border-radius: 20px;
        padding: 10px;
        font-size: 16px;
    }

    .modal-internal-content span {
            align-self: center;
            height: 30px;
        }

    @media screen and (max-width: 720px) {
        .modal-internal-content {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            position: relative;
        }

        textarea {
            max-width: 70%;
            align-self: center;
        }

        p {
            position: relative;
            left: 10%;
        }

        button {
            width: 80%;
        }
    }
</style>
