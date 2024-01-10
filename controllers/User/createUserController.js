import Users from '../../models/Users.js';
import bcrypt from 'bcrypt';

export default class createUserController{
  constructor(){}

  async run(req, res){

    try{
    
    const { username, password } = req.body;
    let UserFind = await Users.findOne({"username": username});
    console.log("Usuario Localizado ->", UserFind);
    if(UserFind) res.status(409).send("User already exists");
    let password_encrypt = await bcrypt.hash(password, 10);
    let User = await Users.create({username: username, password:password_encrypt});
    if(User) res.status(201).send("User created");
    }catch(err){
      console.error(err);
    }
  }
} 