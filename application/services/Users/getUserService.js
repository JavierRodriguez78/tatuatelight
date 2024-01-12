import UserRepository from "../../../infrastructure/persistence/repository/UsersRepository.js";
export default class getUserService{

    constructor(next){
        this.next = next;
        this.repository = new UserRepository();
    }

    async getUser(user){
        try{
            return await this.repository.getUserById(user);
        }catch(error){
            this.next(error);
        }

    }

}