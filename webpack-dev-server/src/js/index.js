import '../css/index.css'

import text from './text'


if(module.hot){
    module.hot.accept('./text.js', () => {
        console.log("He recargado en caliente!")
        text()
    })
}