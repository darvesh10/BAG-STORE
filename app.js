const express = require("express")
const app = express();

const cookieparser = require("cookie-parser");
const path = require("path");
const { log } = require("console");
const db = require("./config/mongoose.connection");
const ownersRouter = require("./routes/owners.routes");
const usersRouter = require("./routes/users.routes");
const productsRouter = require("./routes/products.routes");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieparser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine","ejs");

app.use("/owners", ownersRouter);
app.use("/owners", usersRouter);
app.use("/owners", productsRouter);
app.listen(3000, ()=>{
console.log("server started on port 3000")
});