<template>
    <div class="container-fluid">
        <nav class="navbar">
         <!-- <imprimir
                  class="navbar-toggler"
                /> -->
           <ul class="nav no-search">
             
                <li v-on:click="about" class="nav-item"><a href="#">Sobre o Site</a></li>
                <li v-on:click="aboutMe" class="nav-item"><a href="#">Sobre Mim</a></li>
                <li v-on:click="support" class="nav-item"><a href="#">Apoiar este Projeto</a></li>
                <li v-on:click="more" class="nav-item"><a href="#">Mais Exemplos</a></li>
                <li v-on:click="contact" class="nav-item"><a href="#">Entre em contato</a></li>
            </ul>
        </nav> 
    </div>
  
</template>

<script>
//import imprimir from './Imprimir-bnt.vue'
export default {
    name: 'nav-bar',
    components:{
     // imprimir
    },
    methods:{
      about(){
        alert("Este site foi desenvolvido para suprir a necessidade de montar cvs ou atualizar currículos de forma rápida, pratica e de forma gratuíta, gerando um cv bonito e profissional altamente configurável.");
        alert("Este site não utiliza cookies e também não guarda nenhuma informação pessoal. Todas as suas informações estão no cache do navegador e no seu localStorage, para apagá-los, deve apagar os dados do navegador.")
        alert("Na maioria dos navegadores utilizasse o atalho Cntrl+Shift+Del para limpar os dados de navegação.")
      },
      aboutMe(){
        alert("Sou desenvolvedor de software. Trabalho na industria privada como desenvolvedor desde fevereiro de 2021, porém minha caminhada como programador começou em 2015. Procuro apoiar o software livre com projetos como esse, e também busco responder dúvidas de outros programadores sempre que posso, tenho conta no stackoverflow. Sou formado em ADS pela Fael e em Ciência de Dados pela Uniasselvi.");
      },
      support(){
        alert("Apoie este projeto financeiramente com um pix de qualquer valor para esta chave aleartória -> f22a0b49-3c64-41af-9101-266672b139ba");
        alert("Todo o trabalho emprenhado nestes projeto sempre traz custos, energia, equipamento, disposição, tempo etc... Ficarei muito contente em receber qualquer ajuda.")
        alert("Este projeto está no github e pode ser baixado e alterado e mesmo utilizado de qualquer forma que lhê convém :)")
      },
      more(){
        alert("Ainda em desenvolvimento.  Apoie este projeto ;)")
      },
      contact(){
        alert("Email de contato: juliano_soder@hotmail.com")
      }
    }
}
</script>

<style scoped>
.grad-bar {
  width: 100%;
  height: 50px;
  background-color: whitesmoke;
  margin-bottom: 20px;
  box-shadow: 0 0 50px #ccc;
}

.navbar {
  justify-content: space-around;
  padding-top: 1px;
}
.navbar ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6,1fr);
  justify-self: end;
  
}

.nav-item a {
  color: #000;
  font-size: 0.9rem;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.3s ease-out;
}

.nav-item a:hover {
  color: #3498db;
}

@media only screen and (max-width: 720px) { 
 .grad-bar{display: none;}
}
</style>