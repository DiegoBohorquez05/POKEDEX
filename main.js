const contenidoCard = document.getElementById('contenido')
const imagen = document.getElementById('imagen')


const boton = document.getElementById('boton').addEventListener('click', async() => {
    const nombre = document.getElementById('name').value

    const API = `https://pokeapi.co/api/v2/pokemon/${nombre}`
   
    if (nombre === '') {
        alert('No se a buscado ningun pokemon')
    } else {
        const response = await fetch(API)
        if (response.status != 200) {
            contenidoCard.textContent = 'Nombre de pokemon mal escrito'
        } else{
            const datos = await response.json()

            for(i=0;i<datos.abilities.length;i++){
                habilidades=`${datos.abilities[i].ability.name}`
            }


            contenidoCard.innerHTML = `${datos.name}<br>
            ${datos.stats[0].stat.name}: ${datos.stats[0].base_stat}<br>Habilidades: ${habilidades} <br>
            Experiencia base: ${datos.base_experience}<br>
            id: ${datos.id}<br>
            Movimiento: ${datos.moves[0].move.name}`

            imagen.innerHTML = `<img src=${datos.sprites.front_default}>`
            console.log(datos)
        }  
    } 
    })


const nombre = document.getElementById('name').addEventListener('click', () => {
    imagen.innerHTML = ''
    contenidoCard.innerText = ''
})

