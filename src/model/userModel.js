export default class User {
    id = 0;
    name = "";
    profession = "";
    resume = "";
    competence = [];
    social = [];
    grade = [];
    hability = "";
    avatarImg = "";
    realImg = "";
    contact = {
        email : [],
        phone : [],
        adress : "",
    };
    userExperiences = [];
    imgForReal = 0

    constructor() {
        this.id = Math.random();
    }

    updator(user) 
    {
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
}