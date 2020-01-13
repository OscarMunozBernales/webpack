import '../css/index.css'

// import text from './text'


// if(module.hot){
//     module.hot.accept('./text.js', () => {
//         console.log("He recargado en caliente!")
//         text()
//     })
// }

import search from './search'
import render from './render'
const id = prompt('Quien es ese pokemon?')

search(id)
    .then( (data) => {
        render(data)
    })
    .catch( () => {
        console.log("No hubo pokemon")
    })