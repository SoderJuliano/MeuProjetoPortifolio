<template>
    <div v-if="isVisible" class="modal-overlay" @click.self="close">
    <div class="modal-content">
        <button class="close-btn" @click="close">✕</button>
        <h1>{{ title }}</h1>
        <p>{{ message }}</p>
        <slot></slot> <!-- Para conteúdo adicional -->
    </div>
    </div>
</template>

<script>
export default {
    props: {
    title: {
        type: String,
        default: ''
    },
    message: {
        type: String,
        default: ''
    }
    },
    data() {
    return {
        isVisible: false
    };
    },
    methods: {
    open() {
        this.isVisible = true;
    },
    close() {
        this.isVisible = false;
    }
    }
};
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.modal-content {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    position: relative;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
}
</style>
