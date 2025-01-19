import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { clerkMiddleware } from '@clerk/express'
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    // origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))

app.use(express.urlencoded({ extended: true, limit: "16kb" }))

app.use(express.static("public"))
app.use(cookieParser())



app.use(clerkMiddleware())




// route import

import userRouter from "./routes/user.routes.js"

// routes declaration

app.use("/api/v1/users", userRouter)

//    [   http://localhost:8000/api/vl/users/register  ] 


export { app }

