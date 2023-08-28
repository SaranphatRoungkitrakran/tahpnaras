import './App.css';
import Appheader from './components/appheader';
import Tokyo from './components/Tokyo';
import Tokyopict from './components//Tokyopict';
import Tokyos from './data/Tokyoelements';
import { useState } from 'react';


function App() {
    const [SelectedTokyo , setSelectedTokyo] = useState(null);

    function OnTokyoopen(TheTokyo) {
        setSelectedTokyo(TheTokyo)
        
    }

    const Tokyoelements = Tokyos.map((Tokyoi,index)=> {
        return <Tokyo key={index} Tokyotou={Tokyoi} OnTokyoopen={OnTokyoopen}/>
    });

    let tokyopost = null;
    if(!!SelectedTokyo){
        tokyopost = <Tokyopict Tokyo={SelectedTokyo}/>

    }

    return (
        <div className="app">
            <Appheader />
            <div className='grid_pattern'>
                {Tokyoelements}
            </div>
            {tokyopost}
        </div>
    );
}

export default App;
