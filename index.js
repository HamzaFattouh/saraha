import express from 'express';
import 'dotenv/config';
import initApp from './Src/initApp.js';

const app = express();

initApp(app,express);

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})
