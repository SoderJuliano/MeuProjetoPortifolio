<template>
    <div class="tip-container">
        <img v-if="!showTip && asTipToShow()" style="width: 30px;" @click="show()" src="../../assets/tips/idea.png" alt="tipIcon" />
        <img v-if="asTipToShow() == false && !showTip" @click="show()" src="../../assets/tips/idea.gif" alt="tipIcon" />
        <div v-if="showTip" class="tip-conteiner-content" id="icon">
            <div id="title">
                <h3>{{ this.lang == "pt-br" ? strings[0].tip : strings[1].tip }}</h3>
                <span @click="close(7)" id="closer">X</span>
            </div>
            <div v-for="tip in tips" >
                <div class="theTip" v-if="!tip.read && tip?.language == this.lang">
                    <span>{{tip.title}}</span><span class="tip-read">off <input @change="checked(tip)" class="checkbox-tips" type="checkbox" :id="tip.id" :name="tip.title" value="Off"></span>
                    <p>{{ tip.message }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tip from '../../model/tip.js';

export default {
    name: 'Tip',
    data(){
        return {
            showTip: false,
            tips: []
        }
    },
    props: {
        lang: String,
        strings: { type: Array }
    },
    methods: {
        asTipToShow(){
            //console.log('asTipToShow: ' + this.tips.every(tip => tip.read == true))
            let ptbrTips = []
            let usenTips = []
            this.tips.forEach(element => {
                if(element.language == "pt-br"){
                    ptbrTips.push(element)
                }else{
                    usenTips.push(element)
                } 
            });
            
            return this.lang == "pt-br" ? ptbrTips?.every(tip => tip.read == true) : usenTips?.every(tip => tip.read == true)
        },
        show(){
            this.showTip = true;
        },
        close(){
            this.showTip = false;
        },
        checked(event){
            this.tips.map(tip => {
                if(tip.id == event.id){
                    tip.read = true;
                }
            })
            localStorage.setItem('tips', JSON.stringify(this.tips))
        }
    },
    mounted() {

        this.tips = JSON.parse(localStorage.getItem('tips')) || [];

        if(this.tips.length == 0) {

            const tip1 = new Tip();
            tip1.setTitle("Icones")
            tip1.setMessage(this.strings[0].iconTip)
            tip1.setLanguage("pt-br")
            this.tips.push(tip1)

            const tip2 = new Tip();
            tip2.setTitle("Habilidades")
            tip2.setMessage(this.strings[0].skillTips)
            tip2.setLanguage("pt-br")
            this.tips.push(tip2)

            const tip3 = new Tip();
            tip3.setTitle("Icons")
            tip3.setMessage(this.strings[1].iconTip)
            tip3.setLanguage("us-en")
            this.tips.push(tip3)

            const tip4 = new Tip();
            tip4.setTitle("Skills")
            tip4.setMessage(this.strings[1].skillTips)
            tip4.setLanguage("us-en")
            this.tips.push(tip4)
            
            localStorage.setItem('tips', JSON.stringify(this.tips));
        }
    }
}
</script>

<style scoped>

.tip-container
{
    display: none; 
}

img 
{
    width: 60px;
}

img:active
{
    width: 50px;
}

@media screen and (min-width: 1000px) 
{
    .tip-container 
    {
        display: block;
        width: 100%;
        text-align: center;
        margin: 30px auto;
    }

    .tip-conteiner-content
    {
        padding: 10px;
        background-color: whitesmoke;
        border-radius: 10px;
    }

    .tip-conteiner-content:hover #closer
    {
        display: block;
    }

    #closer
    {
        display: none;
        position: absolute;
        right: 5px;
        float: right;
        padding: 5px;
    }

    #closer:hover
    {
        background-color: white;
        transform: scale(1.8);
        border-radius: 5px;
    }

    #title
    {
        display: flex;
        position: relative;
        width: 100%;
        justify-content: center;
    }
}

.theTip .tip-read{
   float: right;
}

.theTip {
    margin-top: 5px;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    transition: ease-in-out 1s;
}

</style>