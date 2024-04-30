const http = require('http');

// 59. Installing Express.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const path = require("path");

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

// 60. Adding Middleware
// app.use((req, res, next) => {
//     console.log("in a middleware");
//     next(); // to continue with the code(with next middleware or whatever) we need to execute next()
// });
// app.use((req, res, next) => {
//     console.log("in another middleware");
    
//     // 61. Now Middleware works
//     res.send("<h1>Hello from Express!</h1>")
// });


// 63. Handling Different Routes
// app.use("/", (req, res, next) => {
//     console.log("This always runs!");

//     next();
// });


// 64. Parsing Incoming Requests
app.use(bodyParser.urlencoded({extended: false}));


// 66. Using Express Router(split middleware into a different files)
app.use("/admin", adminRoutes); // 68. Filtering Paths
app.use(shopRoutes);


// 67. Adding a 404 Error Page
// 71. Returning a 404 html Page 
app.use((req, res, next) => { 
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});


const server = http.createServer(app); 
server.listen(3000);

// OR app.listen(3000); It is the same!