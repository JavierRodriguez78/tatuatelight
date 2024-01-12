export default class requiredBody extends Error{
    constructor(notIncludedFields){
        super();
        this.name = this.constructor.name;
        this.message = `Request must include the fields: ${notIncludedFields.join(', ')}.`;
        this.statusCode= 400;
    }
}