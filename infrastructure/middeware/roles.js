
const roles = (roles) => (req, res, next) => {
    if (!roles.includes(req.role)) return res.status(403).send("User unauthorized!!");
    next();
    }
export default roles;