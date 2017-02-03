import React from 'react'
import {storiesOf} from '@kadira/storybook'

import imgD3 from './assets/temp/d3.svg'
import imgJquery from './assets/temp/jquery.svg'
import imgRedux from './assets/temp/redux.svg'
import imgRx from './assets/temp/rx.svg'

import './index.css'

const representOuterClasses = 'flex justify-center items-center bg-dark-navy pv5'
const representInnerClasses = 'w-100 mw8 center'

storiesOf('Static: Categories Browser')
  .addWithInfo('', () => (
    <div className={representOuterClasses}>
      <div className={representInnerClasses}>

        <div className='categories-browser'>
          <div className='dn categories-switchers-holder'>
            {/*<div className='flex-grow-1 f4 lh-title pv4 fw5 tracked light-gray ttu tc pointer ba b--black-50 bg-navy hover-bg-light-navy link'>Libraries</div>*/}
            {/*<div className='flex-grow-1 f4 lh-title pv4 fw5 tracked light-gray ttu tc pointer ba b--black-50 bg-navy hover-bg-light-navy link'>Languages</div>*/}
            {/*<div className='flex-grow-1 f4 lh-title pv4 fw5 tracked light-gray ttu tc pointer ba b--black-50 bg-navy hover-bg-light-navy link'>Frameworks</div>*/}
            {/*<div className='flex-grow-1 f4 lh-title pv4 fw5 tracked light-gray ttu tc pointer ba b--black-50 bg-navy hover-bg-light-navy link'>Tools</div>*/}
          </div>
          <div className='f4 avenir bb b--navy bg-navy white categories-items-holder'>
            <div className='item-wrapper'>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item expanded'>
                <span className='ml1 flex-grow-1'>D3</span>
                <div className='flex justify-end items-center'>
                  <img src={imgD3} className='w3' alt=''/>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='item-wrapper'>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item expanded'>
                <span className='ml1 flex-grow-1'>D3</span>
                <div className='flex justify-end items-center'>
                  <img src={imgD3} className='w3' alt=''/>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='item-wrapper'>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item expanded'>
                <span className='ml1 flex-grow-1'>Reflux</span>
                <div className='flex justify-end items-center'>
                  <img src={imgJquery} className='w3' alt=''/>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='item-wrapper'>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item expanded'>
                <span className='ml1 flex-grow-1'>RxJS</span>
                <div className='flex justify-end items-center'>
                  <img src={imgRx} className='w3' alt=''/>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='item-wrapper'>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item'>
                 <span className='ml1 flex-grow-1'>Mocha</span>
                 <div className='flex justify-end items-center'>
                   <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                 </div>
               </div>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item'>
                <span className='ml1 flex-grow-1'>Nightmer</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='item-wrapper'>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item'>
                <span className='ml1 flex-grow-1'>Jasmine</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item'>
                <span className='ml1 flex-grow-1'>Redux</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='item-wrapper'>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item'>
                <span className='ml1 flex-grow-1'>MomentJS</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item'>
                <span className='ml1 flex-grow-1'>TweenMzx</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='item-wrapper'>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item expanded'>
                <span className='ml1 flex-grow-1'>MobX</span>
                <div className='flex justify-end items-center'>
                  <img src={imgRedux} className='w3' alt=''/>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='item-wrapper'>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item'>
                <span className='ml1 flex-grow-1'>Riot</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item'>
                <span className='ml1 flex-grow-1'>jQuery</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='item-wrapper'>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item'>
                <span className='ml1 flex-grow-1'>Express</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item'>
                <span className='ml1 flex-grow-1'>Mongoose</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
            <div className='item-wrapper'>
              <div className='inline-flex items-center w-100 bg-light-navy pv4 ph3 bt b--navy pointer link category-item'>
                <span className='ml1 flex-grow-1'>Cycle</span>
                <div className='flex justify-end items-center'>
                  <span className='link bg-navy dark-gray br-pill f6 ph2 pv1 ml2 category-item-counter'>92</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  ))
