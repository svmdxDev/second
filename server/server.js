const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
app.use(bodyParser());
app.use(cors());

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to db');
});

app.get('/', (req, res) => {
    User.find((err, doc) => {
        res.send(doc);
    });
});

app.post('/login', (req, res) => {
    User.find({ username: req.body.username }, (err, doc) => {
        req.body.password == doc[0].password ? res.send(doc[0]) : res.send('cant find')
    });
});

app.post('/register', (req, res) => {
    User.find({ username: req.body.username }, (err, doc) => {
        if (doc.length === 0) {
            const user = {
                username: req.body.username,
                password: req.body.password
            }

            const newUser = new User(user);

            newUser.save((err, result) => {
                if (err) res.send(err);
                res.send(result);
            });
        } else {
            res.send('user already exists');
        }
    });
});

app.listen(process.env.PORT || 8000, () => {
    console.log('server running');
});