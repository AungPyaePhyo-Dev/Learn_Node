require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

// app.get('/user', (req,res) => {
//     res.json({ name : "Mg Mg", age : "20"});
// });

// app.post('/user', (req,res) => {
//     res.json("Register Success!");
// });

// app.patch('/user/:id/:name', (req,res) => {
//     let id = req.params.id;
//     let name = req.params.name;
//     res.status(200).json({id,name});
// })

// app.delete('/user/:id', (req,res) => {
//     let id = req.params.id;
//     res.status(200).json({msg : "Deleted user id is " + id});
// })



// let users = [
//     {id : 1, name: "Mg Mg", age : 20},
//     {id : 2, name: "Aung Aung", age : 21},
//     {id : 3, name: "Tun Tun", age : 23}
// ];

// app.get('/users', (req,res) => {
//     res.status(200).json(users);
// });

// app.get('/user/:id', (req,res) => {
//     let id = req.params.id;
//     let user = users.find( usr => usr.id == id);
    
//     if(user) {
//         res.json(user);
//     } else {
//         res.json("No User Found!");
//     }
// });

// app.post('/user', (req,res) => {
//     let id = req.body.id;
//     let name = req.body.name;
//     let age = req.body.age;

//     let newUser = {
//         id : id,
//         name : name,
//         age : age
//     }

//     users.push(newUser);
//     res.json(users);
// });

// app.patch('/user/:id', (req,res) => {
//     let id = req.params.id;
//     let editUser = users.find(usr => usr.id == id);
//     if(editUser) {
//         editUser.name = req.body.name;
//         res.json(users);
//     } else {
//         res.json("No user with that id!");
//     }
// })


// app.delete('/user/:id', (req,res) => {
//     let id = req.params.id;
//     let usrs = users.filter(usr => usr.id != id);
//     res.json(usrs);
// })

const userRoute = require('./routes/user');

const postRoute = require('./routes/post');


app.use("/users", userRoute);
app.use("/posts", postRoute);

app.get("*", (req,res) => {
    res.json("No route Found");
});



app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        cons : false,
        msg : err.message
    });
    // res.send(err.message);
  });
  

// app.use((err,res,req,next) => {
//     err.status = err.status || 200;
//     res.status(err.status).json({
//         cons : false,
//         msg : err.message
//     })
// })

app.listen(process.env.PORT, console.log(`Server is running at port ${process.env.PORT}`));