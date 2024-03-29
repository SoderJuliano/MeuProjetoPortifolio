export default class Tip {
    id;
    title;
    message;
    read = false;
    language;

    constructor(){
        this.id = Math.floor(Math.random() * 1000);
    }

    //seetters
    setLanguage(language){
        this.language = language;
    }

    setId(id){
        this.id = id;
    }

    setTitle(title){
        this.title = title;
    }

    setMessage(message){
        this.message = message;
    }

    setRead(read){
        this.read = read;
    }

    makeRead(){
        this.read = true;
    }

    //getters
    getId(){
        return this.id;
    }

    getTitle(){
        return this.title;
    }

    getMessage(){
        return this.message;
    }

    getRead(){
        return this.read;
    }

    getLanguage(){
        return this.language;
    }
}