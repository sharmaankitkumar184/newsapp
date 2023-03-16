import './App.css';

import React ,{ useState }from 'react'
import News from './components/News';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
const App = ()=> {
  const pageSize = 6;
  const [mode,setMode] =useState('light');
  const [progress,setProgress] =useState(0);
  const apiKey = 'ed2cdb3b895943daae4712bef4872c67'
  // 647a3b4f2f6a482297845f5590ea295b   ed2cdb3b895943daae4712bef4872c67 process.env.REACT_APP_NEWS_API
  
    const changeMode=()=>{
        if(mode==='light')
        {
            setMode('dark');
            document.body.style.background = '#2a2f32';
        }
        else{

            setMode('light');
            document.body.style.background = 'white';
        }
    }
    return (
      <>
        <Router>
        <NavBar mode={mode} changeMode={changeMode} />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} changeMode={changeMode} key="general" mode={mode} pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} changeMode={changeMode} key="business" mode={mode} pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} changeMode={changeMode} key="entertainment" mode={mode} pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} changeMode={changeMode} key="general" mode={mode} pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} changeMode={changeMode} key="health" mode={mode} pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} changeMode={changeMode} key="science" mode={mode} pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} changeMode={changeMode} key="sports" mode={mode} pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} changeMode={changeMode} key="technology" mode={mode} pageSize={pageSize} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
        <Footer mode={mode} />
      </>
    )
 
}

export default App;

//apiKey={apiKey}  setProgress={setProgress}
