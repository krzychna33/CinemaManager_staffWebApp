import React from 'react';
import {Link} from 'react-router-dom';
import ShowingsList from './ShowingsList';


const Dashboard = () => (
    <div>
        <Link to="/add-showing">Add showing</Link>
        <ShowingsList/>
    </div>
);

export default Dashboard;