const express = require('express');
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.userPath = '/api/usuario'
        //middleware
        this.middleware();


        //CORS
        this.app.use(cors());

        // parseo y lectura de body
        this.app.use(express.json());


        //ruta de mi aplicacion
        this.routes();
    }


    routes() {
        this.app.use(this.userPath, require('../routes/user'));
    }


    middleware() {
        this.app.use(express.static('public'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        });
    }

}

module.exports = Server;