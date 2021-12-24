<template>
    <div class="main-modal-container">
        <h3>{{mainTitle}}</h3>
        <div class="body-modal-container">
                <div v-if="title != null">
                    {{title}}
                    <input :id="`${title}`" type="text" :placeholder="`${this.placeholder}`">
                    <br><br>
                    <button v-on:click=add(title)>Salvar</button><button v-on:click="cancelar">Cancelar</button>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'modal-input',
    props:{
        mainTitle: String,
        title: String,
        placeholder: String
    },
    methods:{
        add(title){
            //title as string
            this.registerValues('nome', document.getElementById(title).value)
            document.getElementById(title).value = ""
        },
        registerValues(name, value){
            localStorage.setItem(name, value)
        },
        cancelar(){
            document.getElementsByClassName("main-modal-container")[0].style.opacity = "0";
            document.getElementsByClassName("main-modal-container")[0].style.zIndex = "-1";
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
    z-index: 10;
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