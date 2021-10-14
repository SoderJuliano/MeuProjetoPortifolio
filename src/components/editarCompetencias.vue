<template>
    <div class="editar-competencias-container">
        <span>EDITAR COMPETÊNCAIS</span><button  @click="closeBox" class="close">X</button>
        <div class="editar-add">
            <div class="inputbox">
                <input required="required" type="text" id="competencia-input" />
                <span>Nova Competencia</span>
            </div>
            <button @click="adicionarCompetencia" class="bnt-plus">+</button>
        </div>
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
        user: Object,
        cor: String
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
        removeCompetence(event){
            this.competencias.splice(this.competencias.indexOf(event.target.id),1)
            this.$emit('update: user.competence', this.competencias)
            localStorage.setItem('cpta', this.competencias)
        }
    },
     mounted(){
        console.log(this.cor);
        document.getElementsByClassName('editar-competencias-container')[0].style.backgroundColor = this.cor
    },
    updated(){
        console.log(this.cor);
        document.getElementsByClassName('editar-competencias-container')[0].style.backgroundColor = this.cor
    }
}
</script>
<style scoped>

@media screen and (min-width:1001px) {
.editar-competencias-container{
    width: 300px;
    display: block;
    border: 2px solid white;
    color: white;
}    
}
@media screen and (max-width:1000px) {
 .editar-competencias-container{
    width: 100%;
    display: block;
    border: 2px solid white;
     color: white;
 }
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
<style>
.editar-add{
    margin-top: 40px;
    display: flex;
}
.editar-add button{
    width: 40px;
    height: 40px;
    margin: 10px;
    box-shadow: 6px 7px 10px 4px #5a5549,
        inset 2px 2px 2px 1px #4C4023,
        inset -2px -2px 2px 1px #8C8083;
    z-index: 5px;
}
</style>