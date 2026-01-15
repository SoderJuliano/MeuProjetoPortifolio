<template>
    <div class="color-picker-container">
        <button class="color-picker-trigger" @click="openContainer()">
            {{ language.includes("en") ? "Secondary Color" : "Cor Lateral" }}
            <span class="color-indicator" :style="{backgroundColor: selectedColor}"></span>
        </button>
        
        <div class="color-panel" v-show="isPanelOpen" @click.self="closePanel">
            <div class="color-panel-content">
                <button class="close-button" @click="closePanel">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                </button>
                
                <h3 class="panel-title">{{ language.includes("en") ? "Choose a color" : "Escolha uma cor" }}</h3>
                
                <div class="color-grid">
                    <div v-for="(colorGroup, index) in colorGroups" :key="index" class="color-group">
                        <div 
                            v-for="color in colorGroup" 
                            :key="color.code"
                            class="color-option"
                            :style="{backgroundColor: color.code}"
                            @click="selectColor(color.code)"
                            :title="color.code"
                        >
                            <p class="color-code">{{ color.code }}</p>
                            <div class="color-check" v-if="selectedColor === color.code">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: 'ColorPicker',
    props: { 
        language: String,
        modelValue: String
    },
    data() {
        return {
            isPanelOpen: false,
            selectedColor: this.modelValue || '',
            colorGroups: [
                // Grupo 1: Tons Complementares Profissionais
                [
                    { code: '#4B9CD3', name: 'Sky Blue', label: 'sec-#4B9CD3' },      // Complementar ao #A67C52
                    { code: '#7DB37D', name: 'Sage', label: 'sec-#7DB37D' },          // Complementar ao #9E2B2B
                    { code: '#D4A76A', name: 'Warm Gold', label: 'sec-#D4A76A' },      // Complementar ao #2E5A88
                    { code: '#E3C9C9', name: 'Dusty Rose', label: 'sec-#E3C9C9' },     // Neutro suave
                    { code: '#5D4777', name: 'Royal Purple', label: 'sec-#5D4777' },   // Complementar ao #4A8C72
                    { code: '#3A7CA5', name: 'Corporate Blue', label: 'sec-#3A7CA5' }  // Harmoniza com #8C6A5D
                ],
                
                // Grupo 2: Tons Terrosos e Neutros
                [
                    { code: '#A4BCC2', name: 'Morning Mist', label: 'sec-#A4BCC2' },   // Harmoniza com tons frios
                    { code: '#E8D8C5', name: 'Linen', label: 'sec-#E8D8C5' },          // Neutro quente
                    { code: '#6BAF92', name: 'Mint', label: 'sec-#6BAF92' },           // Verde suave
                    { code: '#C4B6B6', name: 'Foggy Gray', label: 'sec-#C4B6B6' },     // Neutro universal
                    { code: '#9E8B8B', name: 'Taupe Gray', label: 'sec-#9E8B8B' },     // Profissional
                    { code: '#D9C7B8', name: 'Sandstone', label: 'sec-#D9C7B8' }       // Neutro terroso
                ]
            ]
        }
    },
    methods: {
        openContainer() {
            this.closeAll();
            this.isPanelOpen = true;
        },
        closePanel() {
            this.isPanelOpen = false;
        },
        closeAll() {
            $(".side-colors").css({"display": "none"});
            $(".colors").css({"display": "none"});
            $(".dropdown-content").css({"display": "none"});
            $(".avatares-subcontainer").css({"display": "none"});
            $(".shapes").css({"display": "none"});
            $(".dropdown-templates").css({"display": "none"});
        },
        selectColor(color) {
            $(".navbar__toggle").click();
            this.selectedColor = color;
            this.$emit('update:modelValue', color);
            this.closePanel();
        }
    }
}
</script>

<style scoped>
.color-picker-container {
    position: relative;
    display: inline-block;
}

.color-picker-trigger {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    color: #333;
    transition: all 0.2s ease;
}

.color-picker-trigger:hover {
    background-color: #e9e9e9;
}

.color-indicator {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.color-panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.color-panel-content {
    position: relative;
    background-color: white;
    border-radius: 12px;
    padding: 24px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

.close-button {
    position: absolute;
    top: 12px;
    right: 12px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    border-radius: 10px;
    width: 20px;
    transition: background-color 0.2s;
}

.panel-title {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 18px;
    color: #333;
    text-align: center;
}

.color-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.color-group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.color-option {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.color-option:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.color-code {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    margin: 0;
    padding: 4px;
    font-size: 10px;
    text-align: center;
    transform: translateY(100%);
    transition: transform 0.2s;
}

.color-option:hover .color-code {
    transform: translateY(0);
}

.color-check {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media (max-width: 768px) {
    .color-group {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .color-panel-content {
        width: 95%;
        padding: 16px;
    }
}
</style>