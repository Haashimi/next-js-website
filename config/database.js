import mongoose from "mongoose";
let connected = false;
const connectDB = async() =>{
    mongoose.set('strictQuery', true);
    // if the database is already connected, don't connect again 
    if(connected){
        console.log('MongoDB is  Connected');
        return
        
    }
    // connect to MongoDb
    
    try {
    
        
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true
        console.log('Database Connection Success');
        
        
    } catch (error) {
        console.log("can't connect database");
        
        console.log(error);

        
    }
}
// connectDB();
export default connectDB;