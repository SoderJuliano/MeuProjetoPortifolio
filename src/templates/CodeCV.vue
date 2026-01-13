<template>
  <div class="code-cv-container a4-size" :style="{ backgroundColor: '#1e1e1e' }">
    <div class="left-column">
      <div class="photo-container" v-if="user.realImg || !viewOnly">
        <img v-if="user.realImg" :src="user.realImg" alt="User Photo" class="user-photo" />
        <div v-else class="photo-placeholder"></div>
      </div>
      <div class="code-section" v-if="user && user.social && user.social.length">
        <p><span class="keyword" :style="{ color: mainColor }">const</span> <span class="variable">SOCIAL</span> = [</p>
        <p class="indent" v-for="social in user.social" :key="social"><span class="string">'{{ social }}'</span></p>
        <p>];</p>
      </div>
      <div class="code-section" v-if="user && user.competence && user.competence.length">
        <p><span class="keyword" :style="{ color: mainColor }">const</span> <span class="variable">COMPETENCIAS</span> = [</p>
        <p class="indent" v-for="comp in user.competence" :key="comp"><span class="string">'{{ comp }}'</span></p>
        <p>];</p>
      </div>
      <div class="code-section" v-if="user && user.spokenLanguages && user.spokenLanguages.length">
        <p><span class="keyword" :style="{ color: mainColor }">enum</span> <span class="variable">SPOKEN_LANGUAGES</span> {</p>
        <p class="indent" v-for="lang in user.spokenLanguages" :key="lang.details">{{ lang.details }}</p>
        <p>}</p>
      </div>
       <div class="code-section">
        <p><span class="keyword" :style="{ color: mainColor }">const</span> <span class="variable">SKILLS</span> = [</p>
        <p class="indent"><span class="string" v-for="skill in user.ability.split(',')" :key="skill">'{{ skill }}'</span></p>
        <p>];</p>
      </div>
    </div>
    <div class="right-column">
      <div class="code-section">
        <p class="comment">/**</p>
        <p class="comment"> * {{ user.resume }}</p>
        <p class="comment"> */</p>
      </div>
      <div class="code-section">
        <p><span class="keyword" :style="{ color: mainColor }">public</span> <span class="keyword">class</span> <span class="class-name">INFORMATION</span> {</p>
        <p class="indent"><span class="keyword">public string</span> <span class="variable">Name</span> = <span class="string">"{{ user.name }}"</span>;</p>
        <p class="indent"><span class="keyword">public string</span> <span class="variable">Profession</span> = <span class="string">"{{ user.profession }}"</span>;</p>
        <p class="indent"><span class="keyword">public string</span> <span class="variable">Email</span> = <span class="string">"{{ user.contact.email[0] }}"</span>;</p>
        <p class="indent"><span class="keyword">public string</span> <span class="variable">Phone</span> = <span class="string">"{{ user.contact.phone[0] }}"</span>;</p>
        <p class="indent"><span class="keyword">public string</span> <span class="variable">Location</span> = <span class="string">"{{ user.contact.address }}"</span>;</p>
        <p>}</p>
      </div>
      <div class="code-section">
        <p><span class="keyword" :style="{ color: mainColor }">public static class</span> <span class="class-name">EDUCATION</span> {</p>
        <div v-for="edu in user.grade" :key="edu">
        <p class="indent"><span class="keyword">private void</span> <span class="method">University</span>() {</p>
          <p class="double-indent"><span class="keyword">var</span> <span class="variable">Level</span> = <span class="string">"{{ edu }}"</span>;</p>
        <p class="indent">}</p>
        </div>
        <p>}</p>
      </div>
      <div class="code-section">
        <p><span class="keyword" :style="{ color: mainColor }">public static class</span> <span class="class-name">EXPERIENCE</span> {</p>
        <div v-for="exp in user.userExperiences" :key="exp.position" class="experience-item">
          <p class="indent"><span class="keyword">public void</span> <span class="method">{{ exp.company }}</span>() {</p>
          <p class="double-indent"><span class="keyword">var</span> <span class="variable">Duration</span> = <span class="string">"{{ exp.dateHired }} - {{ exp.dateFired }}"</span>;</p>
          <p class="double-indent"><span class="keyword">var</span> <span class="variable">Role</span> = <span class="string">"{{ exp.position }}"</span>;</p>
          <p class="double-indent"><span class="comment">// {{ exp.description }}</span></p>
          <p class="indent">}</p>
        </div>
        <p>}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeCV",
  props: {
    user: {
      type: Object,
      required: true,
    },
    mainColor: {
      type: String,
      default: '#2ECC71' // Default green
    },
    secondaryColor: {
      type: String,
      default: '#FFA500' // Default orange
    },
    viewOnly: {
        type: Boolean,
        default: false
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
    background-color: #1e1e1e;
  }
  .code-cv-container {
    border: none !important;
    box-shadow: none !important;
    width: 100% !important;
    max-width: none !important;
    max-height: none !important;
    transform: scale(1) !important;
  }
  .a4-size {
    box-shadow: none !important;
    margin: 0 !important;
  }
}

.a4-size {
    width: 210mm;
    min-height: 297mm;
    height: auto;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    margin: 20px auto;
    transform: scale(0.8);
    transform-origin: top;
}

.code-cv-container {
  display: flex;
  font-family: 'Courier New', Courier, monospace;
  color: #d4d4d4;
  background-color: #1e1e1e;
  padding: 20px;
}

.left-column {
  overflow-wrap: anywhere;
  width: 35%;
  padding-right: 20px;
}

.right-column {
  width: 65%;
}

.photo-container {
  margin-bottom: 20px;
}

.user-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #333;
}

.photo-placeholder {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #333;
}

.code-section {
  margin-bottom: 20px;
}

.code-section p {
  margin: 2px 0;
}

.keyword {
  font-weight: bold;
}

.variable {
  color: #9cdcfe;
}

.string {
  color: #ce9178; /* Default orange-ish color */
}

.comment {
  color: #6a9955; /* Default green-ish comment color */
}

.class-name {
  color: #4ec9b0;
}

.method {
  color: #dcdcaa;
}

.indent {
  padding-left: 20px;
}

.double-indent {
  padding-left: 40px;
}

.experience-item {
    margin-bottom: 10px;
}
</style>
