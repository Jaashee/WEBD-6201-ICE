"use strict";

// Imports
import express from 'express';
import path from 'path';

//Variables
const port = process.env.PORT || 3000;
const app = express(); // Create application
const router = express.Router();

console.log(__dirname);
//Configuration
app.use(router);
app.set("views", path.join(__dirname, "./Views/"));
app.set("view engine", "ejs");

//Static Configurations
app.use(express.static(path.join(__dirname, "./client/")));
app.use(express.static(path.join(__dirname, "./node_modules/")));


//Middleware
router.get('/', function (req, res, next){
    res.render('index',{title: "Hello, World!"});
    next();
});

//Listeners
app.listen(port,  function () {
    console.log(`Server listening on port: ${port}/`);
});

export default app;