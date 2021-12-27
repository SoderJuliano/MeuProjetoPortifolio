<template>
    <div class="main-modal-container">
        <h3>{{mainTitle}}</h3>
        <div class="body-modal-container">
                <div v-if="title != null">
                    {{title}}
                    <input id="modal-input" type="text" :placeholder="`${this.placeholder}`">
                    <br><br>
                    <button v-on:click=add(title)>Salvar</button><button v-on:click="cancelar">Cancelar</button>
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
        }
    },
    props:{
        mainTitle: String,
        title: String,
        placeholder: String,
        competencia: Array,
    },
    methods:{
        add(title){
            //title as string
            alert(title)
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
                default:
                    break;
            }
            
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
        },
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
    
}
h3{
    color: white;
    margin-top: 10vh;
}
button{
    margin-left: 15px;
}
</style>