import React from "react"
import { socialUrls } from '../../assets/data/constants'

export const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex'>
          <p><a href='mailto:willy2005@gmail.com'>2023 (C)</a></p>
          <div className='social'>
            <a rel="noreferrer" target='_blank' href={socialUrls.instagram.url}><img src={socialUrls.instagram.logo} alt='instagram' width='32px' className='icon' /></a>
            <a rel="noreferrer" target='_blank' href={socialUrls.facebook.url}><img src={socialUrls.facebook.logo} alt='facebook' width='32px' className='icon' /></a>
            <a rel="noreferrer" target='_blank' href={socialUrls.youtube.url}><img src={socialUrls.youtube.logo} alt='youtube' width='32px' className='icon' /></a>
            <a rel="noreferrer" target='_blank' href={socialUrls.telegram.url}><img src={socialUrls.telegram.logo} alt='telegram' width='32px' className='icon' /></a>
            <a rel="noreferrer" target='_blank' href={socialUrls.email.url}><img src={socialUrls.email.logo} alt='gmail' width='32px' className='icon' /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
