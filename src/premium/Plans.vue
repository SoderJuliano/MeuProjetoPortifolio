  <template>
      <div class="plans-container">
        <h1 class="title">Escolha Seu Plano</h1>
    
        <div v-if="!showModal" class="plans">
          <!-- Free Plan Card -->
          <div class="card free">
          <h2>Plano Gratuito</h2>
          <p class="description">Use o site gratuitamente enquanto ele estiver online. Sem anúncios, sem truques.</p>
         <ul>
            <li>✓ Gratuito para sempre</li>
            <li>✓ 4 modelos gratuitos (Normal 1 e 2, Estilizado 1 e 2)</li>
            <li>✓ Até 20 solicitações de melhoria por IA</li>
            <li>✓ Interface limpa, sem anúncios ou redirecionamentos</li>
          </ul>
          <div class="note">Não é necessário cadastro. Comece agora mesmo!</div>

          <!-- ✅ Novo botão -->
          <button class="select-button" @click="goToFreeUsage">Selecionar</button>
          </div>

          <!-- Premium Plan Card -->
          <div class="card premium">
            <h2>Plano premium</h2>
            <p class="description">Apoie o projeto e desbloqueie recursos avançados.</p>
            <ul>
              <li>✓ Melhorias ilimitadas por IA</li>
              <li>✓ Editor de currículo avançado (modos JSON e formulário - em desenvolvimento)</li>
              <li>✓ Armazenamento de múltiplas versões do currículo (em breve)</li>
              <li>✓ Opções de criptografia de dados (em breve)</li>
              <li>✓ Subdomínio personalizado para o perfil (cv.freehub.top)</li>
              <li>✓ Página de perfil público online (planejada)</li>
              <li>✓ Atualização automática via LinkedIn e dados sociais (planejada)</li>
              <li>✓ Sugira recursos e reporte bugs diretamente</li>
              <li>✓ Acesso a modelos exclusivos para assinantes premium</li>
            </ul>
           <div class="promo">
              Oferta de Lançamento: <span class="price">R$24,90</span><br>
              <small>≈ $4,99 (USD)</small><br>
              <small style="display:block; font-size: 0.75rem; color: #555;">
                Valor em USD. O pagamento será processado em BRL.
              </small>
              <strong>Pagamento único para acesso vitalício</strong>
            </div>
            <button class="select-button" @click="openModal">Selecionar</button>
          </div>
        </div>

        <img v-if="showModal" src="../assets/2490.jpeg" />
        <p>Ao completar o pagamento envie o comprovante para o e-mail: julianosoder.js@gmail.com, e sua conta sua conta receberá o upgrade.</p>
    
        <!-- Implementar pagsseguro -->
<!--         
     <div v-if="showModal" class="modal-container">
      <PagSeguroCheckout :amount="24.90" @close="closeModal" :key="showModal" />
    </div> -->

        <div class="footer-plans">
            <p><strong>FreeHub</strong> has been under development for over 2 years. Premium subscriptions and donations help improve infrastructure and bring new features to life. Thank you for your support!</p>
            <p style="font-size: 0.8rem; margin-top: 0.5rem;">
              <em>Premium plans are non-refundable. If you click SELECT you agre with terms. 
              <a href="/terms" target="_blank">View full terms</a>.</em>
            </p>
        </div>
      </div>
    </template>
    
    <script>
    import { confirmPayment } from '/src/components/configs/requests.js';
  import PagSeguroCheckout from '../components/PagSeguroCheckout.vue';
    
    export default {
      name: "PricingPlans",
      data() {
          return {
              loading: false,
              success: false,
              showModal: false
          };
      },
      methods: {
          openModal() {
              this.showModal = true;
          },
          closeModal() {
              this.showModal = false;
          },
          goToFreeUsage() {
              window.location.href = "/";
          },
      },
      components: { PagSeguroCheckout }
  };
    </script>
    
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
    
    .plans-container {
      max-width: 960px;
      margin: auto;
      padding: 2rem;
      font-family: 'Inter', sans-serif;
      text-align: center;
      transition: all 0.3s ease;
      margin-bottom: 100px;
    }
    
    .title {
      font-size: 2.5rem;
      margin-bottom: 2.5rem;
      font-weight: 600;
      border-radius: 20px;
      border: solid 1px #ffd700;
    }
    
    .plans {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .card {
      background: white;
      border-radius: 1rem;
      padding: 2rem;
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      max-width: 450px;
      height: 760px;
      flex: 1;
      transition: all 0.3s ease;
      position: relative;
    }
    
    .card:hover {
      transform: translateY(-5px);
    }
    
    .card h2 {
      font-size: 1.75rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }
    
    .card ul {
      text-align: left;
      margin-top: 1.5rem;
      padding-left: 1.2rem;
      line-height: 1.8rem;
    }
    
    .card li {
      margin-bottom: 0.8rem;
      font-size: 1rem;
    }
    
    .free {
      border: 2px solid #9ee493;
    }
    
    .premium {
      border: 2px solid #ffd700;
    }
    
    .promo {
      margin-top: 2rem;
      font-weight: 600;
      color: #d97706;
      font-size: 1.1rem;
    }
    
    .price {
      font-size: 2rem;
      color: #111827;
      font-weight: bold;
    }
    
    .select-button {
      margin-top: 1.5rem;
      padding: 0.75rem 1.5rem;
      background-color: #ffd700;
      color: #000;
      border: none;
      border-radius: 999px;
      font-weight: bold;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.2s ease;
      position: absolute;
      bottom: 10px;
      right: 35%;
    }
    
    .select-button:hover {
      background-color: #facc15;
    }
    
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0,0,0,0.5);
      display: flex;
      align-items: flex-end;
      justify-content: center;
      z-index: 9999;
    }
    
    .modal {
      background: white;
      border-radius: 1.25rem 1.25rem 1.25rem 1.25rem;
      padding: 2rem;
      width: 100%;
      max-width: 420px;
      box-shadow: 0 -8px 16px rgba(0,0,0,0.1);
      animation: slide-up 0.3s ease;
      position: absolute;
      top: 2%;
    }
    
    .modal-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }
    
    .modal-close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: transparent;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
    
    @keyframes slide-up {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    
    .spinner {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #3498db;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      display: inline-block;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .success-message {
      color: green;
      margin-top: 1rem;
      font-weight: bold;
      transition: all 0.3s ease;
    }
    
    .footer-plans {
      margin-top: 3rem;
      font-size: 0.95rem;
      color: #666;
      /* display: block;
      position:fixed;
      bottom: 10px; */
    }
    </style>