export default class userAlreadyExist extends Error{
    constructor(){
        super("User already exists");
        this.name = "userAlreadyExist";
    }
}