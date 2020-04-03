const express         = require('express');
const mongoose        = require('mongoose');
const bodyParser      = require('body-parser');
const app             = express()

//Database config
const db              = require('./config/db_key').mongoURI; 

const employee_routes = require('./routes/api/employee_routes');

//  middleware
app.use(bodyParser.json());

// Database Connection:
mongoose.connect(db,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
})
.then(()=>console.log('Connected To DataBase...'))
.catch((error)=>console.log(error));

// Use Routes
app.use('/', employee_routes);

// Server
const port       = process.env.port || 5000;
app.listen(port, () => console.log(`Server Started At Port ==> ${port}`));
