import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderNav from '../components/HeaderNav';

const Main = () => {
    return (
        <div>
            <HeaderNav />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;