<template>
  <div :style="getStyle()" class="side">
    <div @click="$refs.fileInput.click()" class="pic">
      <img :src="imageURL" alt="perfil" class="img-pic"/>
    </div>
    <div v-if="exibirLinks" class="contato">
       <input type="file"
        id="input"
        ref="fileInput"  
        style="display:none;"
        @change="onIMGChange"
        />
        <p class="title">CONTATO<img src="../icons/editar.png" alt="editar" class="editar" @click="showEditarContato"/></p><br>
        <div v-for="(item, index) in email " :key="index" class="data-container">
            <img v-if="item" src="../icons/envelope.svg" class="email-icon"/>
            <span contenteditable="true" class="email-text">{{item}}</span>
        </div>
        <div v-for="(item, index) in phone" :key="index" class="data-container">
            <img v-if="item" src="../icons/phone.png" alt="phone" class="phone-icon">
            <span contenteditable="true" class="phone-text">{{item}}</span>
        </div>
        <div class="data-container">
            <img v-if="adress" src="../icons/adress.png" alt="adress" class="adress-icon">
            <span contenteditable="true" class="endereco-text">{{adress}}</span>
        </div>
    </div>
    <editar-contato
      class="editar-dados-contato"
    />
    <Formacao
      v-if="exibirFormacao"
      class="template-data"
      titulo="FORMAÇÃO"
      backgroundColor="#808080"
      :formacao="grade"
    />
    <Habilidade
      v-if="exibirHabilidade"
      class="template-data"
      titulo="HABILIDADES"
      backgroundColor="#808080"
      :hability="hability"
    />
    <Social
      v-if="exibirSocial"
      class="template-data"
      titulo="SOCIAL LINKS"
      backgroundColor="#808080"
      :face="facebook"
      :insta="instagram"
      :twitt="twitter"
      :you="youtube"
    />
</div>
</template>
<script>
import Formacao from "./Formacao.vue";
import Habilidade from "./Habilidade.vue";
import Social from "./Social.vue"
import editarContato from './editarContato.vue'

export default {
 components: {
    Formacao,
    Habilidade,
    Social,
    editarContato,
  },
  props:{
    cor: String,
  },
 name:'Side',
 data(){
   return{
    imageURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAES0lEQVR4nO2dy4scVRTGf92jxJBEoogaH1mI2QiuogaJEUWjIeBCJaKICxEkKzdu3Iivv0CRLELIKggGF1mpEMRIxEfQuNFRENHB1yg6EzJGMokz7eL2QNlO6UzVvfc7t/r84Oyq6nznfF2vW1W3wXEcx3Ecx3EcJy89tYAI9ICNwCXDmAdmhnFWqKsRJRpyNXAfcCtwI3ADsKZm2a+BY8BR4AhwPofAcaAP7AE+BBaBQYOYAnbnFt5FtgOTNDNhNBaAx/LK7w494EXgL+KYsRRngFeBR4HLs1VTOD1gH3GNWC7OAgeAa/KUVS7PkN6MavyGn19q2Ua4GsppyIBwuXx3hvqK4zj5zViKGfy88g/uQmfGUuxPXmVBHEJvyDxwWepCS2AN8Ad6QwbA3sS11tJXJV6GrcA6tYghd6gSWzLkFrWACttUiS0Zcr1aQIVrgQsViS0ZYulueQK4QpHYkiEb1QJGWKtIasmQC9QCRpDosWSItYdlkqeNlgyZUwsY4ZQiqSVDTqsFVJgDZhWJLRkyrRZQ4TtVYkuGTKkFVJBpsWTIN2oBFb5UJbZkyEm1gAofqwVY4Sf0I70DhKMGlvYQgE/UAoAfhiHBmiEn1AKAt5TJ3ZB/44ZUuF8tANipFmCFXehP5ktxb+Jaa7G0hzyoFlBBpsWSIZbe9JBpsWTIGbWACn+qElsy5Au1gAqfqxJbMuRdtYAKlrTI6BHvw5w2MYm9p5cy7gHOoTPj3FCDU2EnYbQ1txkf4TeFtWwivyFXZqmsYKbJZ8YvmWr6XyxdZY3yTkdz/SeWDXk9Y643MuYqlgngW9IfrqYRvVi9HJb3kAXCJ8upOYhPubFiLibtc/bThCs6ZxU8TjpDns5YR2foAW8T34wTGDp3lMYG4APimfEVRr9Ht3xSrzIHfBpxe5PArxG3F41SDIHwy47FYsRtRWVcDYm5rai4IcYoyZCYH2FeFHFbUSnJkPVGtxUVN8QYbojTiEsJH2HGujGcB67LWkHHeIX4QyeHs1bQIfaSbnDxuYx1FM8E8ALhuUgqQwbAy9RPVe4M2Qq8T1ojqvEZsCNLZYVxE/Aa6feKujgC3Ja8SuP0Cf92cBSNCcvFSeBJRFM0qbgKeBb4Hr0BdfEz8BKwOVEP5PQJs0cfRvsO72pjgbAH78HevF6NWA88RZg+Q93ctjFFeBa/IWqHMrGOcFj6HX0jY8cs8DyFDMP0gCcIx2B141LHNOECwOw3JZuxdcWUK45ja6pbIMwIPYO+OaqYBe5s3cVIPEyYOFLdFHXMA4+07GVrbh8KUTfDSpxH+OcwWxjvw1RdzCA6p6R4zbMr8WaLvjZidyThXY5djbvbgPcSFdGlOLaahra5mdlEmAqvpBclFCwS7s1+XMnCbZr5UMv1x4U+8MBqFm7KzS3WHTdW3Ks2hmxpse64seJetTHE3LiNYfzH6ziO4ziO4ziO4zhF8jeb7W7hC+joGwAAAABJRU5ErkJggg==",
    exibirLinks: true,
    exibirFormacao: true,
    exibirHabilidade: true,
    exibirSocial: true,
     email : ['insira seu email aqui @teste.com',
     ],
      phone : [
        '51997415104'
      ],
    adress: 'rua Taquari 116, Vila Rica, S.S do Caí RS',
    grade : ['Pós-Graduação em Ciência de dados',
             'Graduação em Análise E Desenvolvimento de Sistemas'
   ],
   hability : "HTML5, CSS, GITHUB, JAVASCRIPT, VUE.JS, NODE.JS, JQUERY, REACT.JS, PHP, JAVA, JAVA SPRING BOOT, MYSQL, LINUXS SYSTEMS, R",
   facebook : 'juliano.soder.3',
   lin : null,
   twitter : null,
   youtube : 'channel/UCWPp8ClgK-Ln2u1mdhfpFGQ'
   }
 },
 methods: {
   getContatoData(){
     if(localStorage.getItem('useremail0')){
       this.email[0] = localStorage.getItem('useremail0')
     }
     if(localStorage.getItem('useremail1')){
       this.email[1] = localStorage.getItem('useremail1')
     }
     if(localStorage.getItem('useremail2')){
       this.email[2] = localStorage.getItem('useremail2')
     }
   },
    getStyle(){
      return{
        'background-color': `${this.cor}`
      }
    },
    onIMGChange(img){
      console.log(URL.createObjectURL(img.target.files[0]))
      this.imageURL = URL.createObjectURL(img.target.files[0])
      // the two codes works as well
      // document.getElementsByClassName("img-pic")[0].src = URL.createObjectURL(img.target.files[0])
    },
    showEditarContato(){
      document.getElementsByClassName('editar-contato-container')[0].style.display= 'block'
    }
  },
  beforeMount(){
    this.getContatoData()
  },
}
</script>
<style>
.editar{
  width: 15px;
  height: 15px;
  float: right;
}
.img-pic{
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
}
.side{
  display: block;
}
.template-data{
  width: 100%;
}
@media only screen and (max-width:1000px) {
  .side{
    height: calc(100% +40px);
    width: 100%;
    background-color: rgb(214, 86, 86);
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 10px;
  }
  .pic{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid black;
    align-self: center;
    margin: 0 auto;
  }
}
@media screen and (min-width:1001px) {
  .side{
    height: calc(100% +200px);
    width: 200px;
    background-color: gray;
    justify-content: center;
    padding-top: 50px;
    font-size: 10px;
    overflow: hidden;
  }
  .pic{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid black;
    align-self: center;
    margin: 0 auto;
  }
}
@media print {
.side{
    height: 100%;
    width: 37%;
    justify-content: center;
    padding-top: 50px;
    font-size: 10px;
    overflow: hidden;
  }
  .pic{
    width: 140px;
    height: 180px;
    border-radius: 50%;
    border: 2px solid black;
    align-self: center;
    margin: 0 auto;
  }

  .editar{
    display: none;
  }
}

.title{
  align-self: center;
  background-color: white;
  color: black;
  font-weight: bolder;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  padding: 10px;
}
.data-container{
  display: flex;
  width: 85%;
  padding-bottom: 10px;
  align-self: center;
  margin: 0 auto;
  margin-top: 1px;
  margin-bottom: 10px;

}
.email-icon{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
.phone-icon{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
.adress-icon{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
</style>