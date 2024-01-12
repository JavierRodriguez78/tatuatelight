import jsonWebToken from 'jsonwebtoken';
import  User  from '../../../infrastructure/persistence/models/Users.js';
import bcrypt from 'bcrypt';

export default class loginController{
  constructor(){}

  async run(req, res){

    try{
    const { username, password } = req.body;
    let userFound = await User.find({"username":username});

    if(userFound.length == 0) return res.status(401).send("User unauthorized");
    if(! await bcrypt.compare(password, userFound[0].password)) return res.status(401).send("User unauthorized");
        let token = jsonWebToken.sign({
            id: userFound[0]._id,
            username: userFound[0].username,
            role: userFound[0].role
        },
            "secret key",
            {
                expiresIn: "24h"
            }
        );
     
     res.status(200).send(token);
    }catch(err){
      console.error(err);
    }
  }
} 