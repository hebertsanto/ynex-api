import express from 'express';
import bodyParser from 'body-parser';
import  db from '../src/database';
import routes from '../src/routes'
import cors from 'cors'
const app = express();
app.use(bodyParser.json());
app.use(routes)
app.use(cors());

db.on('conected', () => {})
db.on('error', (error) => {
    return error;
});

app.listen(4000, () => { console.log('servidor ok') })