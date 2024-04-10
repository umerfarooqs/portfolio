import mongoose from "mongoose";
let link ="mongodb+srv://limitfuntime:12345678q@cluster0.txdhlor.mongodb.net/portfolio"



const connectDb = handler => async (req, res)=>{
    if(mongoose.connections[0].readystate){
        return handler(req,res)
    }
        await mongoose.connect(link)
        return handler(req,res);
}
export default connectDb;