<template>
    <div class="main-modal-container">
        <h3 id="mainTitle" v-if="mainTitle != 'iconChooser'">{{this.mainTitleCaps}}</h3>
        <div v-if="title!='Email' && mainTitle != 'iconChooser'" class="body-modal-container">
                <div v-if="title != null && (ptitle == '' && ptitle3 == '')">
                    
                    <div class="modal-internal-content">
                        <span style="margin-right: 10px">{{title}}</span>
                        <br v-if="title=='Write about you'" />
                        <textarea v-if="title=='Sobre voce' || title=='Write about you'" name="area" id="modal-input" cols="30" rows="5" :placeholder="`${this.placeholder}`"></textarea>
                        <input v-else id="modal-input" type="text" :placeholder="`${this.placeholder}`">
                    </div>
                    
                    
                    <br><br>
                    <div class="modal-internal-content" v-if="title == 'Nome da empresa' || title == 'Company name'">
                        <span style="margin-right: 10px" >{{title2}}</span>
                        <input id="modal-input2" v-if="title == 'Nome da empresa' || title == 'Company name'" type="text" :placeholder="`${this.placeholder2}`">
                    </div>
                    
                    <br v-if="title == 'Nome da empresa' || title == 'Company name'"><br v-if="title == 'Nome da empresa' || title == 'Company name'">
                    
                    <button v-if="title == 'Nome da empresa' || title == 'Company name'" @click="proximo(title)">{{language == 'pt-br' ? "Proximo" : "Next"}}</button>
                    <button class="save-bnt" v-else v-on:click=add(title)>{{language == 'pt-br' ? "Salvar" : "Save"}}</button><button v-on:click="cancelar">{{language == 'pt-br' ? "Concelar" : "Cancel"}}</button>
                </div>
                <div v-else>
                    <!-- togle date -->
                    <p v-if="ptitle">
                        <div style="display: flex; justify-content: start;">
                            <span style="margin-right: 10px;">{{language == 'pt-br' ? "Data Simplificada" : "Simplified Data"}}</span>
                            <label class="switch">
                                <input @change="simplifiedDate = !simplifiedDate" type="checkbox" checked>
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </p>

                    <div class="modal-internal-content" v-if="ptitle">
                        <span  style="margin-right: 10px">{{ptitle}}</span>
                        <input v-if="!simplifiedDate" id="input-value-date1" type="date">
                        <input v-if="simplifiedDate" id="input-value-date1" type="month" />
                    </div>
                    
                    <br v-if="title2">

                    <div v-if="ptitle" class="modal-internal-content">
                        <span style="margin-right: 10px">{{ptitle2}}</span>
                        <input v-if="!simplifiedDate" id="input-value-date2" type="date">
                        <input v-if="simplifiedDate" id="input-value-date2" type="month">
                    </div>
                    
                    
                    <br v-if="title2">

                    <div v-if="ptitle3" class="modal-internal-content">
                        <span style="margin-right: 10px;">{{ptitle3}}</span>
                        <textarea id="modal-input3" cols="30" rows="5" :placeholder=this.getJobDescriptionPlaceholderText()></textarea>
                    </div>
                    
                    <br v-if="ptitle3"><br v-if="ptitle3">
                    
                    <button v-if="ptitle" @click="proximo(title)">{{language == 'pt-br' ? "Proximo" : "Next"}}</button>
                    <button class="save-bnt" v-else v-on:click=add(ptitle3)>{{language == 'pt-br' ? "Salvar" : "Save"}}</button><button v-on:click="cancelar">{{language == 'pt-br' ? "Concelar" : "Cancel"}}</button>
                </div>
        </div>
        <div v-if="title=='Email'" class="body-modal-container">
            <div v-if="title=='Email' && ptitle!='Endereco'">
                <span style="margin-right: 10px;">{{title}}</span>
                <input id="modal-input" type="email" :placeholder="`${this.placeholder}`">
                <br><br>
                <span style="margin-right: 10px;">{{title2}}</span>
                <input id="modal-input2" type="text" :placeholder="`${this.placeholder2}`">
                <br><br>
                <button @click="proximo(title)">{{language == 'pt-br' ? "Próximo" : "Next"}}</button>
                <button v-on:click="cancelar">{{language == 'pt-br' ? "Concelar" : "Cancel"}}</button>
            </div>
            <div v-else>
                <span>{{ptitle}}</span><br><br>
                <input id="modal-input1" type="text" :placeholder=this.getRua() >
                <input id="modal-input2" type="text" :placeholder=this.getNumero()>
                <input id="modal-input3" type="text" :placeholder=this.getBairro()>
                <input id="modal-input4" type="text" :placeholder=this.getCidade()>
                <input id="modal-input5" type="text" :placeholder=this.getEstado()>
                <input id="modal-input6" type="text" :placeholder=this.getPais()>
                <br><br>
                <button class="save-bnt" v-on:click=add(ptitle)>{{language == 'pt-br' ? "Salvar" : "Save"}}</button><button v-on:click="cancelar">{{language == 'pt-br' ? "Concelar" : "Cancel"}}</button>
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

import strings from '../components/configs/strings.json'
import Job from '../model/jobModel.js'
import IconChooser from './iconComponent/IconChooser.vue';
import $ from 'jquery'


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
            userData: this.user,
            simplifiedDate: true,
            mainTitleCaps: this.mainTitle.toUpperCase()
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
        bindEventTo(id)
        {
            $('#'+id).bind('keypress', function(e) {
                var code = e.keyCode || e.which;
                if(code == 13) { //Enter keycode
                    console.log('enter');
                }

            });
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
                this.ptitle = 'Endereco'
            }
            else if((title==strings[0].companyName || title==strings[1].companyName)  && this.ptitle == ''){
                const job = new Job(this.userData.userExperiences.length);
                this.currentJobId = job.getId();
                job.setCompany($("#modal-input").val())
                job.setPosition($("#modal-input2").val())
                console.log(job)
                this.userData.userExperiences.push(job);

                this.ptitle = this.language == 'pt-br' ? 'Data de admicao' : 'Date when start to work here'
                this.ptitle2 = this.language == 'pt-br' ? 'Data de demicao' : 'Date of your last day working here'
            }else{
                this.userData.userExperiences[this.currentJobId].setDateHired($("#input-value-date1").val())
                this.userData.userExperiences[this.currentJobId].setDateFired($("#input-value-date2").val())
                console.log(this.userData.userExperiences[this.currentJobId])
                this.ptitle3 = this.language == 'pt-br' ? 'Descricao' : 'Description'
                this.ptitle = ''
                this.ptitle2 = ''
            }
            this.changePage2();
        },
        add(title){
            $('.save-bnt').prop('disabled', true);

            console.log(title);
            //title as string
            switch(title) {
                case 'Digite nome':
                    this.userData.name = document.getElementById('modal-input').value
                    this.template == 1 ? (this.updateUser(), this.cancelar())
                    : (this.updateUser(), setTimeout(() => {this.$emit('add-profissao')}, 800))
                    break;
                case 'Type your name':
                    this.userData.name = document.getElementById('modal-input').value
                    this.template == 1 ? (this.updateUser(), this.cancelar())
                    : setTimeout(() => {this.$emit('add-profissao')}, 800)
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
                case 'Descricao':
                    // sobre experiencia de trabalho
                    this.adicionarJobs()
                    this.cancelar();
                    break;
                case 'Description':
                    this.adicionarJobs()
                    this.cancelar();
                    break;
                case 'Endereco':
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
            this.userData.hability = $("#modal-input").val()
            this.updateUser()
        },
        addSocialLink(){
            this.userData.social.push($("#modal-input").val())
            this.updateUser()
        },
        adicionarJobs(){
            //! Here I put the last modal text area content, the job desciption
            this.userData.userExperiences[this.currentJobId].setDescription($("#modal-input3").val())
            this.updateUser();
        },
        updateUser(){
            this.$emit('update-user', this.userData)
            localStorage.setItem("user", JSON.stringify(this.userData))
        },
        adicionarEndereco(){
            const rua = document.getElementById("modal-input1").value
            const numero = document.getElementById("modal-input2").value
            const bairro = document.getElementById("modal-input3").value
            const cidade = document.getElementById("modal-input4").value
            const estado = document.getElementById("modal-input5").value
            const pais = document.getElementById("modal-input6").value

            let endereco = "";
            endereco += rua ? rua+", " : ""
            endereco += numero ? numero+", " : ""
            endereco += bairro ? bairro+", " : ""
            endereco += cidade ? cidade+", " : ""
            endereco += estado ? estado+", " : ""
            endereco += pais ? pais+"." : endereco ? "." : ""

            this.userData.contact.adress = endereco

            //this.$emit("update-user", this.userData)
            this.updateUser()
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
        }
    },
    mounted(){
        $(".main-modal-container").change(function(e){
            e.preventDefault();
            console.log('On Page '+$("#mainTitle").text())
            console.log('OnChange executing '+e.target.id)
            console.log(e.target.value)
        });

        
    }
}
</script>

<style scoped>
.main-modal-container{
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
.body-modal-container{
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
}

#modal-input {
    border-radius: 10px;
    padding: 5px;
    font-family: 'Roboto Mono', monospace;
}

h3{
    color: white;
    margin-top: 10vh;
}
button{
    margin-left: 15px;
}

.iconsChooser{
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
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
        display: flex; 
        justify-content: start;
    }

    @media screen and (max-width: 720px) {
        .modal-internal-content{
            display: flex; 
            justify-content: center;
        }
    }
</style>