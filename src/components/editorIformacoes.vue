<template>
    <div class="main-modal-container">
        <h3>{{mainTitle}}</h3>
        <div class="body-modal-container">
                <div v-if="title != null && (ptitle == '' && ptitle3 == '')">
                    <span :style="title=='Sobre voce' ? 'position: absolute; margin-bottom:50px; margin-left: -70px' : 'margin-right: 10px'">{{title}}</span>
                    <textarea v-if="title=='Sobre voce'" name="area" id="modal-input" cols="30" rows="5" :placeholder="`${this.placeholder}`"></textarea>
                    <input v-else id="modal-input" type="text" :placeholder="`${this.placeholder}`">
                    <br><br>
                    <span style="margin-right: 10px" v-if="title == 'Nome da empresa'">{{title2}}</span>
                    <input id="modal-input2" v-if="title == 'Nome da empresa'" type="text" :placeholder="`${this.placeholder2}`">
                    <br v-if="title == 'Nome da empresa'"><br v-if="title == 'Nome da empresa'">
                    <button v-if="title == 'Nome da empresa'" @click="proximo(title)">Proximo</button>
                    <button v-else v-on:click=add(title)>Salvar</button><button v-on:click="cancelar">Cancelar</button>
                </div>
                <div v-else>
                    <span v-if="ptitle" style="margin-right: 10px">{{ptitle}}</span>
                    <input v-if="ptitle" id="input-value-date1" type="date">
                    <br v-if="ptitle"><br v-if="ptitle">
                    <span v-if="ptitle2" style="margin-right: 10px">{{ptitle2}}</span>
                    <input v-if="ptitle2" id="input-value-date2" type="date">
                    <br v-if="title2"><br v-if="title2">
                    <span v-if="ptitle3" style="margin-left: -70px; margin-bottom:50px; position: absolute;">{{ptitle3}}</span>
                    <textarea v-if="ptitle3" id="modal-input3" cols="30" rows="5" placeholder="faca uma descricao resumida"></textarea>
                    <br v-if="ptitle3"><br v-if="ptitle3">
                    <button v-if="ptitle" @click="proximo(title)">Proximo</button>
                    <button v-else v-on:click=add(ptitle3)>Salvar</button><button v-on:click="cancelar">Cancelar</button>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal-input',
    data(){
        return{
            competencias : this.competencia,
            ptitle: '',
            ptitle2: '',
            ptitle3: '',
            job: {
                company : '',
                function : '',
                description : '',
                dateHired: '',
                dateFired: ''
            },
            jobs: this.experiences,
        }
    },
    props:{
        mainTitle: String,
        title: String,
        placeholder: String,
        competencia: Array,
        experiences: Array,
        title2: String,
        placeholder2: String,
    },
    methods:{
        proximo(title){
            if(title=="Nome da empresa" && this.ptitle == ''){
                this.changePage();
                this.job.company = document.getElementById('modal-input').value
                this.job.function = document.getElementById('modal-input2').value
                this.ptitle = 'Data de admicao'
                this.ptitle2 = 'Data de demicao'
                this.changePage2();
            }else{
                this.job.dateHired = document.getElementById('input-value-date1').value
                this.job.dateFired = document.getElementById('input-value-date2').value

                this.changePage();
                this.ptitle3 = 'Descricao'
                this.ptitle = ''
                this.ptitle2 = ''
                this.changePage2();
            }
        },
        add(title){
            //title as string
            switch(title) {
                case 'Nome':
                    this.registerValues('user-name', document.getElementById('modal-input').value);
                    document.getElementsByClassName("name-title")[0].textContent = document.getElementById('modal-input').value;
                    this.cancelar();
                    break;
                case 'Profissao':
                    this.registerValues('profession', document.getElementById('modal-input').value);
                    document.getElementsByClassName("profession")[0].textContent = document.getElementById('modal-input').value;
                    this.cancelar();
                    break;
                case 'Nova competencia':
                    if(document.getElementById('modal-input').value){
                        this.competencias.push(document.getElementById('modal-input').value)
                    }
                    this.$emit('update: user.competence', this.competencias)
                    localStorage.setItem('cpta', this.competencias)
                    this.cancelar();
                    break; 
                case 'Sobre voce':
                    localStorage.setItem('about', document.getElementById('modal-input').value)
                    document.getElementById('resume').textContent = document.getElementById('modal-input').value
                    this.cancelar();
                    break;   
                case 'Descricao':
                    this.job.description = document.getElementById('modal-input3').value
                    this.adicionarJobs(this.job)
                    this.cancelar();
                    break; 
                default:
                    break;
            }
            this.ptitle = '';
            this.ptitle2 = '';
        },
        adicionarJobs(job){
            let j = localStorage.getItem('jobs')
            if(j){
                let objarray = JSON.parse(j)
                objarray.push(job)
                localStorage.setItem('jobs', JSON.stringify(objarray))
            }else{
                this.jobs.push(this.job)
                localStorage.setItem('jobs', JSON.stringify(this.jobs))
            }
            this.$emit('update:userExperiences', this.jobs)
        },
        adicionarCompetencia(){
            const cpta = document.getElementById('competencia-input').value
            console.log('cpta '+cpta)
            if(cpta){
                this.competencias.push(cpta)
                console.log('array '+  this.competencias)
                this.$emit('update: user.competence', this.competencias)
                localStorage.setItem('cpta', this.competencias)
            }
            document.getElementById('competencia-input').value = ''
        },
        registerValues(name, value){
            localStorage.setItem(name, value)
        },
        cancelar(){
            document.getElementsByClassName("main-modal-container")[0].style.width = "2%";
            document.getElementsByClassName("main-modal-container")[0].style.heigth = "2%";
            document.getElementsByClassName("main-modal-container")[0].style.opacity = "0";
            document.getElementsByClassName("main-modal-container")[0].style.zIndex = "-1";
            this.ptitle = '';
            this.ptitle2 = '';
            this.ptitle3 = '';
        },
        changePage(){
            document.getElementsByClassName("body-modal-container")[0].style.opacity = "0";
            document.getElementsByClassName("body-modal-container")[0].style.zIndex = "-1";
        },
        changePage2(){
            document.getElementsByClassName("body-modal-container")[0].style.opacity = "100";
            document.getElementsByClassName("body-modal-container")[0].style.zIndex = "10";
        }
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
    transition-duration: 1500ms;
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
}
h3{
    color: white;
    margin-top: 10vh;
}
button{
    margin-left: 15px;
}
</style>