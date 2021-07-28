<template>
    <div class="editar-contato-container">
        <div class="emailAdd">
            <span>Email</span><input id="email" type="email"><button @click="adicionarEmail" class="bnt-plus">+</button>
            <button @click="closeBox" class="close">X</button>
        </div>
        <div class="email-list" v-if="emails">
            <div v-for='item in emails' :key="item">
                <span>{{item}}</span><img @click="removeEmail" v-if="item" :id="`${item}`" class="remove-bnt" src="../icons/remove.png" alt="remove-bnt"/>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'editar-contato',
    data(){
        return{
            emails: [localStorage.getItem('useremail0'), localStorage.getItem('useremail1'), localStorage.getItem('useremail2')]
        }
    },
    methods:{
        adicionarEmail(){

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
        }
    }
}
</script>
<style scoped>
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
        height: 100px;
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
.editar-contato-container{
    display: none;
    height: 100px;
}
#email{
    border-radius: 10px;
    padding: 5px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: small;
    width: 150px;
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