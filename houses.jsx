import React from "react";
import { Link, Router } from 'react-router-dom';

function Houses() {
     return (
    <div className="rides-page">
       <Router>
      <h2>Available Rides</h2>
      <nav className='House-list'>
        <ul>
          <Link to=""><h3>Air BnB</h3></Link>
          <Link to=""><h3>Apartment</h3></Link>
          <Link to=""><h3>Hostel</h3></Link>
          <Link to=""><h3>Office</h3></Link>
          <Link to=""><h3>Estate Housing</h3></Link>
          <Link to=""><h3>Bangalow homesteads</h3></Link>
          <Link to=""><h3>Rentals</h3></Link>
          <Link to=""><h3>Shared Condos</h3></Link>
          <Link to=""><h3>Warehouses</h3></Link>
        </ul>
      </nav>
      </Router>
      <Route path="" exact Component={<></>}>Air BnB</Route>
      <Route path="" exact Component={<></>}>Apartment</Route>
      <Route path="" exact Component={<></>}>Hostel</Route>
      <Route path="" exact Component={<></>}>Office</Route>
      <Route path="" exact Component={<></>}>Estate Housing</Route>
      <Route path="" exact Component={<></>}>Bangalow</Route>
      <Route path="" exact Component={<></>}>Rentals</Route>
      <Route path="" exact Component={<></>}>Shared Condos</Route>
      <Route path="" exact Component={<></>}></Route>
      <Route path="" exact Component={<></>}></Route>
    </div>
  );
}
export default Houses;