const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/db'; // Замініть на свою базу даних
 
mongoose.connect(mongoURI)

const db = mongoose.connection
db.on('error',console.error.bind(console, 'Mistake in connection'))
db.once('open',()=>{
console.log('Connection to mongoDB')
})
module.exports=db