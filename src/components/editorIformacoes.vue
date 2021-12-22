<template>
    <div class="main-editar-container">
        <h3>{{title}}</h3>
        <div class="body-editar-container">
            <form action="">
                <div for="inputsNumber">
                    <div v-if="formTitle1">
                    <input type="text" placeholder="{{placeholder1}}">
                </div>
                </div>
            </form>
        </div>
    </div>
</template>