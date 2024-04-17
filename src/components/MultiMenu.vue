<template>
    <div class="multiMenu-options">
        <div class="header">
            <h3>OPÇÕES</h3>
        </div>
        <div class="option">
            <fonts @update-configs="$emit('update-configs')" />
            <p class="multimenu-line first"></p>
        </div>
        
        <div class="option">
            <Colors />
            <p class="multimenu-line"></p>
        </div>
        
        <div class="option">
            <pageColor />
            <p class="multimenu-line"></p>
        </div>
        
        <div class="option">
            <Avatares
            :user="user"
            :language="language"
            @update-user="$emit('update-user')"
            />
            <p class="multimenu-line"></p>
        </div>
        
        <div class="option">
            <PicureShape />
            <p class="multimenu-line"></p>
        </div>
        
        <div class="option">
            <Templates
                :template="template"
                @now-template1="this.$emit('now-template1')"
                @now-template2="this.$emit('now-template2')"
            />
            <p class="multimenu-line"></p>
        </div>
    </div>
</template>

<script lang="js">
import Fonts from "./Fonts.vue";
import Colors from "./Colors.vue";
import pageColor from "./pageColor.vue";
import Avatares from "./Avatares.vue";
import PicureShape from "./PictureShape.vue";
import Templates from "./multimenuComponentes/Templates.vue";

export default {
    name: "multi-menu",
    emits: ["changefont", "update-configs"],
    components: {
        Fonts,
        Colors,
        pageColor,
        Avatares,
        PicureShape,
        Templates,
    },
    props:{
        template: Number,
        user: Object,
        language: String
    },
    emits:['now-template1', 'now-template2', 'update-user'],
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
