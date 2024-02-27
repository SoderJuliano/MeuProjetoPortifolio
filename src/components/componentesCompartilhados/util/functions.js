export function witchModalIAm(modal) {
    // console.log('On span title '+modal.input_title)
    // console.log('OnChange executing '+modal.inputId)
    // console.log('modal.pressed = '+modal.pressed)
    // console.log('data -> '+modal.data)

    switch (modal.modal_title, modal.input_title) {
        case "INFORMACOES PESSOAIS", "Seu Endereço":
            if(modal.inputId != null && modal.pressed == 'true'){
                return '.save-bnt';
            }
            break;
        case "YOUR INFORMATIONS", "Email":
            if(modal.inputId == "modal-input2" && modal.pressed == 'true'){
                return '.bnt-proximo';
            }
            break;
        case "YOUR INFORMATIONS", "Your adress":
            if(modal.inputId != null && modal.pressed == 'true'){
                return '.save-bnt';
            }
            break;
        case "EDUCATION", "Academic education":
            if(modal.inputId == "modal-input" && modal.pressed == 'true'){
                return '.save-bnt';
            }
            break;
        case "FORMAÇÃO ACADÊMICA", "Escolaridade":
            if(modal.inputId == "modal-input" && modal.pressed == 'true'){
                return '.save-bnt';
            }
            break;
        case "SKILL", "Skill":
            if(modal.inputId == "modal-input" && modal.pressed == 'true'){
                return '.save-bnt';
            }
            break;
        case "HABILIDADE", "Habilidade":
            if(modal.inputId == "modal-input" && modal.pressed == 'true'){
                return '.save-bnt';
            }
            break;
        case "REDES SOCIAIS", "Add link":
            if(modal.inputId == "modal-input" && modal.pressed == 'true'){
                return '.save-bnt';
            }
            break;
        case "SOCIAL NETWORKS", "Add link":
            if(modal.inputId == "modal-input" && modal.pressed == 'true'){
                return '.save-bnt';
            }
            break;
        case "YOUR INFORMATIONS", "Type your name":
            if(modal.inputId == "modal-input" && modal.pressed == 'true') {
                return '.save-bnt';
            }
        case "INFORMACOES PESSOAIS", "Digite nome":
            if(modal.inputId == "modal-input" && modal.pressed == 'true') {
                return '.save-bnt';
            }
        case "INFORMACOES PESSOAIS", "Sua profissão":
            if(modal.inputId == "modal-input" && modal.pressed == 'true') {
                return '.save-bnt';
            }
        case "INFORMACOES PESSOAIS", "Email":
            if(modal.inputId == "modal-input2" && modal.pressed == 'true') {
                return 'bnt-proximo';
            }
        case "YOUR INFORMATIONS", "Your profession":
            if(modal.inputId == "modal-input" && modal.pressed == 'true') {
                return '.save-bnt';
            }
        case "COMPETENCIA", "Nova competência":
            if(modal.inputId == 'modal-input' && modal.pressed == 'true') {
                return '.save-bnt';
            }
        case "COMPETENCE", "New skill":
            if(modal.inputId == 'modal-input' && modal.pressed == 'true') {
                return '.save-bnt';
            }
        case "RESUMO PROFISSIONAL", "Nome da empresa":
            if(modal.inputId == 'modal-input2' && modal.pressed == 'true') {
                return '.bnt-proximo';
            }
        case "RESUMO PROFISSIONAL", "Descrição":
            if(modal.inputId == 'modal-input3'  && modal.pressed == 'true') {
                return '.save-bnt';
            }
        // fazer resumo profissional em  ingles
        default:
            break;
    }
}