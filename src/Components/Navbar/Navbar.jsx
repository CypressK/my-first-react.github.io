import React, { useEffect,useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Hamburger from 'hamburger-react';


const Navbar = () => {

  const [sticky,setSticky]=useState(false);
  const [isOpen,setOpen] = useState(false);
  const  [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const menuRef = useRef(); 

  useEffect(()=>{

    const handleScroll = () =>{
      const currentScrollY = window.scrollY;

      setSticky(currentScrollY > 50);


      (window.innerWidth <= 900) ? setShowNavbar(currentScrollY < lastScrollY) : setShowNavbar(false);
      setLastScrollY(currentScrollY)
      


      if(isOpen){
        setOpen(false);
      }
    };
      window.addEventListener('scroll',handleScroll);
      return()=>{
        window.removeEventListener('scroll',handleScroll)
      }
    },[isOpen, lastScrollY])
  
  


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        const isHamburgerClick = event.target.classList && event.target.classList.contains('hamburger-react');
        if (!isHamburgerClick) {
          setOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (

  <nav className={`container ${sticky|| isOpen? 'dark-nav' : ''} ${!showNavbar?'hide':''}`}>
      <img src={logo} alt="" className='logo' />
      <Hamburger toggled={isOpen} toggle={setOpen} color='#FFF'/>
      <ul ref={menuRef} className={`menu ${isOpen ? 'active' : ''} `}>
          <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to="program" smooth={true} offset={-250} duration={500}>Program</Link></li>
          <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
          <li><Link to="campus" smooth={true} offset={-250} duration={500}>Campus</Link></li>
          <li><Link to="testimonials" smooth={true} offset={-250} duration={500}>Testimonials</Link></li>
          <li><button className='btn'><Link to="contact" smooth={true} offset={0} duration={500}>Contact us</Link></button></li>
      </ul>
    </nav>
  )
}

export default Navbar