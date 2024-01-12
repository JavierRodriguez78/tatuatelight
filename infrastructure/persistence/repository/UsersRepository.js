import mongoose from "mongoose";


export default class UserRepository {
    constructor(){
        this.Users = mongoose.model('Users');
    }
    async createUser(username, password, role){
        return await this.Users.create({username: username, password:password, role:role});
    }

    async getUsers(){
        return await this.Users.find();
    }

    async getUserById(id){
        return await this.Users.findById(id);
    }
}