import $ from 'jquery';
export function
    changefontM(p, emit){
    // formas
    if(p.target.id=="square"){

        $(".pic")[0].style['border-radius'] = '0px';
        $(".pic")[0].style['border'] = '2px solid black';

    }else if(p.target.id=="triangleUp"){

        $(".pic")[0].style['border-radius'] = '11px';
        $(".pic")[0].style['border'] = '2px solid black';

    }else if(p.target.id=="circle"){

        $(".pic")[0].style['border-radius'] = '50%';
        $(".pic")[0].style['border'] = '2px solid black';

    }else if(p.target.id=="colorfull-circle"){

        $(".pic")[0].style['border-radius'] = '50%';
        $(".pic")[0].style['border-top'] = '5px solid rgb(255, 2, 2)';
        $(".pic")[0].style['border-left'] = '5px solid rgb(68, 0, 255)';
        $(".pic")[0].style['border-right'] = '5px solid rgb(0, 158, 61)';
        $(".pic")[0].style['border-bottom'] = '5px solid rgb(255, 0, 221)';
    }
    // cores
    if(p.target.textContent.includes('pag-')==true && p.target.id != '' && p.target.id != null){

        p.target.id == "#1F271B" ? emit("change-font-color", "white") : emit("change-font-color", "black");
        emit("change-main-color", p.target.id)
        localStorage.setItem("mainColor", p.target.id)
        localStorage.setItem("fontColor", p.target.id == "#1F271B" ? "white" : "black")
        setTimeout(() => {
            let eyeIcons = $(".icon-show-title");
            let editarIcons = $(".editar");
            if(p.target.id == "#1F271B") {
                eyeIcons.addClass("icone-branco");
                editarIcons.addClass("icone-branco");
            }else {
                eyeIcons.removeClass("icone-branco");
                editarIcons.removeClass("icone-branco");
            }
        }, 300);
        if(confirm(this.language.includes("pt") ? "Cor alterada. Ver cor?" : "Color set. See it?")) {
            this.hover = false;
        } else {
            this.hover = true;
        }
        // alert(this.language.includes("pt") ? "Cor alterada" : "Color set");
    }
    else if(p.target.textContent.includes('#')==true){
        if(p.target.textContent.split('').length>0 && p.target.textContent.split('').length<8){
            const side = $(".side")[0];
            if(side) {
                side.style.backgroundColor = p.target.textContent;
                if(confirm(this.language.includes("pt") ? "Cor alterada. Ver cor?" : "Color set. See it?")) {
                    this.hover = false;
                } else {
                    this.hover = true;
                }
            } else {
                alert(this.language.includes("pt") ? "Este template não tem cor lateral" : "This selected template do not has side color")
            }
            localStorage.setItem("sideColor",  p.target.textContent)
        }
    }else{
        switch(p.target.textContent){
            case 'Oswald':
                $(".main, .side, #template, .template").css("font-family", "'Oswald', sans-serif");
                emit('font-changed', 'Oswald')
                break
            case 'Zen Loop':
                $(".main, .side, #template, .template").css("font-family", "'Zen Loop', cursive");
                $(".main, .side, #template, .template").css("font-weight", "bold");
                emit('font-changed', 'Zen Loop')
                break
            case 'Fuggles':
                $(".main, .side, #template, .template").css("font-family", "'Fuggles', cursive");
                $(".main, .side, #template, .template").css("font-weight", "bold");
                emit('font-changed', 'Fuggles')
                break
            case 'STIX Two Math':
                $(".main, .side, #template, .template").css("font-family", "'STIX Two Math', serif");
                emit('font-changed', "'STIX Two Math', serif")
                break
            case 'Hina Mincho':
                $(".main, .side, #template, .template").css("font-family", "'Hina Mincho', serif");
                emit('font-changed', 'Hina Mincho')
                break
            case 'Inconsolata':
                $(".main, .side, #template, .template").css("font-family", "'Inconsolata', monospace");
                emit('font-changed', 'Inconsolata')
                break
            case 'Kaisei Decol':
                $(".main, .side, #template, .template").css("font-family", "'Kaisei Decol', serif");
                emit('font-changed', 'Kaisei Decol')
                break
            case 'Teko':
                $(".main, .side, #template, .template").css("font-family", "'Teko', sans-serif");
                emit('font-changed', 'Teko')
                break
            case 'Crimson':
                $(".main, .side, #template, .template").css("font-family", "'Crimson Text', serif");
                emit('font-changed', 'Crimson Text')
                break
            case 'Dongle':
                $(".main, .side, #template, .template").css("font-family", "'Dongle', sans-serif");
                emit('font-changed', 'Dongle')
                break
            case 'Mochiy':
                $(".main, .side, #template, .template").css("font-family", "'Mochiy Pop One', sans-serif");
                emit('font-changed', 'Mochiy Pop One')
                break
            case 'Roboto':
                $(".main, .side, #template, .template").css("font-family", "'Roboto Mono', monospace");
                emit('font-changed', 'Roboto Mono')
                break
            case 'verdana':
                $(".main, .side, #template, .template").css("font-family", "verdana");
                emit('font-changed', 'verdana')
                break
            case 'Courier New':
                $(".main, .side, #template, .template").css("font-family", "'Courier New'");
                emit('font-changed', 'Courier New')
                break
        }
    }
}