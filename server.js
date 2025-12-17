// const express = require("dotenv");

// const server = express();

// server.get("/", (req, res) => {
//   res.end("Express server successfully launched");
// });

// server.get("/about",(req,res) => {
//     res.end("about is running");
// })

// server.listen(4000, () => {
//   console.log("Server is running on port 4000");
// });

// 

// require("dotenv").config();
// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGO_URI)
// .then(()=>console.log("conneced to db"))
// .catch((err)=>console.log(err));
// const express = require("express")
// const server = express();
// server.get('/',(req,res)=>{
//         res.end("express is running now");
// }).listen(4000);

const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const server = express()
server.use(express.json())

server.use("/", require("./routes/productroute"))
server.use("/users", require("./routes/userroute"))
server.use("/contact", require("./routes/contact"))

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("mongodb connected"))
.catch(err => console.log(err))

const PORT = process.env.PORT || 4000
server.listen(PORT, () => console.log(`Server started on port ${PORT}`))