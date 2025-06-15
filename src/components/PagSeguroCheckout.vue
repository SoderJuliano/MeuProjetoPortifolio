<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label>Número do Cartão</label>
      <input 
        v-model="card.number" 
        type="text" 
        placeholder="4111 1111 1111 1111"
        @input="formatCardNumber"
      />
    </div>

    <div class="form-row">
      <div class="form-group">
        <label>Validade (MM/AAAA)</label>
        <input 
          v-model="card.expiry" 
          type="text" 
          placeholder="12/2030"
          @input="formatExpiry"
        />
      </div>

      <div class="form-group">
        <label>CVV</label>
        <input 
          v-model="card.cvv" 
          type="text" 
          placeholder="123"
          maxlength="4"
        />
      </div>
    </div>

    <button type="submit" :disabled="loading">
      {{ loading ? 'Processando...' : 'Pagar R$ ' + amount.toFixed(2) }}
    </button>

    <div v-if="error" class="error-message">
      {{ error }}
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  amount: { type: Number, required: true },
});

const card = ref({
  number: '',
  expiry: '',
  cvv: ''
});

const loading = ref(false);
const error = ref('');

// Formatação dinâmica
const formatCardNumber = () => {
  card.value.number = card.value.number
    .replace(/\D/g, '')
    .replace(/(\d{4})(?=\d)/g, '$1 ');
};

const formatExpiry = () => {
  card.value.expiry = card.value.expiry
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{0,4})/, '$1/$2')
    .substring(0, 7);
};

const handleSubmit = async () => {
  if (!validateCard()) return;

  loading.value = true;
  error.value = '';

  try {
    // 1. Gera token do cartão
    const cardToken = await PagSeguro.encryptCard({
      number: card.value.number.replace(/\s/g, ''),
      exp: card.value.expiry,
      cvv: card.value.cvv,
    });

    // 2. Envia para seu backend
    const response = await fetch('http://seu-backend.com/api/payments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token: cardToken,
        amount: props.amount
      }),
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.message || 'Erro no pagamento');

    // 3. Sucesso! (Redirecione ou mostre mensagem)
    alert('Pagamento aprovado! ID: ' + data.transactionId);
    
  } catch (err) {
    error.value = err.message || 'Falha ao processar pagamento';
  } finally {
    loading.value = false;
  }
};

const validateCard = () => {
  const { number, expiry, cvv } = card.value;
  
  if (number.replace(/\s/g, '').length !== 16) {
    error.value = 'Número do cartão inválido';
    return false;
  }

  if (!/^\d{2}\/\d{4}$/.test(expiry)) {
    error.value = 'Data inválida (MM/AAAA)';
    return false;
  }

  if (cvv.length < 3) {
    error.value = 'CVV inválido';
    return false;
  }

  return true;
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

.form-row {
  display: flex;
  gap: 1rem;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

button {
  background: #2c82e0;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background: #ccc;
}

.error-message {
  color: red;
  margin-top: 1rem;
}
</style>