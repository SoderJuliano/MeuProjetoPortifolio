<template>
    <div class="container-fluid">
        <nav class="navbar">
            <div class="nav-item is-right">
                <img id="showMenu" v-if="show==false" @click="showMenu"  src="../icons/menustatic.png" alt="menu">
                <button class="bnt-close" v-else @click="close">
                    X
                </button>
            </div>
              <div class="midle-options">
                <button @click="changeLanguage('pt-br')" class="bnt-languages">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZklEQVR4nO2W70tTURjHz/9VkvmjVC5qQ2IlBPkDfKVvxNheBEpZL+pNBAVtgwRf6sTfA/EHm0gqiixY0WglWYa1XViRSfGV59Kt1HvvOXf3bDg5X3hgcMfd+Xy/z3meMaakpKSkpHQWpEWbUU7FFED0jCfQOtmIeKoKq68v4sZUY3kB3I/XQ/9YAeydMyr/6Twer9SdfoDWP66bBz9eMtNgsgGOu25XstJgsgB4rhcrDSYDwMr17NtLCD0Lor07gsv+MaM6usMIhYLGM1lpMC8Adq4vzLaj/loUF65MWRY9W4x1SEmDFQpg1+t0+ErfpO3hzaLvWEHkXabhGsCp13PvfAjeTeDWnTUEB9fR2ZuAr20OlT5riIbro8hlaj3dDVcAvAmzuTEPKx0c/MbLV1kMj6bR1bd8BCgcCniaVEIAohNm+UUaG8kvSKzuYn1rD6k3OrK5/RNA2x++4eGTJGqvzhgXGx4mFRdAdK5T1fmtL27zzTkEBtcwHnuPrP7zL8jO7nf0P1gRerddGlyAgaUGfN0RA3CaPGZVt0zj3qMtZLbzBsSP/V9C7yYTycyCWsg/0YSZZDX3R2jm8wDMqmqZxtOhFNKZz9z3UvtSG3u+xLw0aEmJApg19Py2a9c9jVGnNGjDirTRvzE6Aj1T49p1KYvMLg1aTqKLbCnWVpDrmgwApzQIgpaUk/NWh48Lui4NwCkN2rC0pDp7IsZ4paLPkXDgRNvoLl2XDuBmUslwXSsGAO9ueO11rVQAIml4dV0rNoBdGrJc10oF8P8fQZmua6UEKHYxBRA9ZQkoKSkpKSmxMtQhlLbo6Z/lAAQAAAAASUVORK5CYII=">
                </button>
                <button @click="changeLanguage('us-en')" class="bnt-languages">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+klEQVR4nO2VrQoCQRSFx5eybhAWtmkSxGLWJzD4ACbrWn0FFxQVDGKzCQo2g2lAFydZruyCFg3uMr/O+eDA3HYP9565jAEAAADAMERUCRoJyZaoVZWJ/aWBqDWn0Xj/bqBo3etvcxkxEDZndDjdKGMw3FHRut1dU3p/5MremQF+TZWJfZtAPDnSanOhemdJZerp4pzrNQHtBgLJMmIgkpgD7SEOJefAyDcaS8yB83eA685AJPkOaDUQ4g4kH3fA+QwIGKj+PgGVgdMSYm5BU9xrA0Jh4LT8QsKCpoTXBrgFe829DjF33YCwYK+F1yEWLhsAAAAAAGCleAKWmufwwWk9CQAAAABJRU5ErkJggg==">
                </button>
              </div>
              <div class="right-options">
                  <li v-on:click="imprimir" class="nav-item" id="imprimir-item">
                    <img src="../icons/header/print.png" alt="print" class="li-img" />
                    <a href="#" class="nav-link">{{this.printText()}}</a>
                  </li>
                    <li @click="showDropDown(1)" class="nav-item" id="navbarDropdown">
                      <img src="../icons/header/info.png" alt="info" class="li-img" />
                      <a class="nav-link" href="#" >
                        {{this.informacoesText()}}
                      </a>
                      <div v-if="info" class="dropdown-menu" >
                        <a v-on:click="about" class="dropdown-item" href="#">{{this.sobreSiteText()}}</a>
                        <a v-on:click="more" class="dropdown-item" href="#">{{this.exemplesText()}}</a>
                        <a v-on:click="support" class="dropdown-item" href="#">{{this.suportText()}}</a>
                      </div>
                    </li>
                    <li @click="showDropDown(2)" class="nav-item" id="navbarDropdown">
                      <img alt="paper" class="li-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5klEQVR4nO2YvUvDQBiHH00qCIJQHUQEF8HFycHFr9HRXaT9W3RycRL/geLg4uKiU4dWRTcFRWkXR1FUEPxA1EjghHBc06S5JneSB96lfZPck9/l8gH6mQA2gFPgHvgCnoFzYBuYwXD6gE3gG/Da1B4whIH0ArsRBILlJzSIYZQVA30SZ34LOAA+FT3+f0ZxJQ2wCgxLPZPArdT3CgxgCOPS4D6AkRa9y4pUFjGEeTGN/uowpHdUIeLLWce0QsT/zTp2JIlHoB+L6BMrlJzGOhYxBVwoJKpC0ApWgXeFRMWkZbcds4qb4AOwgmXsSxINYAwLeZFE5rAQB/gJSLwBPVhIQUrjLusB5fwnCuICXwKKWEoRuAxcI/47+wIWsqa4m59gIRWFiBErlwscx/y4oKPOxLG7+nEhrSrpvEvfBHacFp6opq5U5DTSwtOZipxGViLNpKmUAo/gWYk0kqYSTKOUoUg5aSrBNJyIIvUYq1E9ooiTJBVXsbFukVpEEfmkxkpFFWdWU0s1zSPRaqMsRejkWmm1QdYiTpxUwpqzFomVSlijCSJO1FTCmkwQCa5g14RwJB7XXYNFXPGSVtO9427hdet4uUiHeHkibcinVod4+dRqQz61TJ1aXsqFbuK8/emqyI8hvxcxpS1Nh3aEAAAAAElFTkSuQmCC">
                      <a class="nav-link" href="#" >
                        {{this.sobreSiteMim().toUpperCase()}}
                      </a>
                      <div v-if="myInfo" class="dropdown-menu" >
                        <a v-on:click="aboutMe" class="dropdown-item">{{this.sobreSiteMim()}}</a>
                        <a v-on:click="contact" class="dropdown-item">{{this.contatoText()}}</a>
                      </div>
                    </li>
                </div>
        </nav>
    </div>
  <options-menu
    @close="closeMenu"
    :show = show
  />
</template>

<script>
import $ from 'jquery'

export default {
    name: 'nav-bar',
    data(){
      return{
        show: false,
        myInfo: false,
        info: false
      }
    },
    props: {
      language: String
    },
    emits:['close', 'language-update', 'now-template1', 'now-template2'],
    methods:{
      exemplesText(){
        return this.getLanguage() == 'us-en' ? "See more" : "Mais Exemplos"
      },
      suportText(){
        return this.getLanguage() == 'us-en' ? "Suport the site" : "Apoiar este Projeto"
      },
      contatoText(){
        return this.getLanguage() == 'us-en' ? "Send me an e-mail" : "Entre em contato"
      },
      informacoesText() {
        return this.getLanguage() == 'us-en' ? "INFO" : "INFORMAÇÕES"
      },
      sobreSiteMim() {
        return this.getLanguage() == 'us-en' ? "About me" : "Sobre Min"
      },
      sobreSiteText(){
        return this.getLanguage() == 'us-en' ? "About this website" : "Sobre o site"
      },
      printText(){
        return this.getLanguage() == 'us-en' ? "PRINTER" : "IMPRIMIR"
      },
      getLanguage(){ return localStorage.getItem('lng')},
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
        document.getElementsByClassName("multi-menu-class")[0].style.zIndex = "17"
        //! Este valor de z-index precisa ser maior que o do .side que tem a img do usuario,
        //! caso contrário a img aparecerá por cima do menu
        document.getElementsByClassName("multi-menu-class")[0].animate([
            // keyframes
            { transform: 'translateY(-300px) scale(0.1)', marginLeft:'150px', opacity: '0.5'},
            { transform: 'translateY(0px) scale(0.8)', opacity: '1'}
          ], {
            // timing options
            duration: 330,
            iterations: 1
          });
      },
      closeMenu(){
        this.show = false
      },
      about(){
        localStorage.getItem('lng') == 'us-en'
          ? alert("We are not using cookies and I do not store any information in server-side")
          : alert("Não usamos cookies e não guardamos nenhuma informação sua")
      },
      aboutMe(){
        window.open("https://www.linkedin.com/in/julianosoder/");
      },
      support(){
        localStorage.getItem('lng') != 'us-en'
          ? alert("Torne-se um apoiador deste projeto com um pix (qualquer valor) para esta chave aleartória -> f22a0b49-3c64-41af-9101-266672b139ba")
          : alert("Support this project sending money or sharing it with friends")
      },
      more(){
        alert("Ainda em desenvolvimento.  Apoie este projeto ;)")
      },
      contact(){
        window.location.href = "mailto:juliano_soder@hotmail.com?subject=Hi there&body=message%20goes%20here";
      },
      imprimir(){
        const sideHeight = $(".side").height()
        const mainHeight = $(".main-container").width()

        // console.log("side: " + sideHeight)
        // console.log("main-container: " + mainHeight )

        sideHeight > 950 ? $(".side").height(sideHeight) : $(".side").css("height", "100vh")
        if(mainHeight > sideHeight && mainHeight > 950){
          $(".side").height(mainHeight)
        }else{
          $(".main-container").height(sideHeight+50)
        }

        window.print()

        $(".side").height(sideHeight)
        $(".main-container").height(mainHeight)

      },
      changeLanguage(lng){
        this.$emit('language-update', lng)
        lng == "pt-br" ?
        (document.getElementsByClassName("bnt-languages")[0].style.backgroundColor = "blue",
        document.getElementsByClassName("bnt-languages")[1].style.backgroundColor = "white",
        document.getElementsByClassName("bnt-languages")[1].style.color = "black",
        document.getElementsByClassName("bnt-languages")[0].style.color = "white"
        )
        : (document.getElementsByClassName("bnt-languages")[1].style.backgroundColor = "blue",
        document.getElementsByClassName("bnt-languages")[0].style.backgroundColor = "white",
        document.getElementsByClassName("bnt-languages")[0].style.color = "black",
        document.getElementsByClassName("bnt-languages")[1].style.color = "white")
      }
    },
    mounted(){
      this.language == "us-en" ? (document.getElementsByClassName("bnt-languages")[1].style.backgroundColor = "blue",
        document.getElementsByClassName("bnt-languages")[1].style.color = "white", document.getElementsByClassName("bnt-languages")[0].style.color = "black",
        document.getElementsByClassName("bnt-languages")[0].style.backgroundColor = "white"
      ) : '';
    }
}
</script>

<style scoped>

li img {
  width: 35px;
  height: 35px;
}

@media print {
  .bnt-languages{
    display: none;
  }
}
.bnt-languages{
  min-width: 80px;
  padding: 1px;
  border-radius: 10px;
  box-shadow: black -1px 2px;
}
.bnt-languages img{
  width: 40px;
}
.bnt-languages:first-child{
  margin-right: 10px;
  background-color: blue;
  color: white;
}
.container-fluid {
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  justify-content: center;
  padding-top: 10px;
}
.navbar {
  justify-content: center;
  padding: 10px;
  margin: auto auto;
  border-radius: 10px;
  box-shadow: black -1px 2px 5px;
  width: 50%;
  display: flex;
  background-color: whitesmoke;
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
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center;
}
.nav-item:hover .nav-link{
  opacity: 1;
  transition: 0.3s ease-in-out;
}
.nav-item:hover .li-img{
  transform: translateY(-40px);
  transition: 0.3s ease-in-out;
  background-color: white;
  border-radius: 50%;
  padding: 10px;
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
  width: 100px;
  display: flex;
}
.right-options{
  position: relative;
  width: 100%;
  display: flex;
}

.right-options a{
  font-size: 11px;
}
.nav-item .nav-link{
  background-color: #3498db;
  color: white;
  padding: 10px;
  border-radius: 25px;
}
.bnt-close{
  min-width: 40px;
}
.midle-options{
  justify-content: center;
  width: 100%;
  display: flex;
}
</style>
