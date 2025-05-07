const express = require('express');
const router = require("./routes/user");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
const port =3000;
app.use(bodyParser.json()); 
app.use(cookieParser());
app.use('/api', router);

 


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
