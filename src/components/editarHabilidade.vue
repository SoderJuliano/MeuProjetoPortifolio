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
        habilidade: String
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
    }
}
</script>
<style scoped>
    textarea{
        height: 100px;
    }
    .bnt-plus{
        height: 80px;
        font-size: 50px;
        margin-left: 10px;
    }
</style>