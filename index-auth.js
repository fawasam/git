const express = require('express');
const { format } = require('date-fns');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Git Learning Project!',
    timestamp: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    version: '1.0.0'
  });
});

app.get('/members', (req, res) => {
  res.json({
    members: [
      { id: 1, name: 'Alice', role: 'Developer' },
      { id: 2, name: 'Bob', role: 'Designer' },
      { id: 3, name: 'Charlie', role: 'Manager' }
    ]
  });
});

// Authentication middleware (feature branch addition)
app.use('/api', (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
