import React from 'react'
import "./Components/Navbar/Navbar.css"
import Navbar from './Components/Navbar/Navbar';
import {orginals,action} from './urls'
import "./App.css"
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return(
    <div className='App'>
      <Navbar/>
      <Banner/>
      <RowPost url = {orginals} title = 'Netflix Orginals'/>
      <RowPost url = {action} title = 'Action' isSmall/>
    </div>
  )
}


export default App;