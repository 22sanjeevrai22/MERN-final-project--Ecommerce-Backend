require("dotenv").config();
console.log(process.env)
module.exports = {
    ENVIRONMENT : process.env.ENVIRONMENT ?? 'DEVELOPMENT',
    PORT : process.env.PORT ?? 8000,
    DB_URL : process.env.DB_URL,
    SECRET_KEY : process.env.SECRET_KEY ?? 'MYNAMEISSANJEEVRAIWHATISYOURNAME',
    
}


