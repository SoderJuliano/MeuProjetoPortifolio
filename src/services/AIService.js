import * as funcs from "../components/configs/requests";
import { showAlert } from 'simple-alerts/dist/showAlert.js';
import 'simple-alerts/dist/simpleAlertsVue.css';

class AIService {
  constructor() {
    this.user = null;
    this.loading = false;
    this.configs = {};
  }

  async generateExtracurricularExperience() {
    if (!this.shouldGenerateExperience(this.user)) return;
    
    this.loading = true;
    
    try {
      const instructions = this.getExperienceInstructions();
      const response = await this.fetchImprovedText(instructions);
      
      this.updateUserExperience(response.data);
      this.loading = false;
    } catch (error) {
      this.handleGenerationError(error);
    }
  }
  
  shouldGenerateExperience(user) {
    const experienceText = user?.otherExperiencies?.text || '';
    const defaultTexts = ["Uma descrição", "A description what"];
    
    return !experienceText || 
           defaultTexts.some(text => experienceText.includes(text));
  }
  
  getExperienceInstructions() {
    const isEnglish = this.languageIsEN();
    const profession = this.user?.profession || '';
    
    return isEnglish
      ? `Write an extracurricular experience that I have made, interesting for a ${profession} position on my cv. ` +
        `Make it in English, no examples or comments, max 30 words, no more then 30, return only the text.`
      : `Explique uma experiência extra-curricular que eu fiz, interessante para uma posição de ${profession}. ` +
        `Em português. Sem comentários ou explicações, máximo 30 palavras, retorne apenas o texto.`;
  }
  
  async fetchImprovedText(instructions) {
    return await funcs.improveTextLlama({
      text: '',
      email: this.user?.contact?.email?.[0],
      language: this.configs.language,
      customPrompt: instructions
    });
  }
  
  updateUserExperience(text) {
    if (!this.user.otherExperiencies) {
      this.user.otherExperiencies = {
        title: "",
        text: ""
      };
    }
    
    this.user.otherExperiencies.text = text;
  }
  
  handleGenerationError(error) {
    this.loading = false;
    const status = error?.response?.status;
    const message = error?.response?.data?.message || error?.message || 'Erro inesperado';
    
    showAlert(message);
  
    if (status === 422) {
      setTimeout(() => {
        window.location.href = '/choose-your-plan';
      }, 4000);
    }

    this.loading = false;
  }

  languageIsEN() {
    return this.configs.language === 'en-us';
  }



  async improveExtracurricularExperience() {
    if (this.shouldGenerateExperience(this.user)) return;
    
    try {
      const instructions = this.getImproveExperienceInstructions();
      const response = await this.fetchImprovedText(instructions);
      
      this.updateUserExperience(response.data);
      this.loading = false;
    } catch (error) {
      this.handleGenerationError(error);
    }
  }

  getImproveExperienceInstructions() {
    languageIsEN() ? "Improve this text, no comments or explanations, only return the text "+
    this.user.otherExperiencies.text
    : "Melhore esse texto, sem comentarios ou explicações, apenas o texto "+
    this.user.otherExperiencies.text;
  }
}

export default new AIService();