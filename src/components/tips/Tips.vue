<template>
    <div class="tip-container">
        <img v-if="!showTip && asTipToShow()" style="width: 30px;" @click="show()" src="../../assets/tips/idea.png" alt="tipIcon" />
        <img v-if="asTipToShow() == false && !showTip" @click="show()" src="../../assets/tips/idea.gif" alt="tipIcon" />
        <div v-if="showTip" class="tip-conteiner-content" id="icon">
            <div id="title">
                <h3>{{ this.lang == "pt-br" ? strings[0].tip : strings[1].tip }}</h3>
                <span @click="close(7)" id="closer">X</span>
            </div>
            <div v-for="tip in tips" v-bind:key="tip.id">
                <div style="color: gray;" class="theTip" v-if="tip.read && tip?.language == this.lang">
                    <span>{{tip.title}}</span>
                    <span class="tip-read">Ok</span>
                    <p>{{ tip.content }}</p>
                </div>
            </div>
            <div v-for="tip in tips" v-bind:key="tip.id">
                <div style="font-weight: bolder;" class="theTip" v-if="!tip.read && tip?.language == this.lang">
                    <span>{{tip.title}}</span><span class="tip-read">off <input @change="checked(tip)" class="checkbox-tips" type="checkbox" :id="tip.id" :name="tip.title" value="Off"></span>
                    <p>{{ tip.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

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
        strings: { type: Array },
        novaMensagem: Object,
        novasMensagens: { type: Array },
    },
    methods: {
        asTipToShow(){
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
                    axios.patch(`/notifications/${tip.id}`)
                }
            })
            localStorage.setItem('tips', JSON.stringify(this.tips))
        },
        verificarTips() {
            const intervaloInicial = 2000; // 2 segundos
            const intervaloRecorrente = 4000; // 4 segundos

            const intervalId = setInterval(() => {
                this.tips = JSON.parse(localStorage.getItem('tips')) || [];

                if (this.tips.length > 0) {
                clearInterval(intervalId); // Parar a verificação quando tips.length for maior que zero
                // console.log('tips.length é maior que zero!');
                }
            }, intervaloInicial);

            setInterval(() => {
                if (this.tips.length === 0) {
                // console.log('tips.length ainda é zero. Verificando novamente...');
                clearInterval(intervalId);

                const novoIntervalId = setInterval(() => {
                    this.tips = JSON.parse(localStorage.getItem('tips')) || [];

                    if (this.tips.length > 0) {
                        clearInterval(novoIntervalId);
                        // console.log('tips.length é maior que zero!');
                    }
                }, intervaloRecorrente);
                }
            }, intervaloRecorrente);
        }
    },
    mounted() {
        this.verificarTips();
        // setTimeout(() => {
        //     this.tips = JSON.parse(localStorage.getItem('tips')) || [];
        // }, 2000);
    },
    watch: {
        tips(newValue, oldValue){
            // console.log("someData changed!");
            // console.log(oldValue.length);
            // console.log(newValue.length);
            if(newValue.length != oldValue.length && newValue.length != 0){
                this.showTip = true;
            }
        },
        novaMensagem(newValue) {
            if(newValue != null)
            {
                const existingTip = this.tips.find(tip => tip.id === newValue.id && tip.language === this.lang);
                if (!existingTip) {
                    const newTip = {
                        id: newValue.id,
                        title: newValue.title,
                        content: newValue.content,
                        language: this.lang,
                        read: newValue.read
                    }
                    this.tips.push(newTip);
                }
            }
        },
        novasMensagens(newValue) {
            if(newValue.length > 0)
            {
                console.log('novas mensagens', newValue)
                this.novasMensagens.forEach(novaMensagem => {
                    const newTip = {
                        id: novaMensagem.id,
                        title: novaMensagem.title,
                        content: novaMensagem.content,
                        language: this.lang,
                        read: false
                    }
                    this.tips.push(newTip);
                    // this.language.includes('pt-br') ? this.ptbrTips.push(novaMensagem) : this.usenTips.push(novaMensagem);
                });
            }
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
        cursor: pointer;
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