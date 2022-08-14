
import mongoose from 'mongoose';

const User = new mongoose.Schema(
    {
        name: 
        {
            type: String,
            required: true,
            minlength:3,
            maxlength:50,
        },
        password:
        {
            type: String,
            minlength: 8,
        },
        email:
        {
            type: String,
            require: true,
            unique: true,
            match: /.+\@.+\..+/,
            minlength: 9,
            maxlength: 50
        }
       
    },
    { timestamps: true}
)
User.index({email: 1})
const model = mongoose.model('User', User);
export default model;
