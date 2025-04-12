import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [courses, setCourses] = useState([]);

  const login = async () => {
    const res = await axios.post('http://localhost:4001/login', { username, password });
    setToken(res.data.token);
  };

  const fetchCourses = async () => {
    const res = await axios.get('http://localhost:4002/courses');
    setCourses(res.data);
  };

  const enroll = async (courseId) => {
    await axios.post(`http://localhost:4003/enroll/${courseId}`, { username });
    alert('Enrolled!');
  };

  const viewGrades = async () => {
    const res = await axios.get(`http://localhost:4004/grades/${username}`);
    alert(JSON.stringify(res.data));
  };

  return (
    <div>
      <h1>Enrollment System</h1>
      <input placeholder='Username' onChange={e => setUsername(e.target.value)} />
      <input placeholder='Password' type='password' onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>

      <button onClick={fetchCourses}>View Courses</button>
      {courses.map(c => (
        <div key={c.id}>
          {c.name} <button onClick={() => enroll(c.id)}>Enroll</button>
        </div>
      ))}

      <button onClick={viewGrades}>View Grades</button>
    </div>
  );
}

export default App;