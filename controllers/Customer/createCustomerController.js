import registerCustomerService from '../../services/Customers/registerCustomerService.js';

export default class createCustomerController{
  constructor(){}

  async run(req, res, next){

    //if (req.role!="admin") return res.status(403).send("User unauthorized!!");
     try{
      const { username, password } = req.body;
      let registerCustomer = new registerCustomerService(username, password, next);
      let Customer= registerCustomer.registerUser();
      if(Customer) res.status(201).send("Customer created");
      }catch(error){
       console.error("mensaje error " + error);
      }finally {}
    }
} 