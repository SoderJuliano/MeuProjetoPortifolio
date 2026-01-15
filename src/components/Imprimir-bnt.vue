<template>
    <div class="print-div"  @click="print" >
        <svg class="print-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
        <span class="imprimir-text">Imprimir</span>
    </div>
</template>
<script>

import $ from 'jquery'

export default {
    name: 'imprimir-bnt',
    methods:{
        print(){
            const sideHeight = $(".side").height()
            const mainHeight = $(".main-container").width()

            // console.log("side: " + sideHeight)
            // console.log("main-container: " + mainHeight )

            sideHeight > 950 ? $(".side").height(sideHeight) : $(".side").css("height", "100vh")
            if(mainHeight > sideHeight && mainHeight > 950){
            $(".side").height(mainHeight)
            }else{
            $(".main-container").height(sideHeight+50)
            }

            window.print()

            $(".side").height(sideHeight)
            $(".main-container").height(mainHeight)

        },
    }
}
</script>
<style scoped>
.print-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    stroke: currentColor;
}

.print-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 14px 20px;
    margin: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    border-radius: 12px;
    color: white;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    box-sizing: border-box;
}

.print-div:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
    background: linear-gradient(135deg, #5568d3 0%, #65408b 100%);
}

.print-div:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
}

.imprimir-text {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    user-select: none;
}

@media (max-width: 400px) {
    .print-div {
        padding: 12px 16px;
        font-size: 0.95rem;
    }
    
    .print-icon {
        width: 18px;
        height: 18px;
    }
}
</style>
