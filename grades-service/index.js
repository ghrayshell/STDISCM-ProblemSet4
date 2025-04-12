const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let grades = [];

app.post('/grades', (req, res) => {
  const { student, courseId, grade } = req.body;
  grades.push({ student, courseId, grade });
  res.json({ message: 'Grade submitted' });
});

app.get('/grades/:student', (req, res) => {
  const result = grades.filter(g => g.student === req.params.student);
  res.json(result);
});

app.listen(4004, () => console.log('Grades service on 4004'));