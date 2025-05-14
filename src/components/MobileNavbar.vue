<template>
    <nav class="navbar" :class="{ 'navbar--open': isMenuOpen }">
      <div class="navbar__header">
        <div class="navbar__title">FreeHubCV</div>
        <button class="navbar__toggle" @click="toggleMenu" aria-label="Toggle menu">
        <svg 
          v-if="!isMenuOpen" 
          class="navbar__toggle-icon" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <svg 
          v-else 
          class="navbar__toggle-icon" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      </div>
      <div class="navbar__menu" :class="{ 'navbar__menu--visible': isMenuOpen }">
        <div class="navbar__menu-content">
          <div class="navbar__language">
            <button 
              v-if="language !== 'pt-br'" 
              @click="$emit('language-update', 'pt-br')"
              class="navbar__language-btn"
            >
              PT-BR
            </button>
            <button 
              v-if="language !== 'us-en'" 
              @click="$emit('language-update', 'us-en')"
              class="navbar__language-btn"
            >
              EN-US
            </button>
          </div>
          <button class="navbar__print-btn">
            <Imprimir />
          </button>
          <MultiMenu
            :user="user"
            :template="template"
            :language="language"
            @now-template1="$emit('now-template1')"
            @now-template2="$emit('now-template2')"
            @now-template3="$emit('now-template3')"
            @now-template4="$emit('now-template4')"
            @update-user="updateUser"
            @login="$emit('login')"
            @reset-password="$emit('reset-password')"
            @ativationAccount="$emit('ativationAccount')"
            @click="changefontM"
          />
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import MultiMenu from './MultiMenu.vue';
  import Imprimir from './Imprimir-bnt.vue';
  import {changefontM} from '../components/services/FontsService.js';
  
  export default {
    name: 'MobileNavbar',
    components: {
      MultiMenu,
      Imprimir
    },
    props: {
      template: Number,
      language: String,
      user: Object
    },
    emits: [
      'language-update',
      'font-changed',
      'now-template1',
      'now-template2',
      'now-template3',
      'now-template4',
      'change-main-color',
      'change-font-color',
      'login',
      'reset-password',
      'ativationAccount',
      'update-user'
    ],
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      updateUser(val, sync) {
        this.$emit('update-user', val, sync);
        this.isMenuOpen = false;
      },
      changefontM(p){
        changefontM(p, this.$emit);
      }
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transition: all 0.3s ease;
  }
  
  .navbar__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    height: 50px;
  }
  
  .navbar__title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
  }
  
  .navbar__toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
  }
  
  .navbar__toggle-icon {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }
  
  .navbar__toggle:hover .navbar__toggle-icon {
    transform: scale(1.1);
  }
  
  .navbar__menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    background-color: #f8f9fa;
  }
  
  .navbar__menu--visible {
    max-height: 80vh;
    overflow-y: auto;
  }
  
  .navbar__menu-content {
    padding: 15px;
  }
  
  .navbar__language {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }
  
  .navbar__language-btn {
    padding: 8px 16px;
    border: 1px solid #333;
    border-radius: 20px;
    background: none;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.2s ease;
  }
  
  .navbar__language-btn:hover {
    background-color: #333;
    color: #fff;
  }
  
  .navbar__print-btn {
    display: flex;
    align-items: center;
    padding: 8px;
    margin-bottom: 15px;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .navbar__print-btn:hover {
    transform: scale(1.05);
  }
  
  @media (min-width: 1001px) {
    .navbar {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    .navbar__menu-content {
      padding: 10px;
    }
  
    .navbar__title {
      font-size: 1.2rem;
    }
  
    .navbar__menu::-webkit-scrollbar {
      width: 8px;
    }
  
    .navbar__menu::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
  
    .navbar__menu::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }
  }
  
  @media (max-width: 400px) {
    .navbar__header {
      padding: 8px 10px;
    }
  
    .navbar__language-btn {
      padding: 6px 12px;
      font-size: 0.8rem;
    }
  }
  </style>