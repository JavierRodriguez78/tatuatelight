import Users from '../../models/Users';

export default class createUserController{
  constructor(){}

  async run(req, res){

    try{
    const { username, password } = req.body;
    let User = await Users.create({username: username, password:password});
    if(User) res.status(201).send("User created");
    }catch(err){
      console.error(err);
    }
  }
} 