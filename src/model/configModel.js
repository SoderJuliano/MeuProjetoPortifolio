import $ from 'jquery';
export default class PageConfig {

    language = 'pt-br';
    imageURL = "";
    template = 3;
    font = "Oswald";
    fontSize = "15px";
    fontSizeTitles = "17px";
    fontColor = "black";
    sideColor = "#B0C4DE";
    mainColor = "#87CEEB";


    constructor() {
        //defaul configs aready set
        //// console.log(this);
    }

    recoverConfigs() {
        const hosted = JSON.parse(localStorage.getItem("configs"));
        this.language = hosted.language
        this.imageURL = hosted.imageURL
        this.template = hosted.template
        this.font = hosted.font
        this.fontSize = hosted.fontSize
        this.fontSizeTitles = hosted.fontSizeTitles
        this.fontColor = hosted.fontColor
        this.sideColor = hosted.sideColor
        this.mainColor = hosted.mainColor
        return this;
    }

    setIconsCollor() {
        $(document).ready(function() {
            if (this.fontColor === "white") {
                $(".icon-show-title, .editar").addClass("icone-branco");
                $(".title").css({"background-color": "#1F271B", "color": "white"});
            } else {
                $(".icon-show-title, .editar").removeClass("icone-branco");
                $(".title").css({"background-color": "white", "color": "black"});
                // recolocando a cor
                $(".template1-resumo-titulo.title").css({"background-color": this.mainColor});
                $(".template1-competencias p.title").css("background-color", this.mainColor);
                $(".experiencias.templete1 p.title").css("background-color", this.mainColor);
            }
        }.bind(this));
    }

    save(){
        localStorage.setItem("configs", JSON.stringify(this));
    }

    updateMyself(){
        this.recoverConfigs()
        return this;
    }

    // setters
    setLanguage(language) {
        this.language = language;
    }
    setImageURL(imageURL) {
        this.imageURL = imageURL;
    }
    setTemplate(template) {
        this.template = template;
    }
    setFont(font) {
        this.font = font;
    }
    setFontSize(fontSize) {
        this.fontSize = fontSize;
    }
    setFontSizeTitles(fontSizeTitles) {
        this.fontSizeTitles = fontSizeTitles;
    }
    setFontColor(fontColor) {
        this.fontColor = fontColor;
    }
    setSideColor(sideColor) {
        this.sideColor = sideColor;
    }
    setMainColor(mainColor) {
        this.mainColor = mainColor;
    }

    //getters
    getLanguage() {return this.language}
    getImageURL() {return this.imageURL}
    getTemplate() {return this.template.toString()}
    getFont() {return this.font}
    getFontSize() {return this.fontSize}
    getFontSizeTitles() {return this.fontSizeTitles}
    getFontColor() {return this.fontColor}
    getSideColor() {return this.sideColor}
    getMainColor() {return this.mainColor}

}