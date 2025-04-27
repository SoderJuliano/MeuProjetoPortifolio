<template>

    <div>
        <p class="tside" @click="openTemplates">TEMPLATES</p>
    </div>
    <div class="dropdown-overlay" v-if="isOpen" @click="closeDiv()"></div>
    <div class="dropdown-templates">
        <div class="closeDiv" style="margin-top: 50px;" @click="closeDiv()">X</div>
        <h3 class="dropdown-title">Escolha um Template</h3>
        <TemplateChooser
            :template="template"
            @now-template1="this.$emit('now-template1')"
            @now-template2="this.$emit('now-template2')"
            @now-template3="this.$emit('now-template3')"
            @now-template4="this.$emit('now-template4')"
        />
    </div>

</template>

<script>

import $ from 'jquery'
import TemplateChooser from './TemplateChooser.vue'

export default {
    name: 'Templates',
    emits:['now-template1', 'now-template2', 'now-template3','now-template4'],
    props:{
        template: Number,
    },
    components: {
        TemplateChooser
    },
    methods: {
        closeAll() {
            $(".side-colors").css({"display": "none"});
            $(".colors").css({"display": "none"});
            $(".dropdown-content").css({"display": "none"});
            $(".avatares-subcontainer").css({"display": "none"});
            $(".shapes").css({"display": "none"});
            $(".dropdown-templates").css({"display": "none"});
        },
        openTemplates() {
            this.closeAll();
            $(".dropdown-templates").css("display", "block")
        },
        closeDiv() {
            $(".dropdown-templates").css({"display": "none"});
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
    /* define no modelo mobile o tamanhom da janela de seleção de templetes */
    .dropdown-templates {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 90vw;
        height: 100%;
        z-index: 1;
        width: 95%;
        padding: 20px 10px;
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

.dropdown-templates {
  display: none;
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

</style>