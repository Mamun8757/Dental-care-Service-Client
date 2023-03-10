import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/UserContext';
import Service from '../../Service/Service';
import About from '../AboutSection/About';
import Banner from '../Banner/Banner';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='mt-2 mb-10 max-w-screen-xl mx-auto'>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <About></About>
            </div>
            <div className='text-center'>
                <h2>Our Services for {user?.displayName}</h2>
            </div>
            <div className='text-center text-primary'>
                <h1>WHAT WE PROVIDE</h1>
            </div>
            <div>
                <Service></Service>
            </div>
            
            <div >
                <Link to='/services' className='btn btn-primary'>See All</Link>
            </div>
        </div>
    );
};

export default Home;