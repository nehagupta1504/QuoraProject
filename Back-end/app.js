var express = require('express');
var cors = require('cors');
var app = express();
const bodyParser = require('body-parser');
 var fs = require("fs");
const { json } = require('body-parser');
// var readStream;
 var writeStream;
//to read
//readStream = fs.createReadStream("./data.txt");
writeStream = fs.createWriteStream('./data.txt');
 app.use(express.urlencoded({
    extended: true
 }));
app.use(cors());
app.post('/', bodyParser.json(), (req,res)=>{
  
    var data = JSON.stringify(req.body);
    console.log(req.body);
    //console.log(JSON.stringify(data));
    res.json({"message":"Ok"});
    writeStream.write("Interview Problem: "+ req.body.postTitle+"\n\n"+ "Description: "+req.body.postDescription);
});

// app.get('/', function(req,res){
//     res.send('Hello World!!');
//     console.log('Hii There!!');
//     readStream.on("data", function(data){
//         var chunk = data.toString();
//         if(chunk=="Interview Problem"){
//             console.log("If Works!!");
//         }
//         console.log(chunk);
//     })
    
// });

// // to write
// writeStream = fs.createWriteStream('./data.txt');
// writeStream.write("I am in next Line");



var server = app.listen(3000, function(){
    console.log('Server listening on port 3000');
})