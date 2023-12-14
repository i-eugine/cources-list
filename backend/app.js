const express = require('express');

const coursesRoute = require('./routes/courses');

const app = express();

app.use(express.json());

app.use('/courses', coursesRoute);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});