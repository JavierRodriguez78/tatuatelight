import registerUserService from "../../../application/services/Users/registerUserService.js";
export default class createUserController{
  constructor(){}

  async run(req, res, next){

    try{
    
    const { username, password } = req.body;
    let registerUser = new registerUserService(username, password, next);
    let User= await registerUser.registerUser();
    if(User != undefined) res.status(201).send("User created");
    }catch(error){
      next(error);
    }
  }
} 