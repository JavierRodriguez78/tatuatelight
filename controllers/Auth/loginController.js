export default class loginController{
  constructor(){}

  async run(req, res){

    try{
    const { username, password } = req.body;
    
    if(username =="admin" & password == "admin"){
     res.status(200).send("User OK");
    }

    res.status(401).send("User unauthorized");
    }catch(err){
      console.error(err);
    }
  }
} 