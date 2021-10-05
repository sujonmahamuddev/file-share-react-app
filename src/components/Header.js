import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../assets/img/logo.png';

const Header = () => {
     return (
          <div className="header-area">
               <div className="logo">
                    <Link><img src={Logo} />Deliverer Defi File Sharing</Link>
               </div>
               <div className="menu-list"><Link to="#">...</Link></div>

          </div>
     )
}

export default Header
