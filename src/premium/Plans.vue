<template>
    <div class="plans-container">
      <h1 class="title">Choose Your Plan</h1>
  
      <div class="plans">
        <!-- Free Plan Card -->
        <div class="card free">
        <h2>Free Plan</h2>
        <p class="description">Use the site for free while it's online. No ads, no tricks.</p>
        <ul>
            <li>✓ Free forever</li>
            <li>✓ 4 free templates (Normal 1 & 2, Stylish 1 & 2)</li>
            <li>✓ Up to 20 AI improvement requests</li>
            <li>✓ Clean UI with no ads or redirects</li>
        </ul>
        <div class="note">No registration required. Start right away!</div>

        <!-- ✅ Novo botão -->
        <button class="select-button" @click="goToFreeUsage">Select</button>
        </div>

        <!-- Premium Plan Card -->
        <div class="card premium">
          <h2>Premium Plan</h2>
          <p class="description">Support the project and unlock powerful features.</p>
          <ul>
            <li>✓ Unlimited AI improvements</li>
            <li>✓ Advanced CV Editor (JSON & form mode - in progress)</li>
            <li>✓ Store multiple CV versions (coming soon)</li>
            <li>✓ Data encryption options (coming soon)</li>
            <li>✓ Personalized profile subdomain (cv.freehub.top)</li>
            <li>✓ Online public profile page (planned)</li>
            <li>✓ Auto-update via LinkedIn & social data (planned)</li>
            <li>✓ Suggest features and report bugs directly</li>
            <li>✓ Access to future premium-only templates</li>
          </ul>
          <div class="promo">
                Launch Offer: <span class="price">R$24,90</span><br>
                <small>≈ $4.99 (USD)</small><br>
                <small style="display:block; font-size: 0.75rem; color: #555;">
                    USD value. Payment will be processed in BRL.
                </small>
                <strong>One-time payment for lifetime access</strong>
          </div>

          <button class="select-button" @click="openModal">Select</button>
        </div>
      </div>
  
      <!-- PayPal Modal -->
      <div v-if="showModal" class="modal-backdrop" @click.self="closeModal">
        <div class="modal">
          <h3 class="modal-title">Complete Your Purchase</h3>
          <div class="paypal-section">
            <div v-if="!loading" ref="paypal-button-container" class="paypal-button"></div>
            <div v-else class="loading">Processing payment... <span class="spinner"></span></div>
          </div>
          <div v-if="success" class="success-message">
            ✨ Premium Activated! Redirecting...
          </div>
          <button class="modal-close" @click="closeModal">✖</button>
        </div>
      </div>
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
  
  export default {
    name: 'PricingPlans',
    data() {
      return {
        loading: false,
        success: false,
        showModal: false,
        paypalScriptLoaded: false
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
        if (!this.paypalScriptLoaded) {
          this.loadPaypalScript();
        } else {
          this.renderPaypalButtons();
        }
      },
      closeModal() {
        this.showModal = false;
      },
      loadPaypalScript() {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=AWPLGXgpQAvKpsxqlMKdGL9b8jR6hZ8MfRePvvvIs7LaoqbWyDfQnMNJqI2f1m7LIZfQC4KuOO93QW2B&currency=BRL`;
        script.async = true;
        script.onload = () => {
          this.paypalScriptLoaded = true;
          this.renderPaypalButtons();
        };
        document.body.appendChild(script);
      },
      renderPaypalButtons() {
        window.paypal.Buttons({
          style: {
            layout: 'vertical',
            color: 'gold',
            shape: 'pill',
            label: 'paypal'
          },
          createOrder: async (data, actions) => {
            const amount = 24.90;

            // Cria o pedido no PayPal
            const orderId = await actions.order.create({
                purchase_units: [{
                    amount: {
                        value: amount.toString(),
                    },
                }],
            });

            try {
                // Salva no banco com status PENDENTE usando o orderId do PayPal
                await createPayment({
                    paymentId: orderId,
                    userId: this.userId,
                    email: this.email,
                    amount: amount,
                });
            } catch (error) {
                console.error("Erro ao registrar pagamento no backend:", error);
                // Opcional: cancelar o pedido no PayPal se salvar falhar
            }

            return orderId;
          },
          onApprove: async (data, actions) => {
            this.loading = true;
            try {
                const details = await actions.order.capture();
                console.log("DETAILS", details);

                const paymentId = details.id;
                const response = await confirmPayment(paymentId);

                console.log("Confirm payment", response);

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Erro ao confirmar pagamento: ${errorText}`);
                }

                this.success = true;
                setTimeout(() => {
                this.$router.push('/');
                }, 2500);

            } catch (err) {
                console.error('Erro ao processar pagamento:', err);
                alert('Ocorreu um erro ao confirmar o pagamento. Tente novamente.');
            } finally {
                this.loading = false;
            }
          },
          onError: (err) => {
            console.error('PayPal error:', err);
          }
        }).render(this.$refs['paypal-button-container']);
      },

       goToFreeUsage() {
         window.location.href = '/';
       },
    },
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