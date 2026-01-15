<template>
    <div class="font-size-control">
        <p class="tside" @click="showMenu()">
            {{ language.includes("en") ? "FONT SIZE" : "TAMANHO DA FONTE" }}
        </p>
        
        <div class="font-size-panel" v-show="isOpen" @click.self="closeDiv">
            <div class="panel-content">
                <button class="close-btn" @click="closeDiv">×</button>
                
                <div class="control-group">
                    <h3>{{ language.includes("en") ? "Font Size" : "Tamanho da Fonte" }}</h3>
                    <div class="size-selector">
                        <div class="current-size" @click="showOptions">
                            {{ size }}px
                            <span class="arrow">▼</span>
                        </div>
                        <div class="size-options">
                            <div v-for="option in [12,13,14,15,16,17,18,19,20]" 
                                 :key="option"
                                 class="size-option"
                                 :class="{active: size === option}"
                                 @click="changeSize(option)">
                                {{ option }}px
                            </div>
                        </div>
                        <span class="mini-close" @click.stop="miniClose">×</span>
                    </div>
                </div>
                
                <div class="control-group">
                    <h3>{{ language.includes("en") ? "Font Weight" : "Peso da Fonte" }}</h3>
                    <div class="weight-options">
                        <button v-for="weight in ['lighter', 'normal', 'bold', 'bolder']"
                                :key="weight"
                                :class="['weight-option', {active: fontweight === weight}]"
                                :style="{fontWeight: weight}"
                                @click="setFontWeight(weight)">
                            {{ weight }}
                            <span v-if="fontweight === weight" class="checkmark">✓</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name: "FontsSize",
    props: {
        language: String
    },
    data() {
        return {
            size: 14,
            fontweight: "normal",
            isOpen: false
        }
    },
    methods: {
        closeDiv() {
            this.isOpen = false;
        },
        showMenu() {
            this.isOpen = true;
        },
        showOptions() {
            $(".size-options").css({"display": "block"});
            $(".mini-close").css({"display": "flex"});
        },
        changeSize(newSize) {
            this.size = newSize;
            $(".main").css({"font-size": this.size});
            $(".side").css({"font-size": this.size});
            this.miniClose();
        },
        miniClose() {
            $(".size-options").css({"display": "none"});
            $(".mini-close").css({"display": "none"});
        },
        setFontWeight(val) {
            this.fontweight = val;
            $(".main").css({"font-weight": this.fontweight});
            $(".side").css({"font-weight": this.fontweight});
        }
    }
}
</script>

<style scoped>
.font-size-control {
    /* position: relative; */
}

.font-size-toggle {
    background-color: #f0f0f0;
    border: none;
    border-radius: 6px;
    padding: 10px 15px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;
    color: #333;
    margin: 5px 0;
    width: 100%;
    text-align: center;
}

.font-size-toggle:hover {
    background-color: #e0e0e0;
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.font-size-panel {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.panel-content {
    background-color: white;
    border-radius: 12px;
    padding: 25px;
    width: 90%;
    max-width: 400px;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.3s ease-out;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #666;
    padding: 5px;
}

.close-btn:hover {
    color: #333;
}

.control-group {
    margin-bottom: 25px;
}

.control-group h3 {
    margin-top: 0;
    margin-bottom: 15px;
    color: #333;
    font-size: 16px;
}

.size-selector {
    position: relative;
    margin-bottom: 20px;
}

.current-size {
    padding: 10px 15px;
    background-color: #f5f5f5;
    border-radius: 6px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.2s;
    border: 1px solid #ddd;
}

.current-size:hover {
    background-color: #e9e9e9;
}

.arrow {
    font-size: 12px;
    color: #666;
}

.size-options {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    z-index: 10;
    max-height: 200px;
    overflow-y: auto;
    margin-top: 5px;
}

.size-option {
    padding: 10px 15px;
    cursor: pointer;
    transition: all 0.2s;
}

.size-option:hover {
    background-color: #f0f0f0;
}

.size-option.active {
    background-color: #e3f2fd;
    color: #1976d2;
}

.mini-close {
    display: none;
    position: absolute;
    top: -10px;
    right: -10px;
    width: 24px;
    height: 24px;
    background-color: #ff4444;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    z-index: 11;
    font-size: 14px;
    padding: 0;
}

.weight-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.weight-option {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background-color: #f9f9f9;
    cursor: pointer;
    transition: all 0.2s;
    text-align: center;
    position: relative;
}

.weight-option:hover {
    background-color: #f0f0f0;
}

.weight-option.active {
    background-color: #e3f2fd;
    border-color: #90caf9;
}

.checkmark {
    margin-left: 5px;
    color: #1976d2;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 480px) {
    .panel-content {
        width: 95%;
        padding: 20px 15px;
    }
    
    .weight-options {
        grid-template-columns: 1fr;
    }
}

@media screen and (max-width: 768px) {
    .font-size-panel {
        position: absolute;
    }
}
</style>