import '../styles/_index.scss';
import { Sora } from 'next/font/google'
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { siteMetadata } from '@/metadata';

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
        <Navbar />

        {children}

        <section className="bottom-callout">
          <div className="container">
            <h2>Let's chat!</h2>
            <Link className="button" href={`mailto:${siteMetadata?.email}?subject=benadams.io Website Inquiry`}>
              Send An Email
            </Link>
          </div>
        </section>
  
      </main>
    </body>
    </html>
  )
}
