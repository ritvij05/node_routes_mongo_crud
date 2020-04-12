const express         = require('express');
const mongoose        = require('mongoose');
const bodyParser      = require('body-parser');
const app             = express()

//Database config
const db              = require('./config/db_key').mongoURI; 


// real work
const registerRoutes = require('./routes/api/registerRoutes');
const Client     = require('./routes/api/clientRoutes');
const Recruiter  = require('./routes/api/recruiterRoutes');

app.use(express.static(__dirname + "/public"));
//setting view engine to ejs, to able to render ejs files
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/views"));


//  middleware
app.use(bodyParser.json());


// Requeried to read req.body.data_values 
app.use(bodyParser.urlencoded({ extended: true }));


// Database Connection:
mongoose.connect(db,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
})
.then(()=>console.log('Connected To DataBase...'))
.catch((error)=>console.log(error));


// Use Routes
app.use('/', registerRoutes);
app.use('/client', Client);
app.use('/recruiter',Recruiter);


// Server
const port       = process.env.port || 3000;
app.listen(port, () => console.log(`Server Started At Port ==> ${port}`));
