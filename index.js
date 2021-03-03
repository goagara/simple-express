const PORT = process.env.PORT || 3000;
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message:
      'Simple Express and Hello There Update, turn this into more complicated',
  });
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
