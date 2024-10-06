<template>
    <div class="modal-diagrams">
        <div class="inner-modal-diagrams">
            <img v-on:click="$emit('close')" v-if="diagram === 'login'" src="../../assets/howDoesItWorks/login.png" alt="diagram image">
        </div>
    </div>
</template>
<script>
export default {
    name: 'diagramsModal',
    props: {
        language: String,
        diagram: String
    },
    emits: ['close'],
}
</script>
<style scoped>
    modal-diagrams {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .inner-modal-diagrams {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 100%;
        height: 100%;
    }
</style>