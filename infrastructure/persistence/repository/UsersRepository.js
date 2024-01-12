import mongoose from "mongoose";


export default class UserRepository {
    constructor(){
        this.Users = mongoose.model('Users');
    }
    async createUser(username, password, role){
        return await this.Users.create({username: username, password:password, role:role});
    }




}