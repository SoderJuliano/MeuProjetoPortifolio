<template>
    <div class="main">
        <div class="header">
              <Header />
        </div>
        <div class="main-body">
            
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
    name: 'template2',
    components: {
        Header,
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
    padding-top: 40px;
}
.main-body{
    display:flex;
    width: 100%;
    min-height: 400px;
    height: 100%;
}
</style>