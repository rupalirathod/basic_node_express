var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//set static folder path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/people', function(req, res){
    var people = [
        {
            first_name: "Rupali",
            last_name: "Rathod",
            age: 29,
            gender: "female"
        },
        {
            first_name: "Jitendra",
            last_name: "Rathod",
            age: 32,
            gender: "male"
        },
        {
            first_name: "Neha",
            last_name: "Sangani",
            age: 35,
            gender: "female"
        },
        {
            first_name: "Bhavin",
            last_name: "Sangani",
            age: 42,
            gender: "male"
        }
    ];
    res.json(people);
});

app.get('/download', function(req, res){
    res.download(path.join(__dirname, '/downloads/pdf-sample.pdf'));
});
app.get('/about', function(req, res){
    res.redirect('/about.html')
});
app.post('/subscribe', function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    console.log(name + 'requestmade' + email);
})

app.listen(3000, function(){
    console.log("server started on 3000")
});