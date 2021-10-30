import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {Request, Response} from "express";



const token_secret = process.env.JWT_TOKEN_SECRET || ""
async function hashpass(password: string)
{
    const password_hash = await  bcrypt.hash(password, 10);
    return password_hash;
}

async function comparepass(password:string, hasspass: string):Promise<boolean>{
    if(await bcrypt.compare(password, hasspass))
    {
        return true;
    }
    return false;
}
 function JWT(user: any) {
  
    const token = jwt.sign(
        {
            id: user.id,
            name: user.name,
            email: user.email
        },
        token_secret,
        { expiresIn: '1h' }
    )
    return token
}

function refreshToken(user: any)
{
  
    const token = jwt.sign(
        {
            id: user.id,
            name: user.name,
            email: user.email,
            refreshToken: 1
        },
        token_secret
    )
    return token
}


async function authentication(req: Request, res: Response, next: any)
{
  
    const autHeader = req.headers["authorization"];
    const token = autHeader && autHeader.split(' ')[1];
  
    if(!token)
    {
        res.sendStatus(401);
    }
    else
    {
        try 
        {
            const user =<any> await jwt.verify(token, process.env.JWT_TOKEN_SECRET || "");
            if(user.refreshToken)
            {
                res.json({staus: 400, error: "please enter token !!"})
            }
            else
            {
                next();     
            }
           
        } catch (error) 
        {
            res.json({status: 400, error: "token is expired"})  
        }
     
    }
}




export default {hashpass, comparepass, JWT, authentication, refreshToken}