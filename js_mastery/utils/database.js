import mongoose, { mongo } from "mongoose";

const isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);  //no errors in console

    if(isConnected){
        console.log("Using Existing connection");
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            //options object
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })

        //only execute the below line when the await is executed
        isConnected = true;

        console.log("New Connection Established");
    }
    catch(error){
        console.log(error);
    }




}

