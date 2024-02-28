const express = require('express');
const connectDB = require('./db');
const userRoute = require('./routes/userRoute');
const employeeRoute = require('./routes/employeeRoute');

const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use('/users', userRoute);
app.use('/employees', employeeRoute);

app.use('/',(req,res)=>{
    res.send('API Online!');
});

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
});