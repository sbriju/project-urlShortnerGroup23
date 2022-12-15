const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/route');
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://aparna21:tpzmDVkZSc3mpMTf@cluster21.u69lmjr.mongodb.net/group23Database', {
    useNewUrlParser: true
}).then(() => console.log('MongoDb is connected.'))
    .catch(err => console.log(err));

app.use('/', route);

app.use((req, res) => res.status(400).send({ status: false, message: 'Invalid Url.' }));
app.listen(3000, () => console.log('Express app running on port 3000.'));