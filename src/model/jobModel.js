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
        // console.log("new job id: "+this.id);
    }

    /** recieve a item refers a job, but switch into a job model to have access all the methods */
    retrieveJob(item) {
        this.id = item?.id;
        this.company = item.company;
        this.description = item.description;
        this.dateHired = item.dateHired;
        this.dateFired = item.dateFired;
        this.position = item.position;
        return this;
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