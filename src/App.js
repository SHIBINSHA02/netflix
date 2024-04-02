
import './App.css';
import React  from 'react';
import  NavBar  from './Components/NavBar/NavBar.js';
import Banner from './Components/Banner/Banner.js';
import RowPost from './Components/RowPost/RowPost.js';
import { orginals,action,ComedyMovies,HorrorMovies,Documentaries,RomanceMovies } from './Components/constants/constants.js';
function App() {
  return (
    <div className='app'  style={{ backgroundColor: 'blue' }}>
      <div className="nav_banner" >
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title="NetFlix Orginals"/>
      <RowPost url ={action} title = "Action" isSmall/>
      <RowPost url ={ComedyMovies} title = "Comedy" isSmall/>
      <RowPost url ={HorrorMovies} title = "Horror" isSmall/>
      <RowPost url ={RomanceMovies} title = "Romance" isSmall/>
      <RowPost url ={Documentaries} title = "Documentaries" isSmall/>
      </div>
    
    </div>

  );
}

export default App;
