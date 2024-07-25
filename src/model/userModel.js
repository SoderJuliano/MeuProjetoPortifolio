import { saveUserInfosInDataBase, saveLogin, loginUser, updateUser } from '../components/configs/requests';
export default class User {
    id = 0;
    _id = "";
    name = "";
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
        adress : "",
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
    imgForReal = 0

    constructor() {
        this.id = this.id == 0 ? Math.random() : this.id;
    }

    async getBackEndDataAndResolveYourSelf(login) {
        const response = await loginUser(login.email, login.userId, login.password);
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
        updateUser(this.name, this.contact.email[0]);
    }

    // newUser = true and false here means, true new user, false update existing user
    async saveIntoDatabase(newUser) {
        return await saveUserInfosInDataBase(this, newUser);
    }

    async firstLogin(email, password) {
        console.log("firstLogin");
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
        this.id = user.id;
        this._id = user._id ? user._id : "";
        this.profession = user.profession;
        this.resume = user.resume;
        this.competence = user.competence;
        this.social = user.social;
        this.grade = user.grade;
        this.hability = user.hability;
        this.avatarImg = user.avatarImg;
        this.realImg = user.realImg;
        this.contact = user.contact;
        this.userExperiences = user.userExperiences;
        this.setName(user.name);
    }

    getId() {
        return this._id ? this._id : this.id;
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
}
