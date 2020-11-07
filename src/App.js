import { Fragment, useState, useEffect } from 'react';
import './components/globals.css';
import Header from './components/header'
import SwitchDM from './components/switch'
import Topcards from './components/topcards'
import Overview from './components/overview'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    /* setChecked(mq.matches) */
/*     if(mq.matches){
        
    }else{

    } */
    
}

useEffect(()=>{
    const mqd = window.matchMedia('(prefers-color-scheme: dark)')
    mqd.addListener(changeMedia)
    setDarkMode(mqd.matches)
    /* setChecked(mqd.matches) */
}, [])

  return (
      <main className={mainClass}>
        <Header>
          <SwitchDM setDarkMode={setDarkMode}/>
        </Header>
        <Topcards/>
        <Overview/>
      </main>
  );
}

export default App;
