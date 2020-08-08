const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router');
const port = 4000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(port, () => console.log(`server is running on port ${port}`));