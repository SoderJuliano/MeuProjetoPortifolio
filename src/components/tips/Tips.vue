<template>
    <div class="tip-container">
        <img v-if="!showTip && asTipToShow()" style="width: 30px;" @click="show()" src="../../assets/tips/idea.png" alt="tipIcon" />
        <img v-if="asTipToShow() == false && !showTip" @click="show()" src="../../assets/tips/idea.gif" alt="tipIcon" />
        <div v-if="showTip" class="tip-conteiner-content" id="icon">
            <div id="title">
                <h3>{{ this.lang == "pt-br" ? strings[0].tip : strings[1].tip }}</h3>
                <span @click="close(7)" id="closer">X</span>
            </div>
            <div v-for="(tip, index) in tips" v-bind:key="tip.id">
                <div style="color: gray;" class="theTip" v-if="tip.read && tip?.language == this.lang">
                    <span>{{tip.title}}</span>
                    <span class="tip-read">{{lang.includes("en") ? "read" : "lido"}} - ☑</span>
                    <p>{{ tip.content }}</p>
                    <button @click="deleteTip(tip, index)">delete</button>
                </div>
            </div>
            <div v-for="tip in tips" v-bind:key="tip.id">
                <div @click="checked(tip)" style="font-weight: bolder;" class="theTip" v-if="!tip.read && tip?.language == this.lang">
                    <span>{{tip.title}}</span><span class="tip-read">{{lang.includes("en") ? "read" : "lido"}}
                        <input @change="checked(tip)" class="checkbox-tips" type="checkbox" :id="tip.id" :name="tip.title" value="Off">
                    </span>
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
        keyDragonite: String,
    },
    methods: {
        deleteTip(item, index) {
            const headers = {
                'Content-Type': 'application/json',
            };
            const isDragoniteTip = index > 6 || item.content.includes("[en]")
            let data = {
                "id": String(item.id),
                "key": isDragoniteTip ? String(this.keyDragonite) : "https://custom-cv-online.netlify.app",
            };
            if (item.appUrl) {
                data.appUrl = String(item.appUrl);
            }
            if (item.user) {
                data.user = String(item.user);
            }

            axios.delete(`/notifications/delete`, { headers, data })
            .then(() => {
                this.tips.splice(index, 1);
                localStorage.setItem('deletedDefaultNotifications', true);
            })
            .catch(error => {
                console.error('Error deleting tip:', error);
            });
        },
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
        checked(event) {
            this.tips.map(tip => {
                if (tip.id == event.id) {
                    tip.read = true;  // Mark as read locally

                    // Attempt to mark it as read on the backend
                    axios.patch(`/notifications/${tip.id}`)
                        .catch(error => {
                            // If there's an error (like the notification doesn't exist), handle it silently
                            console.error(`Notification with id ${tip.id} does not exist on the backend.`);
                        });
                }
            });

            // Update the localStorage with the updated tips array
            localStorage.setItem('tips', JSON.stringify(this.tips));
        },
        verificarTips() {
            const intervaloInicial = 2000; // 2 seconds
            const intervaloRecorrente = 4000; // 4 seconds

            const mergeTips = (localStorageTips) => {
                localStorageTips.forEach(storedTip => {
                    const existingTip = this.tips.find(tip => tip.id === storedTip.id);
                    if (!existingTip) {
                        this.tips.push(storedTip);
                    }
                });
            };

            const intervalId = setInterval(() => {
                const localStorageTips = JSON.parse(localStorage.getItem('tips')) || [];
                if (localStorageTips.length > 0) {
                    mergeTips(localStorageTips); // Merge without overwriting existing tips
                    clearInterval(intervalId); // Stop checking once tips are available
                }
            }, intervaloInicial);

            setInterval(() => {
                if (this.tips.length === 0) {
                    const novoIntervalId = setInterval(() => {
                        const localStorageTips = JSON.parse(localStorage.getItem('tips')) || [];
                        if (localStorageTips.length > 0) {
                            mergeTips(localStorageTips); // Merge without overwriting existing tips
                            clearInterval(novoIntervalId);
                        }
                    }, intervaloRecorrente);
                }
            }, intervaloRecorrente);
        },
        addTip(newMessage) {
            const newTip = {
            id: newMessage.id,
            title: newMessage.title,
            content: newMessage.content,
            language: this.lang,
            read: false
            };
            // Create a new array reference to trigger reactivity
            this.tips = [...this.tips, newTip];
            console.log('Updated tips:', this.tips);
        }
    },
    mounted() {
        console.log('key ', this.keyDragonite);
        this.verificarTips();
        },
    watch: {
        tips(newValue, oldValue) {
            console.log("tips changed! Old:", oldValue.length, "New:", newValue.length);
            if (newValue.length !== oldValue.length && newValue.length !== 0) {
            this.showTip = true;
            }
        },
        novaMensagem(newValue) {
            console.log("novaMensagem", newValue);
            if (newValue) {
                const existingTip = this.tips.find(tip => tip.id === newValue.id && tip.language === this.lang);
                if (!existingTip) {
                    this.addTip(newValue);
                }
            }
        },
        novasMensagens(newValue) {
            if (newValue && newValue.length > 0) {
            console.log('novasMensagens', newValue);
            newValue.forEach(novaMensagem => {
                const existingTip = this.tips.find(tip => tip.id === novaMensagem.id && tip.language === this.lang);
                if (!existingTip) {
                this.addTip(novaMensagem);
                }
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
        margin-left: 5px;
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