import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT"
    }).then(()=>{
        console.log("Database connected succesfully")
    }).catch(err=>{
        console.log(`Some error occusred while connecting to Database! ${err}` )
    })
}