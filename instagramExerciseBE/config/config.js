// import mongoose from 'mongoose';

// mongoose.connect('mongodb+srv://talroz:password1997@instagram.tzju4.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true});

// const conn = mongoose.connection;
// conn.on('connected', function() {
//     console.log('database is connected successfully');
// });
// conn.on('disconnected',function(){
//     console.log('database is disconnected successfully');
// })
// conn.on('error', console.error.bind(console, 'connection error:'));


import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://talroz:password1997@instagram.tzju4.mongodb.net/instagram?retryWrites=true&w=majority', { useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
    console.log('Connection Successful!');
})

export default db;
