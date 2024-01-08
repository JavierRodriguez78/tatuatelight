import Users from '../../models/Users.js';


export default class createUserController{
  constructor(){}

  async run(req, res){

    try{
      let user = new Users();
    const { username, password } = req.body;
    let User = await user.create({username: username, password:password});
    if(User) res.status(201).send("User created");
    }catch(err){
      console.error(err);
    }
  }
} 