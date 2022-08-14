import mongoose from 'mongoose';

const host_db = "mongodb://localhost:27017/Chess-app";


async function connect(){

    try 
    {
        await mongoose.connect(host_db);
        console.log("connect to mongoDB");    
    } catch (error) {
        console.log("error", error)
    }
}

export default connect