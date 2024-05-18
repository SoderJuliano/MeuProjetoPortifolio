export default class User {
    id = 0;
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


    updateToParente(name, val) {
        this.$emit(name, val);
    }


    constructorObject(user) {
        this.updator(user);
        return this;
    }

    updator(user)
    {
        this.id = user.id;
        this.name = user.name;
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
