let cursos = [{
    id : 1,
    nombre: 'Telemática',
    duracion: 120,
    valor: 700000
},
{
    id : 2,
    nombre: 'Digitales',
    duracion: 220,
    valor: 900000
},{
    id : 3,
    nombre: 'Topicos en Algoritmos',
    duracion: 180,
    valor: 800000
}];


var i;
let b = (id, callback) =>{
    setTimeout(function(){
        let curs = cursos.find(c => c.id == id);
        callback(curs)
},2000);
}
 
b(1, function(curs){
    console.log("Nombre del curso",curs.nombre);
    console.log("Identificador del curso",curs.id);
    console.log("Valor del curso",curs.valor);
    console.log("Duraciondel curso del curso",curs.duracion);
    console.log('');
    b(2, function(curs){
        console.log("Nombre del curso",curs.nombre);
        console.log("Identificador del curso",curs.id);
        console.log("Valor del curso",curs.valor);
        console.log("Duraciondel curso del curso",curs.duracion);
        console.log('');
        b(3, function(curs){
            console.log("Nombre del curso",curs.nombre);
            console.log("Identificador del curso",curs.id);
            console.log("Valor del curso",curs.valor);
            console.log("Duraciondel curso del curso",curs.duracion);
            console.log('');
        })
    })
})

 


 
