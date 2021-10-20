
const rik_morty = '//rickandmortyapi.com/api/character/'

const Rick = async()=>{

       try{
        //cuando veamos el async sabemos que recibiremos una promesa
        const resp = await fetch(rik_morty)
   //en caso de que salga un error
   if(!resp.ok) throw 'no se pudo realizar la petición' 

   const {results:img} = await resp.json() //esta linea es para poner los valores que necesitamos el id,value etc.

    return img //retorna lo que tiene cada par de valor

    }catch (err){
       
     throw err
    }

}

export {
    Rick
}