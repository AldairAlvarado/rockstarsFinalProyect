const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
    author_info: [ 
      {
          author_name: String,
          author_nation: String,
          author_albums: String,
          author_top5: String
      }   
    ],
    
  album_info: [ 
   {
    album_img: String,
    album_name: String,
    album_genre: String,
    album_fecha: String,
    album_fis: Number,
    album_dig: Number    
   }
    ],
    
  songs_info: [ 
      {
      song_name: String,
      song_duracion: String,
      song_album: String,
      song64: String,
      songpreview: String
      }
    ]  
  })
musicSchema.set('collection', 'albums')
module.exports = mongoose.model('albums', musicSchema, 'albums')