import UserRepository from '../../../infrastructure/persistence/repository/UsersRepository.js';

export default class getUsersService{

    constructor(next){
        this.next = next;
        this.repository = new UserRepository();
    }

    async getUsers(){
        try{
            return await this.repository.getUsers();
        }catch(error){
            this.next(error);
        }

    }
}