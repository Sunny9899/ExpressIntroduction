const express=require("express");

//console.log(express);

//REST API: way of writing api's.
/* HTTP VERBS
GET - get all items
GET - get single item
POST - create a single item
PATCH/PUT - update a single item
DELETE - delete a single item
*/

const app=express();


app.get("/",(req,res)=>{
    return res.send("Welcome To Home Page");
 })


app.listen(2345, function (){
    console.log("listening on port 2345");
});
