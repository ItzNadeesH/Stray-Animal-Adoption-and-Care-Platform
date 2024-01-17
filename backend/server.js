const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Server is running' });
});

app.listen(4000, () => {
  console.log('Listning on prot 4000');
});
