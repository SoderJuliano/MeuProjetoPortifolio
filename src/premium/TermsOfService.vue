<template>
    <div class="terms-container">
      <div class="language-toggle">
        <button 
          @click="language = 'en'" 
          :class="{ active: language === 'en' }"
        >
          English
        </button>
        <button 
          @click="language = 'pt'" 
          :class="{ active: language === 'pt' }"
        >
          Português
        </button>
      </div>
  
      <!-- English Version -->
      <div v-if="language === 'en'" class="terms-content">
        <h1>Terms of Service</h1>
        <p class="last-updated">Last Updated: {{ new Date().toLocaleDateString() }}</p>
        
        <section>
          <h2>1. Service Description</h2>
          <p>FreeHub is a free online tool for creating and improving CVs/resumes. Premium features may be offered via <strong>one-time payments or donations</strong>.</p>
        </section>
  
        <section>
          <h2>2. Payments & Refunds</h2>
          <ul>
            <li><strong>All payments/donations are non-refundable</strong>. By purchasing, you acknowledge that funds contribute to maintaining and improving the Service.</li>
            <li><strong>No guarantees</strong> are provided for future feature availability or service longevity.</li>
          </ul>
        </section>
  
        <section>
          <h2>3. Service Availability</h2>
          <p>The Service is provided <strong>"as is"</strong> and may go offline <strong>without prior notice</strong> due to technical, legal, or financial reasons.</p>
          <p>FreeHub is <strong>not liable</strong> for interruptions, data loss, or discontinuation.</p>
        </section>
  
        <section>
          <h2>4. User Responsibilities</h2>
          <p>You are <strong>solely responsible</strong> for:</p>
          <ul>
            <li>Backing up your CV/data.</li>
            <li>Ensuring the accuracy of information entered.</li>
          </ul>
          <p>FreeHub is <strong>not responsible</strong> for job application outcomes or CV content.</p>
        </section>
  
        <section>
          <h2>5. Data Privacy</h2>
          <p>We do not store your CV data longer than necessary. However, <strong>export and backup your data regularly</strong>.</p>
        </section>
  
        <section>
          <h2>6. Limitation of Liability</h2>
          <p>FreeHub and its developers are <strong>not liable</strong> for:</p>
          <ul>
            <li>Damages from Service use/unavailability.</li>
            <li>CV content errors or misuse by third parties.</li>
          </ul>
        </section>
  
        <section>
          <h2>7. Changes to Terms</h2>
          <p>We may update these terms. Continued use of the Service after changes constitutes acceptance of the new terms.</p>
        </section>
      </div>
  
      <!-- Portuguese Version -->
      <div v-else class="terms-content">
        <h1>Termos de Serviço</h1>
        <p class="last-updated">Última Atualização: {{ new Date().toLocaleDateString() }}</p>
        
        <section>
          <h2>1. Descrição do Serviço</h2>
          <p>FreeHub é uma ferramenta <strong>gratuita</strong> para criar e melhorar CVs/currículos. Recursos premium podem ser oferecidos via <strong>pagamentos únicos ou doações</strong>.</p>
        </section>
  
        <section>
          <h2>2. Pagamentos & Reembolsos</h2>
          <ul>
            <li><strong>Pagamentos/doações NÃO são reembolsáveis</strong>. Ao comprar, você aceita que os valores serão convertidos em fundos para melhorias do Serviço.</li>
            <li><strong>Não há garantias</strong> de disponibilidade futura do Serviço ou de funcionalidades prometidas.</li>
          </ul>
        </section>
  
        <section>
          <h2>3. Disponibilidade do Serviço</h2>
          <p>O Serviço é fornecido <strong>"como está"</strong> e pode sair do ar <strong>sem aviso prévio</strong> por motivos técnicos, legais ou financeiros.</p>
          <p>O FreeHub <strong>não se responsabiliza</strong> por interrupções, perda de dados ou descontinuação.</p>
        </section>
  
        <section>
          <h2>4. Responsabilidades do Usuário</h2>
          <p>Você é <strong>totalmente responsável</strong> por:</p>
          <ul>
            <li>Fazer backup dos seus CVs/dados.</li>
            <li>Verificar a precisão das informações inseridas.</li>
          </ul>
          <p>O FreeHub <strong>não é responsável</strong> por resultados de empregos ou conteúdo dos currículos.</p>
        </section>
  
        <section>
          <h2>5. Privacidade de Dados</h2>
          <p>Não armazenamos seus dados além do necessário. <strong>Exporte e faça backup regularmente</strong>.</p>
        </section>
  
        <section>
          <h2>6. Limitação de Responsabilidade</h2>
          <p>O FreeHub e seus desenvolvedores <strong>não são responsáveis</strong> por:</p>
          <ul>
            <li>Danos decorrentes do uso/indisponibilidade do Serviço.</li>
            <li>Erros no conteúdo do CV ou uso por terceiros.</li>
          </ul>
        </section>
  
        <section>
          <h2>7. Alterações nos Termos</h2>
          <p>Podemos atualizar estes termos. O uso contínuo do Serviço após alterações significa aceitação dos novos termos.</p>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TermsOfService',
    data() {
      return {
        language: 'en'
      };
    }
  };
  </script>
  
  <style scoped>
  .terms-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
  }
  
  .language-toggle {
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .language-toggle button {
    background: none;
    border: 1px solid #ddd;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s;
  }
  
  .language-toggle button.active {
    background: #ffd700;
    border-color: #ffd700;
    font-weight: bold;
  }

  .terms-content {
    background-color: white;
    padding: 10px;
    border-radius: 5px;
  }
  
  .terms-content h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 0.5rem;
    color: #111;
  }
  
  .last-updated {
    text-align: center;
    color: #666;
    margin-bottom: 2rem;
    font-size: 0.9rem;
  }
  
  .terms-content h2 {
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem 0;
    color: #222;
  }
  
  .terms-content p, .terms-content ul {
    margin-bottom: 1rem;
  }
  
  .terms-content ul {
    padding-left: 1.5rem;
  }
  
  .terms-content li {
    margin-bottom: 0.5rem;
  }
  
  section {
    margin-bottom: 1.5rem;
  }
  
  strong {
    color: #111;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .terms-container {
      padding: 1rem;
    }
  }
  </style>