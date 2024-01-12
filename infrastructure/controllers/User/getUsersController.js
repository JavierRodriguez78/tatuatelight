import Users from '../../../infrastructure/persistence/models/Users.js'
export default class createUserController{
    constructor(){}
  
    async run(req, res, next){
  
      if(req.role!="user") return res.status(403).send("User unauthorized!!");
      let UsersFound = await Users.find({role:"user"});
      res.status(200).send(UsersFound);
  }
} 