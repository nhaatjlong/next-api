// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const dotenv = require("dotenv");
// var cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");
// var cookieParser = require("cookie-parser");

// app.use(cookieParser());

// dotenv.config();

// //Connect to DB
// mongoose.connect(process.env.DB_CONNECT, () => console.log("Connected to DB"));

// //MiddleWare
// app.use(cors());
// app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));

// app.use((req, res, next) => {
//   res.setHeader("Acces-Control-Allow-Origin", "*");
//   res.setHeader("Acces-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
//   res.setHeader("Acces-Contorl-Allow-Methods", "Content-Type", "Authorization");
//   next();
// });

// //Import route

// //Route middleWare
// app.use(express.static("public"));
