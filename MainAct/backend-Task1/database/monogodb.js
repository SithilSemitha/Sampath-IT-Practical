import {mongoose} from 'mongoose';
import {PORT, DB_URI} from '../config/env.js';


const connectToTheDatabase = async () => {
    try{
        await mongoose.connect(DB_URI)

        console.log(`Successfully connected to the database in ${PORT} environment`);
    }catch(error){
        console.error("Error!! Not connecting to the database ", error);
        process.exit(1);
         
    }
}


export default connectToTheDatabase;