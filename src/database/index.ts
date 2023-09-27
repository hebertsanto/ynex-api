import mongoose from "mongoose";
import { config } from 'dotenv';

config()

const user = process.env.USER_DATABASE;
const password = process.env.PASSWORD_DATABASE;

console.log(user, password)

const url_database = `mongodb+srv://${user}:${password}@cluster0.eream7r.mongodb.net/?retryWrites=true&w=majority`


mongoose.connect(url_database);

mongoose.connection.on('connected', () => {
    console.log('tudo certo')
})

mongoose.connection.on('error', (error) => {
    console.log('deu erro', error)
})

export default mongoose.connection;