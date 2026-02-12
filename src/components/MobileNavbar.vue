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
          <!-- Login/User Status Section - First -->
          <div class="navbar__auth-section">
            <button 
              v-if="!isLoggedIn" 
              @click="clickedLogin"
              class="navbar__login-btn"
            >
              <svg 
                class="navbar__login-icon" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15M10 17L15 12M15 12L10 7M15 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ language === 'us-en' ? 'Login' : 'Entrar' }}
            </button>
            <div v-else class="navbar__user-info">
              <svg 
                class="navbar__user-icon" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div>
                <div class="navbar__user-label">
                  {{ language === 'us-en' ? 'Logged in as' : 'Logado como' }}
                </div>
                <div class="navbar__user-name">{{ userName }}</div>
              </div>
            </div>
          </div>

          <div class="navbar__divider"></div>

          <!-- Language Selector -->
          <div class="navbar__section-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z" fill="currentColor"/>
            </svg>
            {{ language === 'us-en' ? 'Language' : 'Idioma' }}
          </div>
          <div class="navbar__language">
            <button 
              @click="$emit('language-update', 'pt-br')"
              class="navbar__language-btn"
              :class="{ 'navbar__language-btn--active': language === 'pt-br' }"
            >
              <span class="navbar__language-flag">🇧🇷</span>
              PT-BR
            </button>
            <button 
              @click="$emit('language-update', 'us-en')"
              class="navbar__language-btn"
              :class="{ 'navbar__language-btn--active': language === 'us-en' }"
            >
              <span class="navbar__language-flag">🇺🇸</span>
              EN-US
            </button>
          </div>

          <div class="navbar__divider"></div>

          <div class="navbar__section-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            {{ language === 'us-en' ? 'Print' : 'Imprimir' }}
          </div>
          <Imprimir />

          <div class="navbar__divider"></div>

          <MultiMenu
            :user="user"
            :template="template"
            :language="language"
            @change-template="changeTemplate"
            @change-layout="changeLayout"
            @update-user="updateUser"
            @login="clickedLogin"
            @reset-password="$emit('reset-password')"
            @ativationAccount="$emit('ativationAccount')"
            @click="changefontM"
            @change-main-color="$emit('change-main-color', $event)"
            @change-font-color="$emit('change-font-color', $event)"
          />
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import MultiMenu from './MultiMenu.vue';
  import Imprimir from './Imprimir-bnt.vue';
  import {changefontM} from '../components/services/FontsService.js';
  import authService from '../services/authService.js';
  
  export default {
    name: 'MobileNavbar',
    components: {
      MultiMenu,
      Imprimir
    },
    props: {
      template: Number,
      language: String,
      user: Object,
      logedIn: Boolean
    },
    emits: [
      'language-update',
      'font-changed',
      'change-template',
      'change-layout',
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
    computed: {
      isLoggedIn() {
        return this.logedIn || authService.hasToken();
      },
      userName() {
        return this.user?.name || (this.language === 'us-en' ? 'User' : 'Usuário');
      }
    },
    methods: {
      clickedLogin() {
        this.$emit('login');
        this.toggleMenu();
      },
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      changeTemplate(templateId) {
        this.$emit('change-template', templateId);
        this.isMenuOpen = false;
      },
      changeLayout(templateId) {
        this.$emit('change-layout', templateId);
        this.isMenuOpen = false;
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

  .navbar__auth-section {
    margin-bottom: 20px;
  }

  .navbar__login-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 20px;
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(110, 142, 251, 0.3);
  }

  .navbar__login-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(110, 142, 251, 0.4);
  }

  .navbar__login-btn:active {
    transform: translateY(0);
  }

  .navbar__login-icon {
    width: 20px;
    height: 20px;
    stroke: white;
  }

  .navbar__user-info {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    background: linear-gradient(135deg, #f5f7fa, #e8ebf0);
    border-radius: 12px;
    border: 2px solid #6e8efb;
  }

  .navbar__user-icon {
    width: 24px;
    height: 24px;
    stroke: #6e8efb;
    flex-shrink: 0;
  }

  .navbar__user-label {
    font-size: 0.75rem;
    color: #666;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .navbar__user-name {
    font-size: 1rem;
    color: #333;
    font-weight: 600;
    margin-top: 2px;
  }

  .navbar__divider {
    height: 1px;
    background: linear-gradient(to right, transparent, #ddd, transparent);
    margin: 15px 0;
  }

  .navbar__section-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
    padding-left: 4px;
  }

  .navbar__section-title svg {
    color: #6e8efb;
  }
  
  .navbar__language {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-bottom: 15px;
    width: 100%;
  }
  
  .navbar__language-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 12px;
    margin: 0;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    background: white;
    color: #666;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    white-space: nowrap;
    min-width: 0;
    width: 100%;
    box-sizing: border-box;
  }

  .navbar__language-btn:hover {
    border-color: #6e8efb;
    background: #f0f4ff;
    transform: translateY(-1px);
  }

  .navbar__language-btn--active {
    background: linear-gradient(135deg, #6e8efb, #a777e3);
    border-color: #6e8efb;
    color: white;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(110, 142, 251, 0.3);
  }

  .navbar__language-btn--active:hover {
    background: linear-gradient(135deg, #5a7ef0, #9667d9);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(110, 142, 251, 0.4);
  }

  .navbar__language-flag {
    font-size: 1.2rem;
    line-height: 1;
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

    .navbar__login-btn {
      padding: 12px 16px;
      font-size: 0.95rem;
    }

    .navbar__user-info {
      padding: 12px 14px;
    }

    .navbar__user-name {
      font-size: 0.95rem;
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
 
  p, button, .tside, .option {
    cursor: pointer;
  }
  
  @media (max-width: 400px) {
    .navbar__header {
      padding: 8px 10px;
    }
  
    .navbar__language-btn {
      padding: 10px 8px;
      font-size: 0.8rem;
      gap: 6px;
    }

    .navbar__language-flag {
      font-size: 1rem;
    }

    .navbar__section-title {
      font-size: 0.8rem;
      margin-bottom: 10px;
    }

    .navbar__login-btn {
      padding: 10px 14px;
      font-size: 0.9rem;
    }

    .navbar__user-info {
      padding: 10px 12px;
    }

    .navbar__user-label {
      font-size: 0.7rem;
    }

    .navbar__user-name {
      font-size: 0.9rem;
    }
  }
  </style>
