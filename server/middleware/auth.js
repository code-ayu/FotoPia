//Auth middleware 
//Why to use it 
// click the like button => 
//auth midlleware will check whethe he/she is allow if allwed => 
//next() => like

import jwt from 'jsonwebtoken';

const auth = async (req, res ,next) => {
    try {
        const token = req.headers.Authorization.split(' ')[1];
        const isCustomAuth = token.length < 500;
        let decodeData; 
        if (token && isCustomAuth){
            decodeData = jwt.verify(token , 'test')
            req.userId = decodeData?.id;
        }
        //this will come into play when we will have google if fixed
        // else{
        //     decodeData = jwt.decode(token);
        //     req.userId = decodeData?.sub;
        // }
        
        next();

    } catch (error) {
        console.log(error)
    }

}

export default auth