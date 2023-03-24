<template>
    <div class="iconChooser-container" v-if="title.includes('EmailIcons')">
        <div class="icon-container">
            <img @click="setNewIcon($event)" src="../../icons/envelope.svg"/>
            <img @click="setNewIcon($event)" src="../../icons/email/email.png"/>
            <img @click="setNewIcon($event)" src="../../icons/email/email2.png"/>
        </div>
    </div>
    <div class="iconChooser-container" v-if="title.includes('EducationIcons')">
        <div class="icon-container">
            <img @click="setNewIcon($event)" src="../../icons/education/livros.png"/>
            <img @click="setNewIcon($event)" src="../../icons/education/graduate.png"/>
            <img @click="setNewIcon($event)" src="../../icons/education/mortarboard.png"/>
        </div>
    </div>
    <div class="iconChooser-container" v-if="title.includes('PhoneIcons')">
        <div class="icon-container">
            <img @click="setNewIcon($event)" src="../../icons/phone/phone.png"/>
            <img @click="setNewIcon($event)" src="../../icons/phone/phone-call.png"/>
            <img @click="setNewIcon($event)" src="../../icons/phone/telephone.png"/>
        </div>
    </div>
    <div class="iconChooser-container" v-if="title.includes('SkillIcons')">
        <div class="icon-container">
            <img @click="setNewIcon($event)" src="../../icons/skills/cognitive.png"/>
            <img @click="setNewIcon($event)" src="../../icons/skills/creativity.png"/>
            <img @click="setNewIcon($event)" src="../../icons/skills/html.png"/>
        </div>
    </div>
    <div class="iconChooser-container" v-if="title.includes('AdressIcons')">
        <div class="icon-container">
            <img @click="setNewIcon($event)" src="../../icons/adress/address.png"/>
            <img @click="setNewIcon($event)" src="../../icons/adress/adress.png"/>
            <img @click="setNewIcon($event)" src="../../icons/adress/location.png"/>
            <img @click="setNewIcon($event)" src="../../icons/adress/world.png"/>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'iconChooser',
    props: {
        title: String
    },
    methods: {
        setNewIcon(val){
            if(this.title.includes('EmailIcons')){
                $('.email-icon').attr('src', val.target.getAttribute('src'));
            }
            else if(this.title.includes('EducationIcons')){
                $('.formacao-icon').attr('src', val.target.getAttribute('src'));
            }
            else if(this.title.includes('PhoneIcons')){
                $('.phone-icon').attr('src', val.target.getAttribute('src'));
            }
            else if(this.title.includes('SkillIcons')){
                $('.habilidade-icon').attr('src', val.target.getAttribute('src'));
            }
            else if(this.title.includes('AdressIcons')){
                $('.adress-icon').attr('src', val.target.getAttribute('src'));
            }
        }
    }
}
</script>

<style scoped>
.iconChooser-container
{
    display: block;
    background-color: whitesmoke;
    border-radius: 10px;
    border: solid 1px black;
    opacity: 1;
    padding: 10px;
}

.icon-container img {
    width: 25px;
    margin-left: 10px;
    margin-right: 10px;
}
</style>