import alreadyExist from "../../../application/exceptions/alreadyExist.js"
export default function errorAlreadyExist (err, req, res, next) { next (new alreadyExist());}