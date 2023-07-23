

import {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';


const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
    const [scrolled,setScrolled]= useState(false);

    useEffect (() => {
        const onScroll = () =>{
            if (window.scrollY > 50) {
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
    }, [])
    const onUpdateActiveLink =(value)=>{
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled? "scrolled": ""}>
            
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='m-auto'>
            <NavLink to="React-Portfolio/" className={activeLink === 'home'? 'active navbar-link ': 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</NavLink>
            <NavLink to="React-Portfolio/about" className={activeLink === 'about'? 'active navbar-link  ': 'navbar-link'} onClick={()=>onUpdateActiveLink('about')}>About</NavLink>
            <NavLink to="React-Portfolio/projects"className={activeLink === 'projects'? 'active navbar-link ': 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</NavLink>
            <NavLink to="React-Portfolio/contact"className={activeLink === 'contact'? 'active navbar-link  ': 'navbar-link'} onClick={()=>onUpdateActiveLink('contact')}>Contact</NavLink>
        </Nav>
       
        
</Navbar.Collapse>

</Navbar>
);
}
export default Header;
