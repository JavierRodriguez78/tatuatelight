import requiredBody from "../../application/exceptions/requiredBody.js"

     const requiredFields = (fields)=>{
        return (req, res,next) => {
            console.log("Required fields!!!!");
            const missingFields=[];
            const keys = Object.keys(req.body);
            console.log("KEYS: ", keys);
            for (const field of fields) 
                if(!keys.includes(field)) missingFields.push(field);
            
            if(missingFields.length > 0) next(new requiredBody(missingFields));
            next();
        }       
}

export default requiredFields;