<template>
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiAgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiMyMTk2RjMiIGQ9Ik00MSwxMEgyNXYyOGgxNmMwLjU1MywwLDEtMC40NDcsMS0xVjExQzQyLDEwLjQ0Nyw0MS41NTMsMTAsNDEsMTB6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI1IDE1LjAwMUgzOVYxN0gyNXpNMjUgMTlIMzlWMjFIMjV6TTI1IDIzLjAwMUgzOVYyNS4wMDFIMjV6TTI1IDI3LjAwMUgzOVYyOUgyNXpNMjUgMzFIMzlWMzMuMDAxSDI1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMwRDQ3QTEiIGQ9Ik0yNyA0Mkw2IDM4IDYgMTAgMjcgNnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjEuMTY3LDMxLjAxMkgyMS4xNjdIMTguNDVsLTEuODAyLTguOTg4Yy0wLjA5OC0wLjQ3Ny0wLjE1NS0wLjk5Ni0wLjE3NC0xLjU3NmgtMC4wMzJjLTAuMDQzLDAuNjM3LTAuMTEsMS4xNjItMC4xOTcsMS41NzZsLTEuODUsOC45ODhoLTIuODI3bC0yLjg2LTE0LjAxNGgyLjY3NWwxLjUzNiw5LjMyOGMwLjA2MiwwLjQwNCwwLjExMSwwLjkzOCwwLjE0MywxLjYwN2gwLjA0MmMwLjAxOS0wLjQ5OCwwLjA5OC0xLjA1MSwwLjIyMy0xLjY0NWwxLjk3LTkuMjkxaDIuNjIybDEuNzg1LDkuNDA0YzAuMDYyLDAuMzQ4LDAuMTE5LDAuODQ2LDAuMTcsMS41MTFoMC4wMzFjMC4wMi0wLjUxNSwwLjA3My0xLjAzNSwwLjE2LTEuNTYzbDEuNTAzLTkuMzUyaDIuNDY4TDIxLjE2NywzMS4wMTJ6Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8L3N2Zz4=" alt="SVG Icon">
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

img {
    width: 55px;
    height: 60px;
}

@media screen and (max-width: 1500px) {
    img {
        width: 35px;
        height: 35px;
    }
}
</style>