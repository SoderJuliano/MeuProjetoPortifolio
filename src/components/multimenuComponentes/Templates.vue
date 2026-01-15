<template>

    <div>
        <p class="tside" @click="openTemplates">TEMPLATES DE EDIÇÃO</p>
    </div>
    <div class="dropdown-overlay" v-if="isOpen" @click="closeDiv()"></div>
    <div class="dropdown-templates-edit" v-if="isOpen">
        <div class="closeDiv" style="margin-top: 50px;" @click="closeDiv()">X</div>
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
  top: 0px;
  right: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  width: 30px;
  height: 20px;
  text-align: center;
  padding-bottom: 20px;
}

.closeDiv:hover {
  background-color: rgba(0, 0, 0, 0.2);
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
