<template>
    <div class="main">
        <div class="header">
              <Header 
                :imgURL="imgURL"
              />
        </div>
        <div class="main-body">
            <Left />
            <Right
                @add-info="$emit('add-info')"
                @add-SocialLink="$emit('add-SocialLink')"
                :user="user"
             />
        </div>
    </div>
</template>

<script>
import Header from '../components/template2_components/Header.vue'
import Left from '../components/template2_components/Left.vue'
import Right from '../components/template2_components/Right.vue'

export default {
    name: 'template2',
    components: {
        Header,
        Left,
        Right
    },
    emits:["add-info", "add-SocialLink"],
    props:{
        imageURL: String,
        user: Object,
        redesociais: Array,
    },
    data(){
        return{
            imgURL: this.imageURL
        }
    },
    mounted(){
    }
}
</script>
<style scoped>
.main{
    display: block;
    box-shadow: 0px 0px 30px 1px;
}
.header{
    display: flex;
    justify-content:center;
    text-align: center;
}
.main-body{
    display:flex;
    width: 100%;
    min-height: 400px;
    height: 100%;
}
</style>