
const express = require('express');
import db from './db/db'
import route from './routes/index'


const cors = require("cors");
const app = express();
app.use(
    cors(
        {
            origin: [process.env.Domain_Fe]
        }
    )
)
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = process.env.PORT || 3000;

// db();

app.listen(port, ()=>{console.log(`Server listen at ${port}`)})

route(app)