import jsonWebToken from 'jsonwebtoken';
import dotenv from 'dotenv/config';

export default function auth(req, res, next) {
    const { authorization } = req.headers;
  
    if(!authorization){res.status(401).json({message: 'Acceso No autorizado'})}
    let  token = authorization.split(' ')[1];
    jsonWebToken.verify(token, process.env.AUTH_SECRET, (err, decoded)=>{
        if(err) res.status(500).json({message:"Error Token ->" + err });
        req.user= decoded.username;
        req.role= decoded.role;
        req.id = decoded.id;
        next();
    })
  
}