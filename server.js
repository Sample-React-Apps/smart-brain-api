const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'i331299',
        password: '',
        database: 'smart-brain'
    }
});

const app = express();

//Add body parser middleware to parse request body
app.use(bodyParser.json());
app.use(cors());

//GET Test endpoint
app.get('/', (req, res) => {
    res.send(database.users);
});

//POST for signin
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) } );

//POST for register
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });

//GET Profile endpoint
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) });

//PUT Profile endpoint
app.put('/image', (req, res) => { image.handleImage(req, res, db) });

//POST ImageUrl endpoint
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) });

//Add the port on which app will run
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening on port 3000');
});

//console.log(process.env);