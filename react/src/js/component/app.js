import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

console.log(data)
function App() {
    const [loaderList, setLoaderList] = useState([])
    function handleClick() {
        setLoaderList(data.Loaders)
    }
    return (
        <div>
            <ul>
                {
                    loaderList.map( item => <Loader data={item} key={item.id}/>)
                }
            </ul>
            <button onClick={handleClick}> Mostrar lo aprendido hasta el momento</button>
            Que linda app hecha en Reacj.js
        </div>
    )
}

export default App