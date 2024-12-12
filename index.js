const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.send('Hello, World! fro jip');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
