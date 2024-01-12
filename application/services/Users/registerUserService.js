import bcrypt from 'bcrypt';
import alreadyExist from "../../exceptions/alreadyExist.js";
import UserRepository from "../../../infrastructure/persistence/repository/UsersRepository.js";

export default class registerUserService {
  
    constructor(username, password, next){
        this.username = username;
        this.password = password;
        this.next = next;
        this.repository = new UserRepository();
    }

    async registerUser(){
       try{
        let UserFind = await this.repository.getUserByUsername(this.username);
        if(UserFind) throw new alreadyExist(this.username);
        let password_encrypt = await bcrypt.hash(this.password, 10);
        let User = await this.repository.createUser(this.username, password_encrypt, "user");
        return User;
       }catch(error){
        this.next(error);
       }

    }

}