<template>
    <div class="tip-container">
        <img style="width: 40px;" v-if="showTip == true" @click="show('icon')" src="../../assets/tips/idea.png" alt="tipIcon" />
        <img v-if="showTip == false" @click="show('icon')" src="../../assets/tips/idea.gif" alt="tipIcon" />
        <div class="tip-conteiner-content" id="icon">
            <div id="title">
                <h3>{{ this.lang == "pt-br" ? strings[0].tip : strings[1].tip }}</h3>
                <span @click="close('icon')" id="closer">X</span>
            </div>
            <span>{{ this.lang == "pt-br" ? strings[0].iconTip : strings[1].iconTip }}</span>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'Tip',
    data(){
        return {
            showTip: true
        }
    },
    mounted() {
        this.showTip = localStorage.getItem('tip') == 'icon'
    },
    props: {
        lang: String,
        strings: { type: Array }
    },
    methods: {
        show(tip){
            localStorage.setItem('tip', tip);
            $('#'+tip).css('display', 'block');
            this.showTip = true;
        },
        close(tip){
            $('#'+tip).css('display', 'none');
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
        display: none;
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
</style>