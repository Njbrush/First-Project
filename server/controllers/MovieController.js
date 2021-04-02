const Movie = require('../models/MovieModel')
const MovieController = {}

MovieController.updateDB = (req, res, next) => {
    const {title , rating} = req.body
    
    Movie.create({title: req.body.title, rating: req.body.rating}, (err, data) => {
        if(err){
            console.log(title, rating)
        }
        else{
            console.log(title, rating)
         
        }
    })
}


module.exports = MovieController;