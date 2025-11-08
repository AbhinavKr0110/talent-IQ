import mongoose from "mongoose";
import {ENV} from "./env.js"

 export const connectDB = async()=>{
     try{
+        if (!ENV.DB_URL) {
+            throw new Error("DB_URL environment variable is not defined");
+        }
         await mongoose.connect(ENV.DB_URL);
         console.log("Connected to MongoDB");
     }catch(error){
-        console.log("Error connecting to MONGODB : ", error);
+        console.error("Error connecting to MongoDB:", error.message);
         process.exit(1);
     }
 };