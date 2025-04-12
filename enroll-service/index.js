const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let enrollments = [];

app.post('/enroll/:courseId', (req, res) => {
  const { username } = req.body;
  enrollments.push({ username, courseId: req.params.courseId });
  res.json({ message: 'Enrolled successfully' });
});

app.get('/enrollments/:username', (req, res) => {
  const userEnrollments = enrollments.filter(e => e.username === req.params.username);
  res.json(userEnrollments);
});

app.listen(4003, () => console.log('Enroll service on 4003'));