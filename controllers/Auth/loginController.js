import jsonWebToken from 'jsonwebtoken';


export default class loginController{
  constructor(){}

  async run(req, res){

    try{
    const { username, password } = req.body;
    
    if(username =="admin" & password == "admin"){

        let token = jsonWebToken.sign({
            username: "admin",
            role: "user"
        },
            "secret key",
            {
                expiresIn: "24h"
            }
        );


     res.status(200).send(token);
    }

    res.status(401).send("User unauthorized");
    }catch(err){
      console.error(err);
    }
  }
} 