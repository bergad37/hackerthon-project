import express from "express"
import dotenv from "dotenv"


//Configure dotenv 
dotenv.config();


//Server instance
const app=express();

// //Use cors and body-parser to ommit issues related to making requests or Cross-origin ...
// app.use(cors())
// app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));

// app.use("/api/v1",allRoutes)

//  define a port and a host
const port=process.env.PORT || 5001 ;
const host=process.env.HOST;

//Database connection instance by default these useNew and topology is set to true 
// const connect=()=> mongoose.connect(process.env.MONGODB_URL  ,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })


// //An instance to listen to the server 

// const startServer = () =>app.listen(port)

// Promise.all([connect(),startServer()])
// .then(()=>{
//     console.log(`Database connected and server listening at http://${host}:${port}`)
// })
// .catch((error)=>console.log(error))

app.listen(port,()=>console.log(`The app is running on the https://localhost:${port}`))