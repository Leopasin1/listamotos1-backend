const express = require('express');

const server = express();
server.use(express.json());

const motos = [

{id: '1', marca: 'Honda', modelo: 'cg150', anofabri: '2012'},
{id: '2', marca: 'BMW', modelo: 'F800', anofabri: '2020'},
{id: '3', marca: 'Yamaha', modelo: 'xt660', anofabri: '2017'}
]
server.get('/moto', function(request, response) {
    response.json(motos);
})

server.post('/moto', function(request, response){
    
    const id = request.body.id;
    const marca = request.body.marca;
    const modelo = request.body.modelo;
    const anofabri = request.body.anofabri;
    
    
    
    motos.push({id, marca , modelo, anofabri })
    response.status(204).send();
})

server.put('/moto/:id', function(request, response){
const {id, marca, modelo, anofabri} = request.body;

for(let i = 0; i< motos.length; i++){
if (motos[i].id==id){
    motos[i].id = id;
    motos[i].marca = marca;
    motos[i].modelo = modelo;
    motos[i].anofabri = anofabri;
    break;

  }

}
return response.status(204).send();

})

server.delete('/moto/:id', function(request, response){
const id = request.params.id;


    for(let i = 0; i< motos.length; i++){
if (motos[i].id==id){
    motos.splice(i, 1);
    break;
}
}
return response.status(204).send();

})





server.listen(process.env.PORT || 3000);