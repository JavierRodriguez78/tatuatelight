import {v4 as uuidv4} from 'uuid';

export default function assignId(req, res,next){
    const id = uuidv4();
    req.id = id;
    next();
}