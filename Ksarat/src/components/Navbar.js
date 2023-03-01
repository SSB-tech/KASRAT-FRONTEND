import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import './Button.css'; 

const STYLES = ['btn--primary', 'btn--outline','btn--custom1','btn--custom2','btn--custom3'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/Logout' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

function Navbar() {
  const [click, setClick] = useState(false);
  const[button, setButton] = useState(true);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <=960){
      setButton(false)
    }else {
      setButton(true);
    }
  };

  useEffect(() =>{
    showButton()
  },[]);

  window.addEventListener('resize', showButton);
 
  return (
    <>
    <nav className = 'navbar'>
            <div className = 'navbar-container' >
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    KASRAT<i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to = '/' className = 'nav-links' onClick={closeMobileMenu}>
                      HOME
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to = '/programs' className = 'nav-links' onClick={closeMobileMenu}>
                      PROGRAMS 
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to = '/Workouts' className = 'nav-links' onClick={closeMobileMenu}>
                      WORKOUTS
                    </Link>
                  </li>
                  
                  <li className='nav-item'>
                    <Link to = '/pricing' className = 'nav-links' onClick={closeMobileMenu}>
                      PRICING
                    </Link>
                  </li>
                  <li>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu} >
                      Log Out
                    </Link>
                   </li>
              </ul>
              {button && <Button className='logout-btn' buttonStyle='btn--primary'>Log Out</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;




