<template>
    <div class="editar-competencias-container">
        <span>EDITAR COMPETÊNCAIS</span><button  @click="closeBox" class="close">X</button>
        <p>Nova Competencia</p> <input type="text" id="competencia-input" placeholder="digite aqui no que você é competente"/>
        <button @click="adicionarCompetencia" class="bnt-plus">+</button>
        <div class="competencia-list" v-for="(item, index) in competencias" :key="index">
            <span class="itens">{{item}}</span>
            <img v-if="item" @click="removeCompetence" :id="`${item}`" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt">
        </div>
    </div>
</template>
<script>
export default {
    name: 'editar-competencias',
    props:{
        user: Object
    },
    data(){
        return{
            competencias: this.user.competence
        }
    },
    methods:{
        closeBox(){
            document.getElementsByClassName('editar-competencais')[0].style.display = 'none'
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
        removeCompetence(){

        }
    }
}
</script>
<style scoped>
.editar-competencias-container{
    width: 300px;
    display: block;
}
#competencia-input{
    width: 250px;
    height: 30px;
    font-size: 10px;
    font-weight: bold;
    margin-left: 10px;
    border-radius: 10px;
    border-top: 0px;
    border-right: 1px;
    margin-right: 10px;
}
.competencia-list{
    display: block;
}
.itens{
    width: 80%;
    margin: 10px;
    font-size: 14px;
    font-weight: bold;
}
img{
    padding-left: 10px;
}
</style>