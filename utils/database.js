import mongoose from "mongoose";

let isConnected=false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("=> using existing database connection");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "Cluster0",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
        
}