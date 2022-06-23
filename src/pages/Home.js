import React from 'react'
import './Custom.css'
import logo from '../logo-pf-2.png'
import github from '../svg/github.svg'
import gmail from '../svg/gmail.svg'
import linkedin from '../svg/linkedin.svg'
import twitter from '../svg/twitter.svg'
import { Link } from 'react-router-dom'
function Home() {
    return (
      <div className="center">
          <div className='home-header'><img src={logo} alt='logo' fluid='true' class="responsive"/></div>
          <div className='home-content'>
            <p className='home-header-sub'>Hello, I am <a href='https://github.com/jolo0201' className='link-info'>@jolo0201</a>,<br /> software developer from Mexico, Pampanga.</p>
            <p className='home-header-sub-line'>I help to solve business problems with these tech stacks:<br />
             <a href='https://dotnet.microsoft.com/en-us/languages' className='link-info'>.NET (C#, VB.NET)</a>,
             <a href='https://www.mysql.com/' className='link-info'> MySQL</a>,
             <a href='https://www.php.net/' className='link-info'> PHP</a>,
             <a href='https://developer.mozilla.org/bm/docs/Web/JavaScript' className='link-info'> Javascript</a>.</p>
            <p className='home-header-sub-line'>To view my ongoing list of works, click here: <Link className='link-info' to={"/resume"}>About Me</Link></p>
          </div>
          <div>
            <hr className="bar"/>
            <div className='contact-grid'>
              <div className='contact-grid-item'>
                <a href='https://github.com/jolo0201' target='_blank' rel="noreferrer">
                  <img src={github} alt='logo' fluid='true' class="svg"/>
                </a>
              </div>
              <div className='contact-grid-item'>
                <a href='mailto:guevarrajc@gmail.com' target='_blank' rel="noreferrer">
                  <img src={gmail} alt='logo' fluid='true' class="svg"/>
                </a>
              </div>
              <div className='contact-grid-item'>
                <a href='https://www.linkedin.com/in/guevarrajc/' target='_blank' rel="noreferrer">
                  <img src={linkedin} alt='logo' fluid='true' class="svg"/>
                </a>
              </div>
              <div className='contact-grid-item'>
                <a href='https://twitter.com/jcseeks' target='_blank' rel="noreferrer">
                  <img src={twitter} alt='logo' fluid='true' class="svg"/>
                </a>
              </div>
            </div>
          </div>
      </div>
      
    )
}

export default Home