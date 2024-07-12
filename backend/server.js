const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require ('./models/FormData');
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/minor_project');

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try { 
        const user = await FormDataModel.findOne({ email: email });
        if (user) {
            return res.json("Already registered");

        } else {    
            const newdata = new FormDataModel({ name, email, password });
            await newdata.save(); 
            return res.status(201).json({ message: 'User registered successfully' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/login', (req, res)=>{
 
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
           
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
       
        else{
            res.json("No records found! ");
        }
    })
})

app.listen(3001, () => {
    console.log("Server listining on http://127.0.0.1:3001");

});