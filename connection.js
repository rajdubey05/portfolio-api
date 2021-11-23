const mongoose = require ("mongoose");
 url = "mongodb+srv://05rajdubey:Dubey123@mycluster.gn4ca.mongodb.net/portfoliomaker?retryWrites=true&w=majority"

 mongoose.connect(url)
 .then (() => {
     console.log ("database connected");
 })
 .catch  ( (err) => console.error (err));
 module.exports = mongoose ;