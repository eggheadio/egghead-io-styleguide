import React, {PropTypes} from 'react'

import './index.css'

const StaticCard = ({
  className,
}) => (
  <div className={`relative card-course ${className}`}>
    <div className='flex flex-column items-center br2 pa4 bg-white navy pointer relative z-1 card-course-inner'>
      <div className='fa fa-play absolute z-1 black-70 bg-white-60 items-center justify-center br-pill card-play-btn'></div>
      <div className='mw5 mt3 mb3 center ph3 pb3'>
        <img src='data:image/png;base64,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'/>
      </div>
      <h3 className='f3 tc mt0 mb2 avenir fw5'>Introduction to RxJS Marble Testing Two lines headline</h3>
      <div className='f6 dark-gray o-50 mb4 tc'>Joe Maddalone</div>
      <div className='flex justify-between self-stretch'>
        <div className='f6 dark-gray o-50'>12 lessons</div>
        <div className='f6 orange lh-title ttu fw6 ph2 pv1 br-pill bg-tag-orange tracked'>course</div>
      </div>
    </div>
  </div>
)

StaticCard.propTypes = {
  className: PropTypes.string,
}

export default StaticCard
