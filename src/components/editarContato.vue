<template>
    <div class="editar-contato-container">
        <span>EDITAR DADOS DE CONTATO</span>
        <button @click="closeBox" class="close">X</button>
        <div class="emailAdd">
            <span>Email</span><input placeholder="seuemail@mail.com.br" id="email" type="email"><button @click="adicionarEmail" class="bnt-plus">+</button>
        </div>
        <div class="email-list" v-if="emails">
            <div v-for='item in emails' :key="item">
                <span>{{item}}</span><img @click="removeEmail" v-if="item" :id="`${item}`" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt"/>
            </div>
        </div>
        <div class="telefoneAdd">
            <span>Telefone</span><input placeholder="Ex. (51)99999-9999" type="tel" id="phone"/><button @click="adicionarEmail" id="telBnt" class="bnt-plus">+</button>
            <div class="email-list" v-if="arrayPhones">
                <div v-for='item in arrayPhones' :key="item">
                    <span>{{item}}</span><img v-if="item" :id="`${item}`" @click="removeTel" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt"/>
                </div>
            </div>
        </div>
        <div class="endereco-container">
            <span>Endereço</span><textarea placeholder="Insira o novo endereço completo aqui dentro" type="text" id="endereco"/><button @click="adicionarEnd" class="bnt-plus">+</button>
            <div class="email-list" v-if="myAdress">
                <p>{{myAdress}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'editar-contato',
    props:{
        phones: Array,
        endereco: String,
    },
    data(){
        return{
            emails: [localStorage.getItem('useremail0'), localStorage.getItem('useremail1'), localStorage.getItem('useremail2')],
            arrayPhones: this.phones,
            myAdress: this.endereco,
        }
    },
    methods:{
        removeTel(event){
            this.arrayPhones.splice(this.arrayPhones.indexOf(event.target.id), 1)
            localStorage.setItem('phones', this.arrayPhones)
        },
        adicionarEnd(){
            this.myAdress = document.getElementById('endereco').value
            localStorage.setItem('adress', this.myAdress)
            document.getElementById('endereco').value = ''
            location.reload()
        },
        adicionarEmail(event){
            console.log(this.arrayPhones)
            let pne = document.getElementById('phone').value
            if(event.target.id=='telBnt' && (!this.arrayPhones.includes(pne))){
                this.arrayPhones.push(pne)
                this.$emit('update:phone', this.arrayPhones)
                document.getElementById('phone').value = ''
                localStorage.setItem('phones', this.arrayPhones)
            }else{

                let email = document.getElementById('email').value

                if(localStorage.getItem('useremail0')!=null && localStorage.getItem('useremail1')!=null && localStorage.getItem('useremail2')!=null){
                    alert('You can insert only 3 emails :)')
                }
                else if(localStorage.getItem('useremail0')==null && !this.emails.includes(email)){
                    localStorage.setItem('useremail0', email)
                    this.emails[0] = email
                }else if(localStorage.getItem('useremail1')==null && !this.emails.includes(email)){
                    localStorage.setItem('useremail1', email)
                    this.emails[1] = email
                }else if(localStorage.getItem('useremail2')==null && !this.emails.includes(email)){
                    localStorage.setItem('useremail2', email)
                    this.emails[2] = email
                }else{
                    alert('inválido')
                }
                document.getElementById('email').value = ''
                location.reload()
                this.closeBox
            }
           
        },
        closeBox(){
            document.getElementsByClassName('editar-contato-container')[0].style.display = 'none'
        },
        removeEmail(event){
            this.emails.splice(this.emails.indexOf(event.target.id), 1)
            localStorage.removeItem('useremail0')
            localStorage.removeItem('useremail1')
            localStorage.removeItem('useremail2')
            this.emails.forEach(function(value, index){
                if(value!=null){
                    localStorage.setItem('useremail'+index, value)
                }
                console.log('value '+value+' index '+index-1)
            });
            console.log(this.emails)
            location.reload()
        }
    }
}
</script>
<style>
@media only screen and (max-width: 1000px) {
.editar-contato-container{
    width: 100%;
    height: 100%;
    display: none;
    background-color: whitesmoke;
}    
}
@media only screen and (min-width:1001px) {
   .editar-contato-container{
        width: 300px;
        max-height: 100%;
        border-radius: 20px;
        box-shadow: gray -2px 2px 2px;
        display: none;
        background-color: whitesmoke;
        position: absolute;
        margin-top: -200px;
        margin-left: 200px;
        opacity: 90%;
        padding: 10px;
    }
}
@media print {
    .editar-contato-container{
        display: none;
    }
}
.emailAdd{
    margin-top: 10px;
}
.editar-contato-container{
    display: none;
    min-height: 100px;
}

.editar-contato-container input{
    border-radius: 5px;
    border-top: 0ch;
    border-left: 1px;
    border-right: 1px;
    padding: 5px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: small;
    width: 150px;
}
.editar-contato-container textarea{
    border-radius: 5px;
    border-top: 0ch;
    border-left: 1px;
    border-right: 1px;
    padding: 5px;
    margin-left: 50px;
    margin-right: 10px;
    font-size: small;
    width: 150px;
    margin-top: 3px;
}
.endereco-container span{
    position: absolute;
    padding-top: 5px;
}
.endereco-container button{
    position: absolute;
    margin-top: 15px;
}
.email-list{
    overflow-y: scroll;
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
    min-height: 50%;
}
.close{
    width: 25px;
    height: 20px;
    background-color: red;
    color:white;
    float: right;
}
.remove-bnt{
    width: 15px;
    height: 15px;
    margin-left: 10px;
}
</style>