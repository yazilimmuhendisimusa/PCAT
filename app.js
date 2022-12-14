const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const Photo = require('./models/Photo');

const app = express();

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

// const myLogger = (req, res, next) => {
//   console.log('Middleware Log 1');
//   next();
// };

// const myLogger2 = (req, res, next) => {
//   console.log('Middleware Log 2');
//   next();
// };

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// app.use(myLogger);
// app.use(myLogger2);


//ROUTES
app.get('/', async(req, res) => {
  //res.sendFile(path.resolve(__dirname, 'temp/index.html'));
  const photos = await Photo.find({})
  res.render('index',{
    photos
  });
});

app.get('/about', (req, res) => {  
  res.render('about');
});

app.get('/photos/:id', async(req, res) => {  
  //console.log(req.params.id)
  //res.render('about');
  const photo = await Photo.findById(req.params.id)
  res.render('photo',{
    photo
  })
});

app.get('/add', (req, res) => {
 
  res.render('add');
});

app.post('/photos', async (req, res) => {
  await Photo.create(req.body);
  res.redirect('/')
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});

