<template>
    <div class="iconChooser-container" v-if="title.includes('EmailIcons')">
        <div class="icon-container">
            <img @click="setNewIcon($event)" src="../../icons/envelope.svg"/>
            <img @click="setNewIcon($event)" src="../../icons/email/email.png"/>
            <img @click="setNewIcon($event)" src="../../icons/email/email2.png"/>
        </div>
    </div>
    <div class="iconChooser-container" v-if="title.includes('EducationIcons')">
        <EducationIcons />
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
            $('.email-icon').attr('src', val.target.getAttribute('src'));
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