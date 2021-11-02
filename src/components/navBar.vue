<template>
    <div class="grad-bar">
        <nav class="navbar">
           <ul class="nav no-search">
                <a>Juliano Soder</a>
                <li v-on:click="abaut" class="nav-item"><a href="#">Sobre esse Site</a></li>
                <li class="nav-item"><a href="#">Sobre Mim</a></li>
                <li class="nav-item"><a href="#">Apoiar este Projeto</a></li>
                <li class="nav-item"><a href="#">Mais Exemplos</a></li>
                <li class="nav-item"><a href="#">Entre em contato</a></li>
            </ul>
        </nav> 
    </div>
  
</template>

<script>
export default {
    name: 'nav-bar',
    methods:{
      abaut(){
        alert("sobre este site");
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
  box-shadow: 0px 1px 5px 0px;
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