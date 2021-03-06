const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebsocket } = require('./websocket');

const app = express();
const servidor = http.Server(app);

setupWebsocket(servidor);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-cpjxc.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(routes);

// Method HTTP: GET, POST, PUT, DELETE

// Parameters types: 
// Query Params: req.query(Filter, Ordery, Paginator)
// Route Params: request.params (identify a resource in update or delete) 
// Body: request.body (Data for create or update of a register)

// MongoDB (Nonrelational)

servidor.listen(3333);