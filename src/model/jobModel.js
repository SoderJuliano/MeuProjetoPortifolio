export default class Job {
    id = null;
    company = "";
    description = "";
    dateHired = "";
    dateFired = "";
    position = "";

    constructor(id)
    {
        this.id = id;
        console.log("new job id: "+this.id);
    }


    /** getters */
    
    getId(){return this.id}
    getCompany(){return this.company}
    getDescription(){return this.description}
    getDateHired(){return this.dateHired}
    getDateFired(){return this.dateFired}
    getPosition(){return this.position}

    /** setters */

    setId(id){this.id = id}
    setCompany(company){this.company = company}
    setDescription(description){this.description = description}
    setDateHired(dateHired){this.dateHired = dateHired}
    setDateFired(dateFired){this.dateFired = dateFired}
    setPosition(position){this.position = position}

}