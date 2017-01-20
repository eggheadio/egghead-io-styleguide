import React from 'react'
import {storiesOf} from '@kadira/storybook'

import MediaQuery from 'react-responsive'

import Logo from '.'

storiesOf('Logo')
  .addWithInfo('API', () => (
    <div className='flex flex-column items-stretch bg-dark-navy'>
      <div className='pa4'>
        <h4 className='f5 mt0 mb3 fw4 white'>Default Logo (for default Dark Theme):</h4>
        <Logo/>
      </div>
      <div className='pa4 bg-white'>
        <h4 className='f5 mt0 mb3 fw4'>Default Logo (for Light Theme):</h4>
        <Logo textColor='#252526'/>
      </div>
      <div className='pa4 bb b--white'>
        <h4 className='f5 mt0 mb3 fw4 white'>Mobile Logo:</h4>
        <Logo withText={false}/>
      </div>
      <div className='pa4'>
        <h4 className='f5 mt0 mb3 fw4 white'>How <code className='fw6 blue bg-gray pa1 br1 lh-solid'>react-responsive</code> works (play with browser window resizing):</h4>
        <MediaQuery  minWidth={768}>
          <h4 className='f5 mt0 mb3 fw4 white'>screen resolution <span className='green'>MORE</span> or equal 768px</h4>
          <Logo/>
        </MediaQuery>
        <MediaQuery  maxWidth={767}>
          <h4 className='f5 mt0 mb3 fw4 white'>screen resolution <span className='red'>LESS</span> or equal 767px</h4>
          <Logo withText={false}/>
        </MediaQuery>
      </div>
    </div>
  ))
