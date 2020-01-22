import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'


import '../../less/less.less'
import '../../sass/sass.scss'
import '../../stylus/stylus.styl'


console.log(data)
function App() {
    const [loaderList, setLoaderList] = useState([])
    function handleClick() {
        setLoaderList(data.Loaders)
    }
    return (
        <div>
            <p className="sass">ESTO ES SASS </p>

            <p className="less">ESTO ES LESS </p>

            <p className="stylus">ESTO ES STYLUS </p>

            Que linda app hecha en Reacj.js
            <video src={video} width={360} controls poster={logo}></video>
            <p>
                <img src={logo} alt="" width={40}/>
            </p>
            <ul>
                {
                    loaderList.map( item => <Loader {...item} key={item.id}/>)
                }
            </ul>
            <button onClick={handleClick}> Mostrar lo aprendido hasta el momento</button>
        </div>
    )
}

export default App