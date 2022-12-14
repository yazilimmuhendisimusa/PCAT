const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
// Photo.create({
//     title:"Photo Title 2",
//     description: "Photo description 2 lorem ipsum"
// });

//read a photo
// Photo.find({},(err,data)=>{
//     console.log(data);
// });

//update photo
// const id = '638ee7d9f9f2047707b221c6';

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo Title 111 updated',
//     description: 'Photo description 111 updated',
//   },
//   {
//     new: true,
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );
//delete a photo
const id = '638f1d400c1ce4aeee7ebcd3';
Photo.findByIdAndDelete(id, (err, data) => {
  console.log('Photo is removed..');
});
