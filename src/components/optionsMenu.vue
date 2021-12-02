<template>
    <div v-if="show" class="dropdown">
        <h1>TESTETESTE</h1>
    </div>
</template>

<script>
export default {
    name: 'options-menu',
   props:{
       show: Boolean
   }
}
</script>