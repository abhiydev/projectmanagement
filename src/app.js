import express from "express";
import cors from "cors";

const app = express();

//  basic configrations
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

//  cors configration
app.use(cors({
    origin: process.env.CORS_ORIGION?.split(",") || "http://localhost:5173", credentials: true, 
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
    
}))

app.get("/", (req, res)=>{
    res.send("Hello page");
});

export default app