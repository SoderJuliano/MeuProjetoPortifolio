<template>
    <div class="editar-container">
        <span>EDITAR LINKS</span>
        <button @click="closeBox" class="close">X</button>
        <div class="social-container">
            <img src="../icons/face.png" alt="Facebook"/>
            <input id="faceString" type="text" :value="myFace"/>
            <button @click="addFace">+</button>
        </div>
        <div class="social-container">
            <img src="../icons/in.png" alt="Linkedin"/>
            <input id="inString" type="text" :value="myIn"/>
            <button @click="addIn">+</button>
        </div>
        <div class="social-container">
            <img src="../icons/twit.png" alt="Twitter"/>
            <input id="twitString" type="text" :value="myTwit"/>
            <button @click="addTwit">+</button>
        </div>
        <div class="social-container">
            <img src="../icons/youtube.png" alt="Youtube"/>
            <input id="youString" type="text" :value="myYou"/>
            <button @click="addYou">+</button>
        </div>
        <div class="social-container">
            <img src="../icons/stof.jpeg" alt="Stackoverflow"/>
            <input id="stofString" type="text" :value="myStof"/>
            <button @click="addStof">+</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'editar-social',
    props:{
        face : String,
        lin: String,
        twit: String,
        you: String,
        stof: String
    },
    data(){
        return{
            myFace : this.face,
            myIn: this.lin,
            myTwit: this.twit,
            myYou: this.you,
            myStof: this.stof
        }
    },
    methods:{
        addFace(){
            let faceString = document.getElementById('faceString').value
            if(faceString){
                this.myFace = faceString
                localStorage.setItem('face', this.myFace)
                location.reload()
            }else{
                this.myFace = null
                localStorage.removeItem('face')
                location.reload()
            }
        },
        addIn(){
            let inString = document.getElementById('inString').value
            if(inString){
                this.myIn = inString
                localStorage.setItem('in', this.myIn)
                location.reload()
            }else{
                this.myIn = null
                localStorage.removeItem('in')
                location.reload()
            }

        },
        addTwit(){
            let String = document.getElementById('twitString').value
            if(String){
                this.myTwit = String
                localStorage.setItem('twit', this.myTwit)
                location.reload()
            }else{
                this.myTwit = null
                localStorage.removeItem('twit')
                location.reload()
            }
        },
        addYou(){
            let String = document.getElementById('youString').value
            if(String){
                this.myYou = String
                localStorage.setItem('you', this.myYou)
                location.reload()
            }else{
                this.myYou = null
                localStorage.removeItem('you')
                location.reload()
            }

        },
        addStof(){
            let String = document.getElementById('stofString').value
            if(String){
                this.myStof = String
                localStorage.setItem('stof', this.myStof)
                location.reload()
            }else{
                this.myStof = null
                localStorage.removeItem('stof')
                location.reload()
            }

        },
         closeBox(){
            document.getElementsByClassName('editar-social')[0].style.display = 'none'
        },
    }
}
</script>
<style scoped>
.social-container{
    display: flex;
}
.social-container button{
    float: right;
    padding: 10px;
    height: 40px;
    width: 40px;
    margin: 10px;
}
.social-container{
    width: 100%;
    height: 100%;

}
.social-container img{
    width: 40px;
    height: 40px;
    padding: 10px;

}
.social-container input{
    width: 250px;
    height: 30px;
    padding: 1px;
    margin-top: 10px;
    letter-spacing: 0;
    font-size: 10px;
    font-weight: bold;
}
</style>