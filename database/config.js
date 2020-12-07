const mongoose = require('mongoose');
const dbConnection = async() => {

    try {

        mongoose.connect( process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB en línea')

    } catch (error) {
        console.log(error)
        throw new error('Error a la hora de iniciar la DB');
    }
}

module.exports = {
    dbConnection
}