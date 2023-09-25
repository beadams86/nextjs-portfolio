'use client'
import { siteMetadata } from '@/metadata';
import Link from 'next/link';
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import logo from '@/assets/BA-logo-white.svg'
import darkLogo from '@/assets/BA-logo.svg';

const Navbar = () => {
  const pathname = usePathname();

  // Get current page from pathname
  const pageName = pathname.slice(1) || 'home';

  const navClass = `navbar ${pageName}`;

  function checkForActive (name = 'home') {
    return pageName === name;
  }

  return (
    <header className={navClass}>
      <div className="container">
        <a href="/" className="navbar-logo">
          <Image
            src={pageName !== 'about' ? logo : darkLogo}
            alt="Ben Adams Logo"
            style={{
              width: 'auto',
              height: '30px',
            }} 
          />
        </a>
        
        <nav className='navbar-menu'>
          <Link href='/' className={checkForActive('home') ? 'active' : ''}>My Work</Link>
          <Link href='/about' className={checkForActive('about') ? 'active' : ''}>About Me</Link>
          <Link href={`mailto:${siteMetadata?.email}?subject=benadams.io Website Inquiry`}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;