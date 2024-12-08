import mongoose, { Mongoose } from "mongoose";
import { Odor_Mean_Chey } from "next/font/google";
const connection = {};



//This is the connect finctionthat will connect to th database
async function connect(){
    if(connection.isConnected){
        return 
    }

    const db = await mongoose.connect(process.env.DB_CONNECTION_STRING,{ useNewURLParser : true, useUnifiesTopology : true,})
    connection.isConnected = db.connections[0].readyState
}


//This is disconnect function that will disconnect from the database
async function disconnect(){
    if(!connection.isConnected){
        return
    }
    await mongoose.disconnect()
}


export default { connect, disconnect }