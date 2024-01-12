import alreadyExist from "../../exceptions/alreadyExist.js"
export default function errorAlreadyExist (err, req, res, next) { next (new alreadyExist());}