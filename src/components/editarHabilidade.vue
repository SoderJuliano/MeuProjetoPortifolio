<template>
    <div class="editar-habilidade-container">
        <span>INSERIR HABILIDADES</span>
        <button @click="closeBox" class="close">X</button>
        <div class="endereco-container">
            <textarea 
                type="text" 
                id="habilidade"
                :value="habilidade"
            />
            <button @click="adicionarHab" class="bnt-plus">+</button>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'editar-habilidade',
    props:{
        habilidade: String,
        cor: String
    },
    data(){
        return{
            habl : this.habilidade
        }
    },
    methods:{
        closeBox(){
            document.getElementsByClassName('editar-habilidade')[0].style.display = 'none'
        },
        adicionarHab(){
            const hab = document.getElementById('habilidade').value
            if(hab){
                localStorage.setItem('hability', hab)
                this.habl = hab
                location.reload()
            }
        }
    },
    mounted(){
        console.log(this.cor);
        document.getElementsByClassName('editar-habilidade')[0].style.backgroundColor = this.cor
        document.getElementsByClassName('editar-habilidade')[0].style.display = "none"
    },
    updated(){
        console.log(this.cor);
        document.getElementsByClassName('editar-habilidade')[0].style.backgroundColor = this.cor
    }
}
</script>
<style scoped>
    textarea{
        height: 100px;
        width: 65%;
        border-radius: 15px;
        padding: 10px;
    }
    .bnt-plus{
        margin-top: 30px;
        font-size: 25px;
        margin-left: 10px;
        width: 50px;
        height: 50px;
        border-radius: 25px;
    }
</style>