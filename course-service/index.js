const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const courses = [
  { id: 'CS101', name: 'Intro to CS' },
  { id: 'MATH201', name: 'Calculus I' }
];

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.listen(4002, () => console.log('Course service on 4002'));