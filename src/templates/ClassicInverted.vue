<template>
  <div class="classic-inverted-container a4-size">
    <ClassicInvertedPage
      :user="user"
      :language="language"
      :mainColor="mainColor"
      :fontColor="fontColor"
      :titles="titles"
    />
    <ClassicInvertedSide
      :user="user"
      :language="language"
      :cor="sideColor"
      :titles="titles"
    />
  </div>
</template>

<script>
import ClassicInvertedPage from "../components/ClassicInvertedPage.vue";
import ClassicInvertedSide from "../components/ClassicInvertedSide.vue";

export default {
  name: "ClassicInverted",
  components: {
    ClassicInvertedPage,
    ClassicInvertedSide,
  },
  props: {
    mainColor: String,
    sideColor: String,
    fontColor: String,
    user: Object,
    language: String,
  },
  data() {
    return {
      titles: {
        competencias: ["COMPETÊNCIAS", "COMPETENCE"],
        resumo: ["RESUMO", "SUMMARY"],
        formacao: ["FORMAÇÃO ACADÊMICA", "EDUCATION"],
        habilidades: ["HABILIDADES", "SKILLS"],
        contato: ["CONTATO", "CONTACT"],
        social: ["SOCIAL", "SOCIAL"],
        experiencias: ["EXPERIÊNCIAS", "EXPERIENCES"],
      },
    };
  },
};
</script>

<style scoped>
.classic-inverted-container {
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  gap: 20px;
  padding: 20px;
}

.a4-size {
    width: 210mm;
    min-height: 297mm;
    height: auto;
    margin: 20px auto;
    transform: scale(0.8);
    transform-origin: top;
}

@media print {
  .classic-inverted-container {
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    height: 100%;
    transform: scale(1);
    margin: 0;
    padding: 0;
    gap: 0;
  }
}
</style>
