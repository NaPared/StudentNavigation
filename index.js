import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { SocialIcon } from 'react-social-icons';

const googleApp = {
  appTitle: 'Google Classroom',
  appImage: <a href='https:\\classroom.google.com' target='__blank'>
    <img className='appImage'
    src='https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_videoposter_006.jpg' alt='#'/>
    <span className='image-overlay'></span>
  </a>
}

const cleverApp = {
  appTitle: 'Clever',
  appImage: <a href='https://clever.com/oauth/authorize?channel=clever&client_id=4c63c1cf623dce82caac&confirmed=true&district_id=5432eabfd4f601742400072f&redirect_uri=https%3A%2F%2Fclever.com%2Fin%2Fauth_callback&response_type=code&state=271f4830dbd39fd2fdfd54735973ec47a88b3de30fc45a36b3fef96db34b0668' target='__blank'>
    <img className='appImage'
    src='https://digitalpromise.org/wp-content/uploads/2018/09/Clever-Logo.png' alt=''/>
    <span className='image-overlay'></span>
  </a>
}

const powerSchoolApp = {
  appTitle: 'PowerSchool Portal',
  appImage: <a href='https://sis.nps.k12.nj.us/public/home.html' target='__blank'>
    <img className='appImage'
    src='data:image/png;base64,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' alt=''/>
    <span className='image-overlay'></span>
  </a>
}

const schoolMintApp = {
  appTitle: 'School Mint Portal',
  appImage: <a href='https://newarkenrolls.schoolmint.net/signin' target='__blank'>
    <img className='appImage'
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVkiIIottT5Ib8pvSMIcuyhA2QMv3-Lqu0w&usqp=CAU' alt=''/>
    <span className='image-overlay'></span>
  </a>
}

const npsApp = {
  appTitle: 'Newark Public Schools',
  appImage: <a href='https://www.nps.k12.nj.us/' target='__blank'>
    <img className='appImage' 
    src='https://pbs.twimg.com/profile_images/1054435972165890048/_dpM6Pfw.jpg' alt=''/>
    <span className='image-overlay'></span>
  </a>
}

function MyApp() {
  return (
    <div>
      <div className='headerBanner'>
        <h1 className='banner'>
          <div className='schoolLogo'><a href='https://www.nps.k12.nj.us/hor/' target='__blank'><img src='https://www.nps.k12.nj.us/hor/wp-content/uploads/sites/70/2016/09/Horton-Shield-Original.png' alt=''/></a></div>
          <a href='https://www.nps.k12.nj.us/hor/' className='hortonLink' target='__blank' rel='noreferrer'>Visit Our School</a></h1>
          <div className='icons'>
            <SocialIcon url="https://www.instagram.com/dr.hortonnps/" target='__blank' fgColor='white'/> <SocialIcon url="https://twitter.com/DrHortonNPS" target='__blank' fgColor='white'/> <SocialIcon url="https://www.facebook.com/npshorton" target='__blank' fgColor='white'/>
          </div>
      </div>
      <header className='appBox'>
        <section className='apps'>
          <App
          appImage={googleApp.appImage}
          appTitle={googleApp.appTitle}
          />
          <App
          appImage={cleverApp.appImage}
          appTitle={cleverApp.appTitle}
          />
          <App
          appImage={powerSchoolApp.appImage}
          appTitle={powerSchoolApp.appTitle}
          />
          <App
          appImage={schoolMintApp.appImage}
          appTitle={schoolMintApp.appTitle}
          />
          <App
          appImage={npsApp.appImage}
          appTitle={npsApp.appTitle}
          />
        </section>
        </header>

        <div className='twitterBox'>
          <section className='twitter'>
            <TwitterTimelineEmbed
            sourceType='profile'
            screenName='DrHortonNPS'
            options={{height: 550, width: 500}}/>
          </section>
        </div>
    </div>
  )
}

const App = (props) => {
  return(
    <article className='studentApps'>
      <h2 className='appTitleText'>{props.appTitle}</h2>
      <h1>{props.appImage}</h1>
    </article>
  )
}


ReactDom.render(<MyApp/>, document.getElementById('root'))