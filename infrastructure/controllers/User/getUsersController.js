
import getUsersService from '../../../application/services/Users/getUsersService.js'

export default class createUserController{
    constructor(){
    }
  
    async run(req, res, next){
      try{
        if(req.role!="user") return res.status(403).send("User unauthorized!!");
        let getUsersSrv = new getUsersService(next);
        let UsersFound = await getUsersSrv.getUsers();
        res.status(200).send(UsersFound);
      }catch(error){
        console.error(error);
      }
    }
} 