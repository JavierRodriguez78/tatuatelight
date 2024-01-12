import Users from "../../../infrastructure/persistence/models/Users.js";
import bcrypt from 'bcrypt';
import alreadyExist from "../../../exceptions/alreadyExist.js";

export default class registerUserService {
  
    constructor(username, password, next){
        this.username = username;
        this.password = password;
        this.next = next;
    }

    async registerUser(){
       try{
        let UserFind = await Users.findOne({"username": this.username});
        console.log("Usuario Localizado ->", UserFind);
        if(UserFind) throw new alreadyExist();
        let password_encrypt = await bcrypt.hash(this.password, 10);
        let User = await Users.create({username: this.username, password:password_encrypt, role:"user"});
        return User;
       }catch(error){
        this.next(error);
       }

    }

}