<template>

    <div class="template-trigger" @click="openTemplates">
        <div class="template-trigger__content">
            <svg class="template-trigger__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            <p class="tside">{{ this.language.includes("en") ? "EDIT TEMPLATES" : "TEMPLATES DE EDIÇÃO" }}</p>
        </div>
    </div>
    <div class="dropdown-overlay" v-if="isOpen" @click="closeDiv()"></div>
    <div class="dropdown-templates-edit" v-if="isOpen">
        <button class="closeDiv" @click="closeDiv()" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
        <h3 class="dropdown-title">{{ this.language.includes("en") ? "Choose a template" : "Escolha um template"}}</h3>
        <TemplateChooser
            :template="template"
            @change-template="$emit('change-template', $event)"
        />
    </div>

</template>

<script>

import $ from 'jquery'
import TemplateChooser from './TemplateChooser.vue'

export default {
    name: 'Templates',
    emits:['change-template'],
    props:{
        template: Number,
        language: String
    },
    components: {
        TemplateChooser
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        closeAll() {
            $(".side-colors").css({"display": "none"});
            $(".colors").css({"display": "none"});
            $(".dropdown-content").css({"display": "none"});
            $(".avatares-subcontainer").css({"display": "none"});
            $(".shapes").css({"display": "none"});
            this.isOpen = false;
        },
        openTemplates() {
            this.closeAll();
            this.isOpen = true;
        },
        closeDiv() {
            this.isOpen = false;
        }
    }
}
</script>

<style scoped>

.template-trigger {
    cursor: pointer;
}

.template-trigger__content {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 12px;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.template-trigger__content:hover {
    background: rgba(110, 142, 251, 0.1);
    transform: translateX(3px);
}

.template-trigger__content:active {
    transform: translateX(3px) scale(0.98);
}

.template-trigger__icon {
    flex-shrink: 0;
    color: #6e8efb;
    transition: all 0.3s ease;
}

.template-trigger__content:hover .template-trigger__icon {
    color: #5a7ae8;
}

@media screen and (max-width: 768px) {
    /* define no modelo mobile o tamanhom da janela de seleção de templetes */
    .dropdown-templates-edit {
        position: fixed;
        top: 0% !important;
        left: 0 !important;
        right: 0 !important;
        height: 100%;
        z-index: 1;
        width: 85dvw;
        padding: 20px 10px;
        transform: none !important;
    }
    
  .template-option {
    flex-direction: column;
  }
}

.closeDiv {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border: none;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.closeDiv:hover {
  background: rgba(239, 68, 68, 0.2);
  transform: scale(1.1) rotate(90deg);
}

.closeDiv:active {
  transform: scale(0.95) rotate(90deg);
}

.closeDiv svg {
  width: 20px;
  height: 20px;
}

.dropdown-templates-edit {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* width: 80%; */
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 30px 20px 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translate(-50%, -45%); }
  to { opacity: 1; transform: translate(-50%, -50%); }
}

.dropdown-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.template-option {
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid #eee;
}

.template-option:hover {
  background-color: #f5f5f5;
  border-color: #ddd;
}

.template-option.active {
  background-color: #e3f2fd;
  border-color: #bbdefb;
}

.dropdown-title {
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

@media screen and (min-width: 1981px) {
  .dropdown-templates-edit {
    top: 75%;
  }
}

</style>
