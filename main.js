


const boton = document.getElementById('boton').addEventListener('click', e => {
    const nombre = document.getElementById('name').value
    if (nombre === '') {
        console.log('No se a buscado ningun pokemon')
    }else if()
    
    else {
        async function getNombre(name){
            const API=`https://pokeapi.co/api/v2/pokemon/${name}`
            const response =await fetch(API)
            const datos =await response.json()
            document.derecha.innerText(datos.abilities)
        }
        getNombre(`${nombre}`)
        console.log('aja')
    }
})


