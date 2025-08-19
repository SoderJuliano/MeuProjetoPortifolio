<template>
  <div class="resume-container a4-size">
    <div class="left-panel" :style="{ backgroundColor: sideColor }">
      <div class="photo-container">
        <div v-if="user.realImg" class="photo-wrapper">
            <img :src="user.realImg" alt="User Photo" class="user-photo" />
        </div>
        <div v-else class="photo-placeholder"></div>
      </div>
      <div class="contact-info">
        <h3>CONTACT</h3>
        <p><strong>Phone:</strong> {{ user.contact.phone[0] }}</p>
        <p><strong>Email:</strong> {{ user.contact.email[0] }}</p>
        <p><strong>Address:</strong> {{ user.contact.address }}</p>
      </div>
      <div class="key-skills">
        <h3>KEY SKILLS</h3>
        <ul>
          <li v-for="skill in user.ability.split(',')" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
    <div class="right-panel">
      <div class="header">
        <h1>{{ user.name }}</h1>
        <h2>{{ user.profession }}</h2>
      </div>
      <div class="profile-summary">
        <h3>PROFILE SUMMARY</h3>
        <p>{{ user.resume }}</p>
      </div>
      <div class="education">
        <h3>EDUCATION</h3>
        <div v-for="edu in user.grade" :key="edu" class="education-item">
          <p>{{ edu }}</p>
        </div>
      </div>
      <div class="teaching-experience">
        <h3>PROFESSIONAL EXPERIENCE</h3>
        <div v-for="exp in user.userExperiences" :key="exp.position" class="experience-item">
          <h4>{{ exp.position }} at {{ exp.company }}</h4>
          <p>{{ exp.dateHired }} - {{ exp.dateFired }}</p>
          <p>{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModernTemplate",
  props: {
    user: {
      type: Object,
      required: true,
    },
    sideColor: {
        type: String,
        default: '#B0C4DE'
    }
  },
};
</script>

<style scoped>
@media print {
  @page {
    size: A4;
    margin: 0;
  }
  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .resume-container {
    display: flex;
    height: 100vh;
    border: none !important;
    box-shadow: none !important;
    width: 100% !important;
    max-width: none !important;
    max-height: none !important;
  }
  .left-panel {
    height: 100%;
  }
  .a4-size {
    box-shadow: none !important;
    margin: 0 !important;
    transform: scale(1) !important;
  }
}
.a4-size {
    width: 210mm;
    height: 297mm;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    margin: 20px auto;
    transform: scale(0.8);
    transform-origin: top;
}
.resume-container {
  display: flex;
  font-family: sans-serif;
  color: #333;
}

.left-panel {
  width: 35%;
  padding: 20px;
  color: #555;
}

.right-panel {
  width: 65%;
  padding: 20px;
  background-color: white;
}

.photo-container {
  text-align: center;
  margin-bottom: 20px;
}

.photo-wrapper {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
}

.user-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-placeholder {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0 auto;
}

.contact-info h3,
.key-skills h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.2em;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
}

.contact-info p,
.key-skills ul{
  margin: 0;
  padding: 0;
  list-style: none;
}

.key-skills ul li {
  margin-bottom: 5px;
}

.header h1 {
  margin: 0;
  font-size: 2.5em;
}

.header h2 {
  margin: 0;
  font-size: 1.5em;
  color: #777;
}

.profile-summary,
.education,
.teaching-experience {
  margin-top: 20px;
}

.profile-summary h3,
.education h3,
.teaching-experience h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.2em;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
}

.education-item,
.experience-item {
  margin-bottom: 15px;
}

.education-item h4,
.experience-item h4 {
  margin: 0;
  font-size: 1.1em;
}

.education-item p,
.experience-item p {
  margin: 5px 0 0 0;
}
</style>
