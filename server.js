const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

mongoose.connect('mongodb://127.0.0.1/SocialMediaDB')
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log(err));


//Path: server.js
app.listen(PORT, () => console.log(`Server live at http://localhost:${PORT}`));
