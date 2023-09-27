import mongoose, { Connection } from "mongoose";

const user = 'hebertsantos0704';
const password = 'AplrgyIEjs6bsZsF';

const url_database = `mongodb+srv://${user}:${password}@cluster0.eream7r.mongodb.net/?retryWrites=true&w=majority`


mongoose.connect(url_database);

mongoose.connection.on('connected', () => {
    console.log('tudo certo')
})

mongoose.connection.on('error', (error) => {
    console.log('deu erro', error)
})

export default mongoose.connection;