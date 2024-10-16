const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

const mongoose = require('mongoose');
const userRouter=require('./routes/userRoute');
const queryRoute = require('./routes/queryRoute');
const adRoute = require('./routes/adRoute');


app.use(cors({
    origin: ['https://karam-query-management-frontapp.vercel.app/'], // Add trusted origins
    methods: ['POST', 'GET'], // Allow only required HTTP methods
    credentials: true // Enable credentials like cookies
}));

mongoose.connect('mongodb://127.0.0.1:27017/karam')
.then(()=>console.log("Connection Done 👍"))
.catch((err)=>console.log("Error Found 😒",err));

app.get('/', (req, res) => {
    res.send('Hello World!')
})



//middleware
app.use(express.json());
app.use(cors());
app.use(adRoute);
app.use(queryRoute);
app.use(userRouter);
app.listen(port, () =>console.log(`Server Started on ${port}`));
