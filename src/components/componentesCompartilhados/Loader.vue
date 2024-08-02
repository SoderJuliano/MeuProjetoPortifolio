<template>
    <div v-if="show" class="loader">
        <span>{{ this.language.includes("pt") ? "Carregando..." : "Loading..."}}</span>
        <div class="spinner">
        </div>
    </div>
</template>

<script>

export default {
    name: 'Loader',
    props: {
        show: {
            type: Boolean,
            default: true
        },
        language: String
    }
}
</script>

<style scoped>
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Cor de fundo semitransparente */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* Garante que o loader esteja acima de outros elementos */
}

.spinner {
    border: 8px solid rgba(0, 0, 0, 0.1); /* Cor do fundo do spinner */
    border-radius: 50%;
    border-top: 8px solid #3498db; /* Cor do topo do spinner */
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
