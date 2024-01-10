import registerUserService from "../../services/Users/registerUserService.js";

export default class createUserController{
  constructor(){}

  async run(req, res, next){

    try{
    
    const { username, password } = req.body;
    let registerUser = new registerUserService(username, password, next);
    let User= registerUser.registerUser();
    if(User) res.status(201).send("User created");
    }catch(error){
     console.error("mensaje error " + error);
    }finally {}
  }
} 