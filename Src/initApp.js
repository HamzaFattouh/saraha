import connectDB from "../DB/connection.js";
import authRouter from "./Modules/auth/auth.router.js";


const initApp = (app,express) => {
    connectDB();
    app.use(express.json());
    app.use('/auth',authRouter);
    app.use('*',(req,res)=>{
        return res.status(404).json({message:"page not found"});
    })
}

export default initApp;