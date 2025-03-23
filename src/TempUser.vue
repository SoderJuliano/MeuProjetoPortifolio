<template>
    <h1>This is a temporary view with AI genereted data</h1>
    <h2>Click in apply data to save and continue editing or discart do return to the previus page</h2>


    <div class="main">
        <Template3
        class="template"
        :user="tempUser"
        :language="this.configs?.language"
      />
    </div>
</template>

<script>

export default {
    name: "TempUser",

    data() {
        return {
            tempUser: JSON.parse(localStorage.getItem('tempUser')),
            configs: JSON.parse(localStorage.getItem("configs"))
        }
    }
}

</script>