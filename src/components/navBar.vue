<template>
    <div class="container-fluid">
        <nav class="navbar">
          <ul class="nav no-search">
            <div class="nav-item is-right">
                <img @click="showMenu" src="../icons/menustatic.png" alt="menu">
            </div>
            
            
              <div class="right-options">
                  <li v-on:click="imprimir" class="nav-item" id="inprimir-item"><a href="#">IMPRIMIR</a></li>
                    <li class="nav-item" id="navbarDropdown">
                      <a class="nav-link" href="#" >
                        Informações
                      </a>
                      <div class="dropdown-menu" >
                        <a v-on:click="about" class="dropdown-item" href="#">Sobre o Site</a>
                        <a v-on:click="more" class="dropdown-item" href="#">Mais Exemplos</a>
                        <a v-on:click="support" class="dropdown-item" href="#">Apoiar este Projeto</a>
                      </div>
                    </li>

                    
                    <li class="nav-item" id="navbarDropdown">
                      <a class="nav-link" href="#" >
                        Sobre mim
                      </a>
                      <div class="dropdown-menu" >
                        <li v-on:click="aboutMe" class="nav-item"><a href="#">Sobre Mim</a></li>
                        <li v-on:click="contact" class="nav-item"><a href="#">Entre em contato</a></li>
                      </div>
                    </li>
                </div>
              
            </ul>
        </nav> 
    </div>
  <options-menu 
    :show = show
  />
</template>

<script>
import optionsMenu from './optionsMenu.vue'
export default {
    name: 'nav-bar',
    components:{
      optionsMenu
    },
    data(){
      return{
        show: false
      }
    },
    methods:{
      showMenu(){
        this.show = true
      },
      about(){
        alert("Este site foi desenvolvido para suprir a necessidade de montar cvs ou atualizar currículos de forma rápida, pratica e de forma gratuíta, gerando um cv bonito e profissional altamente configurável.");
        alert("Este site não utiliza cookies e também não guarda nenhuma informação pessoal. Todas as suas informações estão no cache do navegador e no seu localStorage, para apagá-los, deve apagar os dados do navegador.")
        alert("Na maioria dos navegadores utilizasse o atalho Cntrl+Shift+Del para limpar os dados de navegação.")
      },
      aboutMe(){
        alert("Sou desenvolvedor de software. Trabalho na industria privada como desenvolvedor desde fevereiro de 2021, porém minha caminhada como programador começou em 2015. Procuro apoiar o software livre com projetos como esse, e também busco responder dúvidas de outros programadores sempre que posso, tenho conta no stackoverflow. Sou formado em ADS pela Fael e em Ciência de Dados pela Uniasselvi.");
      },
      support(){
        alert("Torne-se um apoiador deste projeto com um pix (qualquer valor) para esta chave aleartória -> f22a0b49-3c64-41af-9101-266672b139ba");
        alert("Todo o trabalho emprenhado nestes projeto sempre traz custos, energia, equipamento, disposição, tempo etc... Ficarei muito contente em receber qualquer ajuda.")
        alert("Este projeto está no github e pode ser baixado e alterado e mesmo utilizado de qualquer forma que lhê convém :)")
      },
      more(){
        alert("Ainda em desenvolvimento.  Apoie este projeto ;)")
      },
      contact(){
        alert("Email de contato: juliano_soder@hotmail.com")
      },
      imprimir(){
        window.print()
      }
    }
}
</script>

<style scoped>
.container-fluid {
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  justify-content: center;
  padding-top: 1px;
}

.navbar {
  justify-content: space-around;
  float: right;
  margin: 0 auto;
  width: 100%;
}
.navbar ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6,1fr);
  justify-self: end;
  
}
.nav-item{
  width: 100px;
}
.nav-item a {
  color: #000;
  font-size: 0.9rem;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.3s ease-out;
  text-shadow: .5px -1px slategray;
  font-size: 16px;
}

.nav-item a:hover {
  color: #3498db;
}
.dropdown-menu{
  z-index: 10;
  position: absolute;
  background-color: whitesmoke;
  display: none;
}
.dropdown-item:hover{
  background-color: gray;
}
.dropdown-item{
  padding: 10px;
}
#navbarDropdown:hover .dropdown-menu{
  display: block;
}
#inprimir-item{
}
@media only screen and (max-width: 720px) { 
 .container-fluid{display: none;}
}
.nav-item.is-right{
  position: absolute;
  width: 20%;
  left: 20%;
  display: flex;
}
.right-options{
  position: absolute;
  width: 20%;
  right: 20%;
  display: flex;
}
</style>