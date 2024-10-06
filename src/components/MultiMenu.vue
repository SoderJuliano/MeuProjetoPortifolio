<template>
    <div class="multiMenu-options">
        <div class="header">
            <h3>{{ language.includes("en") ? "OPTIONS" : "OPÇÕES" }}</h3>
        </div>
        <div class="option">
            <fonts :language="language" @update-configs="$emit('update-configs')" />
            <p class="multimenu-line first"></p>
        </div>

        <div class="option">
            <FontsSize :language="language" @update-configs="$emit('update-configs')" />
            <p class="multimenu-line second"></p>
        </div>

        <div class="option">
            <Colors :language="language" />
            <p class="multimenu-line"></p>
        </div>

        <div class="option">
            <pageColor :language="language" />
            <p class="multimenu-line"></p>
        </div>

        <div class="option">
            <Avatares :user="user" :language="language" @update-user="update" />
            <p class="multimenu-line"></p>
        </div>

        <div class="option">
            <PicureShape :language="language" />
            <p class="multimenu-line"></p>
        </div>

        <div class="option">
            <Templates
                :language="language" :template="template" @now-template1="this.$emit('now-template1')"
                @now-template2="this.$emit('now-template2')" @now-template3="this.$emit('now-template3')" />
            <p class="multimenu-line"></p>
        </div>
        <div class="option">
            <p class="tside" @click="$emit('login')" >LOGIN</p>
            <p class="multimenu-line"></p>
        </div>
    </div>
</template>

<script lang="js">
import Fonts from "./Fonts.vue";
import FontsSize from "./FontsSize.vue";
import Colors from "./Colors.vue";
import pageColor from "./pageColor.vue";
import Avatares from "./Avatares.vue";
import PicureShape from "./PictureShape.vue";
import Templates from "./multimenuComponentes/Templates.vue";

export default {
    name: "multi-menu",
    emits: ["changefont", "update-configs", "update-user", 'now-template1', 'now-template2', 'now-template3', 'login'],
    components: {
        Fonts,
        Colors,
        pageColor,
        Avatares,
        PicureShape,
        Templates,
        FontsSize
    },
    props: {
        template: Number,
        user: Object,
        language: String
    },
    methods: {
        update(val) {
            this.$emit("update-user", val);
        }
    }
};
</script>
<style scoped>
.bnt-close {
    position: relative;
    right: 10px;
    top: 10px;
}

.header {
    display: flex;
    width: 50%;
    height: 30px;
    text-align: center;
    margin-bottom: 20px;
    margin-left: 10px;
}

.multimenu-line {
    transition: ease-in-out 500ms;
    border-radius: 0px;
    margin-left: 10px;
    width: 0px;
    border-bottom: 4px solid black;
    border-radius: 10px;
    position: absolute;
    margin-top: -15px;
}

/* The first child has a different padding for some reason */
.multimenu-line.first {
    margin-top: 0px !important;
}

/* The second element */
.multimenu-line.second {
    margin-top: -5px;
}

/* The second one was to close of the others */
.option:nth-child(3) {
    margin-bottom: 20px;
}

.option:hover .multimenu-line {
    width: 100px;
}

@media only screen and(min-width:1001px) {
    .multiMenu-options {
        max-height: 100%;
        width: 80%;
        background-color: white;
    }
}

@media only screen and(max-width:1000px) {
    .multiMenu-options {
        height: 150px;
        overflow: scroll;
        width: 80%;
        background-color: white;
        overflow: scroll;
        cursor: pointer;
    }
}
</style>
