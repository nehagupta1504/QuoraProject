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
    console.log(data);
    if(fs.existsSync(req.body.postTitle)){
        console.log("File with same name already exists!!");
        res.status(200).json('File with same name already exists!!');
        
    }else{
        if(req.body.testCasesInput == null ){
            fs.writeFile(req.body.postTitle, "Interview Problem: "+ req.body.postTitle+"\n\n"+req.body.postDescription+"\n\n" +  req.body.fixContent, function(err){
        
                if(err) throw err;
                console.log('File is created successfully!!');
                res.status(200).json('File Saved!!');
            });
        }else{
            fs.writeFile(req.body.postTitle, "Interview Problem: "+ req.body.postTitle+"\n\n"+req.body.postDescription+"\n\n"+"TestCase:\n"+"Input Case:"+req.body.testCasesInput+"\nOutput Case:"+req.body.testCasesOutput+"\n\n" +  req.body.fixContent, function(err){
        
                if(err) throw err;
                console.log('File is created successfully!!');
                res.status(200).json('File Saved!!');
            });
        }
    }
    
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