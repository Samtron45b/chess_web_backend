import User from "../model/user.model.js";
import bcrypt from "bcrypt"

class UserController {
    async Register(req, res)
    {
        try{
            const password_hash = await  bcrypt.hash(req.body.password, 10);

            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: password_hash,
            })
                        //update fresh token
            res.json({
                status: 200,
            });
        }catch(err){
            res.json({status:400, error: "name or email is already taken"})
            console.log(err);
        }    
    }

    async Login (req, res)
    {

        const user = await User.findOne({email:req.body.email})
        if(user){
            if (!user) return res.status(400).send('Email is wrong');
                //check password
               const validPass =  await bcrypt.compare(req.body.password, user.password)
                if(!validPass) return res.status(400).send('password is wrong');
                res.json({
                    status: 200
                });
            }
        else
        {
            res.json({status: 400, error: "Email not found"})
        }
    }
}

export default new UserController;