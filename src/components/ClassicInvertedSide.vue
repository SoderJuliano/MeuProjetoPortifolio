<template>
  <div :style="getStyle()" class="side-view">
    <div class="pic-view" v-if="user.realImg || !viewOnly">
      <img v-if="user.realImg" :src="user.realImg" alt="perfil" class="img-pic-view" />
      <img v-else src="../icons/avatares/no-img.png" class="img-avatar-view" alt="perfil" />
    </div>
    <div class="contato-view template-data">
      <p class="title-view">{{ language == "pt-br" ? "CONTATO" : "CONTACT" }}</p>
      <div v-for="(item, index) in user.contact.email" :key="index" class="data-container-view">
        <span class="email-text">{{ item }}</span>
      </div>
      <div v-for="(item, index) in user.contact.phone" :key="index" class="data-container-view">
        <span class="phone-text">{{ item }}</span>
      </div>
      <div class="data-container-view">
        <span class="endereco-text">{{ user.contact.address }}</span>
      </div>
    </div>

    <Formacao
      class="template-data"
      :titulo="titles.formacao"
      :backgroundColor="cor"
      :user="user"
      template=1
      :language="language"
      :viewOnly="true"
    />

    <Habilidade
      class="template-data"
      :titulo="titles.habilidades"
      backgroundColor="#808080"
      :user="user"
      template=1
      :language="language"
    />

    <Social
      class="template-data"
      backgroundColor="#808080"
      :user="user"
      template=1
      :titulo="titles.social"
      :language="language"
      :viewOnly="true"
    />
  </div>
</template>

<script>
import Formacao from "./componentesCompartilhados/Formacao.vue";
import Habilidade from "./componentesCompartilhados/Habilidade.vue";
import Social from "./componentesCompartilhados/Social.vue";

export default {
  components: {
    Formacao,
    Habilidade,
    Social,
  },
  props: {
    cor: String,
    user: Object,
    titles: Object,
    language: String,
    viewOnly: {
        type: Boolean,
        default: false
    }
  },
  name: "ClassicInvertedSide",
  data() {
    return {};
  },
  methods: {
    getStyle() {
      return {
        "background-color": `${this.cor}`,
      };
    },
  },
};
</script>

<style scoped>
.side-view {
  flex: 0 0 35%;
  padding: 0;
  color: white;
}

.pic-view {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px auto;
  border: 4px solid white;
}

.img-pic-view, .img-avatar-view {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title-view {
  font-weight: bold;
  font-size: 1.2em;
  border-bottom: 2px solid white;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

.data-container-view {
  margin-bottom: 5px;
}
</style>
