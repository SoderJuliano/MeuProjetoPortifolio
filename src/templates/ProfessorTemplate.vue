<template>
  <div class="new-template-container a4-size" :style="[fontFamily, { color: fontColor || '#0d244f'}]">

    <!-- Ondas de fundo -->
    <div class="ondas">
      <div class="onda-escura" :style="{ backgroundColor: mainColor || '#0D47A1' }"></div>
     <div class="onda-escura-2" :style="{ backgroundColor: mainColor || '#0D47A1' }"></div>
      <div class="onda-clara-1" :style="{backgroundColor: sideColor || '#64B5F6'}"></div>
      <div class="onda-clara-2" :style="{ backgroundColor: sideColor || '#64B5F6' }"></div>
    </div>

    <div class="content-wrapper">
      <div class="header-area">
        <div class="foto-container" v-if="user.realImg">
          <img :src="user.realImg" alt="Foto de perfil" class="foto-perfil" />
        </div>

        <div class="header-text">
          <h1 class="name">{{ user.name }}</h1>
          <h2 class="profession">{{ user.profession }}</h2>
        </div>
      </div>

      <div class="main-body">
        <div class="left-pane">
          <div class="cv-section">
            <h3 class="section-title">{{ language === 'us-en' ? 'CONTACT' : 'CONTATO' }}</h3>
            <div class="contact-item" v-for="email in user.contact.email" :key="'email_'+email">
              <img src="../icons/email/email.png" alt="email" class="contact-icon" />
              <span>{{ email }}</span>
            </div>
            <div class="contact-item" v-for="phone in user.contact.phone" :key="'phone_'+phone">
              <img src="../icons/phone/phone-call.png" alt="phone" class="contact-icon" />
              <span>{{ phone }}</span>
            </div>
            <div class="contact-item" v-if="user.contact.address">
              <img src="../icons/adress/location.png" alt="address" class="contact-icon" />
              <span>{{ user.contact.address }}</span>
            </div>
          </div>

          <div class="cv-section">
            <h3 class="section-title">{{ language === 'us-en' ? 'COMPETENCIES' : 'COMPETÊNCIAS' }}</h3>
            <ul class="skills-list">
              <li v-for="competence in user.competence" :key="competence">{{ competence }}</li>
            </ul>
          </div>
          <div class="cv-section">
            <h3 class="section-title">{{ language === 'us-en' ? 'SKILLS' : 'HABILIDADES' }}</h3>
            <ul class="skills-list">
              <li v-for="ability in user.ability.split(',')" :key="ability">{{ ability }}</li>
            </ul>
          </div>

        </div>

        <div class="right-pane">
          <div class="cv-section">
            <h3 class="section-title">{{ language === 'us-en' ? 'ABOUT ME' : 'SOBRE MIM' }}</h3>
            <p class="summary-text">{{ user.resume }}</p>
          </div>

          <div class="cv-section">
            <h3 class="section-title">{{ language === 'us-en' ? 'EDUCATION' : 'FORMAÇÃO' }}</h3>
            <div class="education-item" v-for="grade in user.grade" :key="grade">
              <p>{{ grade }}</p>
            </div>
          </div>

          <div class="cv-section">
            <h3 class="section-title">{{ language === 'us-en' ? 'PROFESSIONAL EXPERIENCE' : 'EXPERIÊNCIA PROFISSIONAL' }}</h3>
            <div class="experience-item" v-for="job in user.userExperiences" :key="job.id">
              <h4>{{ job.position }}</h4>
              <h5>{{ job.company }} | {{ job.dateHired }} - {{ job.dateFired || (language === 'us-en' ? 'Current' : 'Atual') }}</h5>
              <p>{{ job.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>



<script>
export default {
  name: "ProfessorTemplate",
  props: {
    user: Object,
    language: String,
    mainColor: String, // Dark wave
    sideColor: String, // Light wave
    fontColor: String, // Text color
    fontFamily: Object,
  },
};
</script>


<style scoped>
/* Base Styles */
  padding: 40px;
.new-template-container {
  background: #fff;
  position: relative;
  font-family: 'Helvetica', 'Arial', sans-serif;
}
.a4-size {
  position: relative;
  width: 310mm;
  min-height: 297mm;
  height: auto;
  margin: 20px auto;
  transform: scale(0.8);
  transform-origin: top;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Important to contain the absolute waves */
}


/* Ondas de fundo */
.ondas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  z-index: 0;
  overflow: hidden;
}

/* Primeira onda — azul escura */
.onda-escura {
    position: absolute;
    top: 0;
    left: -200px;
    width: 57%;
    height: 210px;
    background: #000055 !important;
    z-index: 2;
    border-bottom-right-radius: 21% 87%;
    border-bottom-left-radius: 30% 81%;
}

.onda-escura-2 {
 position: absolute;
    top: 100px;
    left: -200px;
    width: 37%;
    height: 210px;
    background: #000055 !important;
    z-index: 2;
    border-bottom-right-radius: 21% 87%;
    border-bottom-left-radius: 0% 81%;
    transform: rotate(154deg);
}

/* Segunda onda — azul clara */
.onda-clara-1 {
  position: absolute;
  top: -50px;
  left: -50px;
  width: 65%;
  height: 380px;
  background: #64B5F6;
  border-bottom-right-radius: 21% 87%;
  border-bottom-left-radius: 101% 81%;
  z-index: 1;
  opacity: 0.9;
}

.onda-clara-2 {
  position: absolute;
  top: -50px;
  left: -50px;
  width: 35%;
  height: 480px;
  background: #64B5F6;
  border-bottom-right-radius: 51% 87%;
  border-bottom-left-radius: 50% 51%;
  z-index: 1;
  opacity: 0.9;
}

/* Garantir que o conteúdo fique acima */
.content-wrapper {
  position: relative;
  z-index: 3;
}



/* Garantir que o conteúdo fique acima */
.content-wrapper {
  position: relative;
  z-index: 3;
}


/* Content Wrapper */
.content-wrapper {
    position: relative;
    z-index: 1;
}

/* Header & Profile Picture */
.header-area {
    display: flex;
    align-items: center;
    padding: 40px;
}

.foto-container {
    margin-top: 50px;
    margin-left: 50px;
    transform: rotate(-12deg);
    width: 330px;
    height: 320px;
    background: linear-gradient(180deg, #ffd98a, #f2b24c);
    border: 6px solid #e0e0e0;
    border-radius: 59% 59% 59% 59% / 75% 75% 45% 45%;
    box-shadow: 0 18px 30px rgba(13, 36, 79, 0.08), inset 0 10px 20px rgba(255, 255, 255, 0.15);
    overflow: hidden;
    margin-right: 50px;
}

.foto-perfil {
  transform: rotate(12deg);
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-text {
    color: #0d244f;
    padding: 40px;
}

.name {
  font-family: 'Times New Roman', Times, serif;
  font-size: 4rem;
  font-weight: 700;
}

.profession {
  font-size: 2.3rem;
  font-weight: 300;
}

/* Main Body Layout */
.main-body {
    display: grid;
    grid-template-columns: 300px auto;
    gap: 40px;
    padding: 0 40px 40px 40px;
}

.left-pane, .right-pane {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.cv-section {
    text-align: left;
}

.section-title {
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  margin-bottom: 15px;
  border-bottom: 2px solid;
  padding-bottom: 5px;
}

/* Specific Sections */
.contact-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.contact-icon {
    width: 18px;
    height: 18px;
}

.summary-text {
  line-height: 1.6;
  text-align: justify;
}

.experience-item:not(:last-child) {
  margin-bottom: 20px;
}

.experience-item h4 {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 2px;
}

.experience-item h5 {
  font-size: 1rem;
  margin-bottom: 8px;
  color: #555;
}

.experience-item p {
  line-height: 1.5;
}

.skills-list {
  padding-left: 20px;
}

.skills-list li {
  margin-bottom: 8px;
}

.education-item p {
    margin-bottom: 10px;
}

@media print {
  .new-template-container {
    box-shadow: none;
    transform: scale(1);
    margin: 0;
  }
}
</style>
