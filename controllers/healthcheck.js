export default class Healtcheck{
    constructor(){}

    run(req, res){
        res.status(200).send("hola caracola!");
    }

}