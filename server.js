const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const cors = require('cors');
const apiRouter = require('./api/api')

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json())
app.use(cors())
app.use(errorHandler())
app.use(morgan('dev'))
app.use('/api', apiRouter)



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

module.exports = app
