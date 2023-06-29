//Importing model
const User = require("../models/users");

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    throw new Error(error)
  }
};

const getAllUsers = async (req, res) => {
  try {
    const getUser = await User.find({});
    res.json(getUser);
  } catch (error) {
    throw new Error(error);
  }
};

/*
app.get("/search/:key",(req,res)=>{
  try {
    
  } catch (error) {
    
  }
    console.log(req.params.key);
    res.json("Search done!")

})
*/

const searchUsers = async (req,res)=>{
    try {
        let data = await User.find(
          {
            "$or":[
              {name:{$regex:req.params.key}},
              {username:{$regex:req.params.key}},
              {username:{$regex:req.params.key}},
              {website:{$regex:req.params.key}},
            ]
          }
        )
        res.json(data);
    } catch (error) {
        
    }
}

module.exports = {
    createUser,
    getAllUsers,
    searchUsers
};