import { Rick } from "./http.js";

const body  = document.body;//aplicamos una constante para tener la referencia la body
let tbody;
let correlativo = 0

const crearHtml = () => {
//esta función cre una tabla del boostrap    
    const html = `
 

    <table class="table">
        <thead>
            <tr>
                <th scope="col"  >#</th>
                <th scope="col" >Nombre</th>
                <th scope="col" >Species</th>
                <th scope="col" >Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');//se crea un div para agregar a la tabla
    div.innerHTML = html;
    body.appendChild( div );//y se añade al body
   
    
            tbody = document.querySelector('tbody')//tenemos le referncia al tbody
}


// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
  
    //0: {id: 1, name: "Rick Sanchez", status: "Alive", species: "Human", type: "", …}
const crearFilaUsuario = ( usuario ) => {

   
 
    correlativo ++  //cuando llamamos a crearFilaUsuario va a incrementar la varible correlativo en 1
    const html = `
        <td scope="col" class="letra">${correlativo}.</td>

        <td scope="col" class="letra">${usuario.name} </td>
        <td scope="col" class="letra"> ${usuario.species} </td>
        <td scope="col" id="image">
            <img class="img-thumbnail" src="${usuario.image}">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    // Añadir el table row (tr) dentro del TBody creado anteriormente
   tbody.appendChild(tr)

}


export const init = async() => {

    crearHtml();

    correlativo = 0;

    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFila (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación
     (await Rick()).//el await para esperar a los usuarios
     forEach(crearFilaUsuario);

}

