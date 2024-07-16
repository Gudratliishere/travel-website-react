import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
            You can subscribe at any time.
        </p>
        <div className='input-areas'>
            <form>
                <input type='email' name='email' placeholder='Your email' className='footer-input'/>
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of services</Link>
            </div>
            <div className='footer-link-items'>
                <h2>Contact us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of services</Link>
            </div>
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of services</Link>
            </div>
            <div className='footer-link-items'>
                <h2>Contact us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of services</Link>
            </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link className='social-logo'>
                    TRVL <i className='fab fa-typo3'/>
                </Link>
            </div>
            <small className='website-rights'>TRVL c 2020</small>
            <div className='social-icons'>
                <Link className='social-icon-link facebook' to='/' target='_blank' arial-label='Facebook'>
                    <i className='fab fa-facebook-f'></i>
                </Link>
                <Link className='social-icon-link instagram' to='/' target='_blank' arial-label='Instagram'>
                    <i className='fab fa-instagram'></i>
                </Link>
                <Link className='social-icon-link youtube' to='/' target='_blank' arial-label='Youtube'>
                    <i className='fab fa-youtube'></i>
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
