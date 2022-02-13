<template>
    <div class="main">
        <div class="header">
              <Header 
                :imgURL="imgURL"
              />
        </div>
        <div class="main-body">
            
        </div>
    </div>
</template>

<script>
import Header from '../components/template2_components/Header.vue'

export default {
    name: 'template2',
    components: {
        Header,
    },
    props:{
        imageURL: String
    },
    data(){
        return{
            imgURL: this.imageURL
        }
    },
    mounted(){
        console.log(this.imgURL)
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