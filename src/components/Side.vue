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
        <p class="title">CONTATO
          <img src="../icons/editar.png" alt="editar" class="editar" @click="$emit('add-info')"/>
        </p><br>
        <div v-for="(item, index) in email " :key="index" class="data-container">
            <img v-if="item" src="../icons/envelope.svg" class="email-icon"/>
            <span class="email-text">{{item}}</span>
        </div>
        <div v-for="(item, index) in phone" :key="index" class="data-container">
            <img v-if="item" src="../icons/phone.png" alt="phone" class="phone-icon">
            <span class="phone-text">{{item}}</span>
        </div>
        <div class="data-container">
            <img v-if="adress" src="../icons/adress.png" alt="adress" class="adress-icon">
            <span class="endereco-text">{{adress}}</span>
        </div>
    </div>
    <editar-contato
      class="editar-dados-contato"
      :phones="phone"
      :endereco="adress"
      :cor="cor"
    />
    <Formacao
      @add-formacao="$emit('add-formacao')"
      v-if="exibirFormacao"
      class="template-data"
      titulo="FORMAÇÃO"
      :backgroundColor="cor"
      :formacao="grade"
    />
     <editarFormacao
      class="editar-dados-escolares"
      :grade="grade"
      :cor="cor"
    />
    <Habilidade
      @add-habilidade="$emit('add-habilidade')"
      v-if="exibirHabilidade"
      class="template-data"
      titulo="HABILIDADES"
      backgroundColor="#808080"
      :hability="hability"
    />
    <editar-habilidade 
      class="editar-habilidade"
      :habilidade="hability"
      :cor="cor"
    />
    <Social
      v-if="exibirSocial"
      class="template-data"
      titulo="SOCIAL LINKS"
      backgroundColor="#808080"
      :face="facebook"
      :lin="lin"
      :twitt="twitter"
      :you="youtube"
      :stof="stackoverflow"
      :git="github"
    />
    <editar-social 
      class="editar-social"
      :face="facebook"
      :lin="lin"
      :twit="twitter"
      :you="youtube"
      :stof="stackoverflow"  
      :git="github"
      :cor="cor"
    />
</div>
</template>
<script>
import Formacao from "./Formacao.vue";
import Habilidade from "./Habilidade.vue";
import Social from "./Social.vue"
import editarContato from './editarContato.vue'
import editarFormacao from './editarFormacao.vue'
import editarHabilidade from './editarHabilidade.vue'
import editarSocial from './editarSocial.vue'

export default {
 components: {
    Formacao,
    Habilidade,
    Social,
    editarContato,
    editarFormacao,
    editarHabilidade,
    editarSocial
  },
  props:{
    cor: String,
  },
 name:'Side',
 emits: ['add-info', 'add-formacao', 'add-habilidade'],
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
        'telefone'
      ],
   adress: 'seu Endereço',
   grade : ['Seus dados escolares'],
   hability : "Suas habilidades",
   facebook : null,
   lin : null,
   twitter : null,
   youtube : null,
   stackoverflow : null,
   github: null,
   }
 },
 methods: {
   getContatoData(){

     let contato = JSON.parse(localStorage.getItem('contato'))

     

     if(contato){
       this.email[0] = contato.email
       this.phone[0] = contato.telefone
       this.adress = contato.endereco
     }

     // grade

     const gradeStorage = localStorage.getItem('grade')
     if(gradeStorage){
       this.grade = []
       this.grade = gradeStorage.split(',')
     }

     // habilitys

     const habilityStorage = localStorage.getItem('hability')
     if(habilityStorage){
       this.hability = habilityStorage
     }

     //social in links

     const lin = localStorage.getItem('in')
     if(lin){
       this.lin = lin
     }
     const you = localStorage.getItem('you')
     if(you){
       this.youtube = you
     }
     const stof = localStorage.getItem('stof')
     if(stof){
       this.stackoverflow = stof
     }
     const face = localStorage.getItem('face')
     if(face){
       this.facebook = face
     }
     const twit = localStorage.getItem('twit')
     if(twit){
       this.twitter = twit
     }
     const git = localStorage.getItem('git')
     if(git){
       this.github = git
     }
   },
    getStyle(){
      return{
        'background-color': `${this.cor}`
      }
    },
    onIMGChange(img){
      //console.log(URL.createObjectURL(img.target.files[0]))
      this.imageURL = URL.createObjectURL(img.target.files[0])
      localStorage.setItem("profileimg", URL.createObjectURL(img.target.files[0]))
      // the two codes works as well
      // document.getElementsByClassName("img-pic")[0].src = URL.createObjectURL(img.target.files[0])
    },
    showEditarContato(){
      document.getElementsByClassName('editar-contato-container')[0].style.display= 'block'
      document.getElementsByClassName('editar-contato-container')[0].style.opacity= '90%'
    }
  },
  beforeMount(){
    this.getContatoData()
  },
  mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered

        //img

    const pimg = localStorage.getItem("profileimg")
    if(pimg){
      if(pimg.includes('av')){
        let av;
        switch (pimg) {
          case 'av1':
            av = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAES0lEQVR4nO2dy4scVRTGf92jxJBEoogaH1mI2QiuogaJEUWjIeBCJaKICxEkKzdu3Iivv0CRLELIKggGF1mpEMRIxEfQuNFRENHB1yg6EzJGMokz7eL2QNlO6UzVvfc7t/r84Oyq6nznfF2vW1W3wXEcx3Ecx3EcJy89tYAI9ICNwCXDmAdmhnFWqKsRJRpyNXAfcCtwI3ADsKZm2a+BY8BR4AhwPofAcaAP7AE+BBaBQYOYAnbnFt5FtgOTNDNhNBaAx/LK7w494EXgL+KYsRRngFeBR4HLs1VTOD1gH3GNWC7OAgeAa/KUVS7PkN6MavyGn19q2Ua4GsppyIBwuXx3hvqK4zj5zViKGfy88g/uQmfGUuxPXmVBHEJvyDxwWepCS2AN8Ad6QwbA3sS11tJXJV6GrcA6tYghd6gSWzLkFrWACttUiS0Zcr1aQIVrgQsViS0ZYulueQK4QpHYkiEb1QJGWKtIasmQC9QCRpDosWSItYdlkqeNlgyZUwsY4ZQiqSVDTqsFVJgDZhWJLRkyrRZQ4TtVYkuGTKkFVJBpsWTIN2oBFb5UJbZkyEm1gAofqwVY4Sf0I70DhKMGlvYQgE/UAoAfhiHBmiEn1AKAt5TJ3ZB/44ZUuF8tANipFmCFXehP5ktxb+Jaa7G0hzyoFlBBpsWSIZbe9JBpsWTIGbWACn+qElsy5Au1gAqfqxJbMuRdtYAKlrTI6BHvw5w2MYm9p5cy7gHOoTPj3FCDU2EnYbQ1txkf4TeFtWwivyFXZqmsYKbJZ8YvmWr6XyxdZY3yTkdz/SeWDXk9Y643MuYqlgngW9IfrqYRvVi9HJb3kAXCJ8upOYhPubFiLibtc/bThCs6ZxU8TjpDns5YR2foAW8T34wTGDp3lMYG4APimfEVRr9Ht3xSrzIHfBpxe5PArxG3F41SDIHwy47FYsRtRWVcDYm5rai4IcYoyZCYH2FeFHFbUSnJkPVGtxUVN8QYbojTiEsJH2HGujGcB67LWkHHeIX4QyeHs1bQIfaSbnDxuYx1FM8E8ALhuUgqQwbAy9RPVe4M2Qq8T1ojqvEZsCNLZYVxE/Aa6feKujgC3Ja8SuP0Cf92cBSNCcvFSeBJRFM0qbgKeBb4Hr0BdfEz8BKwOVEP5PQJs0cfRvsO72pjgbAH78HevF6NWA88RZg+Q93ctjFFeBa/IWqHMrGOcFj6HX0jY8cs8DyFDMP0gCcIx2B141LHNOECwOw3JZuxdcWUK45ja6pbIMwIPYO+OaqYBe5s3cVIPEyYOFLdFHXMA4+07GVrbh8KUTfDSpxH+OcwWxjvw1RdzCA6p6R4zbMr8WaLvjZidyThXY5djbvbgPcSFdGlOLaahra5mdlEmAqvpBclFCwS7s1+XMnCbZr5UMv1x4U+8MBqFm7KzS3WHTdW3Ks2hmxpse64seJetTHE3LiNYfzH6ziO4ziO4ziO4zhF8jeb7W7hC+joGwAAAABJRU5ErkJggg=="
            break;
          case 'av2':
            av = "../img/avatar2.9281ce7f.png"
            break;
          case 'av3':
            av = "data:image/png;base64,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"
            break;
          case 'av4':
            av = "data:image/png;base64,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"
            break;
          case 'av5':
            av = "none"
            break;
          case 'av51':
            av = "../img/avatar5.e57e5808.png"
            break;
          case 'av6':
            av = "../img/avatar6.94999127.png"
            break;
          case 'av7':
            av = "../img/avatar7.02252c9f.png"
            break;
           case 'av8':
            av = "../img/avatar8.60347a72.png"
            break;
          default:
            document.getElementsByClassName("img-pic")[0].src = localStorage.getItem("profileimg")
            break;
        }
         document.getElementsByClassName("img-pic")[0].src = av
      }
     }

    })
  }
}
</script>
<style>
.editar{
  width: 20px;
  height: 20px;
  float: right;
  margin-top: 5px;
  margin-right: 5px;
}
.side .editar{
  width: 15px;
  height: 15px;
  float: right;
  margin-top: 1px;
}
.img-pic{
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
}
.side{
  display: block;
  box-shadow: 0 0 50px #ccc;
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
  .editar-dados-contato{
    width: 95%;
    position: absolute;
    top: 10%;
    border: 2px solid white;
  }
  .editar-dados-escolares{
    width: 95%;
    position: absolute;
    border: 2px solid white;
    top: 10%;
    display: none;
    padding: 1px;
  }
  .editar-habilidade{
    width: 95%;
    display: none;
    padding: 1px;
    position: absolute;
    top: 10%;
    margin-right: 1%;
    border: 2px solid white;
    font-weight: bold;
    z-index: 10;
  }
  .editar-social{
    width: 95%;
    display: none;
    margin-right: 1%;
    padding: 1px;
    background-color: whitesmoke;
    z-index: 1000;
    position: absolute;
    top: 10%;
    border: 2px solid white;
    font-weight: bold;
  }
}
@media screen and (min-width:1001px) {
  .side{
    width: 30%;
    min-width: 250px;
    background-color: gray;
    justify-content: center;
    padding-top: 50px;
    font-size: 14px;
    overflow: hidden;
    word-break: break-all;
  }
  .pic{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid black;
    align-self: center;
    margin: 0 auto;
  }
  .editar-dados-escolares{
    width: 300px;
    max-height: 100%;
    border-radius: 20px;
    box-shadow: gray -2px 2px 2px;
    display: none;
    background-color: whitesmoke;
    margin-top: -200px;
    margin-left: 200px;
    opacity: 90%;
    padding: 10px;
    position: absolute;
  }
  .editar-habilidade{
    width: 300px;
    max-height: 100%;
    border-radius: 20px;
    box-shadow: gray -2px 2px 2px;
    display: none;
    background-color: whitesmoke;
    margin-top: -200px;
    margin-left: 200px;
    opacity: 90%;
    padding: 10px;
    position: absolute;
    z-index: 10;
  }
  .editar-social{
    width: 400px;
    max-height: 100%;
    border-radius: 20px;
    box-shadow: gray -2px 2px 2px;
    display: none;
    background-color: whitesmoke;
    margin-top: -200px;
    margin-left: 200px;
    opacity: 90%;
    padding: 10px;
    position: absolute;
    z-index: 1000;
    border: 2px solid white;
    color: white;
    font-size: 16px;
  }
}
@media print {
.editar-social{
  display: none;
}
body{
  -webkit-print-color-adjust: exact !important;   /* Chrome, Safari, Edge */
  color-adjust: exact !important;                 /*Firefox*/
}
.side{
    height: 100%;
    width: 40%;
    justify-content: center;
    padding-top: 35px;
    font-size: 12px;
    overflow: hidden;
  }
  .pic{
    width: 140px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid black;
    align-self: center;
    margin: 0 auto;
  }

  .editar{
    display: none;
  }

  .editar-dados-escolares{
    display: none;
  }

  .editar-habilidade{
    display: none;
  }

  .editar-dados-contato{
    display:  none !important;
  }
  .editar-social{
    display: none !important;
  }
  .title{
    margin-top: 10px !important;
  }
  .formacao-container{
    padding-top: 0px !important;
  }
  .habilidade-container{
    padding-top: 0px !important;
  }
  .social-container{
     padding-top: 0px !important;
  }
}

.title{
  align-self: center;
  background-color: white;
  color: black;
  font-weight: bolder;
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
  padding: 5px;
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
