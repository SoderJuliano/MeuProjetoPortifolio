<template>
    <svg class="li-img" xmlns="http://www.w3.org/2000/svg" width="46.931" height="46.931" id="microsoft-word">
        <path fill="#41a5ee"
            d="M44.977 2.933H13.688a1.955 1.955 0 0 0-1.955 1.955v8.311l17.6 5.134 17.6-5.133V4.888a1.955 1.955 0 0 0-1.956-1.955Z">
        </path>
        <path fill="#2b7cd3" d="M46.933 13.199h-35.2v10.266l17.6 5.134 17.6-5.133Z"></path>
        <path fill="#185abd" d="M46.933 23.466h-35.2v10.266l17.6 5.134 17.6-5.133Z"></path>
        <path fill="#103f91"
            d="M46.933 33.732h-35.2v8.311a1.955 1.955 0 0 0 1.955 1.955h31.289a1.955 1.955 0 0 0 1.956-1.955Z"></path>
        <path
            d="M24.444 10.266H11.733v27.866h12.711a1.961 1.961 0 0 0 1.955-1.955V12.221a1.961 1.961 0 0 0-1.955-1.955Z"
            opacity=".1"></path>
        <path
            d="M22.977 11.733H11.733v27.866h11.244a1.961 1.961 0 0 0 1.956-1.955V13.688a1.961 1.961 0 0 0-1.956-1.955Z"
            opacity=".2"></path>
        <path
            d="M22.977 11.733H11.733v24.932h11.244a1.961 1.961 0 0 0 1.956-1.955V13.688a1.961 1.961 0 0 0-1.956-1.955Z"
            opacity=".2"></path>
        <path d="M21.511 11.733h-9.778v24.932h9.778a1.961 1.961 0 0 0 1.955-1.955V13.688a1.961 1.961 0 0 0-1.955-1.955Z"
            opacity=".2"></path>
        <path fill="#185abd"
            d="M1.955 11.733h19.556a1.955 1.955 0 0 1 1.955 1.955v19.556a1.955 1.955 0 0 1-1.955 1.955H1.955A1.955 1.955 0 0 1 0 33.244V13.688a1.955 1.955 0 0 1 1.955-1.955Z">
        </path>
        <path fill="#fff"
            d="M17.526 30.799h-2.639l-3.08-10.12-3.227 10.12H5.94L3.007 16.133h2.64L7.7 26.399l3.08-9.973h2.2l2.933 9.973 2.053-10.266h2.491Z">
        </path>
        <path fill="none" d="M0 0h46.931v46.931H0Z"></path>
    </svg>
    <a href="#" @click="downloadAsDoc" class="nav-link">{{ buttonText }}</a>
</template>

<script>

export default {
    computed: {
        buttonText() {
            return this.text;
        }
    },
    props: {
        text: {
            type: String,
            default: 'Download as Doc'
        }
    },
    methods: {
        async downloadAsDoc() {
            // Clona a div com o id para não modificar a original
            var contentClone = document.getElementById('template').cloneNode(true);

            // Remove todos os elementos <svg>
            var svgsToRemove = contentClone.querySelectorAll('svg');
            svgsToRemove.forEach(function (svg) {
                svg.remove();
            });

            // Remove todos os elementos <img> que não possuem a classe .img-pic
            var imgsToRemove = contentClone.querySelectorAll('img:not(.img-pic)');
            imgsToRemove.forEach(function (img) {
                img.remove();
            });


            let htmlNoneeded = contentClone.querySelectorAll('.centerImg');

            htmlNoneeded.forEach(element => {
                element.remove();
            });
            // Captura o conteúdo HTML modificado
            var content = contentClone.innerHTML;

            // Cria um link temporário para fazer o download do conteúdo HTML como .doc
            var link = document.createElement('a');
            link.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(content);
            link.download = 'document.doc';
            link.target = '_blank';

            // Simula o clique no link para iniciar o download
            link.click();
        },
    }
}
</script>

<style scoped>
.li-img {
    position: absolute;
}

.nav-link {
    background-color: #3498db;
    color: #fff;
    padding: 10px;
    border-radius: 20px;
    font-size: 11px;
}
</style>