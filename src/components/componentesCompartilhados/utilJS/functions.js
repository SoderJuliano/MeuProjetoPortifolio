export function witchModalIAm(modal) {
// console.log('On span title '+modal.input_title)
// console.log('OnChange executing '+modal.inputId)
// console.log('modal.pressed = '+modal.pressed)
// console.log('data -> '+modal.data)

    switch ((modal.modal_title, modal.input_title)) {
        case ("INFORMACOES PESSOAIS", "Seu Endereço"):
        if (modal.inputId != null && modal.pressed == "true") {
            return ".save-bnt";
        }
        break;
        case ("YOUR INFORMATIONS", "Email"):
        if (modal.inputId == "modal-input2" && modal.pressed == "true") {
            return ".bnt-proximo";
        }
        break;
        case ("YOUR INFORMATIONS", "Your adress"):
        if (modal.inputId != null && modal.pressed == "true") {
            return ".save-bnt";
        }
        break;
        case ("EDUCATION", "Academic education"):
        if (modal.inputId == "modal-input" && modal.pressed == "true") {
            return ".save-bnt";
        }
        break;
        case ("FORMAÇÃO ACADÊMICA", "Escolaridade"):
        if (modal.inputId == "modal-input" && modal.pressed == "true") {
            return ".save-bnt";
        }
        break;
        case ("SKILL", "Skill"):
        if (modal.inputId == "modal-input" && modal.pressed == "true") {
            return ".save-bnt";
        }
        break;
        case ("HABILIDADE", "Habilidade"):
        if (modal.inputId == "modal-input" && modal.pressed == "true") {
            return ".save-bnt";
        }
        break;
        case ("REDES SOCIAIS", "Add link"):
        if (modal.inputId == "modal-input" && modal.pressed == "true") {
            return ".save-bnt";
        }
        break;
        case ("SOCIAL NETWORKS", "Add link"):
        if (modal.inputId == "modal-input" && modal.pressed == "true") {
            return ".save-bnt";
        }
        break;
        case ("YOUR INFORMATIONS", "Type your name"):
        if (modal.inputId == "modal-input" && modal.pressed == "true") {
            return ".save-bnt";
        }
        case ("INFORMACOES PESSOAIS", "Digite nome"):
        if (modal.inputId == "modal-input" && modal.pressed == "true") {
            return ".save-bnt";
        }
        case ("INFORMACOES PESSOAIS", "Sua profissão"):
        if (modal.inputId == "modal-input" && modal.pressed == "true") {
            return ".save-bnt";
        }
        case ("YOUR INFORMATIONS", "Your profession"):
        if (modal.inputId == "modal-input" && modal.pressed == "true") {
            return ".save-bnt";
        }
        case ("COMPETENCIA", "Nova competência"):
        if (modal.inputId == "modal-input" && modal.pressed == "true") {
            return ".save-bnt";
        }
        case ("COMPETENCE", "New skill"):
        if (modal.inputId == "modal-input" && modal.pressed == "true") {
            return ".save-bnt";
        }
        case ("RESUMO PROFISSIONAL", "Nome da empresa"):
        if (modal.inputId == "modal-input2" && modal.pressed == "true") {
            return ".bnt-proximo";
        }
        case ("RESUMO PROFISSIONAL", "Descrição"):
        if (modal.inputId == "modal-input3" && modal.pressed == "true") {
            return ".save-bnt";
        }
        case ("PROFESSIONAL HISTORY", "Company name"):
        if (modal.inputId == "modal-input2" && modal.pressed == "true") {
            return ".bnt-proximo";
        }
        case ("PROFESSIONAL HISTORY", "Date when start to work here"):
        if (modal.inputId == "input-value-date2" && modal.pressed == "true") {
            return ".bnt-proximo";
        }
        // fazer resumo profissional em  ingles
        default:
        break;
    }
}

export function isMobile() {
return window.innerWidth <= 1000;
}

export function isMobilePortrait() {
return window.innerWidth <= 600;
}

export function heavyEventHandling(p, $, configs) {
    // as vezes clicando no lugar errado dispara um emit com um length gigante esse if impede isso
    // e um palhativo
    if (p.target.textContent.split("").length > 30) {
        // retono as configs sem alterar elas
        return configs;
    }
    const pic = $(".pic").first();

    if (p.target.id == "square") {
        pic.css({ "border-radius": "0px", border: "2px solid black" });
    } else if (p.target.id == "triangleUp") {
        pic.css({ "border-radius": "11px", border: "2px solid black" });
    } else if (p.target.id == "circle") {
        pic.css({ "border-radius": "50%", border: "2px solid black" });
    } else if (p.target.id == "colorfull-circle") {
        pic.css({
        "border-radius": "50%",
        "border-top": "5px solid rgb(255, 2, 2)",
        "border-left": "5px solid rgb(68, 0, 255)",
        "border-right": "5px solid rgb(0, 158, 61)",
        "border-bottom": "5px solid rgb(255, 0, 221)",
        });
    } else if (p.target.textContent.includes("pag-") == true) {
        let i = 0;
        let all = document.getElementsByClassName("title");
        let page_header = document.getElementsByClassName("page-header");
        //// console.log(p.target.id)
        if (p.target.textContent == "pag-#1F271B") {
        setTimeout(() => {
            for (i; i < all.length; i++) {
            all[i].style.color = "white";
            all[i].style.backgroundColor = "#1F271B";

            if (page_header[0]) {
                page_header[0].style.color = "white";
            } else {
                document.getElementById("text_header").style.color = "white";
            }
            }
            let eyeIcons = $(".icon-show-title");
            let editarIcons = $(".editar");
            eyeIcons.addClass("icone-branco");
            editarIcons.addClass("icone-branco");
        }, 500);
        configs.setFontColor("white");
        } else {
            let eyeIcons = $(".icon-show-title");
            let editarIcons = $(".editar");
            eyeIcons.removeClass("icone-branco");
            editarIcons.removeClass("icone-branco");
        if (page_header[0]) {
            page_header[0].style.color = "black";
        } else {
            document.getElementById("text_header").style.color = "black";
        }

        all = document.getElementsByClassName("title");
        for (i; i < all.length; i++) {
            all[i].style.color = "black";
            all[i].style.backgroundColor = "white";
        }
        configs.setFontColor("black");
        }
        if (p.target.id.split("").length < 8 && p.target.id.split("").length > 1) {
        configs.setMainColor(p.target.id);
        localStorage.setItem("configs", JSON.stringify(configs));
        }
    } else if (p.target.textContent.includes("#") == true) {
        if (
        p.target.textContent.split("").length > 0 &&
        p.target.textContent.split("").length < 8
        ) {
        configs.setSideColor(p.target.textContent);
        localStorage.setItem("configs", JSON.stringify(configs));
        }
    }

    // console.log(p.target.textContent);
    return configs;
}
