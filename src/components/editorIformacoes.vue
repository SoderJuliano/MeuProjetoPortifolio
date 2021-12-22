<template>
    <div class="main-editar-container">
        <h3>{{title}}</h3>
        <div class="body-editar-container">
            <form action="">
                <div v-if="title in formTitles" :key="title">
                    {{title.title}}
                    <input id="{{title.title}}" type="text" placeholder="{{title.placeholder}}">
                    <br>
                    <button (click)="add({{title.title}})">Add</button>
                </div>
                <button (click)="registrar({{title}})">Registrar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal-input',
    data(){
        return{
            formTitles = this.formTitles
        }
    },
    props:{
        formTitles: Array
    },
    methods:{
        registrar(title){
            //title as array of objects

        },
        add(title){
            //title as string
            registerValues('nome', document.getElementById(title).value)
        },
        cleanArray(){
            this.formTitles = []
        },
        registerValues(name, value){
            localStorage.setItem(name, value)
        }
    }
}
</script>

<style scoped>
.main-editar-container{
    display: block;
    width: 100vw;
    height: 100vh;
    opacity: 100;
    z-index: 10;
    background-color: darkgray;
    justify-content: center;
    text-align: center;
}
.body-editar-container{
    width: 80vw;
    max-width: 1000px;
    align-self: center;
    background-color: white;
    display: flex;
    justify-content: center;
}
</style>