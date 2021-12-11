<template>
    <div class="container-fluid">
        <nav class="navbar">
            <div class="nav-item is-right">
                <img v-if="show==false" @click="showMenu"  src="../icons/menustatic.png" alt="menu">
                 <button v-else @click="close">
                   X
                </button>
            </div>
              <div class="right-options">
                  <li v-on:click="imprimir" class="nav-item" id="imprimir-item">
                    <ion-icon name="print" size="large"></ion-icon>
                    <a href="#" class="nav-link">IMPRIMIR</a>
                  </li>
                    <li @click="showDropDown(1)" class="nav-item" id="navbarDropdown">
                      <ion-icon name="information-circle-outline" size="large"></ion-icon>
                      <a class="nav-link" href="#" >
                        INFORMAÇÕES
                      </a>
                      <div v-if="info" class="dropdown-menu" >
                        <a v-on:click="about" class="dropdown-item" href="#">Sobre o Site</a>
                        <a v-on:click="more" class="dropdown-item" href="#">Mais Exemplos</a>
                        <a v-on:click="support" class="dropdown-item" href="#">Apoiar este Projeto</a>
                      </div>
                    </li>

                    
                    <li @click="showDropDown(2)" class="nav-item" id="navbarDropdown">
                      <ion-icon name="paper" size="large"></ion-icon>
                      <a class="nav-link" href="#" >
                        SOBRE MIM
                      </a>
                      <div v-if="myInfo" class="dropdown-menu" >
                        <a v-on:click="aboutMe" class="dropdown-item">Sobre Mim</a>
                        <a v-on:click="contact" class="dropdown-item">Entre em contato</a>
                      </div>
                    </li>
                </div>
        </nav> 
    </div>
</template>

<script>
export default {
    name: 'nav-bar',
    data(){
      return{
        show: this.showthis,
        myInfo: false,
        info: false
      }
    },
    props:{
      showthis: Boolean
    },
    methods:{
      close(){
        this.$emit('close')
        this.show = false
      },
      showDropDown(qual){
        switch (qual) {
          case 1:
            if(this.info){
              this.info = false  
              break;
            }
            this.info = true
            this.myInfo = false 
            break;
          case 2:
            if(this.myInfo){
              this.myInfo = false 
              break;
            }
            this.myInfo = true
            this.info = false 
            break;
        }
      },
      showMenu(){
        this.show = true
        document.getElementsByClassName("multi-menu-class")[0].style.opacity = "1"
        document.getElementsByClassName("multi-menu-class")[0].style.zIndex = "1"
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
.navbar button{
  width: 35px;
  height: 35px;
}
.container-fluid {
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  justify-content: center;
  padding-top: 1px;
}
.navbar {
  justify-content: center;
  padding-top: 20px;
  margin: 0 auto;
  width: 54%;
  display: flex;
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
  top: 40px;
  padding: 20px;
  position: absolute;
  background-color: whitesmoke;
  justify-content: center;
  display: grid;
  width: 150px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
}
.dropdown-item:hover{
  background-color: gray;
}
.dropdown-item{
  padding: 10px;
}

.nav-item {
    width: 200px;
    text-align: center;
    justify-content: center;
}
.nav-item:hover .nav-link{
  opacity: 1;
  transition: 0.5s ease-in-out;
}
.nav-item:hover ion-icon{
  transform: translateY(-30px);
  transition: 0.5s ease-in-out;
}
.nav-item .nav-link{
  opacity: 0;
  position: absolute;
}
li{
  display: flex;
}
@media only screen and (max-width: 720px) { 
 .container-fluid{display: none;}
}
.nav-item.is-right{
  position: relative;
  width: 20%;
  display: flex;
  left: -270px;
}
.right-options{
  position: relative;
  width: 340px;
  display: flex;
  right: -270px;
}
</style>