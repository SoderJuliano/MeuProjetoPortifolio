<template>
  <div class="exemplos-trigger" @click="openExemplos">
    <svg class="exemplos-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <path d="M12 18v-6"></path>
      <path d="M9 15l3 3 3-3"></path>
    </svg>
    <p class="tside">{{ isEnglish ? "FILLED EXAMPLES" : "EXEMPLOS PREENCHIDOS" }}</p>
    <div class="tooltip" v-if="showTooltip">
      {{ isEnglish ? "Use champion template examples" : "Use exemplos de templates campeões" }}
    </div>
  </div>

  <div class="dropdown-overlay" v-if="isOpen" @click="closeDiv()"></div>
  
  <div class="dropdown-exemplos" v-if="isOpen">
    <div class="exemplos-header">
      <h3>{{ isEnglish ? "Choose a Template Example" : "Escolha um Exemplo de Template" }}</h3>
      <button class="close-btn" @click="closeDiv()">×</button>
    </div>
    
    <div class="exemplos-content">
      <div 
        v-for="(exemplo, index) in exemplosDisponiveis" 
        :key="index"
        class="exemplo-card"
        @click="visualizarExemplo(exemplo)"
      >
        <div class="exemplo-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
        </div>
        <div class="exemplo-info">
          <h4>{{ exemplo.nome }}</h4>
          <p>{{ exemplo.descricao }}</p>
          <span class="exemplo-categoria">{{ exemplo.categoria }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExemplosPreenchidos",
  props: {
    language: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false,
      showTooltip: false,
      exemplosDisponiveis: []
    };
  },
  computed: {
    isEnglish() {
      return this.language === "us-en" || this.language === "en-us";
    }
  },
  mounted() {
    this.carregarExemplos();
  },
  methods: {
    openExemplos() {
      this.isOpen = true;
      this.closeAllOthers();
    },
    closeDiv() {
      this.isOpen = false;
    },
    closeAllOthers() {
      // Emit event to close other menus
      this.$emit('close-all');
    },
    async carregarExemplos() {
      try {
        // Import all JSON files from jsonExemples folder
        const exemplos = [];
        
        // Developer examples
        const softwareEngineer = await import('@/jsonExemples/Developer/softwareEngineer.json');
        const javaDeveloper = await import('@/jsonExemples/Developer/javaDeveloper.json');
        const frontEndDeveloper = await import('@/jsonExemples/Developer/frontEndDeveloper.json');
        
        // Custodian example (root level)
        const custodian = await import('@/jsonExemples/custodian.json');
        
        // Get current language key
        const langKey = this.isEnglish ? "en-us" : "pt-br";
        
        // Add examples with metadata
        exemplos.push({
          nome: softwareEngineer.default[langKey]?.name || "Software Engineer",
          descricao: softwareEngineer.default[langKey]?.profession || "",
          categoria: this.isEnglish ? "Developer" : "Desenvolvedor",
          dados: softwareEngineer.default[langKey],
          arquivo: "softwareEngineer"
        });
        
        exemplos.push({
          nome: javaDeveloper.default[langKey]?.name || "Java Developer",
          descricao: javaDeveloper.default[langKey]?.profession || "",
          categoria: this.isEnglish ? "Developer" : "Desenvolvedor",
          dados: javaDeveloper.default[langKey],
          arquivo: "javaDeveloper"
        });
        
        exemplos.push({
          nome: frontEndDeveloper.default[langKey]?.name || "Front-End Developer",
          descricao: frontEndDeveloper.default[langKey]?.profession || "",
          categoria: this.isEnglish ? "Developer" : "Desenvolvedor",
          dados: frontEndDeveloper.default[langKey],
          arquivo: "frontEndDeveloper"
        });
        
        exemplos.push({
          nome: custodian.default[langKey]?.name || "Custodian",
          descricao: custodian.default[langKey]?.profession || "",
          categoria: this.isEnglish ? "Services" : "Serviços",
          dados: custodian.default[langKey],
          arquivo: "custodian"
        });
        
        this.exemplosDisponiveis = exemplos;
      } catch (error) {
        console.error("Erro ao carregar exemplos:", error);
      }
    },
    visualizarExemplo(exemplo) {
      // Normalize data to match expected format
      const dadosNormalizados = this.normalizarDados(exemplo.dados);
      
      // Save example data to localStorage as tempUser
      localStorage.setItem('tempUser', JSON.stringify(dadosNormalizados));
      
      // Navigate to tempUser route
      window.location.href = "/tempUser";
    },
    normalizarDados(dados) {
      // Clone the data to avoid modifying the original
      const dadosClone = JSON.parse(JSON.stringify(dados));
      
      // Normalize social array: convert {type, url} objects to strings
      if (dadosClone.social && Array.isArray(dadosClone.social)) {
        dadosClone.social = dadosClone.social.map(item => {
          if (typeof item === 'object' && item.url) {
            // Convert object to string format: "link:url"
            return `link:${item.url}`;
          }
          return item; // Keep strings as is
        });
      }
      
      return dadosClone;
    }
  }
};
</script>

<style scoped>
.exemplos-trigger {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.exemplos-trigger:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: translateX(5px);
}

.exemplos-trigger:hover .exemplos-icon,
.exemplos-trigger:hover .tside {
  color: white;
}

.exemplos-trigger:hover .tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.exemplos-icon {
  min-width: 20px;
  color: #667eea;
  transition: color 0.3s ease;
}

.tside {
  margin: 0;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  color: #333;
}

.tooltip {
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-10px);
  margin-left: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  z-index: 1000;
}

.tooltip::before {
  content: '';
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 6px solid transparent;
  border-right-color: #667eea;
}

.dropdown-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 997;
  backdrop-filter: blur(4px);
}

.dropdown-exemplos {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  width: 90%;
  max-width: 800px;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: slideIn 0.3s ease;
}

@media (max-width: 768px) {
  .dropdown-exemplos {
    width: 100%;
    max-width: 100vw;
    max-height: 100vh;
    height: 100vh;
    border-radius: 0;
    top: 0;
    left: 0;
    transform: none;
    margin: 0;
    padding: 0;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translate(-50%, -45%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.exemplos-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e0e0e0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.exemplos-header h3 {
  margin: 0;
  color: white;
  font-size: 20px;
  font-weight: 600;
}

.close-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 28px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  line-height: 1;
  padding: 0;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: rotate(90deg);
}

.exemplos-content {
  padding: 24px;
  overflow-y: auto;
  flex: 1;
}

.exemplo-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
}

.exemplo-card:hover {
  border-color: #667eea;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  transform: translateX(5px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.exemplo-icon {
  min-width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.exemplo-info {
  flex: 1;
}

.exemplo-info h4 {
  margin: 0 0 4px 0;
  color: #333;
  font-size: 16px;
  font-weight: 600;
}

.exemplo-info p {
  margin: 0 0 8px 0;
  color: #666;
  font-size: 14px;
}

.exemplo-categoria {
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .tooltip {
    display: none;
  }
  
  .exemplos-header {
    padding: 12px;
    margin: 0;
  }
  
  .exemplos-header h3 {
    font-size: 16px;
    word-wrap: break-word;
    margin: 0;
  }
  
  .close-btn {
    width: 32px;
    height: 32px;
    min-width: 32px;
    min-height: 32px;
    font-size: 24px;
  }
  
  .exemplos-content {
    padding: 8px;
    margin: 0;
  }
  
  .exemplo-card {
    flex-direction: row;
    padding: 12px;
  }
  
  .exemplo-icon {
    min-width: 40px;
    width: 40px;
    height: 40px;
  }
  
  .exemplo-icon svg {
    width: 24px;
    height: 24px;
  }
  
  .exemplo-info h4 {
    font-size: 14px;
  }
  
  .exemplo-info p {
    font-size: 12px;
  }
  
  .exemplo-categoria {
    font-size: 10px;
    padding: 3px 8px;
  }
}

@media (min-width: 1001px) {
  .exemplos-trigger:hover .tooltip {
    display: block;
  }
}
</style>
