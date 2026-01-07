const { response } = require('express');

const userGet =  (req, res= response) => {

    const query = req.query;
        res.send({
            ok: true,
            msg: 'Get API - Controlador',
            query
        });
    };


  const userPut = (req, res  =response) => {
    const {id}=req.params;
        res.send({
            ok: true,
            msg: 'PUT API - Controler',
            id
        });
    }  

   const userPost= (req, res=response) => {

const body = req.body;

        res.send({
            ok: true,
            msg: 'POST API - Controler',
            body
        });
    }

    const userDelete = (req, res=response) => {
        res.send({
            ok: true,
            msg: 'DELETE API - Controler'
        });
    }


    module.exports = {
        userGet,
        userPut,
        userPost,
        userDelete
    }