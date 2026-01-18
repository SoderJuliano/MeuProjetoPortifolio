<template>

    <div class="layouts-trigger" @click="openLayouts">
        <svg class="layouts-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
        <p class="tside">{{ language.includes('en') ? 'TEMPLATES' : 'TEMPLATES' }}</p>
    </div>
    <div class="dropdown-overlay" v-if="isOpen" @click="closeDiv()"></div>
    <div class="dropdown-templates-layout" v-if="isOpen">
        <div class="closeDiv" style="margin-top: 50px;" @click="closeDiv()">X</div>
        <h3 class="dropdown-title">{{ this.language.includes("en") ? "Choose a layout" : "Escolha um layout"}}</h3>
        <LayoutChooser
            :template="template"
            @change-layout="$emit('change-layout', $event)"
        />
    </div>

</template>

<script>

import $ from 'jquery'
import LayoutChooser from './LayoutChooser.vue'

export default {
    name: 'Layouts',
    emits:['change-layout'],
    props:{
        template: Number,
        language: String
    },
    components: {
        LayoutChooser
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
        openLayouts() {
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
.layouts-trigger {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 8px;
}

.layouts-trigger:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: translateX(5px);
}

.layouts-icon {
    min-width: 20px;
    color: #333;
    transition: color 0.3s ease;
}

.layouts-trigger:hover .layouts-icon,
.layouts-trigger:hover .tside {
    color: #667eea;
}

.tside {
  cursor: pointer;
  padding: 10px;
  transition: all 0.2s ease;
  border-radius: 5px;
}

.tside:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateX(3px);
}

@media screen and (max-width: 768px) {
    /* define no modelo mobile o tamanhom da janela de seleção de templetes */
    .dropdown-templates-layout {
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
  top: 0px;
  right: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.closeDiv:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.dropdown-templates-layout {
  position: fixed;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
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
  z-index: 997;
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

</style>