import React from 'react';
import logo from './logo.svg';
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from './page/Login2';
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/detail/:placeId" element={<Detail />} /> */}
      </Routes>

    </React.Fragment >
  );
}

export default App;
