import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// Configuration the env. file
dotenv.config()
// Create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// Define the first Route of the APP
// this is the main route of the proyect
app.get('/', (req:Request, res:Response) => {
    // Send Hello World
    res.send('Welcome to API RestFul Express + Nodemon + Jest + TS + Swagger + Mongoose');
});

app.get('/hello', (req:Request, res:Response) => {
    // Send Hello World
    res.send('Welcome to Hello World');
});



// Execute the APP and Listen Requests to PORT 
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})

