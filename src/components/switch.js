import React, { useRef, useEffect, useState } from 'react';
import './switch.css'

function SwitchDM( {mainClass, setDarkMode} ) {
    const [ checked, setChecked] = useState(false)
    const ref = useRef(null)

    function handleChange(){
        setChecked(ref.current.checked)
        setDarkMode(ref.current.checked)
    }

    function changeMedia(mq) {
        setChecked(mq.matches)
        if(mq.matches){
/*             document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode') */
            
        }else{
/*             document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode') */
        }
        
    }

    useEffect(()=>{
        const mqd = window.matchMedia('(prefers-color-scheme: dark)')
        mqd.addListener(changeMedia)
        setChecked(mqd.matches)
    }, [])


    return (
        <div className="dark-mode">
            <p className="dark-mode-title">Dark Mode</p>
            <input ref={ ref } onChange={ handleChange }  className="checkbox" type="checkbox" checked={checked} id="checkbox"/>
            <label className="switch" htmlFor="checkbox"></label>
        </div>
    )
}

export default SwitchDM; 





