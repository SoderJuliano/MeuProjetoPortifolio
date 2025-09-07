<template>
  <div class="main-container-view">
    <div :style="getStyle()" class="page-header-view">
      <div style="width: 100%; text-align: center">
        <span class="name-title">{{ user.name }}</span>
      </div>
      <div style="width: 100%; text-align: center; padding-top: 20px">
        <span class="profession">{{ user.profession }}</span>
      </div>
    </div>
    <Resumo
      class="data-container template-data"
      :cor="cor"
      :user="user"
      template="1"
      :titulo="titles.resumo"
      :language="language"
      :fontColor="fontColor"
    />
    <Competencias
      class="data-container template-data"
      :cor="cor"
      :fontColor="fontColor"
      :user="user"
      template="1"
      :titulo="titles.competencias"
      :language="language"
      :viewOnly="true"
    />
    <Experiencias
      class="data-container template-data"
      :cor="cor"
      :fontColor="fontColor"
      :experiences="user?.userExperiences"
      template="1"
      :titulo="titles.experiencias"
      :language="language"
      :user="user"
      :viewOnly="true"
    />
  </div>
</template>
<script>
import Resumo from "./componentesCompartilhados/Resumo.vue";
import Competencias from "./componentesCompartilhados/Competencias.vue";
import Experiencias from "./componentesCompartilhados/Experiencias.vue";

export default {
  name: "ClassicInvertedPage",
  data() {
    return {
      titles: {
        competencias: ["COMPETÊNCIAS", "COMPETENCE"],
        resumo: ["RESUMO", "SUMMARY"],
        experiencias: ["EXPERIÊNCIAS", "EXPERIENCES"],
      },
    };
  },
  components: {
    Resumo,
    Competencias,
    Experiencias,
  },
  props: {
    cor: String,
    fontSize: String,
    user: Object,
    language: String,
    fontColor: String,
  },
  methods: {
    getStyle() {
      return {
        "background-color": `${this.cor}`,
        "font-size": `${this.fontSize}`,
        "font-weiht": "bold",
        color: `${this.fontColor}`,
      };
    },
  },
};
</script>
<style scoped>
.main-container-view {
  flex: 1;
  padding: 0;
  background-color: white;
}

.page-header-view {
  color: black;
  width: 100%;
  padding: 20px 0;
  text-align: left;
}

.name-title {
  font-size: 40px;
  letter-spacing: 1px;
  font-weight: bold;
}

.profession {
  font-size: 35px;
  font-weight: bold;
}

.data-container {
  width: 100%;
  display: block;
  margin-top: 20px;
}
</style>
