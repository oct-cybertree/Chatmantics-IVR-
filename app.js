require('dotenv').config()

const express = require('express');
const app = express();
const creditrRouter = require('./routes/creditR');
const creditr_sjRouter = require('./routes/creditR_SJ')
const health_obRouter = require('./routes/health_OB')
const port = process.env.PORT;

app.use('/webhooks', creditrRouter);
app.use('/webhook_sj', creditr_sjRouter);
app.use('/webhook_ob', health_obRouter);
app.use(express.static('assets'));

app.listen(port, () => console.log(`App listening on port ${port}!`));