//import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from "../Navbar/NavBar";
import Apod from '../apod/Apod';
import Apods from '../apod/Apods';

const AppRouter = () => {

  return (
    <div style={{width: '100%'}}>
      <Navbar />
      <div style={{ marginTop: "75px", width: "100%"}}>
        <Routes>
          <Route path="/apod" element={<Apod />} />
        </Routes>
      </div>
    </div>
  )
}

export default AppRouter;