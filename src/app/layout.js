import '../styles/_index.scss';
import { Sora } from 'next/font/google'
import { siteMetadata } from '@/metadata';
import Link from 'next/link';
import Image from 'next/image'
import logo from '../assets/BA-logo.svg'
 
const sora = Sora({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Ben Adams - UI/UX Engineer & Designer in Washington D.C.',
  description: 'Portfolio website for Ben Adams, showcasing projects & skillsets as Frontend Developer, UI/UX Designer, & Software Engineer'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <main>
        <header className='navbar'>
          <div className="container">
            <a href="/" className="navbar-logo">
              <Image src={logo} alt="Ben Adams Logo" />
            </a>
            
            <nav className='navbar-menu'>
              <Link href='/'>My Work</Link>
              <Link href='/about'>About Me</Link>
              <Link href={`mailto:${siteMetadata?.email}?subject=benadams.io Website Inquiry`}>
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <section>
          {children}
        </section>
      </main>
    </body>
    </html>
  )
}
