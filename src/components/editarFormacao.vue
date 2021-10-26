<template>
    <div class="edit-grade-container">
         <span>EDITAR DADOS DE ESCOLARIDADE</span>
        <button @click="closeBox" class="close">X</button>
        <div class="formacaolAdd">
            <p>Curso</p><input placeholder="Nome do curo, Instituição de ensino" id="curso" type="text"><button @click="adicionarFormacao" class="bnt-plus">+</button>
        </div>
        <div class="grade-list" v-if="mygrade">
            <div v-for='item in mygrade' :key="item">
                <span class="itens" v-if="item!='Seus dados escolares'">{{item}}</span><img v-if="item && item!='Seus dados escolares'" @click="removeGrade" :id="`${item}`" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt"/>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'edit-grade',
    props:{
        grade: Array,
        cor: String
    },
    data(){
        return{
            mygrade: this.grade
        }
    },
    methods:{
        closeBox(){
            document.getElementsByClassName('editar-dados-escolares')[0].style.display= 'none'
        },
        adicionarFormacao(){
            let curso = document.getElementById('curso').value
            if(curso){
                curso = curso.replace(',', '-')
                if(this.mygrade[0]=='Seus dados escolares'){
                    this.mygrade[0] = curso
                }else{
                    this.mygrade.push(curso)
                }    
            }
            this.$emit('update:grade', this.mygrade)
            document.getElementById('curso').value = ''
            localStorage.setItem('grade', this.mygrade)
        },
        removeGrade(event){
            this.mygrade.splice(this.mygrade.indexOf(event.target.id), 1)
            localStorage.setItem('grade', this.mygrade)
        }
    },
    mounted(){
       // console.log(this.cor);
        document.getElementsByClassName('editar-dados-escolares')[0].style.backgroundColor = this.cor
        document.getElementsByClassName('editar-dados-escolares')[0].style.display = "none"
    },
    updated(){
        //console.log(this.cor);
        document.getElementsByClassName('editar-dados-escolares')[0].style.backgroundColor = this.cor
    }
}
</script>
<style scoped>
.edit-grade-container input{
    border-radius: 5px;
    padding: 5px;
    margin-left: 1px;
    margin-right: 5px;
    width: 75%;
    margin-top: 10px;
    font-size: 11px;
    height: 20px;
}
.edit-grade-container{
    padding: 15px;
    font-size: 16px;
    font-weight: bold;
}
.grade-list{
    margin-top: 10px;
}
.itens{
    font-weight: bold;
    font-size: 14px;
}
.bnt-plus{
    font-size: 25px;
    height: 30px;
    widows: 30px;
    border-radius: 15px;
    position: relative;
    top: 5px;
}
</style>