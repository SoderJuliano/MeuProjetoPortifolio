<template>
    <div class="main-open-close">
        <img id="close" @click="close()" src="../../assets/correct.svg" alt="V">
        <img id="open" @click="open()" src="../../assets/resize.svg" alt="< >">
    </div>
</template>

<script>

import $ from 'jquery';

export default {
    name: "CenterImgOpenclose",

    methods: {
        close() {
            $("#open").css("display", "block");
            $("#close").css("display", "none");
            $(".main.centerImg").css("display", "none");
        },
        open() {
            $("#open").css("display", "none");
            $("#close").css("display", "block");
            $(".main.centerImg").css("display", "block");
        }
    }
}


</script>

<style scoped>

.main-open-close {
    width: 40px;
}

.main-open-close img 
{
    width: 100%;
}

#open {
    display: none;
}

@media print {
    .main-open-close {
        display: none;
    }
}

</style>