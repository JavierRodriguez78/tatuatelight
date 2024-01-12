import getUserService from "../../../application/services/Users/getUserService.js";

export default class getUserMeController{
    constructor(){};

    async run(req, res, next){
        try{
            let getUserSrv = new getUserService(next);
            console.log(req.id);
            let user = await getUserSrv.getUser(req.id);
            res.status(200).send(user);
        }catch(error){
            next(error);
        }
    }
}