import express, { json } from 'express';
import { connect, connection } from 'mongoose';

import coursesRoute from './routes/courses';
import authorsRoute from './routes/authors.js';

const app = express();

app.use(json());

app.use('/courses', coursesRoute);
app.use('/authors', authorsRoute);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = 3001;
const startServer = () => {
  app.listen(PORT)
  console.log(`App started on port ${PORT}`)
}
const connectDb = () => {
  console.log('connecting to db...')
  connect('mongodb://localhost/testmongoose');
  console.log('connected to db')
  return connection
}

connectDb()
  .on('error', console.log)
  .on('disconnected', connectDb)
  .once('open', startServer);
