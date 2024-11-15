import { saveUserInfosInDataBase, saveLogin, loginUser, updateUser, requestDelete } from '../components/configs/requests';
export default class User {
    _id = "";
    name = this.getNameFromLocalStorage();
    profession = "";
    resume = "";
    competence = [];
    social = [];
    grade = [];
    ability = "";
    avatarImg = "";
    realImg = "";
    contact = {
        email : [],
        phone : [],
        address : "",
        adressObject : {
            country : "",
            state : "",
            city : "",
            street : "",
            number : "",
            district : ""
        }
    };
    userExperiences = [];
    imgForReal = 0;
    spokenLanguages = {
        level: "",
        details: ""
    }
    otherInfos = [];
    otherExperiencies = {
        title: '',
        text: ''
    };
    language = '';

    getNameFromLocalStorage() {
        let name = "";
        let user = JSON.parse(localStorage.getItem("user-pt"));
        if(user) {
            name = user.name;
        }else {
            user = JSON.parse(localStorage.getItem("user-en"));
            if(user) {
                console.log('user en')
                name = user.name;
            }
        }
        return name;
    }

    constructor() {
        this._id = this._id == 0 ? Math.random().toString() : this._id;
    }

    async requestDeleteThisUser() {
        return await requestDelete(this._id, this?.contact?.email[0]);
    }

    async getBackEndDataAndResolveYourSelf(login) {
        const response = await loginUser(login.email, login.userId, login.password, login.language);
        if(response?.status == 200){
            this.updator(response?.data.content);
            return this;
        }else {
            return null;
        }
    }

    // Updates the user if the user's name changes or if the user has been created
    // on the backend.
    async updateUserName() {
        updateUser(this.name, this.contact.email[0], this.language);
    }

    // newUser = true and false here means, true new user, false update existing user
    async saveIntoDatabase(newUser) {
        const configs = JSON.parse(localStorage.getItem('configs'));
        let lan = null;
        if(!this.language || this.language === '') {
            lan = configs.language;
        }else {
            lan = this.language;
        }
        return await saveUserInfosInDataBase(this, newUser, lan);
    }

    async firstLogin(email, password) {
        // console.log("firstLogin");
        if (typeof email === 'string') {
            return await saveLogin(email, password, this._id);
        }
        return await saveLogin(email[0], password, this._id);
    }

    updateToParente(name, val) {
        this.$emit(name, val);
    }


    constructorObject(user) {
        this.updator(user);
        return this;
    }

    setName(name) {
        if(name != this.name) {
            this.name = name;
            if (this._id.length == 24) {
                this.updateUserName();
            }
        }
    }
    updator(user)
    {
        if(user?._id && user._id.length === 24) {
            this._id = user._id;
        }else if(user?.id && user.id.length === 24) {
            this._id = user.id;
        }else {
            this._id = "";
        }
        this.profession = user.profession;
        this.resume = user.resume;
        this.competence = user.competence;
        this.social = user.social;
        this.grade = user.grade;
        this.ability = user?.hability ? user.hability : user?.ability;
        this.avatarImg = user.avatarImg;
        this.realImg = user.realImg;
        this.contact = user.contact;
        this.userExperiences = user.userExperiences;
        this.otherInfos = user.otherInfos;
        this.otherExperiencies = user.otherExperiencies;
        this.setName(user.name);
        this.spokenLanguages = user.spokenLanguages;
        this.language = user.language
    }

    getId() {
        return this._id;
    }

    getEmails() {
        return this.contact?.email;
    }

    setAdressPart(witch, value) {
        // console.log('setting witch: '+witch+' and value: '+value);
        if (!this.contact.adressObject) {
            this.contact.adressObject = {}; // Inicializando como um objeto vazio
        }
        switch (witch) {
            case 'country':
                this.contact.adressObject.country = value;
                break;
            case 'state':
                this.contact.adressObject.state = value;
                break;
            case 'city':
                this.contact.adressObject.city = value;
                break;
            case 'district':
                this.contact.adressObject.district = value;
                break;
            case 'number':
                this.contact.adressObject.number = value;
            break;
            case 'street':
                this.contact.adressObject.street = value;
                break;
            default:
                break;
        }
    }
    getAdressPart(witch) {
        if(this.contact == null || this.contact.adressObject == null) {
            return null;
        }
        switch (witch) {
            case 'country':
                return this.contact.adressObject.country;
                break;
            case 'state':
                return this.contact.adressObject.state;
                break;
            case 'city':
                return this.contact.adressObject.city;
                break;
            case 'district':
                return this.contact.adressObject.district;
                break;
            case 'number':
                return this.contact.adressObject.number;
                break;
            case 'street':
                return this.contact.adressObject.street;
                break;
            default:
                break;
        }
    }

    findAndRetrieveInfos(language) {
        let lan = null;
        if(language === 'us-en') {
            lan = 'user-en';
        }else if(language === 'pt-br') {
            lan = 'user-pt';
        }else if (language === 'user-en' || language === 'user-pt') {
            lan = language;
        }

        const user  = localStorage.getItem(lan);
        return JSON.parse(user);
    }
}
