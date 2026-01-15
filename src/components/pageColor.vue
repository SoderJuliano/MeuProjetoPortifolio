<template>
    <div class="main-color-picker">
        <button class="main-color-trigger" @click="openPanel()">
            {{ language.includes("en") ? "MAIN COLOR" : "COR PRINCIPAL" }}
            <span class="color-preview" :style="{backgroundColor: selectedColor ? '#' + selectedColor.replace('#', '') : ''}"></span>
        </button>
        
        <div class="color-modal" v-show="isPanelOpen" @click.self="closePanel">
            <div class="color-modal-content">
                <button class="modal-close-btn" @click="closePanel">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                </button>
                
                <h3 class="modal-title">{{ language.includes("en") ? "Select Main Color" : "Selecione a Cor Principal" }}</h3>
                
                <div class="color-palette">
                    <div 
                        v-for="color in mainColors" 
                        :key="color.id"
                        class="color-swatch"
                        :style="{backgroundColor: color.code}"
                        :id="color.id"
                        @click="selectColor(color)"
                        :title="color.name"
                    >
                        <p class="color-label">{{ color.label }}</p>
                        <div class="selection-check" v-if="selectedColor === color.code">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
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
    name: 'MainColorPicker',
    props: {
        language: String,
        modelValue: String
    },
    data() {
        return {
            isPanelOpen: false,
            // mainColors: [
            //     { id: '#FFA07A', code: '#FFA07A', name: 'Light Salmon', label: 'pag-#FFA07A' },
            //     { id: '#FFB6C1', code: '#FFB6C1', name: 'Light Pink', label: 'pag-#FFB6C1' },
            //     { id: '#F08080', code: '#F08080', name: 'Light Coral', label: 'pag-#F08080' },
            //     { id: '#87CEEB', code: '#87CEEB', name: 'Sky Blue', label: 'pag-#87CEEB' },
            //     { id: '#ED6A5A', code: '#ED6A5A', name: 'Coral', label: 'pag-#ED6A5A' },
            //     { id: '#1F271B', code: '#1F271B', name: 'Dark Green', label: 'pag-#1F271B' },
            //     { id: '#849483', code: '#849483', name: 'Sage Green', label: 'pag-#849483' },
            //     { id: '#4E937A', code: '#4E937A', name: 'Mint', label: 'pag-#4E937A' },
            //     { id: '#B4656F', code: '#B4656F', name: 'Dusty Rose', label: 'pag-#B4656F' },
            //     { id: '#948392', code: '#948392', name: 'Lavender Gray', label: 'pag-#948392' },
            //     { id: '#A61C3C', code: '#A61C3C', name: 'Ruby Red', label: 'pag-#A61C3C' },
            //     { id: '#279AF1', code: '#279AF1', name: 'Azure', label: 'pag-#279AF1' }
            // ]
            mainColors: [
                // Azuis Profissionais
                { id: '#2E5A88', code: '#2E5A88', name: 'Navy Blue', label: 'pag-#2E5A88' },
                { id: '#3A7CA5', code: '#3A7CA5', name: 'Corporate Blue', label: 'pag-#3A7CA5' },
                { id: '#5C9DF2', code: '#5C9DF2', name: 'Bright Blue', label: 'pag-#5C9DF2' },
                
                // Verdes Sofisticados
                { id: '#2E6E65', code: '#2E6E65', name: 'Teal Green', label: 'pag-#2E6E65' },
                { id: '#4A8C72', code: '#4A8C72', name: 'Emerald', label: 'pag-#4A8C72' },
                { id: '#6BAF92', code: '#6BAF92', name: 'Mint', label: 'pag-#6BAF92' },
                
                // Tons Terrosos Elegantes
                { id: '#8C6A5D', code: '#8C6A5D', name: 'Taupe', label: 'pag-#8C6A5D' },
                { id: '#A67C52', code: '#A67C52', name: 'Camel', label: 'pag-#A67C52' },
                { id: '#BF9B7A', code: '#BF9B7A', name: 'Sand', label: 'pag-#BF9B7A' },
                
                // Destaques Profissionais
                { id: '#9E2B2B', code: '#9E2B2B', name: 'Burgundy', label: 'pag-#9E2B2B' },
                { id: '#D4A76A', code: '#D4A76A', name: 'Gold', label: 'pag-#D4A76A' },
                { id: '#5D4777', code: '#5D4777', name: 'Royal Purple', label: 'pag-#5D4777' }
            ]
        }
    },
    computed: {
        selectedColor: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    },
    methods: {
        openPanel() {
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
            this.selectedColor = color.code;
            this.$emit('color-selected', color.id); // Emite o ID com #
            this.closePanel();
        },
        getTextColor(hexColor) {
            if (!hexColor || hexColor.length < 7) return '#333';
            const r = parseInt(hexColor.substr(1, 2), 16);
            const g = parseInt(hexColor.substr(3, 2), 16);
            const b = parseInt(hexColor.substr(5, 2), 16);
            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            return brightness > 128 ? '#333' : '#fff';
        }
    },
    computed: {
        formattedColor() {
            if (!this.selectedColor) return '';
            return '#' + this.selectedColor.replace('#', '').substring(0, 6);
        }
    }
}
</script>

<style scoped>
/* Mantenha os mesmos estilos do componente anterior */
.main-color-picker {
    position: relative;
    margin-top: 10px;
}

.main-color-trigger {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.color-preview {
    width: 22px;
    height: 22px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.color-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.color-modal-content {
    position: relative;
    background-color: white;
    border-radius: 12px;
    padding: 24px;
    width: 90%;
    max-width: 380px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.modal-close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    background: #f5f5f5;
    border: none;
    cursor: pointer;
    padding: 6px;
    border-radius: 50%;
}

.modal-title {
    margin: 0 0 20px 0;
    font-size: 18px;
    font-weight: 600;
    color: #333;
    text-align: center;
}

.color-palette {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
}

.color-swatch {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.color-label {
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
}

.selection-check {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>