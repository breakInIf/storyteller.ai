import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import {IoLogoGithub} from 'react-icons/io'

const inter = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Story Teller',
  description: 'Use AI to write stories about anything you want',
}

export default function RootLayout({ children }) {

  //const HamburguerIcon = () => (<div className='p-1/2 absolute top-4 right-4 cursor-pointer'><svg className="w-10 h-10 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg></div> )
    return (
    <html lang="en">
      <body className={inter.className}>
        {/* <HamburguerIcon/> */}
        {children}
        <a className="absolute bottom-2 inset-x-1/2 flex flex-col justify-center items-center" href="https://github.com/breakInIf/storyteller.ai" target="_blank" rel="noopener noreferrer">
          <IoLogoGithub />
          <span className='text-slate-500 text-xs'>breakInIf</span>
        </a>
      </body>
    </html>
  )
}
