import { NavLink, Route, Routes } from 'react-router-dom';
import {HomePage, AllFlights} from '../pages';
import Logo from './../assets/airline.svg';
import '../theme';
import { Form } from './Form';

export function NavBar() {

    return (
        <div className='page_home'>
            <div className='header'>
                <div className='header_block _container'>
                    <div className='nav_block'>
                        <NavLink className='logo' to='/'>
                            <img src={Logo} alt="Airline"/>
                        </NavLink>
                        <div>
                            <nav style={{display: "block"}}>
                                <NavLink to='/' className='nav-items'>Home</NavLink>
                                <NavLink to='/flights' className='nav-items'>All flights</NavLink>
                                <NavLink to='/client' className='nav-items'>Your page</NavLink>
                                <NavLink to="#" className='nav-items'>Disabled</NavLink>
                            </nav>
                        </div>
                        <div className='login_block'>
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/flights'} element={<AllFlights/>}/>
                <Route path={'/client'} element={<></>}/>
                <Route path={'*'} element={<HomePage/>}/>
            </Routes>
        </div>
    )
}
