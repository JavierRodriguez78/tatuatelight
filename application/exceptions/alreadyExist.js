export default class alreadyExist extends Error{
    constructor(reason){
        super();
        this.name = this.constructor.name;
        this.message = `Already exist ${reason}`;
        this.statusCode= 409;
    }
}