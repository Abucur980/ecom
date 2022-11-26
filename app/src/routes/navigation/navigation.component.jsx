import ResponsiveAppBar from '../../components/header/header.component.jsx';
import { Outlet } from 'react-router-dom';
import * as React from 'react';

const Navigation = () => {
    return (
        <React.Fragment>
            <ResponsiveAppBar/>
            <Outlet/>
        </React.Fragment>
    )
}

export default Navigation;