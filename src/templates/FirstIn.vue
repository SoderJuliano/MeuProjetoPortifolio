<template>
    <div class="welcome-container">
      <div class="welcome-header">
        <h1 v-if="isPortuguese">Bem-vindo ao Gerador Gratuito de Currículos</h1>
        <h1 v-else>Welcome to the Free Resume Builder</h1>
        <p v-if="isPortuguese">Escolha 1 dos modelos de currículos abaixo para iniciar</p>
        <p v-else>Choose one of the resume templates below to get started</p>
      </div>
  
      <div class="template-grid">
        <div 
          v-for="(template, index) in templates" 
          :key="index" 
          class="template-card"
          @click="selectTemplate(template)"
        >
          <img :src="template.image" :alt="'Modelo ' + template.name">
          <div class="template-name">{{ template.name }}</div>
        </div>
      </div>
  
      <div class="footer-note">
        <p v-if="isPortuguese">Todos os modelos são gratuitos e podem ser personalizados</p>
        <p e-else>All templates are free and can be customized</p>
      </div>
    </div>
  </template>
  
  <script>
  import template1 from '../assets/templatesImg/template1.png';
  import template2 from '../assets/templatesImg/template2.png';
  import template3 from '../assets/templatesImg/templete3.png';
  import template4 from '../assets/templatesImg/template4.png';
  import PageConfig from "../model/configModel";
  export default {
    name: 'WelcomePage',
    data() {
      return {
        templates: [
          {
            id: 1,
            name: 'Criativo',
            image: template1,
            description: 'Para profissionais de áreas artísticas e design'
          },
          {
            id: 2,
            name: 'Moderno',
            image: template2,
            description: 'Layout contemporâneo com toque criativo'
          },
          {
            id: 3,
            name: 'Clássico',
            image: template3,
            description: 'Design limpo e profissional para todas as áreas'
          },
          {
            id: 4,
            name: 'Minimalista',
            image: template4,
            description: 'Simples, direto e eficaz'
          }
        ],
        broswerLnaguage: 'us-en',
        isPortuguese: false
      }
    },
    methods: {
      selectTemplate(template) {
        const configs = new PageConfig();
        configs.setTemplate(template.id);
        configs.setLanguage(this.broswerLnaguage);
        localStorage.setItem("configs", JSON.stringify(configs));
        window.location.href = "/";
      }
    },
    beforeMount() {
      const userLanguage = navigator.language || navigator.userLanguage;
      this.isPortuguese = userLanguage.includes('pt');
      this.broswerLnaguage = this.isPortuguese ? 'pt-br' : 'us-en';
    }
  }
  </script>
  
  <style scoped>
  .welcome-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    background-image: url('../background/image.jpg');
    background-size: cover; /* or "contain" depending on your needs */
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh; /* Ensures container covers full viewport height */
  }
  
  .welcome-header {
    margin-bottom: 3rem;
  }
  
  .welcome-header h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  .welcome-header p {
    font-size: 1.2rem;
    color: #7f8c8d;
  }
  
  .template-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .template-card {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }
  
  .template-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .template-card img {
    width: 100%;
    height: auto;
    display: block;
    border-bottom: 1px solid #e0e0e0;
    min-height: 385px;
  }
  
  .template-name {
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: #34495e;
  }
  
  .footer-note {
    font-size: 0.9rem;
    color: #95a5a6;
    margin-top: 2rem;
  }
  
  @media (max-width: 768px) {
    .welcome-header h1 {
      font-size: 2rem;
    }
    
    .template-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media (max-width: 480px) {
    .template-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>