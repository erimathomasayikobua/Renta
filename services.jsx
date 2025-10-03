import React from 'react'
import { Link, Route } from 'react-router-dom'

function Services() {
    return (
        <div className='Services'>
            <h3>Best of the Best</h3>
            <nav className='Services-list'>
                <ul>
                    <Link to=""><h3></h3></Link>
                    <Link to=""><h3></h3></Link>
                    <Link to=""><h3></h3></Link>
                    <Link to=""><h3></h3></Link>
                    <Link to=""><h3></h3></Link>
                    <Link to=""><h3></h3></Link>
                    <Link to=""><h3></h3></Link>
                    <Link to=""><h3></h3></Link>
                    <Link to=""><h3></h3></Link>
                </ul>
            </nav>

            <div className="">

            </div>
            <Route path="" element={<></>}></Route>
            <Route path="" element={<></>}></Route>
        </div>
    )
}
export default Services