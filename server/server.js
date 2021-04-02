const express = require('express');
const path = require('path');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Movie = require('./models/MovieModel.js')
mongoose.connect('mongodb+srv://ANDREW:KIM@cluster0.zwsuy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }
).then(() => console.log('Connected'))

/**
 * require routers
 */

const request = require(path.join(__dirname, './routes/request'))
const search = require(path.join(__dirname, './routes/search'))
const MovieController = require('./controllers/MovieController')

//parse incoming data
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


// app.get('/', (req, res) => {
//     res.status(200).send('Get Request')
// })

app.get('/', express.static(path.join(__dirname, '../app/index.html')));

app.get('/', (req, res) => {
  res.status(200).send('Works')
})

app.get('/history', (req, res) => {
  Movie.find({})
  .then((data) => res.status(200).json(data))
})

app.post('/', MovieController.updateDB, (res, req) => {
  res.send('Movie Data saved')
})

app.listen(3000);