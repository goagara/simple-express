const PORT = process.env.PORT || 3000;
const express = require('express');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://34.101.236.8:27017/simple-express', {
    auth: {
      user: 'bryantobing12',
      password: 'terbaik123',
    },
    authSource: 'admin',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message:
      'Simple Express and Hello There Update, turn this into more complicated',
    update: 'I already connected to the database',
  });
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
