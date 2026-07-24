const express = require('express')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")


require("dotenv").config();

const app = express();

app.use(express.json());

//fake user
const user = {
  id : 1,
  username : "admin",
  password: bcrypt.hashSync('12345', 10)
}

//log in 
app.post("/login",(req , res)=>{
  const {username , password} = req.body;

  if(username !== user.username){
    return res.status(401).json({
      messaage:"invalid username"
    })
  }

  const validpaassword = bcrypt.compareSync(password, user.password);

  if(!validpaassword){
    return res.status(401).json({
      messaage:"invalid password"
    })
  }

  //generate token 
  const token = jwt.sign(
    {
      id:user.id,
      username: user.username 
    },
    process.env.JWT_SECRET_KEY,
    {expiresIn: "1h"}
  );


  res.json({
    messaage:"login successful",
    token
  })
})

//middleware
// function verifyToken(req ,res , next){

// }









app.listen(3003,()=>{
  console.log(`server is running  at http://localhost:3003`)
})