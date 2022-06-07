import React from 'react';
import SideBar from '../SideBar/SideBar';
import Profile from './Profile';

const Dashboard = () => {
    return (
        <section className=' flex'>
            <SideBar />
            <div className='flex'>
                <Profile />
                {/* <div>
                    sdfjsagb
                </div> */}
            </div>
        </section>
    );
};

export default Dashboard;